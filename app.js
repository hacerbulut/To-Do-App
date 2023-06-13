//?selectors
const input = document.querySelector("#input");
const btn = document.getElementById("btn");
const ul = document.querySelector("ul");

//?functions
function domaYaz({id,text,flag}) {
    // const{id,text,flag} = task
    ul.innerHTML += `
    <li id=${id} class=${flag?"checked":""}><i class="fa fa-check"></i><span>${text}</span><i class="fa fa-trash"></i></li>`
}

//?eventListeners
let tasks = []

btn.addEventListener("click", () => {
  if (!input.value) {
    alert("Please enter your todo...");
  } else {
    const task = {
      id: new Date().getTime(),//Date.now()
      text: input.value,
      flag: false,
    };
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    // localStorage.clear()
    domaYaz(task)
    input.value =""
    input.focus()
  }
  console.log(tasks)
});
//? enterla çalış
window.addEventListener("keydown", (e)=>{
    if(e.key==="Enter") {
        btn.click()
    }
})
 //?silme işlemi
 ul.addEventListener("click",(e)=>{
     const id = e.target.parentElement.id;
    if(e.target.classList.contains("fa-trash")){
        tasks=tasks.filter((task)=>task.id != id)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        e.target.parentElement.remove()
    }
 })
