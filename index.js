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
  arrayOfNames.forEach(array => {
    let fullRecords = createEmployeeRecord(array)
    return fullRecords;
  })
};
