$(document).ready(function() {
    $('.login-container form .password-form .fa-eye').click(function() {
        $(this).css('display', 'none');
        $('.login-container form .password-form .fa-eye-slash').css('display', 'inline-block');
        $('.login-container form .password-form input').attr('type', 'text');
    });
    $('.login-container form .password-form .fa-eye-slash').click(function() {
        $(this).css('display', 'none');
        $('.login-container form .password-form .fa-eye').css('display', 'inline-block');
        $('.login-container form .password-form input').attr('type', 'password');
    });
    $('.login-container form .confirm-password-form .fa-eye').click(function() {
        $(this).css('display', 'none');
        $('.login-container form .confirm-password-form .fa-eye-slash').css('display', 'inline-block');
        $('.login-container form .confirm-password-form input').attr('type', 'text');
    });
    $('.login-container form .confirm-password-form .fa-eye-slash').click(function() {
        $(this).css('display', 'none');
        $('.login-container form .confirm-password-form .fa-eye').css('display', 'inline-block');
        $('.login-container form .confirm-password-form input').attr('type', 'password');
    });
})