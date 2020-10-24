$(document).ready(function() {
    
    $("form").submit(function(e) {
        e.preventDefault();
      var name1 = $("#name").val();
      var surname1 = $("#surname").val();
      var email1 = $("#email").val();
      var password1 = $("#password").val();
      var cpassword = $("#cpassword").val();
      if (name1 == '' || email1 == '' || password1 == '' || cpassword == '') {
        alert("Please fill all fields...!!!!!!");
      } 
      else if ((password1.length) < 8) {
        alert("Password should atleast 8 character in length...!!!!!!");
      } 
      else if (!(password1).match(cpassword)) {
        alert("Your passwords don't match. Try again?");
      } 
      else {
        $.ajax({
            url: "https://178.154.255.209:3005/user",
            type: "post",
            dataType: "json",
            data: {
                "name": name1,
                "surname": surname1,
                "email": email1,
                "password": password1
            },
            success: function(data){
              console.log("test success");
              console.log("data = ", data);
              
            },
            error: function(xhr, status, error) {
              console.log("test error");
              console.log(xhr, status, error);
            }
          });
        
      }
      
    });
    });