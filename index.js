// Code your solutions in this file
let result = [];
function writeCards(string_names, event_name) {
    for (let i = 0; i < string_names.length; i++) {
        result.push(`Thank you, ${string_names[i]}, for the wonderful ${event_name} gift!`);
    }
    return result;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
