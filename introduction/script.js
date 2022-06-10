newTitle = document.title;
newTitle = 'Modifing the DOM';
console.log(newTitle);

document.body.style.backgroundColor = '#FF69B4'

const background = document.getElementById("color");
 
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};
 
const getRandomColor = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
 
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};
 
const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
  background.style.color = randomColor;
};
 
setBackgroundColor();
 
setInterval(() => {
  setBackgroundColor();
}, 1500);

document.querySelectorAll('body *');