 $(function() {
    $('#logger').click(function() {
 
        $.ajax({
            url: '/login',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
                if(response ==1){
                    alert("yeah")
                    localStorage.setItem("username",document.getElementById('username').value )
                    localStorage.setItem("email","jbadewale@yahoo.com")
                    localStorage.setItem("status","admin")
                    window.location.assign("/dashboard")
                    
                }
                else{
                    alert("Incorrect username or password")
                }

            },
            error: function(error) {
                console.log(error);
            }
        });
    });


   $('#create').click(function() {
        
 
        $.ajax({
            url: '/signUp',
            data: $('#former').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
                
localStorage.setItem("username",document.getElementById('username').value())
localStorage.setItem("email","jbadewale@yahoo.com")
localStorage.setItem("status","admin")
 window.location.assign("/dashboard")


            },
            error: function(error) {
                console.log(error);
            }
        });
    });

});




 
 $(document).ready(function(){
    

localStorage.setItem("username","joliphizzle")
localStorage.setItem("email","jbadewale@Yahoo.com")
localStorage.setItem("status","admin")

    
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    socket.on('my response', function(msg) {
        $('#log').append('<p>Received: ' + msg.data + '</p>');
    });
    $('form#emit').submit(function(event) {
        socket.emit('my event', {data: $('#emit_data').val()});
        return false;
    });
    $('form#broadcast').submit(function(event) {
        socket.emit('my broadcast event', {data: $('#broadcast_data').val()});
        return false;
    });
});