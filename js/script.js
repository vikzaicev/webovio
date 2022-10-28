



/*const elemForm = document.querySelector('.form__area');
console.log(elemForm.dataset.sayHi);

const elemLi = document.querySelectorAll('li');
console.log(elemLi[7]);
//const elemHed = document.getElementsByClassName('header');
//console.log(elemHed);

const list = document.querySelector('ul');
console.log(list);

list.insertAdjacentHTML(
   'beforeend',
   '<li><a href="">Текст</a></li>'
);
const mainEl = document.documentElement;
const mainElWidth = mainEl.clientWidth;
const windowWidth = window.innerWidth;

const scroll = windowWidth - mainElWidth;
console.log(scroll);

function scrollBu() {
   window.scrollBy(0, 100)
};
setTimeout(scrollBu, 3000);

const getFormCoord = elemForm.getBoundingClientRect();
console.log(getFormCoord);

const elemHed = document.querySelector('.header');
const getHedCoord = elemHed.getBoundingClientRect().top;
console.log(getHedCoord);

const elemHedDoc = getHedCoord + window.pageYOffset;
console.log(elemHedDoc);*/
/*=============================*/

/*const txtForm = document.querySelector('.form__textarea');

const img = document.querySelector('.lupa__img');
console.log(img, txtForm);
img.addEventListener("clik", openForm);
function openForm() {
   txtForm.classList.toggle('active');
};*/


/*----------------*/

/*const txtForm = document.querySelector('.form__textarea');
const txtFormAll = txtForm.getAttribute('length');
console.log(txtForm);

const txtCounter = document.querySelector('.form__text span');
//*txtCounter.innerHTML = txtFormAll;

txtForm.addEventListener("keyup", txtSetCounter);
txtForm.addEventListener("keydown", function (event) {
   if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
   const txtCounterResult = txtForm.value.length;
   txtCounter.innerHTML = txtCounterResult;
};*/

/*=============================*/

const animItems = document.querySelectorAll('.amim-items');
if (animItems.length > 0) {
   window.addEventListener("scroll", animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         //*console.log(animItemPoint);
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         }
         else {
            if (!animItem.classList.contains('anim-no'))
               animItem.classList.remove('active');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect();
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll()
   }, 400);
}

/*====================hamb==========================*/

const menu = document.querySelector('.menu__list');
const hamb = document.querySelector('.header__hamb');
const body = document.querySelector('body');
const popup = document.querySelector('.header__popup');
console.log(hamb, popup, menu);

popup.append(menu.cloneNode(1));

hamb.addEventListener('click', hamburger);

function hamburger() {
   hamb.classList.toggle('activ');
   popup.classList.toggle('open');
   body.classList.toggle('noscrol');
};

/*==================================================*/

function myFn(a, b) {
   let c
   a = a + 1
   c = a + b
   return c
}

myFn(4, 2)
let myFnJ = myFn();
console.log(myFnJ);



console.dir(myFn);


const newPost = (post, addetAt = Date()) => ({
   ...post,
   addetAt,
})

const firstPost = {
   id: 1,
   autor: 'Victor',
}

const { autor } = firstPost
console.log(autor);

const onePost = newPost(firstPost)
console.log(onePost);

const myArrey = Array(1, 5, 6)
console.log(myArrey);

const myArrey2 = [1, 5, 6]
console.log(myArrey2);
function kjh() {
   if (myArrey === myArrey2) {
      console.log('Verno');
   }
   else {
      console.log('noy');
   }
}
kjh();
console.log(myArrey2[1]);

const [one] = myArrey
console.log(one);

const newAutor = ({ autor }) => {
   if (!autor) {
      console.log(`no ${autor}`);
   }
   else console.log(`yes ${autor}`);
};
newAutor(firstPost);

myArrey.forEach(function el(el) {
   if (el < 5) {
      console.log(`jj`);
   }
   else {
      console.log(`;;`);
   }
})

newaArr = (a) => {
   if (a >= 0) {
      console.log(a - 1);
   }
   else {
      console.log(`a <= 0`);
   }
}
newaArr(5);

function balance(book) {
   let arr = book.replace(/[^\w\s .]/gi, '').split('\n')
   console.log(arr);
   let res = []
   let balance = +arr[0]
   res.push(`Original Balance: ${arr[0]}`)
   for (let i = 1; i < arr.length; i++) {
      const element = arr[i];
      //console.log(+el[el.length - 1]);
      if (el.length > 2) {
         let e = el.slice(0, 2).join(" ")
         console.log(e);
         res.push(`${el.slice(0, 2).join(" ")} ${(+el[el.length - 1]).toFixed(2)} Balance ${(balance - +el[el.length - 1]).toFixed(2)}`)
         balance = (balance - +el[el.length - 1]).toFixed(2)
      }
   }
   res.push(`Total expense ${(+arr[0] - balance).toFixed(2)}`)
   console.log(res.length);
   res.push(`Average expense ${(((+arr[0] - balance).toFixed(2) / (res.length - 2)).toFixed(2))}`)
   console.log(res.join("\r\n"));
}
//balance(`1233.00
//125 Hardware;! 24.8?;
//123 Flowers 93.5
//127 Meat 120.90
//120 Picture 34.00
//124 Gasoline 11.00
//123 Photos;! 71.4?;
//122 Picture 93.5
//132 Tyres;! 19.00,?;
//129 Stamps 13.6
//129 Fruits{} 17.6
//129 Market;! 128.00?;
//121 Gasoline;! 13.6?;`)

function squares(x, n) {
   let res = []
   while (res.length < n) {
      res.push(x)
      x = x ** 2
   }
   console.log(res);
}
squares(5, 3)

function nbYear(p0, percent, aug, p) {
   let count = 0
   while(p0 < p) {
      p0 = Math.floor(p0 + ((p0 / 100) * percent) + aug)
      count++
      console.log(p0);
   }
   console.log(count);
}
nbYear(1000, 2, 50, 1214)