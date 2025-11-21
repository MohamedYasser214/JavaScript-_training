// start Part One

// Q1
const x = "123";
console.log(Number(x) + 7);

// Q2
const variable = 0;
if (!variable) {
  console.log("Invalid");
} else {
  console.log("valid");
}

// Q3
const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < loop.length; i++) {
  // console.log(loop[i])
  if (loop[i] % 2 == 0) {
    continue;
  } else {
    console.log(loop[i]);
  }
}
// Q4
const num = [1, 2, 3, 4, 5];
const res = num.filter((i) => {
  return i % 2 == 0;
});
console.log(res);

// Q5
const data1 = [1, 2, 3];
const data2 = [4, 5, 6];
const resu = [...data1, ...data2];
console.log({ resu });

// Q6
const day = 2;
switch (day) {
  case 1:
    console.log("Sunday ");
    break;
  case 2:
    console.log("monday ");
    break;
  case 3:
    console.log("Tuesday  ");
    break;
  case 4:
    console.log("Wednesday  ");
    break;
  case 5:
    console.log("Thursday  ");
    break;
  case 6:
    console.log("Friday  ");
    break;
  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("weekend Sir");
    break;
}

// Q7
const str = ["a", "ab", "abc"];
const resultString = str.map((i) => {
  return i.length;
});
console.log(resultString);

// Q8
function check(n) {
  console.log(n);
  if (n % 3 == 0 && n % 5 == 0) {
    console.log("Divisible by both");
  } else {
    console.log("Not Divisible by both");
  }
}
check(15);

// Q9
const squre = (n) => {
  console.log(n * n);
};
squre(5);

// Q10
function test(name, age) {
  const userName = `${name} is ${age}  years old`;
  console.log(userName);
}
test("john", 25);

// Q11
function multi(...num) {
  let total = 0;
  for (n of num) {
    total += n;
  }
  console.log(total);
}
multi(1, 2, 3, 4, 5);

// Q12
function time() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
time().then((message) => console.log(message));

// Q13
function max(){
const num=[1, 3, 7, 2, 4 ] 
const res=Math.max(...num)
console.log(res)

}
max()

// Q14
// دي حل chatgpt عشان مكنتش فاهمها 
function getKeys(obj){
  return Object.keys(obj)
}
console.log(getKeys({name:"Yasser" , age:22}))

// Q15
const words="The quick brown fox";
function word(){
  const ress=words.split(" ")
  console.log(ress)
}
word()


// End Part One


// ===============================================================================================================

// start Part Two


// Q1
// forEach=>  
//   بتشتغل بس على arrays.
// مبتقدرش تعمل break أو continue.
// لازم تشتغل بـ callback function.
// مش بتستنى async/await.

// نستخدمها إمتى؟
// لما عايز تعدّي على كل العناصر من غير ما توقف.
// لما بتعمل عمليات بسيطة على كل عنصر.
// لما مش محتاج async/await ولا break.


// for...of
// بتشتغل مع  iterable:
// arrays – strings – maps – sets.
// تقدر تعمل break و continue.
// بتشتغل تمام مع async/await.
// مش محتاج callback.

// نستخدمها إمتى؟
// لما محتاج تخرج من اللوب لو شرط اتحقق.
// لما عندك async/await.
// لما اللوب جزء من logic مهم مش مجرد طباعة.


// Q2
// Hoisting = رفع التعريفات لفوق قبل الكود ما يتنفَّذ.
// تعريفات المتغيرات
// تعريفات الفنكشنات
// تعريفات الكلاسات
// لكن مش بترفع القِيَم… لأ، بترفع الاسم بس.

// console.log(x);  => undefined
// var x = 10;


// TDZ هي الفترة اللي المتغير متعرّف (اسمه موجود) لكن لسه مش جاهز للاستخدام.
// وده بيحصل مع: {let ,const}
// مش مع var.
// console.log(a); // Error: Cannot access 'a' before initialization
// let a = 5;


// Q3
// == (Double Equals)بتعمل type coercion = بتحاول تغيّر النوع علشان تقارن.
// بتقبل مقارنة بين أنواع مختلفة
// "5" == 5   // true

// === (Triple Equals)
// مفيش تحويل نوع.
// لازم النوع والقيمة يكونوا زي بعض.
// "5" === 5   // false



// Q4
// try = جرّب تشغّل الكود اللي جواه
// catch = لو حصل خطأ… مسكه هنا ومايوقعش البرنامج
// try {
//   console.log(a); // a مش متعرّفة → Error
// } catch (err) {
//   console.log(err);
// }
// ليه try-catch مهم جدًا في async؟
// يمنع الكود يقع بسبب errors جاية من API أو Network
//  يساعدك تتعامل مع timeouts / failed requests
//  يسمحك تعمل fallback لو حصل error
//  يديك control على الـ flow بتاع الكود
//  async/await من غير try-catch = هتضيع errors ومش هتعرف تتحكم في الكود



// Q5
// Type Conversion ده لما أنت تحوّل النوع بنفسك.
// بتحوّل string → number أو number → string أو أي نوع تاني صراحة.
// انت المسؤول عن التحويل.
// let str = "123";
// let num = Number(str);  
// console.log(num); // 123

// Type Coercion ده لما الجافاسكربت تحوّل النوع بنفسها أثناء تنفيذ الكود.
// يحصل automatically علشان تكمل العملية.
// console.log("5" + 10); // "510"  
// JS حول الرقم لـ string علشان تعمل concatenation
