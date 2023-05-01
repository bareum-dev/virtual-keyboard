import keysEn from "./keys-english.js";
console.log(keysEn);

const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");
body.append(container);

const keyboard = document.createElement("section");
keyboard.classList.add("keyboard");
container.append(keyboard);

const display = document.createElement("textarea");
display.classList.add("display");
display.setAttribute("autofocus", true);
display.setAttribute("lang", "en");
container.prepend(display);

const title = document.createElement("h1");
title.textContent = "Virtual keyboard".toUpperCase();
title.classList.add("title");
container.prepend(title);

const changeLang = document.createElement("p");
changeLang.textContent = "To switch language: left ALT + left SHIFT";
changeLang.classList.add("changeLang");
container.append(changeLang);

const os = document.createElement("p");
os.textContent = "Keyboard created in windows operating system";
os.classList.add("os");
container.append(os);

// KEYBOARD - EN - numbers
let enNumbers = Object.keys(keysEn[0]);

// KEYBOARD - EN - numbers + SHIFT
let enNumbersShift = Object.values(keysEn[0]);

// KEYBOARD - EN - letters
let enLetters = Object.keys(keysEn[1]);

// KEYBOARD - EN - letters + SHIFT
let enLettersShift = Object.values(keysEn[1]);

// KEYBOARD - EN - symbols
let enSymbols = Object.keys(keysEn[2]);

// KEYBOARD - EN - symbols + SHIFT
let enSymbolsShift = Object.values(keysEn[2]);

// KEYBOARD - modifier
let modifier = Object.keys(keysEn[3]);

// KEYBOARD - arrows
let arrows = Object.keys(keysEn[4]);

// check LocalStorage
let lang;

if (localStorage.getItem("lang")) {
  lang = localStorage.getItem("lang");
  lang == "en" ? fillKeyboardEn() : (keyboard.textContent = "Ukraine");
} else {
  localStorage.setItem("lang", "en");
  fillKeyboardEn();
}

// FILL keyboard - EN
function fillKeyboardEn() {
  keyboard.innerHTML = "";
  for (let i = 0; i < keysEn.length; i++) {
    // add numbers to keyboard
    if (i == 0) {
      enNumbers.forEach((el) => {
        let key = document.createElement("div");
        key.classList.add("key");
        key.classList.add("key-number");
        key.setAttribute("data-key", `Digit${el}`);
        key.textContent = el;
        keyboard.append(key);
      });
    }
    // add letters to keyboard
    if (i == 1) {
      enLetters.forEach((el) => {
        let key = document.createElement("div");
        key.classList.add("key");
        key.classList.add("key-letter");
        key.setAttribute("data-key", `Key${el.toUpperCase()}`);
        key.textContent = el;
        keyboard.append(key);
      });
    }
    // add symbols to keyboard
    if (i == 2) {
      enSymbols.forEach((el) => {
        let key = document.createElement("div");
        key.classList.add("key");
        key.classList.add("key-symbol");
        key.textContent = el;
        keyboard.append(key);
        if (el == "`") key.classList.add("backquote");
        if (el == "-") key.classList.add("minus");
        if (el == "=") key.classList.add("equal");
        if (el == "[") key.classList.add("bracketLeft");
        if (el == "]") key.classList.add("bracketRight");
        if (el == "\\") key.classList.add("backslash");
        if (el == ";") key.classList.add("semicolon");
        if (el == "'") key.classList.add("quote");
        if (el == ",") key.classList.add("comma");
        if (el == ".") key.classList.add("period");
        if (el == "/") key.classList.add("slash");

        if (el == "`") key.setAttribute("data-key", "Backquote");
        if (el == "-") key.setAttribute("data-key", "Minus");
        if (el == "=") key.setAttribute("data-key", "Equal");
        if (el == "[") key.setAttribute("data-key", "BracketLeft");
        if (el == "]") key.setAttribute("data-key", "BracketRight");
        if (el == "\\") key.setAttribute("data-key", "Backslash");
        if (el == ";") key.setAttribute("data-key", "Semicolon");
        if (el == "'") key.setAttribute("data-key", "Quote");
        if (el == ",") key.setAttribute("data-key", "Comma");
        if (el == ".") key.setAttribute("data-key", "Period");
        if (el == "/") key.setAttribute("data-key", "Slash");
      });
    }
    // add modifier keys to keyboard
    if (i == 3) {
      modifier.forEach((el) => {
        let key = document.createElement("div");
        key.classList.add("key");
        key.classList.add("key-modifier");
        key.textContent = el;
        keyboard.append(key);
        if (el == "caps lock") key.classList.add("capsLock");
        if (el == "backspace") key.classList.add("backspace");
        if (el == "tab") key.classList.add("tab");
        if (el == "del") key.classList.add("del");
        if (el == "enter") key.classList.add("enter");
        if (el == "space") key.classList.add("space");
        if (el == "shiftLeft") key.classList.add("shiftLeft");
        if (el == "shiftRight") key.classList.add("shiftRight");
        if (el == "ctrlLeft") key.classList.add("ctrlLeft");
        if (el == "ctrlRight") key.classList.add("ctrlRight");
        if (el == "altLeft") key.classList.add("altLeft");
        if (el == "altRight") key.classList.add("altRight");

        if (el == "shiftLeft" || el == "shiftRight") key.textContent = "shift";
        if (el == "ctrlLeft" || el == "ctrlRight") key.textContent = "ctrl";
        if (el == "altLeft" || el == "altRight") key.textContent = "alt";

        if (el == "space") key.textContent = "";

        if (el == "caps lock") key.setAttribute("data-key", "CapsLock");
        if (el == "backspace") key.setAttribute("data-key", "Backspace");
        if (el == "tab") key.setAttribute("data-key", "Tab");
        if (el == "del") key.setAttribute("data-key", "Del");
        if (el == "enter") key.setAttribute("data-key", "Enter");
        if (el == "space") key.setAttribute("data-key", "Space");
        if (el == "shiftLeft") key.setAttribute("data-key", "ShiftLeft");
        if (el == "shiftRight") key.setAttribute("data-key", "ShiftRight");
        if (el == "ctrlLeft") key.setAttribute("data-key", "ControlLeft");
        if (el == "ctrlRight") key.setAttribute("data-key", "ControlRight");
        if (el == "altLeft") key.setAttribute("data-key", "AltLeft");
        if (el == "altRight") key.setAttribute("data-key", "AltRight");
      });
    }
    // add arrows
    if (i == 4) {
      arrows.forEach((el) => {
        let key = document.createElement("div");
        key.classList.add("key");
        key.classList.add("key-arrow");
        key.classList.add(`${el}`);
        keyboard.append(key);
        if (el == "arrowUp")
          key.innerHTML = `<i class='fa-solid fa-arrow-up'></i>`;
        if (el == "arrowLeft")
          key.innerHTML = `<i class='fa-solid fa-arrow-left'></i>`;
        if (el == "arrowDown")
          key.innerHTML = `<i class='fa-solid fa-arrow-down'></i>`;
        if (el == "arrowRight")
          key.innerHTML = `<i class='fa-solid fa-arrow-right'></i>`;

        if (el == "arrowUp") key.setAttribute("data-key", "ArrowUp");
        if (el == "arrowLeft") key.setAttribute("data-key", "ArrowLeft");
        if (el == "arrowDown") key.setAttribute("data-key", "ArrowDown");
        if (el == "arrowRight") key.setAttribute("data-key", "ArrowRight");
      });
    }
  }
}
// FILL keyboard - EN // the end


//
display.addEventListener("keydown", e => {

  let key = document.querySelector(`.key[data-key="${e.code}"]`);

  // numbers
  if (e.code.startsWith('Digit')) {
    // e.preventDefault();
    key.classList.add("key-number--active");
    setTimeout(() => key.classList.remove("key-number--active"), 200);
  }
  // letters
  else if (e.code.startsWith('Key')) {
    // e.preventDefault();
    key.classList.add("key-letter--active");
    setTimeout(() => key.classList.remove("key-letter--active"), 200);
  }
  // arrows
  else if (e.code.startsWith("Arrow")) {
    key.classList.add("key-arrow--active");
    setTimeout(() => key.classList.remove("key-arrow--active"), 200);
  }
  // modifier
  else if (modifier.includes(e.code)) {
    key.classList.add("key-modifier--active");
    setTimeout(() => key.classList.remove("key-modifier--active"), 200);
  }
  // symbols
  else {
    // e.preventDefault();
    key.classList.add("key-symbol--active");
    setTimeout(() => key.classList.remove("key-symbol--active"), 200);
  }
})