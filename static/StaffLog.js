 $(function() {
    $('#logger').click(function() {
                   
                    localStorage.setItem("username",document.getElementById("username").value);
                    
                    localStorage.setItem("status","staff")

                    alert(document.getElementById("username").value);
                    alert(document.getElementById("password").value);

                   
        $.ajax({
            url: '/login',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
                if(response ==1){
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
    })});
   



