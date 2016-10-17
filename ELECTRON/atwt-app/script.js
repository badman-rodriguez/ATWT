var section = $('#reddit-random-board');
function getRedditUrlJSON(url) {
    console.log('http://api.reddit.com/r/random');
    return $.ajax({
        method: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {
            formHTML(data.data);
        }, 
        error: function(xhr, status) {
            console.log(status);
        }
    }); 
}


function formHTML (data) {
    var empty = '';
    $.each(data, function(index, value){
        if(value && typeof(value) != typeof(empty)){
            if(value.length > 0) {
                $.each(value, function(index_b, value_b) {
                    console.log(value_b.data);
                    section.append('<p><a href="'+ value_b.data.url +' target=""><img src="http://b.thumbs.redditmedia.com/Os0xJrloa9mNz52GJU0pz4NcwedexY3OzEk2qtFyvJQ.jpg" /> <br />"'+ value_b.data.title +'</a></p>');
                });  
            }
        }
    });
}


$('#reddit-button').on('click', function(){
    getRedditUrlJSON('http://api.reddit.com/r/random');
});