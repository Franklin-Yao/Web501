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
    var openDesc = "<p class='description'>"
    var closeDesc = "</p>"
    var captionTexts = ['River side', 'Lake', 'mountains', 'sidewalk',
    'sky', 'water and flower', 'trees', 'green water', 
    'sunshine in the water', 'blue water', 'river', 'smog mountain'];

    //Create a loop to create 12 images
    for (var i=0; i<12; i++){
        fileNames.push("sceneries"+(i+1));
        photos.push("<img src='images/"+fileNames[i]+".jfif'>");
        image = openList + (i+1) + "'>" + openFigure + photos[i] + openFigCaption + captionTexts[i] + closeFigCaption + closeFigure + openDesc +captionTexts[i]+ closeDesc+ closeList;
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
    infoBoxDescs = ['description1', 'description2', 'description3', 'description4',
    'description5', 'description6', 'description7', 'description8',
    'description9', 'description10', 'description11', 'description12']
    descs = document.querySelectorAll(".description");
    for (var i=0; i<desc.length; i++){
        descs[i].onclick = function(idx){
            document.getElementById("info-box").style.visibility = "visible";
            // document.getElementById("info-box-title").innerHTML = infoBoxTitles[idx];
            // document.getElementById("info-box-desc").innerHTML = infoBoxDescs[idx];
        };
    }
}
displayGallery();
displayInfoBox();
document.getElementById("info-box-close").onclick = function(){
    document.getElementById("info-box").style.visibility = "hidden";
}
// document.getElementById("info-box").style.visibility = "visible";


        