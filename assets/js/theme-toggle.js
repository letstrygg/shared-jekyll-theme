(function(){
  var btn;
  function setTheme(t){
    document.documentElement.setAttribute('data-theme', t);
    try{ localStorage.setItem('theme', t); }catch(e){}
  }
  function init(){
    btn = document.getElementById('theme-toggle');
    if(!btn) return;
    var saved = null;
    try{ saved = localStorage.getItem('theme'); }catch(e){}
    if(saved) setTheme(saved); else setTheme('dark');
    btn.addEventListener('click', function(){
      var cur = document.documentElement.getAttribute('data-theme') || 'dark';
      var nxt = cur === 'dark' ? 'light' : 'dark';
      setTheme(nxt);
      // simple flip animation via class toggle (CSS handles visibility)
      btn.classList.toggle('flipped');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();