$(document).ready(function(){
  $('#searchButton').click(function(){
    var searchTerm = $('#searchTerm').val();
    var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "opensearch",
    search: searchTerm,
    limit: "5",
    namespace: "0",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
    
   $.ajax({
     type: 'GET',
     url: url,
     async: false,
     dataType: 'json',
     success: function(data){
      $('#searchOutput').html('');
        for (var i = 0; i < data[1].length; i++){
       $('#searchOutput').prepend("<li><a href= "+data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
        };   
        //var reverseOutput = document.getElementbyId("searchOutput")
        //var i = reversehOutput.childNodes.length;
        //while (i--)
        //searchOutput.appendChild(searchOutput.childNodes[i]);
        
     },
     error: function(errorAlert){
      alert('error'); 
     }
   })
    
  
  
  })
 
           
  
  
})