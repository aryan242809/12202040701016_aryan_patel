
let a = [
    { userID: 4, Name: "Michael" },
    { userID: 5, Name: "Alice" }
  ]
  
 let b = [
    { userID: 5, Birth: "11-02-1995" },
    { userID: 6, Birth: "22-09-1990" }
  ]

  let a1 = new Map();
  a.forEach((i) =>
{
    a1.set(i.userID , i)
});

// console.log(a1);

let a2 = new Map();
b.forEach((i) =>
{
  a2.set(i.userID , i)
});

// console.log(a2);

let marge = new Set([...a1.keys() , ...a2.keys()]) 
// console.log(marge);

let donelist = [];
marge.forEach(userID => {
    const aData = a1.get(userID);
    // console.log(aData);
    const bData = a2.get(userID);
    // console.log(bData);
  
   donelist.push({
      userID: userID,
      Name: aData ? aData.Name : null,
      DateOfBirth:bData ? bData.Birth : null
    });
  });

  console.log(donelist);
