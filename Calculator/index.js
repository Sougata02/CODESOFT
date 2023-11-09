val = document.querySelectorAll('.val');
result = document.getElementById('result');
let display = '';
val.forEach(element => {
    element.addEventListener('click',(e)=>{
        if(e.target.innerText==='C'){
            display = '';
            result.innerText = 'Click Something!!';
        }
        else if(e.target.innerText==='='){
            p = eval(display);
            result.innerText = p;
            display = p;
        }
        else{
            display=display+e.target.innerText;
        //  console.log(e.target);
            result.innerText = display;
        }
    })
});