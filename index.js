function createEmployeeRecord([firstName,lastName,title,payRate]){
  let employee = {
    firstName: firstName,
    familyName: lastName,
    title: title,
    payPerHour: payRate,
    timeInEvents:[],
    timeOutEvents:[]
  }
  return employee
};

function createEmployeeRecords(arrayOfNames){
  return arrayOfNames.map(array => {
  createEmployeeRecord(array)
  })
};
