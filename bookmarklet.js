
(function() {
  console.log("bookmarklet started");
  let paragraphs = document.getElementsByTagName("p");
  let images = document.getElementsByTagName("img");

  replaceAllElementsInnerHTML("p","test it");
  replaceAllElementsSrc("img", "http://www.catster.com/wp-content/uploads/2017/12/A-kitten-meowing.jpg");

})();

function replaceAllElementsInnerHTML(tagName, newInnerHTML){
  let elements = document.getElementsByTagName(tagName);

  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = newInnerHTML;
  }
}

function replaceAllElementsSrc(tagName, newSrc){
  let elements = document.getElementsByTagName(tagName);

  for (let i = 0; i < elements.length; i++) {
    elements[i].src = newSrc;
  }
}
