var shirts = [100, 105];
var pants = [28, 30, 32];
var socks = ['빨강', '노랑', '파랑'];
var hat = [];
var itemList = { 셔츠: shirts, 바지: pants, 양말: socks, 모자: hat };
let $formSelect = document.querySelector('.form-select');
let $formSelectDetail = document.querySelectorAll('.form-select')[1];
let $sort = document.querySelector('.sort-title');
let cardList = [];
let $cardBox = document.querySelector('.card-box');
let $more = document.querySelector('.read-more');

let localStorage_cart = [];

resetOptionList($formSelectDetail, 'form-hide');
addOptionList($formSelect, Object.keys(itemList));
addOptionList($formSelectDetail, itemList['셔츠']);

//상품선택하면 상품선택 detail Option 변경
$formSelect.addEventListener('input', function () {
  resetOptionList($formSelectDetail, 'form-hide');
  if (itemList[$formSelect.value].length) {
    addOptionList($formSelectDetail, itemList[$formSelect.value]);
  } else {
    $formSelectDetail.classList.add('form-hide');
  }
});

//option목록 reset
function resetOptionList(dom, removeClassNm) {
  removeClassNm ? dom.classList.remove(removeClassNm) : null;
  dom.length = 0;
}

//option append
function addOptionList(dom, arr) {
  arr.forEach((e) => {
    let option = document.createElement('option');
    option.innerText = e;
    dom.append(option);
  });
}

fetchAndShowCard('https://codingapple1.github.io/js/more1.json', $cardBox);

$more.addEventListener('click', function () {
  fetchAndShowCard('https://codingapple1.github.io/js/more2.json', $cardBox);
});

//데이터 가져와서 카드리스트 표출
function fetchAndShowCard(url, element) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let cardHtml;
      //나중에 10개씩 더보기 할수도 있는데 0번 데이터로만 비교하면 안될듯..
      // if (!JSON.stringify(cardList).includes(JSON.stringify(data[0]))) {
      //   data.map((newData, i) => {
      //     cardList.push(newData);
      //     cardHtml = makeCardHtml(newData);
      //     drawHtml(element, cardHtml);
      //   });
      // } else {
      //   alert('더보기 끝');
      // }
      let readDone = false;
      data.map((newData, i) => {
        if (!cardList.find((item) => item.id === newData.id)) {
          cardList.push(newData);
          cardHtml = makeCardHtml(newData);
          drawHtml(element, cardHtml);
        } else {
          //더보기 버튼이 기능 안하도록
          readDone = true;
          return;
        }
      });
      if (readDone) {
        alert('마지막입니다.');
      }
    })
    .catch(function (error) {
      console.log('실패');
    });
}

//dom에 html insert
function drawHtml(dom, html, position) {
  dom.insertAdjacentHTML(position || 'beforeend', html);
}

//card만드는 Html 문자열 반환
function makeCardHtml(obj) {
  console.log(obj);
  let returnHtml = `<div class="col-sm-4" data-item data-item-id=${obj.id}>
  <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${obj.title}</h5>
    <p>가격 : ${obj.price}</p>
    <button class="btn btn-primary btn-sm buy-btn" data-buy-button>구매</button>
  </div>
  `;
  return returnHtml;
}

$sort.addEventListener('click', () => {
  //이미 정렬이 된 상태면 다시 정렬하지 않음
  let beforeList = [...cardList];
  cardList.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
  if (JSON.stringify(cardList) != JSON.stringify(beforeList)) {
    $cardBox.innerHTML = '';
    let html = '';
    cardList.map((e) => (html += makeCardHtml(e)));
    drawHtml($cardBox, html);
  }
});

document.addEventListener('click', function (e) {
  if (e.target && Object.keys(e.target.dataset).includes('buyButton')) {
    let itemId = e.target.closest('[data-item]').dataset.itemId;
    localStorage_cart.indexOf(itemId) < 0
      ? localStorage_cart.push(itemId)
      : null;

    localStorage.setItem('cart', JSON.stringify(localStorage_cart)); //자료저장하는법
    console.log(JSON.parse(localStorage.getItem('cart')));
  }
});
