// const delayedSuccess = () =>{
//     setTimeout(()=>{
//         let success = {'message': 'delayed success'}
//         console.log(success)
//     },500)
// }
// delayedSuccess()

const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let success = { 'message': 'delayed success' };
        resolve(success);
      }, 500);
    });
  };
resolvedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('error: delayed rejection'));
      }, 500);
    });
  };
  
  rejectedPromise()
    .then(() => {
      console.log('Promise was successfull');
    })
    .catch((error) => {
      console.error(error);
    });
  

// const delayedException = () =>{
//     setTimeout(()=>{
//         try{
//             throw new Error('error: delayed exception!')
//         } catch(e){
//             console.log(e);
//         }
//     },500)
// }
// delayedException()