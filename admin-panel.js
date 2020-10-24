function record_change(record){
    $("#record-card").show();
    let elems = $(record).children();
    console.log(elems);
    console.log($(elems));
    
    $("#idi").text($(elems).get(0).innerText);
    $("#name").val($(elems).get(1).innerText);
    $("#surname").val($(elems).get(2).innerText);
    $("#second").val($(elems).get(3).innerText);
    $("#email").val($(elems).get(4).innerText);
    $("#phone").val($(elems).get(5).innerText);  
   
    console.log(record);
}
$(document).ready(function() {    
    $("#record-card").hide();
    let j =  localStorage.getItem("admin-jwt");
    $.ajax({
        url: "http://178.154.255.209:3005/superuser/index_users",
        type: "Get",
        beforeSend:function(xhr){
            xhr.setRequestHeader("Authorization","Bearer "+j);       
        },
        success:function(users_array){
            console.log(users_array);
            $.each(users_array, function( index, value ) {
                let newTableRow = 
                `<tr onclick = "record_change(this)"> 
                <th >${value.id}</th>
                <td>${value.name}</td>
                <td >${value.surname}</td>
                <td >${value.second_name}</td>
                <td >${value.email}</td>
                <td >${value.phone_number}</td>
                <td >${value.role}</td>
              </tr>`
               let el = $('#my_table tr:last').after(newTableRow);
               
    
               //el.addEventListener("click",record_change,this); 
              });
        }
    });


    $("#record-form").submit(function(e) {
        e.preventDefault();
        $.ajax({
          url:"http://178.154.255.209:3005/superuser/update_user/"+$("#idi").text(),
          type:"put",
          beforeSend:function(xhr){
            xhr.setRequestHeader("Authorization","Bearer "+j);     
                },
          data:{
            user:{
              email:$("#email").val(),
              phone_number:$("#phone").val(),
              surname:$("#surname").val(),
              second_name:$("#second_name").val(),
              name:$("#name").val(),
            }

          },
          success:function(data1){              
            $("#record-card").hide();
          },
          error:function() {
            
          }
        })
    });

});
