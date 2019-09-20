import { fizzbuzz } from '#/action';

const elem = document.querySelector('.result');
if (!!elem) {
    elem.innerHTML = fizzbuzz();
}
