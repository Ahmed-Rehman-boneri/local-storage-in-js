let input = document.getElementById("input_user")
let span = document.getElementById("span")

// console.log(input);


function storeName() {
    let value = input.value;
    localStorage.setItem("name", value)
    location.reload()
    
    
}

window.addEventListener("load", ()=>{
    let value2 = localStorage.getItem("name")
    span.innerText = value2;
    
})