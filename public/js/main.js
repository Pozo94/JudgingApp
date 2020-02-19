$(document).ready(function(){
  $('.delete-competitor').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:'DELETE',
      url: '/competitors/'+id,
      success: function(response){
        alert('Deleting Article');
        window.location.href='/competitors/';
      },
      error: function(err){
        console.log(err);
      }
    });
  });
});
