var progressbar = document.querySelector(".progressbar-outer")
var loader = document.querySelector(".progress-loader")
var subtract = document.querySelector(".subtract")
var add = document.querySelector(".add")
var display = document.querySelector(".num-display")
var undobtn = document.querySelector(".undo")
var redobtn = document.querySelector(".redo")

var num = 0
var undo = []
var redo = []

var progressbarupdate = ()=>{
    var percent = (num/150)*100
    loader.style.width = `${percent}%`
    display.innerHTML = num
    if(num!==0){
    loader.innerHTML = `${Math.floor(percent)}%`
    }else{
        loader.innerHTML = ''
    }
}
function calculate(value){
        if(num+value>=0 && num+value<=150 ){
            num = num + value
            
            undo.push(num)
        }
        console.log(undo)
        progressbarupdate()
}

subtract.addEventListener("click",()=>{
    calculate(-1)
})
add.addEventListener("click",()=>{
    calculate(1)
})

undobtn.addEventListener("click",()=>{
    if(undo.length>0){
    redo.push(num)
    num = undo.pop()
    progressbarupdate()
    console.log(undo)
    }
})

redobtn.addEventListener("click",()=>{
    if(redo.length>0){
    undo.push(num)
    num = redo.pop()
    progressbarupdate()
    console.log(redo)
    }
})

// console.log(undo)
// console.log(redo)