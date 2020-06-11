const windVelocity = document.getElementById('velocity');
const temperature = document.getElementById('temperature');
const btn = document.getElementById('btn');
const toggle = document.querySelector('.switch');
const vUnit = document.getElementById('v-unit');
const tUnit = document.getElementById('t-unit');
const answer = document.getElementById('answer');

//default function
btn.addEventListener('click', convertImperial);

toggle.addEventListener('change', (e) => {
    check(e.target);
    answer.value = '';
})

function check(element) {
    if (metric.checked) {
        vUnit.innerText = ' (km/h) '; 
        tUnit.innerText = ' (°C) '; 
        btn.removeEventListener('click',convertImperial);
        btn.addEventListener('click', convertMetric);
    }


    else {
        vUnit.innerText = ' (mph) '; 
        tUnit.innerText = ' (°F) ';
        btn.removeEventListener('click',convertMetric);
        btn.addEventListener('click', convertImperial);
    }
}


function convertImperial() {
    let windValue = parseInt(windVelocity.value);
    let tempValue = parseInt(temperature.value);
    //imperial formula
    let x = 0.6215 * tempValue;
    let y = 0.4275 * tempValue;
    let z = Math.pow(windValue, 0.16);
    answer.value = Math.round(35.74 + x - 35.75 * z + y * z);

    windVelocity.value = null;
    temperature.value = null;
    return;
}

function convertMetric() {
    let windValue = parseInt(windVelocity.value);
    let tempValue = parseInt(temperature.value);
    let x = 0.6215 * tempValue;
    let z = Math.pow(windValue, 0.16);
    let a = 0.3965 * tempValue;

    answer.value = Math.round(13.12 + x - 11.37 * z + a * z);
    windVelocity.value = null;
    temperature.value = null;
    return;
}
