
(function() {
  console.log("bookmarklet started");
  let paragraphs = document.getElementsByTagName("p");

  for (var i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].innerHTML);
    paragraphs[i].innerHTML = "whoop whoop"
  }
})();
