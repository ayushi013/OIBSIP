let addBtn = document.querySelector("#add");
let totalTask = 0;
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let taskNo = document.querySelector(".circle");


addBtn.addEventListener("click",function(event){
    event.preventDefault();
    if(input.value !== ""){
        let li = document.createElement("li");

        let delIcon = document.createElement("i");
        delIcon.classList.add("fa-regular");
        delIcon.classList.add("fa-trash-can");

        li.innerText = input.value;
        li.appendChild(delIcon);
        ul.appendChild(li);
        totalTask++;
        taskNo.innerText = totalTask;
        input.value = "";
    }
});

ul.addEventListener("click",function(event){
    if(event.target.classList.length === 2)
    {
        event.target.parentNode.remove();
        totalTask--;
        taskNo.innerText = totalTask;
    }
});

