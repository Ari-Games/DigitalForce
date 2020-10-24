$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: "http+://178.154.255.209:3005/user",
            type: "get",
            header: {
                'Idempotence-Key': 12
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
    }); 
});
