window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      document.getElementById("nav").style.boxShadow =
        "inset 0px 50px 35px -12px rgba(192, 192, 218,1)";
    } else {
      document.getElementById("nav").style.boxShadow = "none";
    }
  }
  // Get carousel elements


  $(document).ready(function () {
    $(".modal-overlay").delay(3000).fadeIn(500);
  });
  const close = document.querySelector(".close");
  close.addEventListener("click", function () {
    $(".modal-overlay").fadeOut(500);
  });
const textClose = document.querySelector(".text-close");
textClose.addEventListener("click", function(){
    $(".modal-overlay").fadeOut(500);
})

//EMAIL VERIFICATION!!!!
//gives me an error even when email format is correcr
const emailInput = document.querySelector("#email-input");
const errorText = document.createElement("span");
errorText.classList.add( "errorText");
emailInput.parentNode.insertBefore(errorText, emailInput.nextElementSibling);




/*function emailValidation(event){
  event.stopImmediatePropagation();

if(input.match(pattern)){
  console.log("hey");
form.classList.add("valid");
errorText.innerHTML = "Your subscription is confirmed";
submitBtn.style.visibility = "visible";


   }
   else{
    errorText.innerHTML = "please enter valid email address";
    errorText.classList.add("errorText")
    submitBtn.style.visibility = "hidden";
   }
   input.addEventListener("onkeydown", emailValidation);
   submitBtn.addEventListener("submit", emailValidation);
}
*/








const form = document.querySelector(".email");
  const input = document.querySelector("#email-input").value;
   //const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   const submitBtn = document.querySelector(".emailBtn");

   /*form.addEventListener("submit", emailValidation);
   submitBtn.addEventListener("click", emailValidation);
   console.log(input);

   function emailValidation(e){
     e.preventDefault();

     if(input.match(pattern)){
      errorText.innerHTML = "Your subscription is confirmed";
      console.log("confirmed");
     }
  else{
    errorText.innerHTML = "Please enter valid email";
    console.log(" not confirmed");
  }
   }
*/





$(document).ready(function validation(){
  $(".email").on('submit', function(e){
    e.preventDefault();
      var email = $('#email-input').val();
      var pat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(pat)){
       
        
        errorText.innerHTML = "Your subscription is confirmed";
        errorText.style.color = "#1b2121;";
   
        
    
        return false;
      } else {
        errorText.innerHTML = "Please enter valid email";
        errorText.style.color = "#1b2121;";
        return false;
      }
     
  });
  
  $(form).submit(function(){
    setTimeout(function(){
      form.reset();
      submitBtn.style.visibility = "hidden";
      errorText.innerHTML ="";
      
    }, 4000);
});
  emailInput.addEventListener("focus", function(){
    submitBtn.style.visibility = "visible";
  });
  submitBtn.addEventListener("submit", validation);





});



/*const footerBtn = document.querySelector(".footer-close");
    footerBtn.addEventListener("click", function(){
        $(".fixed-bottom").fadeOut(500);
        $(errorText).delay(1000).fadeOut(500);
        setTimeout(function(){
           form.reset();
        }, 1000);
    })
 */


     //instagram feed
var userFeed = new Instafeed({
  get: 'user',
  target: "instafeed-container",
  resolution: 'standard_resolution',
  limit:8,
  accessToken: 'IGQVJVd1R2bmxpNTlldTJIQ0xkQy1xb2tmZA1FSa2thSFNpeXctWm1ZAVUJ3dzJiRlpfNlZAycjFPWHI2dXJiWHNuUHZAtbjdrWnlrVlkwc0czbHZASVElMeFNiaVFUbmRXc1VuRkxxZAVlib01iMERhWVRWMgZDZD'
});
userFeed.run();

gsap.registerPlugin(ScrollTrigger);



/*gsap.from(".center",{
scrollTrigger:{
  trigger:".center",
  start:"+=10 center",
  end: '+=100',
  toggleActions:"play pause resume complete",
scale:1.08
},
y:50,
scale:1,
duration:1,

ease: "none"
});

*/
gsap.from(".video-container",{
  scrollTrigger:{
    trigger:".video-container",
    pin: ".video-container",
    toggleActions:"play reverse resume complete",
    start:"center center",
    
    scrub:true,
    opacity:1,
    scale:6,
    pin:".video-container",
    pinSpacing:true
  },
  opacity:.5,
  scale:.6,
  duration:5,
  delay:.5,
  ease:"slow"
  })


gsap.from(".title", {
duration:1,
  y: -100, 
  delay:0.8,
  ease:"slow",
  opacity: 1,
    opacity:0,
 duration:.8
  

});

gsap.from(".products-grid img",{
  scrollTrigger:{
    trigger:".products-grid img ",
    toggleActions:"play reverse resume complete",
    start:"top center",
    end: '+=200',
    scrub:true,
    pin:".products-grid",
 
    pinSpacing:false,
    opacity:1,
   scale:1.08,

    
},
y:100,
  scale: 0.7,
  duration:6,
  delay:0.5,
  ease:"slow"
 
})

gsap.from("#instafeed-container",{
  scrollTrigger:{
trigger:".insta-heading",
toggleActions:"play reverse resume complete",
start:"top center",
   
    scrub:true,
   scale:1,
   opacity:1,
   scale:1,  
   pin:"#instafeed-container a img",
      pinSpacing: true,
  
  },
  scale:0,
delay:1,
duration:3,
})