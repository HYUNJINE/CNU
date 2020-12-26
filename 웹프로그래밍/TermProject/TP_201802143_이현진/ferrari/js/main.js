var swiper = new Swiper('.swiper-container', {
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
});
//스위퍼를 만들고 페이지네이션관련 자바스크립트기능, 네비게이션 관련 자바스크립트기능등을 추가