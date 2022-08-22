let createPromise = (num) => {
  let promise = new Promise((resolve, reject) => {
    if(num == 0) reject(new Error("number is zero!"));
    resolve(`Number is ${num}. Yes. Number is not zero!`);
  })
  return promise;
}

export { createPromise };
