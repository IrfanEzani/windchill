
function convert() {
    const windVelocity = document.getElementById('velocity');
    const temperature = document.getElementById('temperature');
    const answer = document.getElementById('answer');

    let windValue = parseInt(windVelocity.value);
    let tempValue = parseInt(temperature.value);
    //metric unit
    let x = 0.6215 * tempValue;
    let y = 0.4275 * tempValue;
    let z = Math.pow(windValue, 0.16);

    console.log(x)
    //windVelocity.value = null;
    //temperature.value = null;
    return;
}

//WCI ;
//metric =13.12 + 0.6215T – 11.37 (V^0.16) + 0.3965T (V^0.16)


//imperial = 35.74 + 0.6215T – 35.75 (V^0.16) + 0.4275T (V^0.16)