
const isGoogle = (url) => {
  return new Promise((resolve, reject) => {
    if (url === 'https://google.com') {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

isGoogle('https://google.com')
.then((data) => {
  console.log('Is it Google: ' + data);
}, (data) => {
  console.log('Is it Google: ' + data);
});
