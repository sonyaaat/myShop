const spinner=`<div id="loading" class="loading" onClick="hideSpinner()">
Loading&#8230;     
`

const body=document.querySelector("body")
console.log(body)
body.insertAdjacentHTML("beforeend",spinner)
var loadingDiv = document.getElementById('loading');

function showSpinner() {
  loadingDiv.style.visibility = 'visible';
}

function hideSpinner() {
  loadingDiv.style.visibility = 'hidden';
}
console.log("A")
showSpinner()
setTimeout(()=>{
  console.log("F")
  hideSpinner()


},500)