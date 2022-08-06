let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve('Success'); //success
  } else {
    reject('Failed');
  }
});

// p.then((message) => {
//   console.log('This is in the then ' + message);
// }).catch((message) => {
//   console.log('This is in catch ' + message);
// });

// ---------------------------------------------

const userLeft = false;
const userWatchingCatMeme = true;

// function watchTutorialCallback(callback, errorCallBack) {
//   if (userLeft) {
//     errorCallBack({
//       name: 'user left',
//       message: ':(',
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallBack({
//       name: 'user Watching Cat Meme',
//       message: 'No one beats a cat..',
//     });
//   } else {
//     callback('Thums up and Subscribe');
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log('Success' + message);
//   },
//   (error) => {
//     console.log(error.name + ' ' + error.message);
//   }
// );

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'user left',
        message: ':(',
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'user Watching Cat Meme',
        message: 'No one beats a cat..',
      });
    } else {
      resolve('Thums up and Subscribe');
    }
  });
}

// watchTutorialPromise()
//   .then((message) => {
//     console.log('Success' + message);
//   })
//   .catch((error) => {
//     console.log(error.name + ' ' + error.message);
//   });

// --------------------------------------------------

const recordVideoOne = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Video 1 Recorded'), 3000);
});

const recordVideoTwo = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Video 2 Recorded'), 2000);
  //  resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

//여러개의 promise 순서대로 실행
//배열에 전달되는 promise중 하나라도 reject되면 promise 전체가 거부됨
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);

//배열의 promise 중 먼저 오는 promise 실행
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);
