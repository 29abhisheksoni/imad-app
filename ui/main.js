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

var nameInput =  document.getElementById('name');
var name = nameInput.value;

var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    var names = ['name1','name2','name3'];
    var list = '';
    
    for(var i=0; i<names.length; i++)
    {
        
        list+= '<li>' + names[i] + '</li>'; 
    }
    
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
}