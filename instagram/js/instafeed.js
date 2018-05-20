var token = '214739753.b9e73b9.ff450ebee7064505bd8e93a6254c618f',
    num_photos = 6;

function instafeed(hashtag) {
    var instaImage = {};
    $.ajax({
        url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: token, count: num_photos},
        success: function(data){
            console.log(data);
            for(x in data.data){
                instaImage[x] = data.data[x].images.low_resolution.url;
                $('#test'+ x).attr('src', instaImage[x]);
//                $('#' + hashtag + x).attr('src', instaImage[x]);
//                $('.' + hashtag).append('<div class="col col-sm-6 col-md-4 insta-item insta-item-sm"><img src="'+instaImage[x]+'"></div>');  
            }
        },
        error: function(data){
            console.log(data);
        }
    });
}