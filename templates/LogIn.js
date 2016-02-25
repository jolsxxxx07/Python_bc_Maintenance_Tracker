/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var hide;
var user;
var password;
var locations = "";
var URL ="";


 
 
  
function start(){
   
       
   URL = location.protocol +"//"+ location.host;
 locations =  location.protocol;
    hide = document.getElementById('invalid');
    hide.setAttribute("style","display:none");
  // document.getElementById("logger").addEventListener("click",verify,false);

   $(function() {
    $('#logger').click(function() {
 
        $.ajax({
            url: '/login',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

localStorage.clear();

document.getElementById("create").addEventListener("click",create,false);
 

 var url = document.URL;
     var ipConfig = url.split(":");
    
  var ip =   ipConfig[1].split("//");
 
     sessionStorage.setItem("URL",URL);
   
  
  
  $("#createA").click(function (){
      
       $("#sendForgot").hide();
        $("#title").html("Create Account");
          $("#userName").show();
      $("#password").show();
       $("#create").show();
  })
  
  $("#fPassword").click( function (){
      $(".red").hide();
      $(".green").hide();
      $("#userName").hide();
      $("#password").hide();
      $("#title").html("Forgot Password");
      $("#create").hide();
        $("#sendForgot").show();
        
      $("#sendForgot").click(function (e){
          e.preventDefault();
          e.stopPropagation();
          
       $(".red").hide();
      $(".green").hide();
          var email = $("#email").val();
         
          if(email !== null){
           
              if(email.indexOf("@") !== -1 || email.indexOf(".") !== -1){
             
                  }
                  else{
                    $("#minEmail").show();
                return;
                  }
          }
          else{
              $("#minEmail").show();
              return;
          }
      
        /*
 var requestUrl = sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?status=3&email="+email;
               
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parse(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 
 
 } // end try
 catch ( exception )
 {
 console.log(exception);
 
 } // end catch
 *//*
  function parse(asyncRequest ){
 if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 )
 {
 var data = JSON.parse(asyncRequest.responseText);

 
 if(data.indexOf("false") !== -1){
     $("#response").html("User does not exist");
       $("#response").show();
   
 }
 else{
     if(data.indexOf("true") !== -1){
          $("#response").html("Password sent successfully to your e-mail");
     }
     else{
          $("#response").html("Please connect to the internet");
     }
     
       $("#response").show();
   
 }
 
 }
  }
 
      })
  });
*/
}

function verify(){
    
      $("#next").hide();
      
   
  hide.setAttribute("style","display:none");
  
   
  user = document.getElementById("username").value;
  password =document.getElementById("pwd").value;

     localStorage.setItem("UserName",user);
 
 if(user === null || user.length === 0){
      hide.setAttribute("style","display:block");
 }
 
 if(password === null || password.length === 0){
      hide.setAttribute("style","display:block");
 }
 
  if(hide.offsetParent === null){
      log();
       // checkuserName();
       alert("hdhdlog")
      }
 
 
 return;
    
}





function checkuserName(){

  document.getElementById("forms").action = getAction(); 
   // document.getElementById("forms").submit();
    
   
    
}


function log(){
    
      
      $("#next").show();
       
      alert("here")
   
//matricNumber = document.getElementById("matric").value;
//alert(location.protocol+"//"+location.hostname);
 
localStorage.clear();

    var url = document.URL;
     var ipConfig = url.split(":");
    
  var ip =   ipConfig[1].split("//");
 
     localStorage.setItem("Ip",ip[1]);
    
     localStorage.setItem("user",user);
     
      localStorage.setItem("UserName",user);
      
      $.ajax({
        url:'/login',
        data:$('form').serialize(),
        type:'POST',
        success: function(response){
         console.log(response)
        },
        error: function(error){
          console.log(error);
        }
      })
 

  return;
 }

function code(e){
if(e.keyCode === 13){
        verify();  
}
}

 
function create(){
  $(".red").hide();
    var user = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if(user === null || user.length < 5){
      
        $("#minUser").show();
        
        return;
    }
     if(email !== null ){
        if(email.indexOf("@") !== -1 && email.indexOf(".") !== -1){
           
        }
        else{
             $("#minEmail").show();
            return;
           
        }
    }else{
         $("#error").show();
            return;
    }
    
      if(password === null || password.length < 5){
        $("#minPassword").show();
        return;
    }
    
    var loginInHere =sessionStorage.getItem("URL")+"/AAAACLIENT/webresources/exam/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b/b?status=1";
 
    
     var requestUrl = loginInHere+"&userName="+user+"&firstName="+user+"&email="+email+"&lastName="+user+"&password="+password;
    
    
        //+ methodAndArguments;
        
  
    
   try
 {
     var asyncRequest = new XMLHttpRequest(); // create request

 // set up callback function and store it
 asyncRequest.addEventListener("readystatechange",
 function() { 
            parseLogInfos(asyncRequest);  //callBack( asyncRequest );
 }, false);
     
    asyncRequest.open( "POST", requestUrl, true );
 asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8" );
 asyncRequest.send(); // send request
 

 } // end try
 catch ( exception )
 {
console.log( exception);
 } // end catch
 
  
   }
   
    function parseLogInfos(asyncRequest ){
   if ( asyncRequest.readyState === 4 && asyncRequest.status === 200 ){
 var data = JSON.parse(asyncRequest.responseText);
 
if(data == "false"){
    
   $("#elabel").show();
}
if(data == "true"){
  $("#slabel").show();
  

}

 }
   
}

function con(e){
  //  window.alert("you have clicked me");
    
    e.preventDefault();
}




window.addEventListener("contextmenu",con,false);


window.addEventListener("load",start,false);
document.addEventListener("keypress",code,false);
