/* Theme Name: kasy  - Responsive landing template
   Author: Appspery
   File Description: Main JS file of the template
*/


/************** Menu Js**************/

function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})


/************** Contact Form Js**************/

function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var comments = document.forms["myForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById('error-msg').innerHTML = "";
    if (name == "" || name == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error-msg'>لطفاً یک نام وارد کنید*</div>";
      fadeIn();
      return false;
  }
  if (email == "" || email == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error-msg'>لطفاً یک ایمیل وارد کنید*</div>";
      fadeIn();
      return false;
  }
  if (subject == "" || subject == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error-msg'>لطفاً موضوع پیام خود را وارد کنید*</div>";
      fadeIn();
      return false;
  }
  if (comments == "" || comments == null) {
      document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error-msg'>لطفاً متن پیام خود را وارد کنید*</div>";
      fadeIn();
      return false;
  }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("simple-msg").innerHTML = this.responseText;
            document.forms["myForm"]["name"].value = "";
            document.forms["myForm"]["email"].value = "";
            document.forms["myForm"]["subject"].value = "";
            document.forms["myForm"]["comments"].value = "";
        }
    };
    xhttp.open("POST", "php/contact.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name=" + name + "&email=" + email + "&subject=" + subject + "&comments=" + comments);
    return false;
}

function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}

//
/********************* scroll top js ************************/
//

var mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Collapse Menu 
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarCollapse');
let bsCollapse = '';
window.addEventListener('load', function () {
  window.dispatchEvent(new Event('resize'));
});
window.addEventListener('resize', function () {
  var windowSize = document.documentElement.clientWidth;
  bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
  if (windowSize < 980) {
    navLinks.forEach((l) => {
      l.addEventListener('click', () => { toggleMenu(); });
    });
  } else {
    toggleMenu();
  }
});

function toggleMenu() {
  var windowSize = document.documentElement.clientWidth;
  if (windowSize < 980) {
    bsCollapse.toggle();
  } else {
    bsCollapse = '';
  }
}