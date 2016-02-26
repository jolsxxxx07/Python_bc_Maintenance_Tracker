


var ref = null;
var userbase = null;


function start(){

 

        

	$("#loggIn").html("You are logged in as "+localStorage.getItem("status"));

    $("#welcome").html(localStorage.getItem("username"));

  renderImage();
if(localStorage.getItem("status") == "staff"){

   
  hideFunctions();
  return;
}

 
 
 ref = new Firebase("https://amber-torch-4320.firebaseio.com/admin");

 ref.on("value", function(data) {
  var textmess = data.val().textmessage;

  var getvalues = textmess.split(" ");
 

  
  

$("#textModal").html(textmess);
$("#smallModal").modal();

  $("#live").click(function (){
var  userbase = new Firebase("https://amber-torch-4320.firebaseio.com/"+getvalues[5]+"")

 userbase.set({ textmessage: "Approval for "+getvalues[9]+" granted" });




  })
     

$("#dismiss").click(function (){
var  userbase = new Firebase("https://amber-torch-4320.firebaseio.com/"+getvalues[5]+"")

 userbase.set({ textmessage: "Request for "+getvalues[9]+" Dismissed "+document.getElementById("sendNote").value });
 



  })



});




     

 
	$("#next").hide();
    getProducts()
    connectSocket();
	document.getElementById("ap").addEventListener("click",addProduct ,false);
	document.getElementById("ep").addEventListener("click",editProduct ,false);
	document.getElementById("vp").addEventListener("click",viewProduct ,false);
	document.getElementById("au").addEventListener("click", adduser,false);
	document.getElementById("vu").addEventListener("click", viewuser,false);
	document.getElementById("submitFile").addEventListener("click",submitF,false);
  document.getElementById("addStaff").addEventListener("click",addStaffs,false)
  
  
  

 
}


function renderImage(){



document.getElementById('fClicks').addEventListener('change', handleFileSelects, false);
        
        
             function handleFileSelects(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
            
            document.getElementById("iClicks").src = e.target.result;
            
          // Render thumbnail.
          //var span = document.createElement('span');
          //span.innerHTML = ['<img class="thumb" src="', e.target.result,
           //                 '" title="', escape(theFile.name), '"/>'].join('');
         // document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }



  
 document.getElementById('fClick').addEventListener('change', handleFileSelect, false);
        
         
             function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
            
            document.getElementById("iClick").src = e.target.result;
            
          // Render thumbnail.
          //var span = document.createElement('span');
          //span.innerHTML = ['<img class="thumb" src="', e.target.result,
           //                 '" title="', escape(theFile.name), '"/>'].join('');
         // document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
}

function hideFunctions(){
  $("#next").hide();
    getProducts()
    connectSocket();
    document.getElementById("ap").addEventListener("click",addProduct ,false);
    document.getElementById("submitFile").addEventListener("click",submitF,false);
    $("#ep").fadeOut("slow");
    $("#vp").fadeOut("slow");
    $("#userlist").fadeOut("slow")
    var userbase = new Firebase("https://amber-torch-4320.firebaseio.com/"+localStorage.getItem("username")+"")
  
     userbase.on("value", function(data) {
  var textmess = data.val().textmessage;
  
  $("#textModals").html(textmess)
  $("#userModal").modal();

});
}
 

function listenformessage(){


  ref.on("value", function(data) {
  var mess = data.val().message;
  

});
}


function addStaffs(){
 
 
 usernames = document.getElementById("username").value;
 passwords = document.getElementById("password").value;

 alert(usernames)
 alert(passwords);
 

   $.ajax({
            url: '/signUp',
            data: $('#former').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
                
//localStorage.setItem("username",document.getElementById('username').value)
//localStorage.setItem("email","jbadewale@yahoo.com")
//localStorage.setItem("status","admin")
 //window.location.assign("/dashboard")


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
    var s = response;
   s = search("\"","")
   s= search("[","");
   s = search("]","")
   
   

   function search(search,replacement){
          var target = s;

     
        return target.split(search).join(replacement);
    }
  
  products = s.split(",")

 

  
  var tableCreator = ""
  var sn= 0;
  var id = "";

  for (var product = 0; product < products.length; product+=5){
     id=products[product];
     
     if(localStorage.getItem("status") == "staff"){
    
     tableCreator += "<tr><td>"+(++sn)  + "</td>   <td>" +products[product]    +"</td><td>"+  products[product + 1] +"</td><td>"+    products[product + 2]   +"</td><td>"+products[(product + 3)]+"</td> <td>"+products[product + 4]+"</td> <td>   <button id='"+id+ "' class='btn btn-danger repair'>Repair </button>   <button id='"+id+ "' class='btn btn-warning maintenance'> Maintenance</button> </td> </tr>"   
     
     }

       else{
       
     tableCreator += "<tr><td>"+(++sn)  + "</td>   <td>" +products[product]    +"</td><td>"+  products[product + 1] +"</td><td>"+    products[product + 2]   +"</td><td>"+products[(product + 3)]+"</td> <td>"+products[product + 4]+"</td> <td> <button  id='"+id+ "' class='btn btn-primary view'>View History </button> </td> </tr>"   
          }
       
  }
  
   document.getElementById("productBody").innerHTML = tableCreator;


 //tablePg





            },
            error: function(error) {
            
                console.log(error);
            }
        });
}

 
 


 function submitF(){
it = document.getElementById("itemname").value;
rf = document.getElementById("refId").value;
ds =document.getElementById("description").value;

if ( it !== "" && rf !== "" && ds !==""){

}
else{
  alert("Please all values must be filled ");
  return;

}

if(  $('#formProduct').find('input[type="file"]')[0].files[0] === null){
  alert("Insert a .jpg image")
  return;

}

 	
 	var fd = new FormData();

            var file_data = $('#formProduct').find('input[type="file"]')[0].files[0];
            fd.append("image", file_data);
            var other_data = $('#formProduct').serializeArray();
            $.each(other_data, function(key, input) {
                fd.append(input.name, input.value);
            });
            
           send(fd)
          function send(fd){
 
           
 	 $.ajax({

            url: '/Upload', 
            data: fd,
            type: 'POST',
            contentType:false,
            processData: false,

            success: function(response) {
                console.log(response);
                
  
  $("#closeM").trigger("click");
  getProducts()

 //window.location.assign("/dashboard")


            },
            error: function(error) {
            	
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
  
  var s = response;
   s = search("\"","")
    s = search("\'","")
   s= search("[","");
   s = search("]","")
   
    
 ("succes here")
   function search(search,replacement){
          var target = s;

     
        return target.split(search).join(replacement);
    }
  
  var products = s.split(",")

    


  
  var tableCreator = ""
  var sn= 0;
  var id = "";

  for (var product = 0; product < products.length; product+=5){
     id=products[product];
     

     tableCreator += "<tr><td>"+(++sn)  + "</td>   <td>" +products[product]   +"</td><td>"+  products[product + 1]+"</td><td>"+    products[product + 2]+"</td><td>"+products[(product + 3)]+"</td> <td>"+"20-12-2016"+"</td> <td> <button  id='"+id+ "' class='btn btn-success view completed'>completed </button> </tr>"   
  
       
  }
  
   document.getElementById("productAll").innerHTML = tableCreator;



            },
            error: function(error) {
            
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
    
  

    
});




function vi(){

  $.ajax({

            url: '/ViewProductActivity?itemid="corolla" ', 
            type: 'GET',
            success: function(response) {
                console.log(response);
                
  
  
 //window.location.assign("/dashboard")


            },
            error: function(error) {
              
                console.log(error);
            }
        });
}



function cl(e){

      
 

       


        return

}


var socket

function connectSocket(){
 
  socket = io.connect('http://' + document.domain + ':' + location.port + '/test');
    socket.on('my response', function(msg) {
      

        //$('#log').append('<p>Received: ' + msg.data + '</p>');
    });
    
    $('form#broadcast').submit(function(event) {
        socket.emit('my broadcast event', {data: $('#broadcast_data').val()});
        return false;
    });

}



function sendData(e){



if(e.target.className == "btn btn-success view completed"){
  document.getElementById(e.target.id).setAttribute("style","display:none");




}

if(e.target.className == "btn btn-danger repair"){
  

 if (!confirm("You hav requested repairs on "+e.target.id )){
  return
 }



  
  
  if(localStorage.getItem("status") == "staff"){
    
    ref = new Firebase("https://amber-torch-4320.firebaseio.com/admin");
    ref.set({ textmessage: "You have a request from "+localStorage.getItem("username") +" to repair "+e.target.id });

  }

  
      var email = prompt("Please enter admin's email  ");
      if(!email){
        alert("No email provided")
        return;  

      }
  

      var youremail = prompt("Please enter mail to recieve notification when treated");
      if(!youremail){
        alert("Please provide email ")
        return;  

      }



      localStorage.setItem("email",email);




   socket.emit('request', {
 
          data: ["Repair",e.target.id,localStorage.getItem("username"),localStorage.getItem("email"),youremail]


        });
        return false;
}
 
 if(e.target.className == "btn btn-primary view"){
 localStorage.setItem("product",e.target.id);
 

  window.location.assign("/productView")
 
}

if(e.target.className == "btn btn-warning maintenance"){
  if (!confirm("You havd requested maintenance on "+e.target.id )){
  return;
 }
 
if(localStorage.getItem("status") == "staff"){
    
    ref = new Firebase("https://amber-torch-4320.firebaseio.com/admin");
    ref.set({ textmessage: "You have a request from "+localStorage.getItem("username") +" to maintain "+e.target.id });

  }

       var email = prompt("Please enter admin's email  ");
      if(!email){
        alert("No email provided")
        return;  

      }
     

       localStorage.setItem("email",email);

         var youremail = prompt("Please enter mail to recieve notification when treated");
      if(!youremail){
        alert("Please provide email ")
        return;  

      }


 socket.emit('request', {
 
          data: ["Maintenance",e.target.id,localStorage.getItem("username"),localStorage.getItem("email"),youremail]


        });
        return false;
  
}


}

window.addEventListener("load",start,false);
document.addEventListener("click",sendData,false);
