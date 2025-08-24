<script>
/* GOC SDK (lightweight)
 * One facade for Auth, Wallet, Submit, Rate
 * Default: mock adapter (localStorage). Switch to real API via GOC.config({useMock:false,...})
 */
(function (global){
  const listeners = {};
  const emit = (evt, data)=> (listeners[evt]||[]).forEach(fn=>{ try{fn(data)}catch{} });
  const on = (evt, fn)=>{ (listeners[evt] ||= []).push(fn); return ()=>listeners[evt]=listeners[evt].filter(f=>f!==fn) };

  const state = {
    baseURL: '',
    apiKey: '',
    useMock: true,
    mockSeeded: false,
    rateUSD:  Number(localStorage.getItem('lcn_rate') || 1),
  };

  function cfg(opts){ Object.assign(state, opts||{}); }

  // ========= utilities
  const id = ()=> Math.random().toString(36).slice(2);
  const now = ()=> new Date().toISOString();
  const getUser = ()=> { try{ return JSON.parse(localStorage.getItem('goc_user')||'') }catch{return null} };
  const uid  = ()=> { const u=getUser(); return u ? (u.id||u.email||'guest') : 'guest' };
  const balKey = ()=> `lcn_balance_${uid()}`;
  const ledKey = ()=> `lcn_ledger_${uid()}`;

  // ========= MOCK ADAPTER (localStorage)
  const Mock = {
    async signIn({name,email}) {
      const u = { id: email, name, email };
      localStorage.setItem('goc_user', JSON.stringify(u));
      if(localStorage.getItem(balKey())===null) localStorage.setItem(balKey(),'150');
      emit('auth:change', u);
      return u;
    },
    async signOut(){
      localStorage.removeItem('goc_user');
      emit('auth:change', null);
      return true;
    },
    async me(){ return getUser() },

    // Wallet
    async balance(){
      return { user: uid(), lcn: parseInt(localStorage.getItem(balKey())||'0',10) };
    },
    async setRate(usdPerLCN){
      state.rateUSD = Number(usdPerLCN)||1;
      localStorage.setItem('lcn_rate', String(state.rateUSD));
      emit('rate:change', state.rateUSD);
      return { rate: state.rateUSD };
    },
    async rate(){ return { rate: state.rateUSD } },

    _push(type, delta, note){
      const bal = parseInt(localStorage.getItem(balKey())||'0',10) + delta;
      if(bal < 0) throw new Error('Insufficient balance');
      const entry = { id:id(), t:now(), type, delta, bal, note, rate: state.rateUSD };
      const arr = (()=>{ try{ return JSON.parse(localStorage.getItem(ledKey())||'[]') }catch{return[]} })();
      arr.unshift(entry);
      localStorage.setItem(ledKey(), JSON.stringify(arr));
      localStorage.setItem(balKey(), String(bal));
      emit('wallet:update', { bal, entry });
      return entry;
    },

    async deposit(amount){ return this._push('DEPOSIT',  +amount, 'deposit') },
    async withdraw(amount){ return this._push('WITHDRAW', -amount, 'withdraw') },
    async trade({type, amountLCN}){
      const delta = (type==='BUY') ? +amountLCN : -amountLCN;
      return this._push(type, delta, 'trade');
    },
    async transfer({toEmail, amountLCN}){
      // sender
      this._push('TRANSFER_OUT', -amountLCN, `to ${toEmail}`);
      // receiver (local demo by email id)
      const rBalKey = `lcn_balance_${toEmail}`;
      const rLedKey = `lcn_ledger_${toEmail}`;
      const rBal = parseInt(localStorage.getItem(rBalKey)||'0',10) + amountLCN;
      localStorage.setItem(rBalKey, String(rBal));
      const rArr = (()=>{ try{ return JSON.parse(localStorage.getItem(rLedKey)||'[]') }catch{return[]} })();
      rArr.unshift({id:id(), t:now(), type:'TRANSFER_IN', delta:+amountLCN, bal:rBal, note:`from ${uid()}`, rate:state.rateUSD});
      localStorage.setItem(rLedKey, JSON.stringify(rArr));
      return true;
    },
    async pay({memo, amountLCN}){ return this._push('PAY', -amountLCN, memo||'pay') },

    async history(){ try{ return JSON.parse(localStorage.getItem(ledKey())||'[]') }catch{return[]} },
    async reset(){ localStorage.setItem(balKey(),'0'); localStorage.setItem(ledKey(),'[]'); emit('wallet:update',{bal:0}); return true; }
  };

  // ========= REAL ADAPTER (placeholder – gọi fetch)
  const Real = {
    // Ví dụ, giữ cùng chữ ký hàm. Sau này chỉ việc map endpoints.
    async signIn(payload){ return fetchJSON('/auth/signin','POST',payload) },
    async signOut(){ return fetchJSON('/auth/signout','POST') },
    async me(){ return fetchJSON('/auth/me') },

    async balance(){ return fetchJSON('/wallet/balance') },
    async setRate(usdPerLCN){ return fetchJSON('/wallet/rate','POST',{usdPerLCN}) },
    async rate(){ return fetchJSON('/wallet/rate') },

    async deposit(amount){ return fetchJSON('/wallet/deposit','POST',{amount}) },
    async withdraw(amount){ return fetchJSON('/wallet/withdraw','POST',{amount}) },
    async trade({type,amountLCN}){ return fetchJSON('/wallet/trade','POST',{type,amountLCN}) },
    async transfer({toEmail,amountLCN}){ return fetchJSON('/wallet/transfer','POST',{toEmail,amountLCN}) },
    async pay({memo,amountLCN}){ return fetchJSON('/wallet/pay','POST',{memo,amountLCN}) },

    async history(){ return fetchJSON('/wallet/history') },
    async reset(){ return fetchJSON('/wallet/reset','POST') },
  };

  async function fetchJSON(path, method='GET', body){
    const res = await fetch(state.baseURL + path, {
      method,
      headers:{
        'Content-Type':'application/json',
        ...(state.apiKey? {'Authorization':'Bearer '+state.apiKey} : {})
      },
      body: method==='GET'? undefined : JSON.stringify(body||{})
    });
    if(!res.ok) throw new Error('API error ' + res.status);
    return res.json();
  }

  // ========= Facade công khai
  const GOC = {
    config: cfg,
    on,

    auth: {
      signIn: (p)=> (state.useMock?Mock:Real).signIn(p),
      signOut: ()=> (state.useMock?Mock:Real).signOut(),
      me: ()=> (state.useMock?Mock:Real).me()
    },

    wallet: {
      balance: ()=> (state.useMock?Mock:Real).balance(),
      setRate: (v)=> (state.useMock?Mock:Real).setRate(v),
      rate: ()=> (state.useMock?Mock:Real).rate(),
      deposit: (n)=> (state.useMock?Mock:Real).deposit(n),
      withdraw: (n)=> (state.useMock?Mock:Real).withdraw(n),
      trade: (p)=> (state.useMock?Mock:Real).trade(p),
      transfer: (p)=> (state.useMock?Mock:Real).transfer(p),
      pay: (p)=> (state.useMock?Mock:Real).pay(p),
      history: ()=> (state.useMock?Mock:Real).history(),
      reset: ()=> (state.useMock?Mock:Real).reset(),
    },

    submit: {
      // chỗ này để sau map vào API thật (hiện tại có thể dùng local demo ở trang submit.html)
      create: (payload)=> (state.useMock? Promise.resolve({ id:id(), ...payload, t:now() })
                                        : fetchJSON('/submit','POST',payload)),
    }
  };

  // seed demo rate
  if(localStorage.getItem('lcn_rate')===null) localStorage.setItem('lcn_rate','1');

  global.GOC = GOC;
})(window);
</script>
