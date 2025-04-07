
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
      
        document.body.style.paddingTop = '0';
      } 
  });
}); 


let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const name = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
submit.addEventListener
("click", function (e) {
  e.preventDefault();
  if (name.value == "" || email.value == "" || mobile.value == "" || message.value == "") {
    alert("Please fill all fields");
  } else {
    alert("Thankyou for your message");
    name.value = "";
email.value = "";
mobile.value = "";
message.value = "";
  }
});
// clear the form after submission

