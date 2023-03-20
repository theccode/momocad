window.onload = console.log(localStorage.getItem('storageValues'))
const storedValues = JSON.parse(localStorage.getItem("storageValues"));
console.log(storedValues);
document.getElementById('cad-id').textContent = storedValues[0];
document.getElementById('cad-amount').textContent = storedValues[1];
document.getElementById('cad-text').textContent = storedValues[2];
document.getElementById('total-amount').textContent = storedValues[1];

function charCounter(obj, counter, limit){
    let countField = document.getElementById(counter);
    if (obj.value.length > limit){
        obj.value = obj.value.substring(0, limit);
        return false;
    } else {
        countField.value = limit - obj.value.length;
    }

}