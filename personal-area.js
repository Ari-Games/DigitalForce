$(document).ready(function() {  
    let j =  localStorage.getItem("jwt");
        $.ajax({
            url: "http://178.154.255.209:3005/user",
            type: "Get",
            beforeSend:function(xhr){
                xhr.setRequestHeader("Authorization","Bearer "+j);     
                xhr.setRequestHeader("Idempotence-Key",12);   
            },
            crossDomain:true,
            success: function(data){
              console.log("test success");
              console.log("data = ", data);
              $("#name").text(data.name+" "+data.surname); 
              switch (data.role) {
                case "user":
                  user = "Участник";
                  break;
                case "speaker":
                  user ="Спикер"
               break;
                default:
                  console.log(`Sorry, we are out of ${expr}.`);
              }
              $("#user").text(user); 
            },
            error: function(xhr, status, error) {
              console.log("test error");
              console.log(xhr, status, error);
            }
          });
    
});
