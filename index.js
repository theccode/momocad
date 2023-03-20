
const cadId = null;
const cadAmount = 0.00;
let values = [];
document.querySelectorAll('.cad-content').forEach(i => {
    i.addEventListener('click', function(){
        const id = this.getElementsByClassName('cad-id')[0];
        const amt = this.getElementsByClassName('cad-amount')[0];
        const link = this.getElementsByClassName('cad-link')[0];
        values.push(id.innerHTML);
        values.push(amt.innerHTML);
        values.push(link.innerHTML);
        console.log(values);
        localStorage.setItem("storageValues", JSON.stringify(values));
    })
    
})

// console.log(cadId);
// console.log(cadAmount);

// values.push(cadId);
// values.push(cadAmount);
// let loadData = function (data = null) {
//     const message = data.innerHTML;
//     values.push(message);
//     let h2 = document.getElementsByClassName('cad-link');

    
// }
// window.onload = loadData;

