const chat_btn = document.getElementById("chat-btn"),
  chat = document.getElementById("chat");
/*
! **********  chat  ********** !
*/
//  Add And Remove Classes From Chat
document.addEventListener("click", (e) => {
  if (e.target.closest("#chat-btn")) {
    chat_btn.classList.add("open");
    chat.classList.add("show");
  } else if (!e.target.closest("#chat-btn") && !e.target.closest("#chat")) {
    chat_btn.classList.remove("open");
    chat.classList.remove("show");
  }
});
/*
? **********  chat  ********** ? 
*/

let cards = document.querySelectorAll("#card");
console.log(cards);
cards.forEach((item) => {
  if (item.children[2].children[1].children.length - 3 === 0) {
    item.children[3].children[1].style.display = "none";
  } else {
    item.children[3].children[1].innerHTML =
      "+" + (item.children[2].children[1].children.length - 3);
  }
  // This to make height text-packages and list-item the same height
  let textHeight = Math.max(item.children[2].children[0].clientHeight);
  let ulHeight = Math.max(item.children[2].children[1].clientHeight);
  if (ulHeight > textHeight) {
    item.children[2].children[0].style.height = ulHeight + "px";
  } else {
    item.children[2].children[1].style.height = textHeight + "px";
  }
});

let items = document.querySelectorAll("#items");
let array = [];
items.forEach((item) => {
  array.push(item.clientHeight);
  let max = Math.max(...array);
  console.log(max);
  item.style.height = max + "px";
});
