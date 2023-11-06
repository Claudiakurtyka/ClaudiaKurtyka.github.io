
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

let highlightBlocks = document.getElementsByClassName('highlight');
Array.prototype.forEach.call(highlightBlocks, addCopyButton);


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


  console.info("start")
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                $(".nav > li > a").removeClass("newClass");
                $(this).addClass("newClass");
                return false;
            }
        }
    });
    $(window).scroll(function(){
        $("section").each(function(){
            if(ScrollView($(this))){
                var id = $(this).attr("id");
                $("#menu li").removeClass("newClass");
                $("#menu     a[href='#" + id + "']  li ").addClass("newClass");
            }
        });
    });
    function ScrollView(element){
        var win = $(window);
        var winTop = win.scrollTop();
        var winBottom = winTop + win.height();
        var elementTop = element.offset().top;
        var elementBottom = elementTop + element.height();

        if((elementBottom <= winBottom) && (elementTop >= winTop)){
            return true;
        }
        return false;
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
  $("#popup").html('<section class="s:mt-10 backgroundD9" > <div class="closeIcon" onclick="closePassBox('+type+')"><i class="fa-solid fa-xmark fa-2xl" <i class="fa-solid fa-xmark fa-2xl" style="color: #0e1c34;"></i></i></div><div class="flex justify-center sm:flex-row "> <div class="h-screen text-center" id="passwordContent"> <img src="https://i.imgur.com/ALjuskk.png" > <h1 >Please enter password  <br> to view my portfolio</h1> <p>To View, Please enter the Password</p> <div class=" ssm:mt-10 mt-4 mb-8 " id="passwordSec"> <input type="password" id="pass" name="password" minlength="8" required  placeholder="Enter Password"> <button  type="button" onclick="enterPassword()">Let\'s go</button> </input> </div> </div> </div> </section>')
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

