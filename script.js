var input = document.getElementById("input");

// input value
var inputValue = input.value;

var id = 0;

// ul
var todoList = document.getElementById("todo-list");

var removeButtons = document.getElementsByTagName("button");

// adding in the todo-list
var addButton = document
  .getElementById("add")
  .addEventListener("click", function () {
    //   return 1;
    inputValue = input.value;

    if (inputValue != "") {
      //creating new li
      var li = document.createElement("li");
      li.setAttribute("class", id);

      // creating div inside li
      var newDiv = document.createElement("div");
      newDiv.setAttribute("id", id);
      newDiv.innerHTML = `<input type="checkbox"/>   ${inputValue}`;

      // creating remove button
      var removeButton = document.createElement("button");
      removeButton.setAttribute("class", `remove${id}`);
      removeButton.innerHTML = "X";

      newDiv.appendChild(removeButton);

      li.appendChild(newDiv);
      todoList.appendChild(li);
      showLeft();

      id++;
    }
  });

var nodeId;

todoList.addEventListener("click", () => {
  for (let i = 1; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function () {
      // return 1;
      divId = removeButtons[i].classList.value.substring(6);
      nodeId = findNodeId(divId);
    });
  }
  showLeft();
  todoList.removeChild(todoList.childNodes[nodeId]);
  nodeId = 10000000;
});

function showLeft() {
  console.log("hell");
  var liArr = document.getElementsByTagName("li");
  console.log(liArr.length);
}
findNodeId = (divId) => {
  var liArr = document.getElementsByTagName("li");
  for (let i = 0; i < liArr.length; i++) {
    if (divId == liArr[i].classList.value) return i;
  }
};
