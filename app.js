// https://calculator.swiftutors.com/kinetic-energy-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const kineticEnergyRadio = document.getElementById('kineticEnergyRadio');
const massoftheobjectRadio = document.getElementById('massoftheobjectRadio');
const velocityRadio = document.getElementById('velocityRadio');

let kineticEnergy;
let massoftheobject = v1;
let velocity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

kineticEnergyRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass of the object (kg)';
  variable2.textContent = '(v) Velocity (m/s)';
  massoftheobject = v1;
  velocity = v2;
  result.textContent = '';
});

massoftheobjectRadio.addEventListener('click', function() {
  variable1.textContent = '(K.E) Kinetic Energy (J)';
  variable2.textContent = '(v) Velocity (m/s)';
  kineticEnergy = v1;
  velocity = v2;
  result.textContent = '';
});

velocityRadio.addEventListener('click', function() {
  variable1.textContent = '(K.E) Kinetic Energy (J)';
  variable2.textContent = '(m) Mass of the object (kg)';
  kineticEnergy = v1;
  massoftheobject = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(kineticEnergyRadio.checked)
    result.textContent = `Kinetic Energy = ${computeKineticEnergy().toFixed(2)} J`;

  else if(massoftheobjectRadio.checked)
    result.textContent = `Mass of the object = ${computeMassoftheobject().toFixed(2)} kg`;

  else if(velocityRadio.checked)
    result.textContent = `Velocity = ${computeVelocity().toFixed(2)} m/s`;
})

// calculation

function computeKineticEnergy() {
  return 0.5 * Number(massoftheobject.value) * Math.pow(Number(velocity.value), 2);
}

function computeMassoftheobject() {
  return (Number(kineticEnergy.value) * 2) / Math.pow(Number(velocity.value), 2);
}

function computeVelocity() {
  return Math.sqrt((Number(kineticEnergy.value) * 2) / Number(massoftheobject.value));
}