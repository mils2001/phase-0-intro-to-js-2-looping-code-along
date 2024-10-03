// Code your solutions in this file

function writeCards(names,event){
    let thankYouMessages = [];

    for(let i=0; i<names.length; i++){
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        

    }  
    return thankYouMessages;  
};  

const names = ["Guadalupe", "Ollie", "Aki"];
    
const event = "surprise";

const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);  // ["Thank you, Guadalupe, for the wonderful surprise gift!", "Thank you, Ollie, for the wonderful surprise gift!", "Thank you, Aki, for the wonderful surprise gift!"]
          


function countDown(number){
while(number >= 0){
    console.log(number);
    number--;
}
}
countDown(10);
console.log(countDown(4));
console.log(countDown(0));




