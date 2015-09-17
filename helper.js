(function(){

  if (!INSTALL_OPTIONS.list)
    return;

  var el = Eager.createElement(INSTALL_OPTIONS.location);

  var form = document.createElement('form');

  var input = document.createElement('input');
  input.placeholder = 'Email Address';
  form.appendChild(input);

  var submit = document.createElement('input');
  submit.type = 'submit';
  form.appendChild(submit);

  form.addEventListener('submit', function(e){
    e.preventDefault();

    cb = "eagerFormCallback" + Math.floor(Math.random() * 100000000000000);
    window[cb] = function(resp){
      if (resp && resp.result === "success"){
        form.innerHTML = resp.msg;
      } else {
        form.innerHTML = "Sorry, there was an error. Please reload the page and try again.";
      }
    }

    var url = INSTALL_OPTIONS.list;
    url = url.replace('http', 'https');
    url = url.replace('?', '/post-json?');
    url = url + "&EMAIL=" + encodeURIComponent(input.value);
    url = url + "&c=" + cb;

    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
  });

  el.appendChild(form);

})()
