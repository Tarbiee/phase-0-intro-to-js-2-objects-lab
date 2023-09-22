// Write your solution in this file!
const employee ={
    name :"Sam",
    streetAddress : "11 Broadway",

}

//updateEmployeeWithKeyAndValue(): this function should take in three arguments: a employee Object, a key and a value. 
//This function should not mutate the employee; 
//it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj={...employee};
    newObj[key]=value;
    return newObj;
}
const employ= updateEmployeeWithKeyAndValue(
    delete employee.name
);
newObj;
employee;



//destructivelyUpdateEmployeeWithKeyAndValue(): 
//this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
const employy = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,"streetAddress","12 Broadway"
);
employy;
employee;



function deleteFromEmployeeByKey(employee, key){
    let newEmployee ={...employee};
    delete newEmployee[key];
    return newEmployee;
}
newEmployee;
newEmployee.name;
employee;




function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;

}
let newEmploye= destructivelyDeleteFromEmployeeByKey(employee, "name");
newEmploye;
newEmploye.name;
employee;

