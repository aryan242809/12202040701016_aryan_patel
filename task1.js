
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
    a1.set(i.userID , i)
});

// console.log(a1);

let a2 = new Map();
a.forEach((i) =>
{
  a2.set(i.userID , i)
});

// console.log(a2);

let marge = new Set([...a1.keys() , ...a2.keys()]) 
// console.log(marge);

let donelist = [];
marge.forEach(userID => {
    const aData = a1.get(userID);
    const bData = a2.get(userID);
  
   donelist.push({
      userID: userID,
      Name: aData ? aData.Name : null,
      DateOfBirth:toString(bData) ? bData.DateOfBirth : null
    });
  });

  console.log(donelist);
