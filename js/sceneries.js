function displayGallery(){
    var photos = [];
    var fileNames = [];
    var imageList = [];
    var image;

    var openList = "<li id='photo";
    var closeList = "</li>";
    var openFigure = '<figure>';
    var closeFigure = '</figure>';
    var openFigCaption = "<figcaption class='caption'>";
    var closeFigCaption = '</figcaption>'
    var openA = '<a href="#/" class="lightbox-toggle">'
    var closeA = '</a>'
    var openDesc = "<p class='description'>"
    var closeDesc = "</p>"
    var captionTexts = ['River side', 'Lake', 'mountains', 'sidewalk',
    'sky', 'water and flower', 'trees', 'green water', 
    'sunshine in the water', 'blue water', 'river', 'smog mountain'];

    //Create a loop to create 12 images
    for (var i=0; i<12; i++){
        fileNames.push("sceneries"+(i+1));
        photos.push("<img src='images/"+fileNames[i]+".jfif'>");
        image = openList + (i+1) + "'>" + openFigure + openA + photos[i] + closeA + openFigCaption + captionTexts[i] + closeFigCaption + closeFigure + openDesc +captionTexts[i]+ closeDesc+ closeList;
        imageList.push(image)
    }
    // Display all six image codes stored in the array
    document.getElementById("image-gallery").innerHTML = imageList.join("");
}

function showInfoBox(){
    document.getElementById("info-box").style.visibility = "visible";
}
function displayInfoBox(){
    infoBoxTitles = ['River side', 'Lake', 'mountains', 'sidewalk',
    'sky', 'water and flower', 'trees', 'green water', 
    'sunshine in the water', 'blue water', 'river', 'smog mountain'];
    infoBoxDescs = ['On this beautiful river side, there are lots of ducks. In the water, you will see a lots of fish. If you want, you can fish here all the day', 
    'Near the lake, there are many stories. Long long time ago, a son of your god come to paly near the lake without telling his parents...', 
    'There are so many gorgeous mountains, which make this place a perfect place for hiking. You can go hiking here every weekend.', 
    'This sidewalk is so clean that attract so many yong people and old people to walk here in the afternoon after their dinner.',
    'In the sky, you can see the beautiful clouds. And sometime, there are planes. What is most special is that....', 
    'Here the folowers are so beautiful that no one wants to leave when he comes here.', 
    'Trees grow so happily here. Just after one year, they are much taller than last year. Maybe it is because there are enough water and sunshine', 
    'We have green water here, which is so specail. You will never see green water somewhere else',
    'There is beautiful sunshine in the water, which is really rare and you will never see it in other places.', 
    'Here the water is blue because there are lots of minerals in the water. This make it looks like the eye of beautiful girls.', 
    'This river doesnt have lots of water, but it has lots of fish.', 
    'The smog in the mountain makes this place so beautiful that every traveller will take tons of pictures.']
    descs = document.querySelectorAll(".description");
    for (var i=0; i<descs.length; i++){
        let j = i;
        descs[i].onclick = function(){
            document.getElementById("info-box").style.visibility = "visible";
            document.getElementById("info-box-title").innerHTML = infoBoxTitles[j];
            document.getElementById("info-box-desc").innerHTML = infoBoxDescs[j];
        };
    }
}

function addLightbox(){
    /* Open lightbox on button click */
    $('.lightbox-toggle img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        var img = $(this).clone(); //Duplicate DOM element
        $('.box').append(img); //Insert duplicated element in another element
        //Get text content in attribute
        // var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        // if ($altvalue=="Angkor Wat") {
        //     var img = $('#photo:nth-child(1) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // }
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
}
displayGallery();
displayInfoBox();
document.getElementById("info-box-close").onclick = function(){
    document.getElementById("info-box").style.visibility = "hidden";
}

addLightbox();