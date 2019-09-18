const fizzbuzz = function fizzbuzz() {
    return `FizzBuzz`;
}

const elem = document.querySelector('.result');
if (!!elem) {
    elem.innerHTML = fizzbuzz();
}
