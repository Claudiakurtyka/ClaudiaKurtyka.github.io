
(function() {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

let copyBTN = select('pre > code')

if(copyBTN){
  function flashCopyMessage(el, msg) {
    el.textContent = msg;
    setTimeout(() => {
      el.textContent = "Copy";
    }, 1000);
  }

  function selectText(node) {
    let selection = window.getSelection();
    let range = document.createRange();
    if (node.childElementCount === 2) {
      // Skip the title.
      range.selectNodeContents(node.children[1]);
    } else {
      range.selectNodeContents(node);
    }
    selection.removeAllRanges();
    selection.addRange(range);
    return selection;
  }

  function addCopyButton(containerEl) {
    let copyBtn = document.createElement("button");
    copyBtn.className = "highlight-copy-btn";
    copyBtn.textContent = "Copy";

    let codeEl = containerEl.firstElementChild;
    copyBtn.addEventListener('click', () => {
      try {
        let selection = selectText(codeEl);
        document.execCommand('copy');
        selection.removeAllRanges();

        flashCopyMessage(copyBtn, 'Copied!')
      } catch(e) {
        console && console.log(e);
      flashCopyMessage(copyBtn, 'Failed :\'(')
    }
  });

  containerEl.appendChild(copyBtn);
}

// Add copy button to code blocks
let highlightBlocks = document.getElementsByClassName('highlight');
Array.prototype.forEach.call(highlightBlocks, addCopyButton);


}





  let particles = select('#particles-js')
  if(particles){
    particlesJS("", {
      "particles": {
        "number": {
          "value": 90,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.2
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 0.2,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }



        // Define selector for selecting
      // anchor links with the hash
      let anchorSelector = 'a[href^="#"]';
      $(anchorSelector).on("click", function (e) {
        // Prevent scrolling if the
        // hash value is blank
        e.preventDefault();

        // Get the destination to scroll to
        // using the hash property
        let destination = $(this.hash);

        // Get the position of the destination
        // using the coordinates returned by
        // offset() method and subtracting 50px
        // from it.
        let scrollPosition = destination.offset().top - 88;

        // Specify animation duration
        let animationDuration = 500;

        // Animate the html/body with
        // the scrollTop() method
        $("html, body").animate(
          {
            scrollTop: scrollPosition,
          },
          animationDuration
        );
      });
  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
 
  const jsyear = select('#js-year')
  if(jsyear){
    const date = new Date()
    $("#js-year").html(date.getFullYear())
  }
 
 
 

  Fancybox.bind('[data-fancybox="gallery"]', {
    //
  }); 
  
  const scrollToTopBtn = select('.scrollToTopBtn')
  const top = select('#top-nav')
  if(scrollToTopBtn){
    var rootElement = document.documentElement;
    handleScroll()
  }

  function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.1) {
      scrollToTopBtn.classList.add("showBtn");
      top.classList.add( "menu-shrink");
    } else {
      scrollToTopBtn.classList.remove("showBtn");
      top.classList.remove("menu-shrink");
    }
  }
  

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);

  
  document.addEventListener("scroll", handleScroll);
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
})()
listenerUrl()
const pass = "123"
var PageUrl = ""


function listenerUrl(){
  var verifyUrl =  window.location.href
  var myCookieValue = $.cookie("myPasswordToRead")
  if(myCookieValue){
    return
  }
  verifyUrlList = verifyUrl.split('/')
  for(let i = 0;i <verifyUrlList.length;i++){
    console.info(verifyUrlList[i] )
    if(verifyUrlList[i] == "posts" ){
      if(i === verifyUrlList.length - 2){
        break
      }
      this.PageUrl = verifyUrl
      verifyPass(verifyUrl,2)
      break
    }
  }
}  


function enterPassword(){
  var userInputPass = $("#pass").val()
  if (userInputPass != null) {
    if(userInputPass === pass){
      $.cookie("myPasswordToRead",userInputPass, { expires: 7, path: "/" });
    
      setTimeout(() => {
        window.location.replace(PageUrl);
        $("#popup").removeClass("z-index-9999");
        $("#normal").removeClass("display-none");
        $("body").removeClass("backgroundD9");
      }, "1000");
    }else{
      // wrong pass
      $("#passwordSec").addClass("shakePass",1000)
      setTimeout(() => {
      $("#passwordSec").removeClass("shakePass",1000)
       
      }, "500");
    }
  }
}

function verifyPass(url,type){
  PageUrl = url
  var myCookieValue = $.cookie("myPasswordToRead")
  if(myCookieValue){
    window.location.replace(PageUrl);
    return
  }
  $("body").addClass("backgroundD9");
  $("#normal").addClass("display-none");
  $("#popup").addClass("z-index-9999");
  $("#popup").html('<section class="s:mt-10 backgroundD9" > <div class="closeIcon" onclick="closePassBox('+type+')"><i class="fa-solid fa-xmark fa-2xl" <i class="fa-solid fa-xmark fa-2xl" style="color: #0e1c34;"></i></i></div><div class="flex justify-center sm:flex-row "> <div class="h-screen text-center" id="passwordContent"> <img src="https://i.328888.xyz/2023/03/20/P9ilt.png" > <h1 >Please enter password  <br> to view my portfolio</h1> <p>To View, Please enter the Password</p> <div class=" ssm:mt-10 mt-4 mb-8 " id="passwordSec"> <input type="password" id="pass" name="password" minlength="8" required  placeholder="Enter Password"> <button  type="button" onclick="enterPassword()">Let\'s go</button> </input> </div> </div> </div> </section>')
}
function closePassBox(type){
  $("body").removeClass("backgroundD9");
  $("#popup").removeClass("z-index-9999");
  $("#normal").removeClass("display-none");
  $("#popup").html("");
  if(type === 2){
    window.location.replace("/posts");
  }
 
}
