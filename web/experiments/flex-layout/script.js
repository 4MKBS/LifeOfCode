// Flexbox Layout Experiment Logic
(function(){
  const form = document.getElementById('flexForm');
  const container = document.getElementById('flexDemo');
  if(!form || !container) return;

  function apply(){
    const data = new FormData(form);
    for(const [prop, value] of data.entries()){
      container.style.setProperty(prop, value);
    }
    container.style.setProperty('gap', data.get('gap') + 'px');
  }

  form.addEventListener('input', apply);
  apply();
})();
