const orderComplete = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('(n분후) \n 주문한 음식이 나왔습니다');
  }, 1000);
});

function menuConfirm(lunch) {
  return new Promise((resolve, reject) => {
    console.log(lunch.name + ' ' + lunch.qt + '개 주문이요');
    setTimeout(() => {
      if (lunch.qt > 5) {
        const error = new Error();
        error.comment = '메뉴 6개는 무리야';
        reject(error);
        return;
      }
      resolve(lunch.qt + '개는 충분해');
    }, 600);
  });
}

let lunch = {
  name: '깐풍기',
  qt: 2,
};

menuConfirm(lunch)
  .then((n) => {
    console.log(n);
    orderComplete.then((n) => {
      console.log(n);
    });
  })
  .catch((e) => console.log(e.comment))
  .finally(console.log('되나요?'));

//위의 then ,catch는 아래와 같다

menuConfirm(lunch).then(
  function (n) {
    console.log(n);
    orderComplete.then((n) => {
      console.log(n);
    });
  },
  function (n) {
    console.log(n.comment);
  },
  console.log('되나요?')
);

// async await 로 바꿔보기
async function doWork() {
  try {
    const lunchOrder = await menuConfirm(lunch);
    console.log('되나여?');
    console.log(lunchOrder);
  } catch (error) {
    console.log(error.comment);
  }

  try {
    const orderSign = await orderComplete;
    console.log(orderSign);
  } catch (error) {
    console.log(error);
  }
}

doWork();
