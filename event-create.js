$(document).ready(function() { 
    let j =  localStorage.getItem("admin-jwt");

    $("#event-card").submit(function(e) {
        var $input = $("#uploadimage");
        var fd = new FormData;
    
        fd.append('event[picture]', $input.prop('files')[0]);
        fd.append("event[location]",$("#location").val());
        fd.append("event[name]",$("#name").val());
        fd.append("event[description]",$("#description").val());
        fd.append("event[time]",$("#time").val());
        fd.append("event[date]",$("#date").val());
        fd.append("event[user_id]",$("#user_id").val());
        $.ajax({
            url: 'http://178.154.255.209:3005/events',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            beforeSend:function(xhr){
                xhr.setRequestHeader("Authorization","Bearer "+j);     
                    },
            success: function (data) {
                alert(data);
            }
        });
        e.preventDefault();
       
    })
 });