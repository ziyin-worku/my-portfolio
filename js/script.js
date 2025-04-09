var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function () {
  var sidemenu = document.getElementById("sidemenu");

  function openmenu() {
    sidemenu.style.right = "0";
  }

  function closemenu() {
    sidemenu.style.right = "-200px";
  }

  // Assigning functions globally so they can be called from inline HTML
  window.openmenu = openmenu;
  window.closemenu = closemenu;
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw-ZTiSmwMfvFe3l4X2rU6PCXd__NtaV7wdJoJAx_IN6YjasIO2Vd42ri7tESSaW9E2/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// -----------**************-------------


