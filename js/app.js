window.addEventListener('scroll', function() {
  if (scrollY  > 100) {
    document.querySelector('.container-header').classList.add('scroll_active')
  } else {
    document.querySelector('.container-header').classList.remove('scroll_active')
  }
})


// const myModal = new HystModal({
//   linkAttributeName: "data-hystmodal",
//   // настройки (не обязательно), см. API
// });


document.addEventListener('DOMContentLoaded', () => {
   let callBackButton = document.getElementById('callback-button');
   let modal1 = document.getElementById('modal-1');
   let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
 
  callBackButton.onclick = function () {
    modal1.classList.add('modal_active');
  }
 
  closeButton.onclick = function () {
    modal1.classList.remove('modal_active');
  }

  modal1.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal1.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
    }
  };
});