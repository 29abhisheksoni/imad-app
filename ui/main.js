//var button = document.getElementById('counterr');



//function exec()
//{

//var request = new XMLHttpRequest();
//request.onreadystatechange = function() 
  //  {
    //    if (request.readyState === XMLHttpRequest.DONE) 
      //      {
        //      //Take Some Action
          //    if (request.status === 200) 
            //    { 
              //      var counter = request.responseText; 
                //    var span = document.getElementById('count');
                  //  span.innerHTML = counter.toString();
            //    } 
        //    } 
    //}; 
//request.open("GET", "http://u29abhisheksoni.imad.hasura-app.io/counter", true);
//request.send(); 
//console.log('EXECUTED');
//}


//submit username password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    
    var request = new XMLHttpRequest();
   
   request.onreadystatechange = function()
   {
       if(request.readystate === XMLHttpRequest.DONE)
       {
           if(request.status === 200)
           {
             console.log('user logged in');
             alert("logged in sucessfully");
           }
           else if (request.status === 403)
           {
             alert("username/password is incorrect");
           }
            else if (request.status === 500)
            {
              alert("something went wrong on server");
            }
          
       }
   };
   var username =  document.getElementById('username').value;
    var password =  document.getElementById('password').value;
    console.log(username);
    console.log(password);
   request.open('POST', 'https://u29abhisheksoni.imad.hasura-app.io/login', true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username: username, password: password}));
   
   
 };