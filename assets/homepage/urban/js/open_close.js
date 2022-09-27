(function () {
  // 모달창 열고 닫기
  const x_button = document.querySelectorAll('.x_button');
  const element = document.querySelector('.side_contents');
  const x_button_m = document.querySelectorAll('.x_button_m');
  const side_img = document.querySelectorAll('.side_img');
  let i;

  function side_button_click(event) {
    element.classList.toggle('opened');
    element.classList.toggle('clicked');
  }
  function x_button_click(event) {
    element.classList.remove('opened');
    element.classList.remove('clicked');
    element.classList.add('click_x');
    setTimeout(function () {
      element.classList.remove('click_x');
    }, 1000);
  }
  side_img.forEach((e) => {
    e.addEventListener('click', side_button_click);
    e.addEventListener('touchstart', side_button_click);
  });
  x_button.forEach((e) => {
    e.addEventListener('click', x_button_click);
  });
  x_button_m.forEach((e) => {
    e.addEventListener('click', x_button_click);
  });

  function side_close(e) {
    const choose = e.target;
    const mama = choose.parentElement.parentElement;
    const me = choose.parentElement;
    if (mama.className !== 'side_contents' && me.className !== 'side_img') {
      console.log(choose.children);
      console.log(choose);
      element.classList.remove('opened');
      element.classList.remove('clicked');
    }
  }
  // window.addEventListener('click', side_close);
  // 햄버거 메뉴누르면 메뉴가 나옴
  const hamberger = document.querySelector('.hamberger i');
  const menu = document.querySelector('.header ul');
  const header_wrap = document.querySelector('.header_wrap');
  const header_wrap_ul = document.querySelector('.header_wrap ul');
  function openMenu() {
    menu.classList.toggle('clicked');
  }

  function closeMenu(e) {
    const elems = e.target;
    if (
      elems !== hamberger &&
      elems !== header_wrap &&
      elems !== header_wrap_ul
    ) {
      // 부드럽게 사라지기
      menu.style.transition = 'all 0.4s';
      menu.classList.remove('clicked');
    }
  }
  hamberger.addEventListener('click', openMenu);
  window.addEventListener('click', closeMenu);
})();
