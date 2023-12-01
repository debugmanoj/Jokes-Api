let card=document.getElementById("jokes")
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
    let div=document.createElement("div")
    div.classList.add('col-lg-4');
    div.innerHTML+=`<div class="card" style="width: 18rem">
    <h5 class="card-header">${element.category}</h5>
    
    <div class="card-body">
      <p class="card-text">amiiboSeries: ${element.setup}</p>
      <p class="card-text">GameSeries: ${element.delivery}</p>
    </div>
  </div>
    `

    card.appendChild(div)
});
})