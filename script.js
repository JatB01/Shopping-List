//Declare variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var ClearAll = document.getElementById("clear");
var listItems = document.getElementsByTagName("li");

//returns length of list
function listLength() {
  return listItems.length;
}

//returns length of user input
function inputLength() {
  return input.value.length;
}

//creates a new list element & clears the search bar
function createListElement() {
  var li = document.createElement("li");
  li.className = "list-group-item list-group-item-info";
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  var delbtn = document.createElement("i");
  delbtn.className = "far fa-trash-alt float-right";
  li.appendChild(delbtn);
  delbtn.onclick = removeParent;
}

//adds element once button clicked
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// creates element once they press enter
function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode == 13) {
    createListElement();
  }
}
//creates delete buttons for existing items
function deleteButton() {
  var delbtn = document.createElement("i");
  delbtn.className = "far fa-trash-alt float-right";
  //Adds to existing list
  listItems[i].appendChild(delbtn);
  delbtn.onclick = removeParent;
}
//runs to add delete buttons to existing items
for (i = 0; i < listLength(); i++) {
  deleteButton();
}

//removes parent node
function removeParent(evt) {
  evt.target.parentNode.remove();
}

ClearAll.onclick = function(evt) {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
