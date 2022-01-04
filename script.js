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
















