const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  document.getElementById("tempAuto").addEventListener("click", MakeDisabled);  
  document.getElementById("lightAuto").addEventListener("click", MakeDisabled2);
  document.getElementById("petAuto").addEventListener("click", MakeDisabled3);

  var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementsByName('blink');
    ele.forEach((item) => {item.style.visibility = (item.style.visibility == 'hidden' ? '' : 'hidden')});
}, blink_speed);



  function Activate(){
    var buttons = document.getElementsByName('movButtons');
    var icons= document.getElementsByName('errorIcon');
    if(document.getElementById("diactButton").innerHTML=="Activate"){
      document.getElementById("diactButton").innerHTML="Diactivate";
       buttons.forEach((item) => {item.disabled=false})
      }  
    else{
      document.getElementById("diactButton").innerHTML="Activate";
      buttons.forEach((item) => {item.disabled=true})
      icons.forEach((item) => {item.style.visibility='hidden'})
    }
  }
  

  function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('checkLight')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function onlyOne2(checkbox) {
  var checkboxes = document.getElementsByName('checkTemp')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
}


  function showImage(icon) {
    var img = document.getElementById(icon);
   if(img.style.visibility == 'visible'){
     img.style.visibility = 'hidden';
   }
   else{
    img.style.visibility = 'visible';
   }
  }

  

  function MakeDisabled(){
    if(this.checked){
      document.getElementById("tempTrigger").disabled= false;
      document.getElementById("fanOn").disabled = true;
    }
    else{
      document.getElementById("tempTrigger").disabled = true;
      document.getElementById("fanOn").disabled = false;
    }

  }

  function MakeDisabled2(){
    if(this.checked){
      document.getElementById("lightTrigger").disabled= false;
      document.getElementById("lightOnButton").disabled = true;
    }
    else{
      document.getElementById("lightTrigger").disabled = true;
      document.getElementById("lightOnButton").disabled = false;
    }

  }
  function MakeDisabled3(){
    var buttons = document.getElementsByName('petButton')
    if(this.checked){
      buttons.forEach((item) => {item.disabled=true})
    }
    else{
      buttons.forEach((item) => {item.disabled=false})
    }

  }

 



  