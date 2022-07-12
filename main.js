
//-----------------------------------------------------------
/*Adding mobile button show/hide depending on screen size*/
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
// Add Event Listeners
btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
});

//----------------------------------------------------------
/*Adding explination of each word used in sections*/
//About section [expl1_h1, expl1]
const expl1_h1 = document.querySelector(".expl1_h1");
const expl1 = document.querySelector(".expl1");
expl1_h1.addEventListener("mouseover", () => {
  expl1.classList.toggle("hidden");
});
expl1_h1.addEventListener("mouseout", () => {
  expl1.classList.toggle("hidden");
});
//Knowledge section [expl2_h1, expl2]
const expl2_h1 = document.querySelector(".expl2_h1");
const expl2 = document.querySelector(".expl2");
expl2_h1.addEventListener("mouseover", () => {
  expl2.classList.toggle("hidden");
});
expl2_h1.addEventListener("mouseout", () => {
  expl2.classList.toggle("hidden");
});

//--------------------------------------
/*Adding navbar to show on scroll up*/
// Callback for IntersectionObserver
const callback = function (entries) {
    entries.forEach((entry) => {
    //console.log(entry);
    // Is the element in the viewport?
    if (entry.isIntersecting) {
        // Add the fadeIn class:
        entry.target.classList.add("animate-fadeIn1");
    } else {
        // Otherwise remove the fadein class
        entry.target.classList.remove("animate-fadeIn1");
    }
    });
};
// Set up a new observer
const observer = new IntersectionObserver(callback);
// Get all the elements you want to show on scroll
const targets = document.querySelectorAll(".js-show-on-scroll");
// Loop through each of the target
targets.forEach(function (target) {
    //Hide the element
    target.classList.add("opacity-0");
    // Add the element to the watcher
    observer.observe(target);
});


//--------------------------------------
/*Change background color on scroll*/
$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)bg-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('bg-' + $(this).data('color'));
    }
  });    
  
}).scroll();

//-----------------------------------------------------


