
function start(){


var myDataRef = new Firebase('https://xjj0gy21j5t.firebaseio-demo.com/');


name = "";
text = "";
string
myDataRef.set('User ' + name + ' says ' + text);
object
myDataRef.set({name: name, text: text});
array 
myDataRef.push({name: name, text: text});



myDataRef.on('child_added', function(snapshot) {
  //We'll fill this in later.
  var message = snapshot.val();
displayChatMessage(message.name, message.text);
});


}

