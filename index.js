var data = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// Q1. Write a promise function to display all name starting with 'E'.
// funtion : findStartNames(data)
// Hint : Filter
// ResolveFunctionfindChar = (persons, ch) => {
//   return new Promise((resolve, reject) => {
//     if (persons.lenght === 0) {
//       reject({ msg: "Array Empty" });
//     } else {
//       let result = persons.filter((person) => {
//         return person.name.toUpperCase().startsWith(ch.toUpperCase());
//       });
//       if (result.lenght === 0) {
//         reject({ msg: "No records found" });
//       } else {
//         resolve(result);
//       }
//     }
//   });
// };
// findStartNames = async (persons, ch) => {
//   const result = await ResolveFunctionfindChar(persons, ch);
//   console.log("problem1");
//   console.log(result);
// };
// findStartNames(data, "E");

// Q2. Write a promise function to display all name ending with 'E'.
// funtion : findEndNames(data)
// Hint : Filter

// ResolveFunctionfindEndChar = (persons, ch) => {
//     return new Promise((resolve, reject) => {
//       if (persons.lenght === 0) {
//         reject({ msg: "Array Empty" });
//       } else {
//         let result = persons.filter((person) => {
//           return person.name.toUpperCase().endsWith(ch.toUpperCase());
//         });
//         if (result.lenght === 0) {
//           reject({ msg: "No records found" });
//         } else {
//           resolve(result);
//         }
//       }
//     });
//   };
//   findEndNames = async (persons, ch) => {
//     const result = await ResolveFunctionfindEndChar(persons, ch);
//     console.log("problem1");
//     console.log(result);
//   };
//findEndNames(data, 'r');

// Q3. Write a promise function to display total sum of all records  pilotingScore+shootingScore.
// function : find(data)
// Hint : reduce.
// ResolveFunctionfindRecords = (persons) => {
//   return new Promise((resolve, reject) => {
//     if (persons.lenght === 0) {
//       reject({ msg: "Array Empty" });
//     } else {

//       let result = persons.reduce((total, persons) => {
//         return persons.pilotingScore + persons.shootingScore + total;
//       }, 0);

//       if (result === 0) {
//         reject({ msg: "No record founds" });
//       } else {
//         resolve(result);
//       }
//     }
//   });
// };
// find = async (persons) => {
//   const result = await ResolveFunctionfindRecords(persons);
//   console.log("problem3");
//   console.log(result);
// };
//find(data);

// Q4. Write a promise function to display total sum of all records
//pilotingScore+shootingScore whose isForceUser===true
// function : findForce(data)
// Hint : filter , reduce.
// ResolveFunctionfindSumAllRecords = (persons) => {
//   return new Promise((resolve, reject) => {
//     if (persons.lenght === 0) {
//       reject({ msg: "Array Empty" });
//     } else {
//       let result = persons
//         .filter((person) => {
//           return person.isForceUser === true;
//         })
//         .reduce((total, persons) => {
//           return persons.pilotingScore + persons.shootingScore + total;
//         }, 0);

//       if (result === 0) {
//         reject({ msg: "No record founds" });
//       } else {
//         resolve(result);
//       }
//     }
//   });
// };
// find = async (persons) => {
//   const result = await ResolveFunctionfindSumAllRecords(persons);
//   console.log("problem3");
//   console.log(result);
// };
// find(data);

// Q5. Write a promise function to find all records whose isForceUser===true then
// multiply 6 to each pilotingScore and finally find sum of all  all records
// pilotingScore+shootingScore
// function : findForceTotal(data)
// Hint : filter , map , reduce.

// ResolveFunctionfindSumAllRecords = (persons) => {
//   return new Promise((resolve, reject) => {
//     if (persons.lenght === 0) {
//       reject({ msg: "Array Empty" });
//     } else {
//       let result = persons
//         .filter((person) => {
//           return person.isForceUser === true;
//         })
//         .reduce((total, persons) => {
//           return persons.pilotingScore*6 + persons.shootingScore + total;
//         }, 0);

//       if (result === 0) {
//         reject({ msg: "No record founds" });
//       } else {
//         resolve(result);
//       }
//     }
//   });
// };
// find = async (persons) => {
//   const result = await ResolveFunctionfindSumAllRecords(persons);
//   console.log("problem3");
//   console.log(result);
// };
// find(data);

// Q6. Write async function to call all above function Q1 Q2 Q3 Q4.
// function : async function findAll() {}
// const findAll = async(persons,ch) => {
//     let result1= await ResolveFunctionfindChar(persons, ch);
//     let result2 = await ResolveFunctionfindEndChar(persons, ch);
//     let result3 = await ResolveFunctionfindRecords(persons);
//     let result4 = await ResolveFunctionfindSumAllRecords(persons);
//     console.log(result1,result2,result3,result4);
//    }
//    console.log("problem5");
//    findAll(data ,'E','r');

// Q7. Write async function in which Q1 output will act as input Q3.
// function : async function findAllTotal() {}

// const findAll = async(persons,ch) => {
//   result1=await findStartNames(persons,ch)
//   result2=await find(persons);
// console.log(result1);
// console.log(result2);
// }
// console.log("problem7");
// findAll(data,"E");

//Q8. Using nesting of promises peform Q1 output will act as input Q3 function.
// const findAll = async () => {
//   findStartNames(data, "L")
//     .then((result) => {
//       find(result).then((result) => {
//         console.log(result);
//       })
//       .catch((result) => {
//         console.log(result.msg);
//       });
//     })
//     .catch((result) => {
//       console.log(result.msg);
//     });
// };
// findAll();

// Q9.Display only name of person having isForce===true and shooting>10
// Hint : filter and map.

// ResolveFunctionfindSumAllRecords = (persons) => {
//     return new Promise((resolve, reject) => {
//       if (persons.lenght === 0) {
//         reject({ msg: "Array Empty" });
//       } else {
//         let result = persons
//           .filter((person) => {
//             return person.isForceUser === true && person.shootingScore >50;
//            })
//            .map((result) => {
//              return result;
//            }, 0);

//         if (result === 0) {
//           reject({ msg: "No record founds" });
//         } else {
//           resolve(result);
//         }
//       }
//     });
//   };
//   find = async (persons) => {
//     const result = await ResolveFunctionfindSumAllRecords(persons);
//     console.log("problem9");
//     console.log(result);
//   };
//   find(data);

//Q10. Using Promise.all  give a call to Q1 Q2 Q3 functions.
// findPromiseAll = async () => {
//     return await Promise.all([
//       await findStartNames(data,'E')
//       await findEndNames(data,'r'),
//       await find(data)
//     ])
//       .then((hello) => {
//         console.log(hello);
//       })
//       .catch((res) => {
//         console.log(res);
//       });
//   };
//   findPromiseAll();

//Q11. Using Promise.race give a call to Q1 Q2. functions.
// findPromiseRace = async (persons) => {
//   return await Promise.race([
//     await findStartNames(data, "E"),
//     await findEndNames(data, "r"),
//   ])
//     .then((hello) => {
//       console.log(hello);
//     })
//     .catch((res) => {
//       console.log(res);
//     });
// };
// findPromiseRace();

//Write a promise function to perform sorting on shooting in ascending order.

// const resolveSorting = (persons, orderby) => {
//   return new Promise((resolve, reject) => {
//     if (persons.lenght === 0) {
//       reject({ msg: "Array is Empty" });
//     } else {
//       var result = data.sort((a, b) => {
//         let fa = a.name.toLowerCase();
//         let fb = b.name.toLowerCase();
//         if (orderby == "ASEN") {
//           if (fb < fa) {
//             return -1;
//           }
//           if (fb > fa) {
//             return 1;
//           }
//           return 0;
//         } else {
//           if (fa < fb) {
//             return -1;
//           }
//           if (fa > fb) {
//             return 1;
//           }
//           return 0;
//         }
//       });

//       if (result === 0) {
//         reject({ msg: "No record founds" });
//       } else {
//         resolve(result);
//       }
//     }
//   });
// };
// const sorting = async (persons, orderby) => {
//   const result = await resolveSorting(persons, orderby);
//   console.log("problwem11");
//   console.log(result);
// };
// sorting(data);
