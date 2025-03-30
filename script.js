var display=document.getElementById('display')


function appendTo(input){
    display.value=display.value+input
}

function clearing(){
    display.value= ''
}

function cal(){
    var result=eval(display.value)
    display.value= result
}

function deleteone(){
    display.value=display.value.slice(0,-1)
}