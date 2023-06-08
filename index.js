const lists = document.getElementsByClassName("list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");
rightBox.innerHTML = "Drag and Drop Here";

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;

    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", () => {
      if (leftBox.getElementsByTagName("img").length == 1) {
        leftBox.innerHTML = "Empty Container ";
      }
      if (rightBox.getElementsByTagName("img").length == 0) {
        rightBox.innerHTML = "";
      }
      rightBox.appendChild(selected);
      rightBox.style.borderColor = "green";
      leftBox.style.borderColor = "red";

      setInterval(() => {
        rightBox.style.borderColor = "inherit";
        leftBox.style.borderColor = "inherit";
      }, 1000);

      selected = null;
    });
  });

  function reset() {
    location.reload();
  }
}
