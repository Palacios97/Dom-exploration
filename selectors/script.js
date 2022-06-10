//1
const newTitle = document.getElementsByClassName('important')
for(let title of newTitle){
   title.setAttribute('title', 'this is an important item')
}


//2
const picture = document.querySelectorAll ('img');
for ( let images of picture) {
    let newDisplay = images.getElementsByClassName('important');
    images.style.display = 'none';
    if ( newDisplay !== 'img.class'){
        newDisplay.style.display = 'block'
    }
    
}


//3
//let text = document.querySelectorAll('p');
//for (let i = 0; text.length; i++) {
 //  console.log(text[i].innerText);
//}

//for (var i = 0; i < text.length; i++) {
  //  var classes = text[i].getAttribute("class");
    //text[i].innerText = classes;
    //console.log(classes)
//}



//4 hacer en clases
const newColors = document.querySelectorAll('p');
let newStyles = "";
for (i = 0; i < newColors.length; i++) {
    values = newColors[i].checked;
    if (values === true) {
        newStyles = newColors[i].value;
    }
}
 let cambio  = document.getElementsByClassName ('important');
 cambio.style.colot = 'red';
