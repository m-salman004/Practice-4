// Input Value
function inputValue(){
    return document.getElementById("inputValue").value
}
// Clear Input
function clearInput(){
    document.getElementById("inputValue").value = ""
}
// Clear Output
function clearOutput(){
    document.getElementById("outputResult").innerHTML = ""
}
// Show Output
function showOutput(outputResult){
    document.getElementById("outputResult").innerHTML += outputResult
}
// Toastify Error
function error(innerText){
    Toastify({
        text: innerText,
        duration: 3000,/* 
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true, */
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
// Tell Time
function tellTime(){
    var date = new Date()
    var theHr = date.getHours()
    var theMin = date.getMinutes()
    var theSec = date.getSeconds()
    let html = "You clicked the button @ <span class = 'fw-bold'>" + theHr + " : " + theMin + " : " + theSec +"</span>"
    showOutput(html)
}
// Current Date and Time
document.getElementById("originalBox").innerHTML = new Date()

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// Get Name Today
function getNameToday(){
    clearOutput()
    let theDate = new Date()
    let theDay = theDate.getDay()
    let nameOfToday = "Today the day is: <h2>" + dayNames[theDay] + "</h2>"
    showOutput(nameOfToday)
}
// Calculate Days Passed
function calculateDaysPassed(){
    clearOutput()
    let dob = inputValue()
    if(!dob){
        error("Please enter your date of birth.")
        return
    }
    let today = new Date()
    let bornDate = new Date(dob)
    let msDiff = today.getTime() - bornDate.getTime()
    let daysDiff = msDiff / (1000 * 60 * 60 * 24)
    let html = "<h2>" + Math.floor(daysDiff) + "</h2> days have been passed since you born."
    showOutput(html)
}
// Next Birthday
function nextBirthday(){
    clearOutput()
    let dob = inputValue()
    if(!dob){
        error("Please enter your date of birth.")
        return
    }
    let today = new Date()
    let nextBirthDate = new Date(dob)
    let msDiff = nextBirthDate.getTime() - today.getTime()
    let daysDiff = msDiff / (1000 * 60 * 60 * 24)
    let html = "Your next birthday is <h2>" + Math.floor(daysDiff) + "</h2> days away."
    showOutput(html)
}
// Greet User
function greetUser(){
    clearOutput()
    let userName = prompt("Enter your name.")
    if(!userName){
        error("Please type your name.")
        return
    }
    var time = new Date()
    var hour = time.getHours()
    if(hour > 20 && hour <=  0){
        showOutput("Good Night: <span class = 'fw-bold'>" + userName + "</span>")
    }
    else if(hour > 0 && hour <= 4){
        showOutput("Have A Good Mid-Night: <span class = 'fw-bold'>" + userName + "</span>")
    }
    else if(hour > 4 && hour <= 12){
        showOutput("Good Morning: <span class = 'fw-bold'>" + userName + "</span>")
    }
    else if(hour > 12 &&  hour <= 13){
        showOutput("Good Noon: <span class = 'fw-bold'>" + userName + "</span>")
    }
    else if(hour > 13 && hour <= 16){
        showOutput("Good Afternoon: <span class = 'fw-bold'>" + userName + "</span>")
    }
    else if(hour > 16 && hour <= 20){
        showOutput("Good Evening: <span class = 'fw-bold'>" + userName + "</span>")
    }
}
// Tell Time 1
function tellTime1(){ 
    var date = new Date()
    var theHr = date.getHours()
    var theMin = date.getMinutes()
    var theSec = date.getSeconds()
    let html = "You clicked the button (Tell-Time 1) @ <span class = 'fw-bold'>" + theHr + " : " + theMin + " : " + theSec +"</span></br>"
    showOutput(html)
}
// Tell Time 2
function tellTime2(){
    var date = new Date()
    var theHr = date.getHours()
    var theMin = date.getMinutes()
    var theSec = date.getSeconds()
    let html = "You clicked the button (Tell-Time 2) @ <span class = 'fw-bold'>" + theHr + " : " + theMin + " : " + theSec +"</span></br>"
    showOutput(html)
}
// Tell Time 3
function tellTime3(){
    var date = new Date()
    var theHr = date.getHours()
    var theMin = date.getMinutes()
    var theSec = date.getSeconds()
    let html = "You clicked the button (Tell-Time 3) @ <span class = 'fw-bold'>" + theHr + " : " + theMin + " : " + theSec +"</span></br>"
    showOutput(html)
}
// Calculate Tax
function calculateTax(){
    clearOutput()
    var price = prompt("Enter your price to check 17% tax.")
    if(!price){
        error("Please enter price to check tax.")
        return
    }
    var tax = 17
    var total = price * tax / 100
    let html = "<span class = 'fw-bold'>Tax: </span><span class = 'text-danger fw-bold fw-18'>" + total + "</span>"
    showOutput(html)
}
// Calculate Total
function calculateTotal(){
    clearOutput()
    let price = prompt("Enter Price.")
    let tax = prompt("Enter Tax.")
    if(!price && !tax){
        error("Please enter the number.")
        return
    }
    price = Number(price)
    let total = price * tax / 100
    let totalAmount = price + total
    let totalAmount1 = price - tax
    totalAmount = Math.round(totalAmount)
    totalAmount1 = Math.round(totalAmount1)
    let html = "<span>Your entered price is: <span class = 'fw-bold fw-18'>" + price + "</span></br><span>Your entered tax is: <span class = 'text-danger fw-bold fw-18'>" + tax + "%" + " = " + total + "</span></br><span>Your Total (Price + Tax) = <span class = 'text-success fw-bold fw-18'>" + totalAmount + "</span></br><span>Your Total (Price - Tax) = <span class = 'text-success fw-bold fw-18'>" + totalAmount1 + "</span>"
    showOutput(html)
}
// Current Year In Footer
let date = new Date()
let year = date.getFullYear()
document.getElementById("year").innerHTML = year







