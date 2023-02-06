// const body = document.getElementById('name');
// // const para = document.createElement('p');
// // //para.innerText = 'Hello my Name is hImanshu ';

// // const dataBold = document.createElement('strong');
// // dataBold.innerText = 'Hello';
// // //para.innerHTML = '<strong>Hello </strong> <span>Hello</span>';
// // para.append(dataBold);
// // body.append(para);

// const removepara = document.querySelector('#first');
// removepara.dataset.newname = 'Hello';

// body.append(removepara.dataset.newname);
// const second = document.querySelector('#second');
// second.style.color = 'red';
// // console.log(removepara.setAttribute('title', 'nameererer'));
// // console.log(removepara.removeAttribute('title'));
// // para.append(removepara);
// // console.log(removepara.getAttribute('id'));
// // removepara.remove();
// // const div = document.querySelector('div');
// // console.log(div.textContent);
// // console.log(div.innerText);

// let x = 2;
// const parentFunction = () => {
//   //local scope
//   let value = 1;

//   console.log(value);
//   //global
//   console.log(x);

//   //lexical scope
//   childFunction = () => {
//     //value 1
//     console.log((value += 1));
//     //x=2
//     console.log((x += 5));
//   };

//   return childFunction;
// };

// const result = parentFunction();
// console.log(result);

// result(); // 2,7
// result();
// result();
// result();
// result();

// //3, 12;
/********************** */
//IIFE

// const counterMe = (() => {
//   let count = 0;
//   console.log(`Initial value ${count} `);

//   // it can be accessed through lexical scope of child function
//   return () => {
//     count += 1;
//     console.log(count);
//   };
// })(); //immediately invoke // 0

// counterMe(); //1
// counterMe(); //2

// const credits = ((num) => {
//   let begin = num;
//   console.log(`Lets start the game  ${begin}`);

//   return () => {
//     begin -= 1;

//     if (begin > 0) console.log(`still credit left  ${begin} `);
//     else if (begin < 0) console.log(`No credit remaining ${begin} `);
//   };
// })(3);

// credits();

// credits();
// credits();
