// Code your solutions in this file

function writeCards(names, event) {
    let thankMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankMessages;
}

function countDown(pos) {
    let i = pos;
    while (i >= 0) {
        console.log(i--);
    }
}