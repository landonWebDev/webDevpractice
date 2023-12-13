var imgArray = new Array(
'FuzzyCatLg.jpg',
'HuntingDogsLg.jpg',
'Snake1Lg.jpg',
'KidsDogLg.jpg',

);
var titleArray = new Array(
'Angry Cat',
'Happy Dogs',
'Coiled Snake',
'Some Kids playing with there dog'
);
var imgPath = "Images/Fullsize/";
function swapImage(imgID) {
var theImage = document.getElementById('theImage');
var textDiv = document.getElementById('bottomText');
var newImg;
var textTitle;
newImg = imgArray[imgID];
theImage.src = imgPath + newImg;
textTitle=titleArray[imgID];
textDiv.innerHTML = textTitle;
}
function preloadImages() {
for(var i = 0; i < imgArray.length; i++) {
var tmpImg = new Image;
tmpImg.src = imgPath + imgArray[i];
}
}
