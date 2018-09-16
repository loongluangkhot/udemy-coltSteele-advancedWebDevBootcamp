// Select DOM elements
const btn = $('#btn');
const img = $('#image');

// API urls
const url = 'https://aws.random.cat/meoww';

// Logic

btn.click(updateImg);

// jQuery getJSON method
/*function updateImg() {
    // console.log('in updateImg function');
    $.getJSON(url)
        .done(function(data) {
            let imgUrl = data.file;
            // let imgUrl = 'https://purr.objects-us-west-1.dream.io/i/esI3L.jpg'
            img.attr('src', imgUrl);
        })
        .catch(function(err) {
            console.log(err);
        });
}*/

// jQuery ajax method
function updateImg() {
    $.ajax(url, {
        method: 'GET',
        dataType: 'JSON'
    })
    .done(function(data) {
        let imgUrl = data.file;
        // let imgUrl = 'https://purr.objects-us-west-1.dream.io/i/esI3L.jpg'
        img.attr('src', imgUrl);
    })
    .catch(function(err) {
        console.log(err);
    });
}