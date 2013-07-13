$(document).ready(
    function(){
      $('#for-button').click(function(){
          $.ajax({
           type: "POST",
           url: '/submit',
           data: {'message':$('#for-text').val() , 'side':'for' , 'session':sess,'time':new Date().getTime()}, // serializes the form's elements.
           success: function(data)
           {$('#for-text').val("");
           }
         });
          return false;

  });

      $('#against-button').click(function(){
          $.ajax({
           type: "POST",
           url: '/submit',
           data: {'message':$('#against-text').val() , 'side':'against' , 'session':sess,'time':new Date().getTime()}, // serializes the form's elements.
           success: function(data)
           {
            $('#against-text').val("");
           }
         });
          return false;
  });

setInterval(forcheck,1000);
setInterval(againstcheck,1000);


function forcheck(){
  if($('.lposts div:last-child()').attr('data-id') == undefined ) lid = 0;
  else lid = $('.lposts div:last-child()').attr('data-id');
  $.ajax({
  url: '/for',
  data: {'id':lid,'session':sess},
  success: function(data){console.log(data);
    data = JSON.parse(data);
  for(i=0;i<data.length;i++){
      addLpost(data[i]);
    }
  }
});


}


function againstcheck(){
  if($('.rposts div:last-child()').attr('data-id') == undefined ) rid = 0;
  else rid = $('.rposts div:last-child()').attr('data-id');
  
  $.ajax({
  url: '/against',
  data: {'id':rid,'session':sess},
  success: function(data){console.log(data);
    data = JSON.parse(data);
    for(i=0;i<data.length;i++){
      addRpost(data[i]);
    }

  }
});


}

});