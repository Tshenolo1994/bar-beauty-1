
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

gsap.registerPlugin(ScrollTrigger);

gsap.from(".text", {
scrollTrigger:{
  trigger:".text",
  toggleActions:"play reverse resume complete",
 
  start:"+=70 center",
  end: '+=200',
  scrub:true,
  opacity:1,

  
},
opacity:.2,
duration:1.3,
delay:.5,
ease:"Cubic.easeOut"
  
  });

 gsap.from(".jumbotron .p", {
    scrollTrigger:{
      trigger:".jumbotron .p",
      toggleActions:"play reverse resume complete",
     
      start:"top center",
 
      scrub:true,
      opacity:1,
      pin:".jumbotron .p",
      pinSpacing: true,
    },
    y:100,
 opacity:0,
    duration:1,
   
    ease:"Cubic.easeOut"
      
      });
      
      gsap.from(".video-container",{
        scrollTrigger:{
          trigger:".video-container",
          pin: ".video-container",
          toggleActions:"play reverse resume complete",
          start:"+=100 center",
          
          scrub:true,
          opacity:1,
          scale:6,
          pin:".video-container",
          pinSpacing:"true"
        },
        opacity:.5,
        scale:.6,
        duration:6,
        delay:.5,
        ease:"slow"
        })
        
        gsap.from(".images h3, .images img", {
          scrollTrigger:{
            trigger:".images",
            toggleActions:"play reverse resume complete",
           
            start:"-=20 center",
       
            scrub:true,
            opacity:1,
        
          },
          x:-100,
       opacity:0,
          duration:2,
        stagger:2,
          ease:"Cubic.easeOut"
            
            });