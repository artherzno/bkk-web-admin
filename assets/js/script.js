$(function() {

  // Login Page - Toggle password
  $('#login-page ion-icon').on('click', function(event) {
    var password = $('#password');
    var passwordType = password.attr('type');

    if (passwordType === "password") {
      password.attr('type', 'text');
    } else {
      password.attr('type', 'password');
    }
  });

  // Switch checked always
  $('.switch-checked').change(function(){
      $(this).prop('checked', true);
  });

  // Switch non-checked always
  $('.switch-non-checked').change(function(){
      $(this).prop('checked', false);
  });

});
