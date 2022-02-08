const playBtn = document.getElementById('btnPlay');
const pauseBtn = document.getElementById('btnPause');
const stopBtn = document.getElementById('btnStop');

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const hundreth = document.getElementById('hundreth');
let numHours=0, numMinutes=0, numSeconds=0, numHundreth=0;

hours.innerHTML = `${numHours}`;
minutes.innerHTML = `${numMinutes}`;
seconds.innerHTML = `${numSeconds}`
hundreth.innerHTML = `${numHundreth}`

pauseBtn.addEventListener('click', pauseCronometer);
playBtn.addEventListener('click', startCronometer);
stopBtn.addEventListener('click', stopCronometer);

let operation;
let tool=0;


function cronometerOperation(){
    
    hours.innerHTML = `${numHours}`;
    minutes.innerHTML = `${numMinutes}`;
    seconds.innerHTML = `${numSeconds}`;
    hundreth.innerHTML = `${numHundreth}`

numHundreth++;
    if (numHundreth == 100){
        numHundreth = 0;
        numSeconds++;
}

    
    if (numSeconds == 60){
    numSeconds = 0;
    numMinutes++;
}
    
    if (numMinutes == 60){
    numMinutes = 0;
    numHours++;
}
    
    if (numHours == 24){
    numSeconds = 0;
    numMinutes++;
    numHours=0;
}
}


function startCronometer(){
    if (tool == 0){
    operation = setInterval(cronometerOperation, 10);
    tool = 1;
}
}


function pauseCronometer(){
    if (tool != 0){
        clearInterval(operation);
        }
    tool = 0;
};

function stopCronometer(){
    numHundreth = 0;
    numHours = 0;
    numSeconds = 0;
    numMinutes = 0;
    hours.innerHTML = `${numHours}`;
    minutes.innerHTML = `${numMinutes}`;
    seconds.innerHTML = `${numSeconds}`;
    hundreth.innerHTML = `${numHundreth}`

}