var button = document.getElementById("counter");
var counter=0;
Button.onclick = function(){
    
    var request= new XMLHTTPRequest();
    request.onreadystatechange = function(){
      if(request.readyState==XMLHTTPRequest.DONE){
          if(request.status==200){
              var counter= request.responseText;
                var span = document.getElementById("count");
                span.innerHTML=counter.toString();
          }
      }  
    };
    request.open("GET", "http://akshayrahul97.imad.hasura-app.io/counter",true);
    request.send(null);

}; 