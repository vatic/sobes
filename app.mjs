import  { createPromise } from './promise.mjs';

let myPromise = createPromise(1);
myPromise
	.then(res => {
		console.log(`fullfilled: ${res}`);
		return createPromise(2)
	})
	.then(res => {
		console.log(`fullfilled: ${res}`);
	})
  .catch(res => console.log(`rejected: ${res}`));




