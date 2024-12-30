//Declared variables
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const form = document.querySelector('form');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');
// Currency exchange rates
const USD = 6.79;
const EUR = 6.46;
const GBP = 7.93;

// Event listener for amount input
amount.addEventListener('input', () => {
    const hasCaractersRegex = /\D+/g 
    console.log(amount.value)
    amount.value = amount.value.replace(hasCaractersRegex, "");
})
//Submit event listener
form.onsubmit = (event) => {
event.preventDefault();
switch(currency.value){
case "USD":
    convertCurrency(amount.value, USD, "$");
    break;
   
case "EUR":
        convertCurrency(amount.value, EUR, "€");
        break;
case "GBP":
        convertCurrency(amount.value, GBP, "£");
         break;
         default:
             break;
}


}

function convertCurrency(amount,price,symbol) {

try{


description.textContent = `${symbol} 1 = ${price}`;
let total = amount * price;
result.textContent = formatCurrencyBRL(total);
footer.classList.add("show-result")
}
catch(error){
footer.classList.remove("show-result")
 }

}

function formatCurrencyBRL(value){
return Number(value).toLocaleString('pt-BR', 
    {
        style: 'currency', 
        currency: 'BRL'
    });
    }

