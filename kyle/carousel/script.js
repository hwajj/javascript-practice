const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    //클릭한것의 가장 가까운 dataCarousel을 선택하도록하여
    //페이지 내에 carousel이 많아도 정확히 그 carousel만 반응할수있도록 함
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]');
    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    //0번째 prev > 맨 마지막 슬라이드 보여주기
    if (newIndex < 0) newIndex = slides.children.length - 1;

    //마지막 next > 0번째 슬라이드 보여주기
    if (newIndex >= slides.children.length) newIndex = 0;

    //newIndex active로 하고 기존 active 제거하기
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
