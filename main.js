let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }

    document.addEventListener('DOMContentLoaded', function() {
        const slider = document.querySelector('.slider');
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('start-animation');
                    observer.unobserve(entry.target); // Stop observing after the animation triggers
                }
            });
        }, {
            threshold: 0.5
        });
    
        observer.observe(slider);
    });
    

    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    let index = 0;

    // Clone the first card and append it to the end of the track
    const firstCardClone = cards[0].cloneNode(true);
    track.appendChild(firstCardClone);

    function moveSlider() {
        index++;
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(${-index * 100}%)`;

        // If we've reached the cloned card (which is index == totalCards), reset to the original first card
        if (index === totalCards) {
            setTimeout(() => {
                // track.style.transition = 'none';  // Disable transition
                track.style.transform = 'translateX(0)';  // Move back to the original first card
                index = 0;  // Reset index to the original first card
            }, 500);  // Match the duration of the transition
        }
    }

    setInterval(moveSlider, 5000); // Adjust the speed of the slider by changing the time (3000ms = 3 seconds)




   // Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the menu icon and navigation menu
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('.nav');

    // Add an event listener to the menu icon
    menuIcon.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation menu
        nav.classList.toggle('active');
    });
});


// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".nav");

// menuIcon.onclick =() => {
//     menuIcon.classList.toggle("fa-x");
//     navbar.classList.toggle('active');

// }



document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.closebtn');

    menuIcon.addEventListener('click', function () {
        sidebar.style.left = '0';
    });

    closeBtn.addEventListener('click', function () {
        sidebar.style.left = '-250px';
    });
});

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    Delay: 50
});

ScrollReveal().reveal('#headingh',{delay:100, origin:'top'});
ScrollReveal().reveal('.main',{delay:100, origin:'bottom'});
ScrollReveal().reveal('#visits',{delay:100, origin:'left'});

ScrollReveal().reveal('#meet',{delay:100, origin:'right'});
// ScrollReveal().reveal('.About p','.maintext','.header-content','.contentbox',{delay:500, origin:'bottom'});
// ScrollReveal().reveal('.ite','.contentbox','.meets',{delay:500, origin:'left'});
// ScrollReveal().reveal('.visits','.card-container','.join',{delay:500, origin:'right'});
 ScrollReveal().reveal('.group',{delay: 100, origin: 'center'});
 ScrollReveal().reveal('.guiding',{delay: 100, origin: 'grow'});
 ScrollReveal().reveal('.box',{delay: 100, origin: 'bottom'});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.externalHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.externalWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to trigger the animation
  
  document.addEventListener('DOMContentLoaded', function() {
    const recruits = document.querySelectorAll('.recruit');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('start-animation');
                observer.unobserve(entry.target); // Stop observing after the animation triggers
            }
        });
    }, {
        threshold: 0.5
    });

    recruits.forEach(recruit => {
        observer.observe(recruit);
    });
});


  