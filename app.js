

const toggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

toggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('visible');
});

const cancel = document.getElementById('cancel');
cancel.addEventListener('click', function() {
    mobileMenu.classList.remove('visible'); // Hide the menu
});

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.25,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swip = new Swiper(".mySwip", {
    effect: "cards",
    grabCursor: true,
  });

gsap.from("#welcome-text",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 50%",
        end:"top 5%",
        scrub:true
    }
})

gsap.from("#v2v",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".sponsors",
        scroller:"body",
        start:"top 50%",
        end:"top 5%",
        scrub:true
    }
})

// gsap.from("#det",{
//     x:100,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#details",
//         scroller:"body",
//         start:"top 30%",
//         end:"top 5%",
//         scrub:true
//     }
// })

gsap.from("#tm ,#det",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#details",
        scroller:"body",
        start:"top 50%",
        end:"top 5%",
        scrub:true
    }
})

gsap.from("#eventsm .swiper-slide",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#eventsm",
        scroller:"body",
        start:"top 60%",
        end:"top 5%",
        scrub:true
    }
})

gsap.from("#eventsma .swiper-slide",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#eventsma",
        scroller:"body",
        start:"top 60%",
        end:"top 5%",
        scrub:true
    }
})

gsap.from("#pinc",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".sponsors",
        scroller:"body",
        start:"top 50%",
        end:"top 5%",
        scrub:true
    }
})

gsap.from("#loc iframe",{
    z:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#contactus",
        scroller:"body",
        start:"top 40%",
        end:"top 5%",
        scrub:true
    }
})


  // Set the event date and time (YYYY-MM-DDTHH:MM:SS format)
  const eventDate = new Date('2024-10-22T10:00:00').getTime();

  // Update the countdown every second
  const countdownFunction = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the distance between now and the event date
    const distance = eventDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML with the calculated values
    document.querySelector('.countdown-element.days').innerText = days;
    document.querySelector('.countdown-element.hours').innerText = hours;
    document.querySelector('.countdown-element.minutes').innerText = minutes;
    document.querySelector('.countdown-element.seconds').innerText = seconds;

    // If the countdown is over, stop the timer and show "EXPIRED" or any message
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.querySelector('.countdown-element.days').innerText = "0";
      document.querySelector('.countdown-element.hours').innerText = "0";
      document.querySelector('.countdown-element.minutes').innerText = "0";
      document.querySelector('.countdown-element.seconds').innerText = "0";
      // You can also display a message like "Event Started" here
    }
  }, 1000);
