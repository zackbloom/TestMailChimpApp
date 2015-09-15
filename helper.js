(function(){

  if (!INSTALL_OPTIONS.list)
    return;

  var el = Eager.createElement(INSTALL_OPTIONS.location);

  var form = document.createElement('form');
  form.action = INSTALL_OPTIONS.list;
  form.method = 'post';

  var input = document.createElement('input');
  input.name = 'EMAIL';
  input.placeholder = 'Email Address';
  form.appendChild(input);

  var submit = document.createElement('input');
  submit.type = 'submit';
  form.appendChild(submit);

  el.appendChild(form);

})()
