//your JS code here. If required.
const btn = document.getElementById("submit");
    const checkbox = document.getElementById("checkbox");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const loginAgain = document.getElementById("existing");
    const form = document.querySelector("form");


    form.addEventListener('submit', (event) => {

      event.preventDefault();
      alert(`Logged in as ${username.value}`);

      if(checkbox.checked) {
        localStorage.setItem("username", `${username.value}`);
        localStorage.setItem("password", `${password.value}`);
        loginAgain.style.display = "block";
      }
      else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

    })


    if(localStorage.getItem("username") && localStorage.getItem("password")) {
      loginAgain.style.display = "block";
    }
    else {
      loginAgain.style.display = "none";
    }

    loginAgain.addEventListener('click', () => {
      const user = localStorage.getItem("username");
      alert(`Logged in as ${user}`);
    })