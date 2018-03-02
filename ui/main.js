var button = document.getElementById('counterr');



button.onclick = function()
{
   var request = new XMLHttpRequest();
   
   request.onreadystatechange = function(){
       if(request.readystate === XMLHttpRequest.DONE){
           if(request.status === 200){
           
           var counter = request.responseText;
           //var span = document.getElementById('countt');
           //span.innerHTML = counter.toString();
           document.getElementById('countt').innerHTML = counter.toString();
           
           
           }
       }
   };
   request.open('GET', 'http://u29abhisheksoni.imad.hasura-app.io/counter', true);
   request.send(null);
};