

var input = document.querySelector('[type="number"]');
var current = document.querySelector('.current');
var next = document.querySelector('.next');



const startCounter =() => {
    var terminate = input.value;
    console.log(terminate);
    var interval = setInterval(()=>{
        next.textContent++;
        next.classList.add('animate');
        if(current.textContent > terminate -2){
            
            clearInterval(interval);
            
        }
        setTimeout(()=>{
            current.textContent = next.textContent;
            next.classList.remove('animate');
        },500)
    },1000)
    
}