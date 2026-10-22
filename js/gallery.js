/*Name this external file gallery.js*/

function upDate(previewPic){
  console.log(previewPic.alt);
  console.log(previewPic.src);

  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo(){
  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus(){
  console.log("Page loaded: adding tabindex");

  var images = document.getElementsByClassName("preview");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}