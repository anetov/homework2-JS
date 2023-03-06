// task 1.1
const age = prompt("How old are you? ")

if(age >= 0 && age > 12){
    console.log("Child")
}else if(age >= 12 && age < 18){
    console.log("Teenager")
}else if(age >= 18 && age < 60){
    console.log("Adult")
}else{
    console.log("Retiree")
}

// task 1.2
const number = prompt("Enter a number from 0 to 9: ")

if(number == 1 ){
    console.log("!")
}else if(number == 2){
    console.log("@")
}else if(number == 3){
    console.log("#")
}else if(number == 4){
    console.log("$")
}else if(number == 5){
    console.log("%")
}else if(number == 6){
    console.log("^")
}else if(number == 7){
    console.log("&")
}else if(number == 8){
    console.log("*")
}else if(number == 9){
    console.log("(")
}

// task 1.3
const number_3_digit = prompt("Enter three-digit number: ")
let number1, number2, number3;
number1 = Math.floor(number_3_digit/100) 
number2 = Math.floor(number_3_digit/10) % 10
number3 = number_3_digit % 10
if(number1 == number2 || number1 == number3 || number2 == number3){
    console.log(true)
}else{
    console.log(false)
}

// task 1.4
if(year%400 === 0 ||(year%4 === 0 && year%100 != 0)){
    console.log("leap year")
}else{
    console.log("not a leap year")
}

// task 2.1
function TwoNumbers(num1, num2){
    if(num1 < num2){
        console.log(-1)
    }else if(num1 > num2){
        console.log(1)
    }else if(num1 === num2){
        console.log(0)
    }
}

TwoNumbers(parseInt(prompt("Enter 1st number:")), parseInt(prompt("Enter 2nd number:")))

// task 2.2
function FactNum(){
    let end_num = prompt()
    let num_fact = 1
    for (let i = 1; i <= end_num; i++){
        console.log(num_fact *= i)
    }
}

FactNum()

// task 2.3
function SumNum(first_num, second_num, third_num){
    let array = []
    array.push(first_num,second_num,third_num);
    array = array.join('')
    console.log(parseInt(array))
}

SumNum(parseInt(prompt("Enter 1st number:")), parseInt(prompt("Enter 2nd number:")), parseInt(prompt("Enter 3rd number:")))

// task 2.4
function Shape1(parametr1, parametr2){
    let area_rectangle;
    if(parametr2 === undefined){
        area_rectangle = parametr1 * parametr1
    } else{
        area_rectangle = parametr1 * parametr2
    }
    return area_rectangle
}

console.log(Shape1(2, 4))