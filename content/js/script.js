const todoInput = document.querySelector(".todo-input");
const btnEl = document.querySelector(".btn");
const listEl = document.querySelector(".list");
const sectionEl = document.querySelector("select");

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
      // const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
     
  cancelBtn.onclick =()=>{
       searchBox.classList.remove("active");
       searchBtn.classList.remove("active");
       todoInput.classList.remove("active");
       cancelBtn.classList.remove("active");
       searchData.classList.toggle("active");
       todoInput.value = "";
  }
    

  searchBtn.addEventListener("click" , event => {
         event.preventDefault();
         
        
         searchBox.classList.add("active");
         searchBtn.classList.add("active");
         todoInput.classList.add("active");
         cancelBtn.classList.add("active");
         todoInput.focus();
           if(todoInput.value != ""){
        
              searchData.classList.remove("active");
          //  searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
          // searchData.innerText = todoInput.value;
          // searchData.innerText =todoInput.value;
              let newDiv = document.createElement("div");
              newDiv.classList.add("todo" , "sm:w-[280px]" , "max-sm:w-[200px]" , "w-[150px]" , "h-[50px]" , "bg-pink-500" , "rounded-full" , "mt-5" , "flex" , "mx-8");
              let newLi = document.createElement("li");
              newLi.innerText = todoInput.value;
              newLi.classList.add("item","pt-3" , "pl-5" , "flex-1" );
              newDiv.appendChild(newLi);

              const buttonEl = document.createElement("button");
              buttonEl.innerHTML = '<i class="fas fa-check-circle pl-3"></li>';
              buttonEl.classList.add("complete-btn" , "float-right" , "pr-2" , "text-pink-500" , "bg-pink-100" , "h-full" );
              newDiv.appendChild(buttonEl);

              const trashEl = document.createElement("button");
              trashEl.innerHTML = '<i class="fas fa-trash px-3"></li>';
              trashEl.classList.add("trash-btn" , "float-right" , "pr-2" , "text-pink-500" , "bg-gray-400" , "h-full" , "rounded-br-full" , "rounded-tr-full");
              newDiv.appendChild(trashEl);

              listEl.appendChild(newDiv);
         
              todoInput.value = ""
            }else{
              searchData.textContent = "";
        }
})

listEl.addEventListener("click" ,e => {
         const items = e.target;
          e.preventDefault()

         if(items.classList[0] === "complete-btn") {
            const todo = items.parentElement;
            todo.classList.add("completed")
         }

         if(items.classList[0] === "trash-btn") {
             const todo1 = items.parentElement;
            //  todo1.classList.add("slide");
            todo1.remove()
         }
 
})

sectionEl.addEventListener("change" , () => {
  const selectedOption = sectionEl.value;

  const todoItems = listEl.querySelectorAll(".todo");

  todoItems.forEach(item => {
    if (selectedOption === "all") {
      item.style.display = "flex";
    } else if (selectedOption === "completed" && item.classList.contains("completed")) {
      item.style.display = "flex";
    } else if (selectedOption === "incomplete" && !item.classList.contains("completed")) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
})
//  document.addEventListener("DOMContentLoaded" , () => {

// })

