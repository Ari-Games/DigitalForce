$(document).ready(function() {
  var email1 = $("#email").val();
  var password1 = $("#password").val();
    $("form").submit(function(e) {
        e.preventDefault();
        $.ajax({
          url:"http://178.154.255.209:3005/user_token",
          type:"post",
          data:{
            auth:{
              email:email1,
              password:password1
            }

          },
          success:function(data1){
              console.log(data1);
              localStorage.setItem("jwt",data1.jwt);
              Window
          },
          error:function() {
            
          }
        })
    }); 
});
