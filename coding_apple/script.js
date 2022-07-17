var shirts = [100, 105];
var pants = [28, 30, 32];
var socks = ['빨강', '노랑', '파랑'];
var hat = [];
var itemList = { 셔츠: shirts, 바지: pants, 양말: socks, 모자: hat };
let $formSelect = document.querySelector('.form-select');
let $formSelectDetail = document.querySelectorAll('.form-select')[1];
resetOptionList($formSelectDetail, 'form-hide');
addOptionList($formSelect, Object.keys(itemList));
addOptionList($formSelectDetail, itemList['셔츠']);
// $formSelect.addEventListener('input', function () {
//   if ($formSelect.value == '셔츠') {
//     resetOptionList($formSelectDetail, 'form-hide');
//     addOptionList(shirts);
//   } else if ($formSelect.value == '바지') {
//     resetOptionList($formSelectDetail, 'form-hide');
//     addOptionList(pants);
//   } else if ($formSelect.value == '양말') {
//     resetOptionList($formSelectDetail, 'form-hide');
//     let optionListText;
//     socks.forEach((e) => {
//       optionListText += `<option>${e}</option>`;
//     });
//     $formSelectDetail.insertAdjacentHTML('beforeend', optionListText);
//   } else {
//     $formSelectDetail.classList.add('form-hide');
//   }
// });

$formSelect.addEventListener('input', function () {
  resetOptionList($formSelectDetail, 'form-hide');
  if (itemList[$formSelect.value].length) {
    addOptionList($formSelectDetail, itemList[$formSelect.value]);
  } else {
    $formSelectDetail.classList.add('form-hide');
  }
});
function resetOptionList(dom, removeClassNm) {
  dom.classList.remove(removeClassNm);
  dom.length = 0;
}
function addOptionList(dom, arr) {
  arr.forEach((e) => {
    let option = document.createElement('option');
    option.innerText = e;
    dom.append(option);
  });
}
