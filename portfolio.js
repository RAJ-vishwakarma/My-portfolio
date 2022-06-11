$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    var amount = -160+(scroll*0.8);
    if (amount < 10)
    {
      $('.letter').css({left:amount+"px"});
    }
  });

  $(document).scroll(function(){
    var scroll = $(window).scrollTop();
    var amount = -160+(scroll*0.8);
    if (amount < 10)
    {
      $('.letter2').css({left:amount+"px"});
    }
  });

function openPopup(){
  let popUp=document.getElementById('popup')
  popUp.style.display= 'block';

  
}

function closePopup(){
  let popUp=document.getElementById('popup')
  popUp.style.display= 'none';
}


function collectFormData(){
var name= document.getElementById('name')
console.log("name")

}
