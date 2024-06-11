const buttons = document.querySelectorAll("button");

const screen = document.getElementById("screen");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    // This will give the button i am clicking
    // console.log(e.target);
    // This will give the content inside button
    // console.log(e.target.innerText);
    let buttonText = e.target.innerText;

    // When we click on 'AC' button, It should clear my screen value
    if (buttonText === "AC") {
      screen.value = "";
    }
    // When we click on 'x' button, It should be added to screen value and acts as '*'
    else if (buttonText === "x") {
      screen.value += "*";
    }
    // When we click on '=' button it will calculate the screen value so for it we use eval function inside it we will pass screen value
    else if (buttonText === "=") {
      try {
        screen.value = eval(screen.value);
      } catch (error) {
        // When we click on '=' button in between or earlier opeartion, it will show 'Invalid Opeartor' message.
        screen.value = "Invalid Operator";
      }
    }
    // When we see value on screen, it should add buttonText value to it.
    else {
      screen.value += buttonText;
    }
  });
}
