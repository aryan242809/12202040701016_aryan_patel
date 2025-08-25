
let a = [
    { userID: 4, Name: "Michael" },
    { userID: 5, Name: "Alice" }
  ]
  
 let b = [
    { userID: 5, DateOfBirth: "11-02-1995" },
    { userID: 6, DateOfBirth: "22-09-1990" }
  ]

  let a1 = new Map();
  a.forEach((i) =>
{
    a1.set(i.userID , i.Name)
});

// console.log(a1);

let a2 = new Map();
a.forEach((i) =>
{
  a2.set(i.userID , i.DateOfBirth)
});

// console.log(a2);

let marge = [...a1 , ...a2]
console.log(marge);

let finallist = [];

let 

