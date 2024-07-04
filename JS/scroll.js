



window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
    });
});





const men = document.getElementById("menubtn")
const secondMen = document.getElementById("menusec");
const spanA = document.getElementById("spA");
const spanB = document.getElementById("spB");
const page = document.getElementById("homePage");
const otherHome = document.querySelector(".home-bc");
const landing = document.querySelector(".landing");
const btn = document.getElementById("btn");




window.onscroll = function() {
    if (scrollY >= 1200) {
        btn.style.display= "flex";
    } else {
        btn.style.display= "none";
    }
}

btn.onclick = function() {
    scroll({
        top:0,
        behavior: "smooth"
    })
}


const int = document.getElementById("int")
var test = document.querySelector(".landing");

page.onclick = function() {
    otherHome.classList.toggle("hide");
}


if (men) {
    men.addEventListener('click' , function() {
        secondMen.classList.toggle("hide");
})    

    men.onclick = function() {
        spanA.classList.toggle("transA");
        spanB.classList.toggle("transB");
    }
}















window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Adjust as needed
        
        if (boxPosition < screenPosition) {
            box.classList.add('fade-in');
        } else {
            box.classList.remove('fade-in');
        }
    });
});



window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.classes .container .box');
    const screenPosition = window.innerHeight / 1.3; // Adjust as needed
    
    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        
        if (boxPosition < screenPosition) {
            box.classList.add('scroll-animation');
        } else {
            box.classList.remove('scroll-animation');
        }
    });
});







document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.animate-on-scroll');
  
    function checkViewport() {
      for (var i = 0; i < elements.length; i++) {
        var position = elements[i].getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (position < windowHeight * 0.75) {
        elements[i].classList.add('active');
        }
    }
    }

    window.addEventListener('scroll', function() {
    checkViewport();
    });

    // Initial check when the page loads
    checkViewport();
});















// start change





document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('.custom-animate');

  function checkInView() {
      elements.forEach(function(element) {
          var bounding = element.getBoundingClientRect();
          if (
              bounding.top >= 0 &&
              bounding.left >= 0 &&
              bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
              bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          ) {
              element.classList.add('active');
          } else {
              element.classList.remove('active');
          }
      });
  }

  checkInView();

  window.addEventListener('scroll', function() {
      checkInView();
  });
});






// footer


document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('.animate-move');

  function checkInView() {
      elements.forEach(function(element) {
          var bounding = element.getBoundingClientRect();
          if (
              bounding.top >= 0 &&
              bounding.left >= 0 &&
              bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
              bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          ) {
              element.classList.add('active');
          } else {
              element.classList.remove('active');
          }
      });
  }

  function scrollAnimationLoop() {
      checkInView();
      requestAnimationFrame(scrollAnimationLoop);
  }

  scrollAnimationLoop();
});



// cursor

const cursorIn = document.querySelector("[data-cursor-in]");
const cursorRadius = document.querySelector("[data-cursor-radius]");


window.addEventListener("mousemove" , function(e) {
    
    const posX = e.clientX;
    const posY = e.clientY;

    cursorIn.style.left = `${posX}px`;
    cursorIn.style.top = `${posY}px`;


    cursorRadius.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards"});

});




