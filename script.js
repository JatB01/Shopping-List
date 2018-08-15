//Declare variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("ul");
var ClearAll = document.getElementById("clear");
var listItems = document.getElementsByClassName("list-group-item");
var s = document.getElementsByTagName("s");

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
  var cbox = document.createElement("input");
  cbox.setAttribute("type", "checkbox");
  cbox.className = "checkbox";
  li.appendChild(cbox);
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  var delbtn = document.createElement("i");
  delbtn.className = "far fa-trash-alt float-right";
  delbtn.setAttribute("id", "del");
  li.appendChild(delbtn);
  // delbtn.onclick = removeParent;
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
//creates delete buttons & checkbox for existing items
function deleteButton() {
  var delbtn = document.createElement("i");
  delbtn.className = "far fa-trash-alt float-right";
  delbtn.setAttribute("id", "del");
  var cbox = document.createElement("input");
  cbox.setAttribute("type", "checkbox");
  cbox.className = "checkbox";
  //Adds to existing list
  listItems[i].insertBefore(cbox, listItems[i].firstChild);
  listItems[i].appendChild(delbtn);
  // delbtn.onclick = removeParent;
}
//runs to add delete buttons to existing items
for (i = 0; i < listLength(); i++) {
  deleteButton();
}

//removes parent node. First checks if parent node is <li> and if so, removes parent. Otherwise it will be <s> so removes grandparent <li>
$(document).on("click", "#del", function() {
  // console.log($(this));
  if (
    $(this)
      .parent()
      .is($("li"))
  ) {
    $(this)
      .parent()
      .remove();
  } else {
    $(this)
      .parent()
      .parent()
      .remove();
  }
});

//deletes all list elements on click
ClearAll.onclick = function(evt) {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
};
//deletes last item by using 'del' key
function delitem(evt) {
  if (evt.keyCode == 46) ul.removeChild(ul.lastElementChild);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeyPress);

document.addEventListener("keydown", delitem);

//changes strikethrough on list
$(document).on("change", ".checkbox", function() {
  if (
    $(this)
      .parent()
      .is("s")
  ) {
    $(this).unwrap();
  } else {
    $(this)
      .parent()
      .wrapInner("<s id='s'></s>");
  }
});
