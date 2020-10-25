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
              let arr = [data.achivments.fin,data.achivments.lead,data.achivments.family,data.achivments.projactiv,data.achivments.networking,data.achivments.proforient];
              arr.sort();
              $("#fin").css({"width":`${data.achivments.fin}`,
                "height":`${data.achivments.fin*1.2}`,"blur":`${data.achivments.fin*0.3}`,"z-index":arr[0]});

              $("#lead").css({"width":`${data.achivments.lead}`,
              "height":`${data.achivments.lead*1.2}`,"blur":`${data.achivments.lead*0.3}`,"z-index":arr[1]});

              $("#family").css({"width":`${data.achivments.family}`,
                "height":`${data.achivments.family*1.2}`,"blur":`${data.achivments.family*0.3}`,"z-index":arr[2]});

              $("#projactiv").css({"width":`${data.achivments.projactiv}`,
              "height":`${data.achivments.projactiv*1.2}`,"blur":`${data.achivments.projactiv*0.3}`,"z-index":arr[3]});

              $("#networking").css({"width":`${data.achivments.networking}`,
              "height":`${data.achivments.networking*1.2}`,"blur":`${data.achivments.networking*0.3}`,"z-index":arr[4]});

              $("#proforient").css({"width":`${data.achivments.proforient}`,
              "height":`${data.achivments.proforient*1.2}`,"blur":`${data.achivments.proforient*0.3}`,"z-index":arr[5]});
               

            },
            error: function(xhr, status, error) {
              console.log("test error");
              console.log(xhr, status, error);
            }
          });
    
});
