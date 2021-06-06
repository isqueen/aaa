let box = document.getElementsByClassName("box");
let boxArray = [...box];

for (let j = 0; j < boxArray.length; j++) {
  let box1 = boxArray[j];
  box1.onclick = (e) => {
    for (let i = 0; i < boxArray.length; i++) {
      let box2 = boxArray[i];
      if (box2.classList.contains("active")) {
        box2.classList.remove("active");
      }
    }
    e.target.classList.add("active");
  };
}
