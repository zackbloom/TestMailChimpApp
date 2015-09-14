(function(){

  var el = Eager.createElement(INSTALL_OPTIONS.location);

  var form = document.createElement('form');

  var input = document.createElement('input');
  input.placeholder = 'Email Address';
  form.appendChild(input);

  var submit = document.createElement('input');
  submit.type = 'submit';
  form.appendChild(submit);

  el.appendChild(form);

  form.addEventListener('submit', function(e){
    e.preventDefault();

    Eager.trigger('submit', {"email": input.value})
      .then(function(){
        el.innerHTML = 'Got it!';
      }, function(e){
        el.innerHTML = 'Oops!';
        console.log(e);
      });
  });

})()
