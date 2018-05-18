
(function() {
  console.log("bookmarklet started");
  let paragraphs = document.getElementsByTagName("p");
  let images = document.getElementsByTagName("img");

  for (var i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].innerHTML);
    paragraphs[i].innerHTML = "whoop whoop";
  }

  for (var i = 0; i < images.length; i++) {
    console.log(images[i].src);
    console.log(images[i].alt);
    images[i].src = "";
  }
})();
