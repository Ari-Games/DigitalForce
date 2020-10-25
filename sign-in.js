$(document).ready(function() {
  localStorage.clear();
  if(localStorage.getItem("jwt") != null){
    var url = "personal-area.html";
    $(location).attr('href',url);
  }
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
                var url = "personal-area.html";
                $(location).attr('href',url);

          },
          error:function() {
            localStorage.removeItem("jwt");
          }
        })
    }); 
});
