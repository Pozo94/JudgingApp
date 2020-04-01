$(document).ready(function(){
  $('.delete-competitor').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:'DELETE',
      url: '/competitors/'+id,
      success: function(response){
        if(window.confirm('Czy chcesz usunąć zawodnika')) {
            window.location.href = '/competitors/';
        }
      },
      error: function(err){
        console.log(err);
      }
    });
  });

    $('.delete-participant').on('click', function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type:'DELETE',
            url: '/competitors/participants/'+id,
            success: function(response){
                if(window.confirm('Czy chcesz usunąć zawodnika')) {
                    window.location.href = '/competitors/';
                }
            },
            error: function(err){
                console.log(err);
            }
        });
    });
});
