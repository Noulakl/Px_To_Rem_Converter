// Grabbing Element
const inputValueElement = document.getElementById("pxValueInput")
const remDisplay = document.getElementById("rem")

// the magics
inputValueElement.addEventListener("input",function(){
    const defaultPxValue = document.getElementById("defaultPxValue").value
    const inputValue = document.getElementById("pxValueInput").value

    const calculatedRem = inputValue / defaultPxValue
    setTimeout(()=>{
        remDisplay.textContent = `${calculatedRem.toFixed(3)}rem`
        navigator.clipboard.writeText(`${remDisplay.textContent}`)
    }, 500)
})