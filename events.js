$(document).ready(function() {
    $.ajax({
        url:"http://178.154.255.209:3005/events",
        type:"get",
        
        success:function(events){      
            console.log(events);        
            $.each(events, function( index, value ) {
                let state = [`<a class="event-btn event-condition1 d-inline-block"><img src="img/check.svg">Идет регистрация</a>`,
                            `<a class="event-btn event-condition2 d-inline-block"><img src="img/live.svg">Прямой эфир</a>`,
                            `<a class="event-btn event-condition3 d-inline-block"><img src="img/diskette.svg">Итоги</a>`]
                let newTableRow = 
                `<div class="col-12 col-sm-6 col-md-4">
                <div class="event-card">
                    <a style="background-image: url('${"http://178.154.255.209:3005"+value.picture.url}');" class="event-image event-link">
                        <div class="event-date">${value.date}</div>
                        <div class="event-time">${value.time}</div>
                        <div class="event-location">${value.location}</div>
                    </a>
                    <div class="event-info">
                        <a class="event-name event-link">${value.name}</a>
                        ${state[value.status]}
                        
                    </div>
                </div>
            </div>`
            let el = $('#events-data').append(newTableRow);        
            
            
              });
        },
        error:function() {
        
        }
    
    })
});