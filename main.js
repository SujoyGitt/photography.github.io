
document.querySelector('.menubar').addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('active');
})
document.querySelector('.menucross').addEventListener('click',()=>{
    document.querySelector('.menu').classList.remove('active');
})
//Starting filter gallery//
let srtbtn = document.querySelector('.portfolio-menu').children;
let srtitm = document.querySelector('.portfolio-item').children;
for (let i = 0; i < srtbtn.length; i++) {
    srtbtn[i].addEventListener('click',function(){
        
    let target = this.getAttribute('data-filter');
      for (let k = 0; k < srtitm.length; k++) {
        srtitm[k].style.display= "none";
         if(target == srtitm[k].getAttribute('data-item')){
            srtitm[k].style.display= "block";
         }
         if(target == "all"){
            srtitm[k].style.display= "block";
         }
      }
    })   
}
//ending filter gallery//

window.addEventListener('scroll',function () {
  let l = window.scrollY;
let filterGallery =   document.querySelector('.filter-gallery');
  if (l > 160) {
    filterGallery.classList.add('filterGallery-active');
  }
else {
  filterGallery.classList.remove('filterGallery-active');
};
let one = document.querySelector('.portfolio-item .one');
  let two = document.querySelector('.portfolio-item .two');
  let three = document.querySelector('.portfolio-item .three');
  if (l > 300) {
    one.classList.add('item-one')
    two.classList.add('item-two')
    three.classList.add('item-three')
  }
  else{
    one.classList.remove('item-one')
    two.classList.remove('item-two')
    three.classList.remove('item-three')
  };
  let four = document.querySelector('.portfolio-item .four');
  let five = document.querySelector('.portfolio-item .five');
  let six = document.querySelector('.portfolio-item .six');
  if (l > 650) {
    four.classList.add('item-four')
    five.classList.add('item-five')
    six.classList.add('item-six')
  }
  else{
    four.classList.remove('item-four')
    five.classList.remove('item-five')
    six.classList.remove('item-six')
  };
  let seven = document.querySelector('.portfolio-item .seven');
  let eight = document.querySelector('.portfolio-item .eight');
  let nine = document.querySelector('.portfolio-item .nine');
  if (l > 1000) {
    seven.classList.add('item-seven')
    eight.classList.add('item-eight')
    nine.classList.add('item-nine')
  }
  else{
    seven.classList.remove('item-seven')
    eight.classList.remove('item-eight')
    nine.classList.remove('item-nine')
  };
  let memberInfo=document.querySelector('.member-info');
  if (l > 1500) {
memberInfo.classList.add('memberInfoadd');
  }
  else{
    memberInfo.classList.remove('memberInfoadd'); 
  };let memberCard=document.querySelector('.member-card');
  if (l>1800) {
     memberCard.classList.add('memberCardadd')
   } 
    else {
     memberCard.classList.remove('memberCardadd')
    };
    let Mimage=document.querySelector('.m-images');
  if (l>2100) {
     Mimage.classList.add('mimageAdd')
   } 
    else {
     Mimage.classList.remove('mimageAdd')
    };
    let firstChild=document.querySelector('.first-child');
 let Nnext=document.querySelector('.ntext');
  if (l>2700) {
   firstChild.classList.add('firstChildAdd')
   } 
    else {
     firstChild.classList.remove('firstChildAdd')   };
     if (l>2400) {
       Nnext.classList.add('Nnextadd');
     } 
     else {
       Nnext.classList.remove('Nnextadd');
     }
});