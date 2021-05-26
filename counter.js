var current = document.querySelector('.current');
var next = document.querySelector('.next');
var button = document.getElementById('start-counter-button');
var counterValue = document.getElementById('counter-value');

button.addEventListener('click', function(){
    next.innerHTML = counterValue.value - 1;
    current.innerHTML = counterValue.value;
    var counterTimer = setInterval(function(){
        next.classList.add('animate');
        if(parseInt(next.innerHTML) < 0){
            window.alert("Time Finished!!");
            clearInterval(counterTimer);
            next.classList.remove('animate');
            return;
        }
        setTimeout(function(){
            next.classList.remove('animate')
            next.innerHTML = parseInt(next.innerHTML - 1);
        }, 500);

        setTimeout(function(){
            current.innerHTML = parseInt(next.innerHTML) + 1;
        }, 500);
    }, 1000);
});