/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const output1 = document.getElementById("output1")
const output2 = document.getElementById("output2")
const output3 = document.getElementById("output3")


convertBtn.addEventListener("click", function(){
    let inpt = document.getElementById("inpt")
    let val = inpt.value
    
    output1.innerHTML = `${val} meters = ${(Number(val) * 3.281).toFixed(3)} feet | ${val} feet =  ${(Number(val) / 3.281).toFixed(3)} meters`
    
    output2.innerHTML = `${val} liters = ${(Number(val) * 0.264).toFixed(3)} gallons | ${val} gallons =  ${(Number(val) / 0.264).toFixed(3)} liters`
    
    output3.innerHTML = `${val} kilos = ${(Number(val) * 2.204).toFixed(3)} pounds | ${val} pounds =  ${(Number(val) / 2.204).toFixed(3)} kilos`

})