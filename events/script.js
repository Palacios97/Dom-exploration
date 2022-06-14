/*Everytime the user clicks on one of the action squares :

Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)

Create a new <li> in the log below to state when the action was done*/

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime()) 
  const section = document.querySelector('main').firstElementChild;
    const newdiv = document.createElement('div');
    newdiv.style.display = "inline-block";
    newdiv.classList.add('displayedsquare', e.target.classList[1]);
    section.appendChild(newdiv);
    const action = document.querySelector("ul");
    let li = document.createElement("li")
    let content = document.createTextNode(`[${getElapsedTime()}] Created a new  ${e.target.classList[1]}  square`);  
    li.append(content);
    action.append(li)
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 


document.addEventListener("keyup", event => {
  if(event.key === " "){
      var randomColors = generateRandomColor()
      document.body.style.background = randomColors
      const spaceBar = document.querySelector('ul');
      let log = document.createElement("li");
      let element = document.createTextNode(`[${getElapsedTime()}] Spacebar`);
      log.append(element);
      spaceBar.append(log);
  }
      if(event.code === "KeyL"){
       let list = document.querySelectorAll("li");
        for(i=0; i < list.length; i++){
          list[i].remove()
        }
    }
       if(event.code === "KeyS"){
         let displaysquares = document.querySelectorAll('.displayedsquare');
         for(i = 0; i < displaysquares.length; i++ ){
        displaysquares[i].remove()
         }


      }
 
})

//Create a system so that when a user clicks on a generated square 
//an alert pops-up with the color of that square

document.addEventListener('click', generatedSquares)

function generatedSquares(e) {
 console.log(e.target.classList[1])
  let colors = document.querySelectorAll(".actionsquare");
  alert(`This is a ${colors} square`)
    
}
 


