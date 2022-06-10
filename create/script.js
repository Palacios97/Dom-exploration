let paragraph = document.getElementById('parrafo');

    const newElem = document.createElement("section");
    newElem.setAttribute("id", "div1")
    paragraph.appendChild(newElem)
    console.log(newElem);
    newElem.style.background = generateRandomColor();

// div between section in order to give it random background color

 let div = document.getElementById("div1");

    const newDiv = document.createElement('div');
    newDiv.textContent = 'Miguel Palacios';
    div.appendChild(newDiv);
   


function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
  }
  
  var randomColor = generateRandomColor();

 // elements order PENDING
    