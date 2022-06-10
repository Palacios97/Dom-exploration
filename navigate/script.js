

const element = document.querySelector('ol')
const a = element.children[0];
const b = element.children[4];

a.before(b)

const section2 = document.querySelector("section:nth-of-type(2)");
const section3 = document.querySelector("section:nth-of-type(3)");

const h2 = section2.querySelector("h2");
const title3 = section3.querySelector("h2");

section3.insertBefore(h2, section3.children[0]);

section2.insertBefore(title3, section2.children[0]);

const parent = document.getElementById('padre')
const son = document.getElementById('tres')
parent.removeChild(son)