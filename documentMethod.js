function fillIn(id, content){
document.getElementById('ourForm').value = content ;
}

function click(id){
 document.getElementById(id).click();
}

function hasContent(string){
  str = document.documentElement.innerHTML;
  if (str.includes(string)) {
    testPass("content appears in document")
  } else { testFailed(message) }


}
