$(function() {

  // Login Page - Toggle password
  $('#togglePassword').on('click', function(event) {
    var password = $('#password');
    var passwordType = password.attr('type');

    if (passwordType === "password") {
      password.attr('type', 'text');
    } else {
      password.attr('type', 'password');
    }
  });

});
