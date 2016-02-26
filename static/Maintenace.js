





function start(){

	
	
	$("#next").hide();
    getProducts()
    connectSocket();
	document.getElementById("ap").addEventListener("click",addProduct ,false);
	document.getElementById("ep").addEventListener("click",editProduct ,false);
	document.getElementById("vp").addEventListener("click",viewProduct ,false);
	document.getElementById("au").addEventListener("click", adduser,false);
	document.getElementById("vu").addEventListener("click", viewuser,false);
	document.getElementById("submitFile").addEventListener("click",submitF,false);
  document.getElementById("submitS").addEventListener("click",sub,false);


 
}


function sub(){
          $.ajax({
            url: '/signUp',
            data: $('#formUser').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
                
                alert(document.getElementById('email').value);
                
localStorage.setItem("username",document.getElementById('username').value)
localStorage.setItem("email",document.getElementById('email').value)
localStorage.setItem("status","staff")
 window.location.assign("/dashboard")


            },
            error: function(error) {
                console.log(error);
            }
        });
}
 
function getProducts(){

 	 $.ajax({

            url: '/getProduct', 
            type: 'GET',
         success: function(response) {
                console.log(response);
                
                
                 
  console.log(response)
  
  products = response.split(",")



  
  var tableCreator = ""
  var sn= 0;
  var id = "";

  for (var product = 0; product < products.length; product+=5){
     id=products[product].substring(2,(products[product].length - 1));
     

     tableCreator += "<tr><td>"+(++sn)  + "</td>   <td>" +products[product].substring(2,(products[product].length - 1))    +"</td><td>"+  products[product + 1].substring(2,(products[product + 1].length - 1)) +"</td><td>"+    products[product + 2].substring(2,(products[product + 2].length - 1))   +"</td><td>"+products[(product + 3)]+"</td> <td>"+products[product + 4].substring(2,(products[product + 4].length - 1))+"</td> <td> <button  id='"+id+ "' class='btn btn-primary view'>View History </button>  <button id='"+id+ "' class='btn btn-danger repair'>Repair </button>   <button id='"+id+ "' class='btn btn-warning maintenance'> Maintenance</button> </td> </tr>"   
  
       
  }
  
   document.getElementById("productBody").innerHTML = tableCreator;


 //tablePg





            },
            error: function(error) {
            	alert("error")
                console.log(error);
            }
        });
}

 
 


 function submitF(){

 	alert("hello")
 	var fd = new FormData();

            var file_data = $('#formProduct').find('input[type="file"]')[0].files[0];
            fd.append("image", file_data);
            var other_data = $('#formProduct').serializeArray();
            $.each(other_data, function(key, input) {
                fd.append(input.name, input.value);
            });
            alert("no error");
           send(fd)
          function send(fd){
 
          alert(fd)  
 	 $.ajax({

            url: '/Upload', 
            data: fd,
            type: 'POST',
            contentType:false,
            processData: false,

            success: function(response) {
                console.log(response);
                
  alert("succes")
  $("#closeM").trigger("click");
  getProducts()

 //window.location.assign("/dashboard")


            },
            error: function(error) {
            	alert("error")
                console.log(error);
            }
        });

 	}
 }


function addProduct(){
 $("#addProduct").modal();
}

function editProduct(){
$("#editProduct").modal()
}


function viewProduct(){
$("#viewProduct").modal()
 
 

 $.ajax({

            url: '/ViewProductActivity ', 
            type: 'GET',
            success: function(response) {
                console.log(response);
                
  alert("succes")
  alert(response)
 //window.location.assign("/dashboard")
 products = response.split(",")



  
  var tableCreator = ""
  var sn= 0;
  var id = "";

  for (var product = 0; product < products.length; product+=5){
     id=products[product].substring(2,(products[product].length - 1));
     

     tableCreator += "<tr><td>"+(++sn)  + "</td>   <td>" +products[product].substring(3,(products[product].length - 2))    +"</td><td>"+  products[product + 1].substring(3,(products[product + 1].length - 2)) +"</td><td>"+    products[product + 2].substring(2,(products[product + 2].length - 1))   +"</td><td>"+products[(product + 3)].substring(3,(products[product + 3].length - 2))+"</td> <td>"+products[product + 4].substring(2,(products[product + 4].length - 1))+"</td> <td> <button  id='"+id+ "' class='btn btn-success view'>completed </button> </tr>"   
  
       
  }
  alert(tableCreator)
   document.getElementById("productAll").innerHTML = tableCreator;



            },
            error: function(error) {
              alert("error")
                console.log(error);
            }
        });
//
}

function adduser(){
  $("#rS").modal();
}

function viewuser(){

}


 $(document).ready(function(){
    
    alert(document.domain)

    
});




function vi(){

  $.ajax({

            url: '/ViewProductActivity?itemid="corolla" ', 
            type: 'GET',
            success: function(response) {
                console.log(response);
                
  alert("succes")
  alert(response)
 //window.location.assign("/dashboard")


            },
            error: function(error) {
              alert("error")
                console.log(error);
            }
        });
}



function cl(e){

      
 

       


        return

}


var socket

function connectSocket(){
  alert("in socket");
  socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    socket.on('my response', function(msg) {
      alert("message in")
      alert(msg.data)

        //$('#log').append('<p>Received: ' + msg.data + '</p>');
    });
    
    $('form#broadcast').submit(function(event) {
        socket.emit('my broadcast event', {data: $('#broadcast_data').val()});
        return false;
    });

}



function sendData(e){


if(e.target.className == "btn btn-danger repair"){
  

 if (!confirm("You hav requested repairs on "+e.target.id )){
  return
 }
  


   socket.emit('request', {
 
          data: ["Repair",e.target.id,localStorage.getItem("username"),localStorage.getItem("email")]


        });
        return false;
}
 
 if(e.target.className == "btn btn-primary view"){
 

  return
 $.ajax({

            url: '/ViewProductActivity?itemid="corolla" ', 
            type: 'GET',
            success: function(response) {
                console.log(response);
                
  alert("succes")
  alert(response)
 //window.location.assign("/dashboard")


            },
            error: function(error) {
              alert("error")
                console.log(error);
            }
        });

}

if(e.target.className == "btn btn-warning maintenance"){
  if (!confirm("You havd requested maintenance on "+e.target.id )){
  return;
 }
 
alert("wow")

 socket.emit('request', {
 
          data: ["Maintenance",e.target.id,localStorage.getItem("username"),localStorage.getItem("email")]


        });
        return false;
  
}


}

window.addEventListener("load",start,false);
document.addEventListener("click",sendData,false);
