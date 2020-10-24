$(document).ready(function() {  
   
    let j =  localStorage.getItem("admin-jwt");
    $.ajax({
        url: "http://178.154.255.209:3005/superuser/index_users",
        type: "Get",
        beforeSend:function(xhr){
            xhr.setRequestHeader("Authorization","Bearer "+j);     
            //xhr.setRequestHeader("Idempotence-Key",12);   
        },
        success:function(users_array){
            $.each(users_array, function( index, value ) {
                let newTableRow = `<tr > 
                <th >${value.id}</th>
                <td>${value.name}</td>
                <td >${value.surname}</td>
                <td >${value.second_name}</td>
                <td >${value.email}</td>
                <td >${value.phone_number}</td>
                <td >${value.role}</td>
              </tr>`
                $('#my_table tr:last').after(newTableRow);
              });
        }
    });
    
});
