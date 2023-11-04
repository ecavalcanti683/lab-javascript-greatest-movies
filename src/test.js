const myNumber = 27;

function printTwoDigits(n) {
/*    const time = (n < 10) ? `0${n}` : `${n}`;
    return time; */
    if ( n < 10) {
        return `0${n}`
    } else {
        return n;
    }
}

const twoDigits = printTwoDigits(myNumber);
console.log(twoDigits);