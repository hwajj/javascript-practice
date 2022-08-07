function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to  ${location}`);
    if (location === 'Google') {
      resolve('google says hi');
    } else {
      reject('we can only say talk to google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra Informatin  + ${response} `);
  });
}

// makeRequest('Google')
//   .then((response) => {
//     console.log('Response Received');
//     return processRequest(response);
//   })
//   .then((prosessedResponse) => console.log(prosessedResponse))
//   .catch((error) => console.log(error));

//이 함수가 비동기 함수라는것을 알리는 async
// 해당 명령 실행될때까지는 기다림
async function doWork() {
  try {
    const response = await makeRequest('Google');
    console.log('Response Received');
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (error) {
    console.log(error);
  }
}

doWork();
