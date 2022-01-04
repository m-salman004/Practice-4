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


















