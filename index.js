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
  let records = createEmployeeRecord(array)
  return records
  })
};

function createTimeInEvent(employeeRecord,timestamp){
  employeeRecord.timeInEvents.push ({
    type: "TimeIn",
    date: timestamp.split(" ")[0],
    hour: parseInt(timestamp.split(" ")[1], 10)
    })
    return employeeRecord
};

function createTimeOutEvent(employeeRecord,timestamp){
  employeeRecord.timeOutEvents.push ({
    type: "TimeOut",
    date: timestamp.split(" ")[0],
    hour: parseInt(timestamp.split(" ")[1], 10)
  })
  return employeeRecord
};

function hoursWorkedOnDate(employeeRecord,date){
  let startingHourByDate = employeeRecord.timeInEvents.filter(user => user.date.startsWith(date));
  let endingHourByDate = employeeRecord.timeOutEvents.filter(user => user.date.startsWith(date));
  let totalHoursWorked = (endingHourByDate[0].hour - startingHourByDate[0].hour)/100

  return totalHoursWorked;
};

function wagesEarnedOnDate(employeeRecord,date){
  let hoursWorked = hoursWorkedOnDate(employeeRecord,date);
  return hoursWorked * employeeRecord.payPerHour
};

function allWagesFor(employeeRecord){
  let dailyWages = employeeRecord.timeInEvents.map(day => {
    return wagesEarnedOnDate(employeeRecord,day.date)
    });
  let reducer = (firstValue,nextValue) => firstValue + nextValue;
  let totalWages = dailyWages.reduce(reducer,0);
  return totalWages;
};

function calculatePayroll([...employeeRecordArray]){
  let totalWages = employeeRecordArray.map(employee => allWagesFor(employee));
  let reducer = (firstValue,nextValue) => firstValue + nextValue;
  let companyPayroll = totalWages.reduce(reducer,0);
  return companyPayroll;
};
