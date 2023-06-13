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
    if(e.target.classList.contains("fa-check")){
        tasks.map((task,index)=>{
            tasks[index].flag = !tasks[index].flag
        })
    }
    localStorage.setItem("tasks",JSON.stringify(tasks))


//?üstünü çizme
if(e.target.parentElement.classList.toggle("checked"))
{}

//?alternatif yol 
// if(e.target.parentElement.classList.contains("checked")){
//     e.target.parentElement.classList.remove("checked")
// }else{
//     e.target.parentElement.classList.add("checked")
// }


 })


 window.addEventListener("load",() =>{
    tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.forEach((task) =>{
        domaYaz()
    })
 })
 
