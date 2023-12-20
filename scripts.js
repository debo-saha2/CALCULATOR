let string = " ";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerHTML == "=") {
      string = eval(string);
    } else if (event.target.innerHTML == "C") {
      string = " ";
    } else {
      string = string + event.target.innerHTML;
    }
    document.querySelector(".input").value = string;
  });
});
