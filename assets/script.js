const dolar = 5.84;

const valueDollar = 5.84;

let usdInput = document.querySelector('#usd');
let brlInput = document.querySelector('#brl');

usdInput.addEventListener('keyup', () => {
    let valorUsd = fixValue(usdInput.value);
    brlInput.value = valorUsd * dolar;
})

brlInput.addEventListener('keyup', () => {
    let valorBrl = fixValue(brlInput.value);
    usdInput.value = valorBrl / dolar;
})

function fixValue(value) {
    let fixedValue = value.replace(',', '.');
    let floatValue = parseFloat(fixedValue);

    if(floatValue == NaN) {
        floatValue = 0;
    }

    return floatValue;
}