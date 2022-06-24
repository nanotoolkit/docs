//--------------------------------------
//  Scroll-To-Top Button
//--------------------------------------
// Movement
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Visibility
function toggleScrollUpButton() {
  let y = window.scrollY;
  let e = document.getElementById("scroll-to-top");
  if (y >= 200) {
    e.style.transform = "translateY(-30%)";
    e.style.opacity = 1;
  } else {
    e.style.opacity = 0;
    e.style.transform = "translateY(30%)";
  }
}

// Event Listener - Attach to DOM
window.addEventListener("scroll", toggleScrollUpButton);

let e = document.getElementById("scroll-to-top");
e.addEventListener("click", scrollToTop, false);
