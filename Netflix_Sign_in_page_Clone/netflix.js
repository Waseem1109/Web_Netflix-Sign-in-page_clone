let In = document.getElementById("INPU");
let Pwd = document.getElementById("PW");
let Out = document.getElementById("background");
let Out1 = document.getElementById("LOGIN34");
In.addEventListener("click", INPUTACTION);
Pwd.addEventListener("click", addPwd);
Out.addEventListener("click", OUTPUTACTION);
Out1.addEventListener("click", OUTPUTACTION);
function INPUTACTION(e) {
  console.log(e.currentTarget);
  if (In.children.length == 1) {
    let input = document.createElement("input");
    In.style.backgroundColor = "rgb(73,73,73)";
    input.style.backgroundColor = "rgb(73,73,73)";
    input.type = "email";
    input.id = "EMAIL_1";
    input.className = "pBOX";
    In.children[0].style.fontSize = "11px";
    In.children[0].style.padding = "7px 0px 4px 3px";
    In.children[0].style.transition = "fontSize 0.1s, padding 0.1s";
    In.append(input);
  } else {
    In.style.backgroundColor = "rgb(73,73,73)";
    In.children[1].style.backgroundColor = "rgb(73,73,73)";
  }
  if (Pwd.children.length == 3) {
    Pwd.style.backgroundColor = "rgb(53,53,53)";
    Pwd.children[1].style.backgroundColor = "rgb(53,53,53)";
    Pwd.children[2].remove();
    if (Pwd.children[1].value == "") {
      Pwd.style.backgroundColor = "rgb(53,53,53)";
      Pwd.children[0].style.fontSize = "16px";
      Pwd.children[0].style.padding = "16px 0px 4px 3px";
      Pwd.children[0].style.transition = "fontSize 0.1s,padding 0.1s";
      Pwd.children[1].remove();
      Pwd.children[1].remove();
    }
  }
}
function OUTPUTACTION(e) {
  console.log(e.currentTarget);
  if (In.children.length == 2) {
    if (In.children[1].value == "") {
      In.style.backgroundColor = "rgb(53,53,53)";
      In.children[0].style.fontSize = "16px";
      In.children[0].style.padding = "16px 0px 4px 3px";
      In.children[0].style.transition = "fontSize 0.1s,padding 0.1s";
      In.children[1].remove();
    } else {
      In.style.backgroundColor = "rgb(53,53,53)";
      In.children[1].style.backgroundColor = "rgb(53,53,53)";
    }
  }
  if (Pwd.children.length == 3) {
    if (Pwd.children[1].value == "") {
      Pwd.style.backgroundColor = "rgb(53,53,53)";
      Pwd.children[0].style.fontSize = "16px";
      Pwd.children[0].style.padding = "16px 0px 4px 3px";
      Pwd.children[0].style.transition = "fontSize 0.1s,padding 0.1s";
      Pwd.children[1].remove();
      Pwd.children[1].remove();
    } else {
      Pwd.style.backgroundColor = "rgb(53,53,53)";
      Pwd.children[1].style.backgroundColor = "rgb(53,53,53)";
      Pwd.children[2].remove();
    }
  }
}
function addPwd(e) {
  console.log(e.currentTarget);
  if (Pwd.children.length == 1) {
    let input = document.createElement("input");
    let BTN = document.createElement("button");
    BTN.className = "pBOX BTUUN";
    BTN.textContent = "SHOW";
    BTN.onclick = function () {
      HIDE_SHOW(this);
    };
    Pwd.style.backgroundColor = "rgb(73,73,73)";
    input.style.backgroundColor = "rgb(73,73,73)";
    input.type = "password";
    input.id = "PWD_1";
    input.className = "pBOX";
    Pwd.children[0].style.fontSize = "11px";
    Pwd.children[0].style.padding = "7px 0px 4px 3px";
    Pwd.children[0].style.transition = "fontSize 0.1s, padding 0.1s";
    Pwd.append(input);
    Pwd.append(BTN);
  } else if (Pwd.children.length == 2) {
    Pwd.style.backgroundColor = "rgb(73,73,73)";
    Pwd.children[1].style.backgroundColor = "rgb(73,73,73)";
    let BTN = document.createElement("button");
    BTN.className = "pBOX BTUUN";
    BTN.textContent = "SHOW";
    BTN.onclick = function () {
      HIDE_SHOW();
    };
    Pwd.append(BTN);
  } else {
    Pwd.style.backgroundColor = "rgb(73,73,73)";
    Pwd.children[1].style.backgroundColor = "rgb(73,73,73)";
  }
  if (In.children.length == 2) {
    In.style.backgroundColor = "rgb(53,53,53)";
    In.children[1].style.backgroundColor = "rgb(53,53,53)";
    if (In.children[1].value == "") {
      In.style.backgroundColor = "rgb(53,53,53)";
      In.children[0].style.fontSize = "16px";
      In.children[0].style.padding = "16px 0px 4px 3px";
      In.children[0].style.transition = "fontSize 0.1s,padding 0.1s";
      In.children[1].remove();
    }
  }
}
function HIDE_SHOW() {
  if (Pwd.children[2].textContent == "SHOW") {
    Pwd.children[1].type = "text";
    Pwd.children[2].textContent = "HIDE";
  }
  else{
    Pwd.children[1].type = "password";
    Pwd.children[2].textContent = "SHOW";
  }
}
