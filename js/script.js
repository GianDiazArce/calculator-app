let display = document.getElementById("display");

let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", function (e) {
    let keyContent = e.target.innerHTML.toLowerCase();

    if (keyContent === "reset") {
      display.innerHTML = "0";
    }
    if (keyContent === "=") {
      console.log(typeof keyContent);
      try {
        display.innerHTML = eval(display.innerHTML);
      } catch (error) {
        display.innerHTML = "Error";
        setTimeout(() => {
          display.innerHTML = "0";
        }, 1000);
      }
    }

    if (keyContent === "del") {
      display.innerHTML = display.innerHTML.slice(0, -1);
      if (display.innerHTML === "") {
        display.innerHTML = "0";
      }
    }

    if (keyContent === ".") {
      if (display.innerHTML.includes(".")) {
        return;
      }
      display.innerHTML += keyContent;
    }
    if (
      keyContent !== "." &&
      keyContent !== "del" &&
      keyContent !== "=" &&
      keyContent !== "reset"
    ) {
      display.innerHTML += keyContent;
    }

    if (
      display.innerHTML.startsWith("0") &&
      keyContent !== "." &&
      keyContent !== "del" &&
      keyContent !== "=" &&
      keyContent !== "reset" &&
      display.innerHTML.length > 1 &&
      !display.innerHTML.includes(".")
    ) {
      display.innerHTML = keyContent;
    }
  });
});

// select group radio button
let groupRadio = document.querySelectorAll(".theme-radio");
let theme = localStorage.getItem("theme");
if(theme){
    document.body.setAttribute('data-theme', theme);
} else {
    document.body.setAttribute('data-theme', 'theme-1');
    localStorage.setItem("theme", "theme-1");
    groupRadio[0].checked = true;
}

if(theme === "theme-1"){
    groupRadio[0].checked = true;
}
if(theme === "theme-2"){
    groupRadio[1].checked = true;
}
if(theme === "theme-3"){
    groupRadio[2].checked = true;
}

groupRadio.forEach((radio) => {
  radio.addEventListener("click", function (e) {
    console.log(radio.value);
    // change theme of the page based on the value of the radio button selected values = 1, 2, 3
    if (radio.value === "1") {
        document.body.setAttribute('data-theme', 'theme-1');
        localStorage.setItem("theme", "theme-1");
    }
    if (radio.value === "2") {
        document.body.setAttribute('data-theme', 'theme-2');
        localStorage.setItem("theme", "theme-2");
    }
    if (radio.value === "3") {
        document.body.setAttribute('data-theme', 'theme-3');
        localStorage.setItem("theme", "theme-3");
    }

  });
});
