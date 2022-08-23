const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// console.log( employees );

$('#bossButton').click( ()=> {
for (let employee of employees) {
  let newEmpData = newEmployeeData(employee);
  $('#empList').append(`<li> Name: ${newEmpData.name}, Bonus Percentage: ${newEmpData.bonusPercentage}, Total Bonus: ${newEmpData.totalBonus}, Total Compensation: ${newEmpData.totalCompensation} </li>`)
}
});

// Big Function Here!!!!
function newEmployeeData (empObject) {
  let bonusPercentage = calculateBonusPercentage(empObject);
  let bonus = empObject.annualSalary * bonusPercentage;
  let newEmpData = {
    name: empObject.name,
    bonusPercentage: bonusPercentage,
    totalBonus: bonus,
    totalCompensation: Number(empObject.annualSalary) + bonus,
  };
  console.log(newEmpData);
  return newEmpData;
}


// Calculate bonus function here!!!
function calculateBonusPercentage(empObject) {
  let bonusCalculation = {
    1 : 0, 
    2 : 0,
    3 : .04,
    4 : .06,
    5 : .1
  };
  let basePercent = bonusCalculation[empObject["reviewRating"]];
  if (empObject.employeeNumber.length === 4) {
    basePercent += .05;
  } if (Number(empObject.annualSalary) > 65000 && basePercent > .01) {
    basePercent -= .01;
  } if (basePercent > .13) {
    basePercent = .13;
  }
  return Number(basePercent.toFixed(2));
}
