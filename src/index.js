var userinput = document.getElementById("userinput");
var but = document.getElementById("enter");
var ul = document.querySelector("ul");

userinput.addEventListener("keypress", WhenKeypressed);
but.addEventListener("click", WhenClicked);

function WhenClicked() {
  if (userinput.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userinput.value));
    ul.appendChild(li);
    userinput.value = "";
  }
}
function WhenKeypressed(event) {
  if (userinput.value.length > 0 && event.keyCode === 13) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userinput.value));
    ul.appendChild(li);
    userinput.value = "";
    // li.createElement("button");
  }
}
