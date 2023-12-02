let div=document.createElement("div")
div.setAttribute("class","container")
document.body.append(div);
//row div
let row=document.createElement("div");
row.setAttribute("class","row text-center");
div.append(row);

const collect= ( async (event)=>{
    let checkboxes={}
     event.preventDefault();
    for(let i=0;i<event.target.length;i++){
        let element = event.target[i];
        if (element.value === "on" ) {
            checkboxes[element.id]=element.value
        }

    }
    let values=[]
    for (const key in checkboxes) {
        values.push(key)
    }
    let userchoice=values.join(",");
    const result =await fetch(`https://v2.jokeapi.dev/joke/${userchoice}?amount=10`)
    const jokes=await result.json();
    
jokes.jokes.forEach(element => {
    let newDiv = document.createElement('div');
      newDiv.classList.add('col-lg-4');
      newDiv.innerHTML = `
        <div class="card" style="width: 18rem">
          <h5 class="card-header"> ${element.category}</h5>
          
          <div class="card-body">
            <p class="card-text"> ${element.setup}</p>
            <p class="card-text">😂 ${element.delivery}</p>
          </div>
        </div>
      `;
      row.appendChild(newDiv);
//     let div=document.createElement("div")
//     div.classList.add('col-lg-4');
//     div.innerHTML+=`<div class="card" style="width: 18rem">
//     <h5 class="card-header">${element.category}</h5>
    
//     <div class="card-body">
//       <p class="card-text">amiiboSeries: ${element.setup}</p>
//       <p class="card-text">GameSeries: ${element.delivery}</p>
//     </div>
//   </div>
//     `

//     card.appendChild(div)
});
})