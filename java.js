let inputText=document.getElementById("inputText");
let addButton=document.getElementById("addButton");
let listTask=document.getElementById("listTask");
let arr=JSON.parse(localStorage.getItem("task"))||[];
for(let i=0;i<arr.length;i++)
{
    listTask.innerHTML+="<p>"+arr[i]+"<button onclick='deleteTask(this)'>Delete</button>"+"</p>";
    inputText.value="";

}

addButton.addEventListener("click", function() {
    let task = inputText.value;
    arr.push(task);
    localStorage.setItem("task", JSON.stringify(arr));
    listTask.innerHTML += "<p>" + task + "<button onclick='deleteTask(this)'>Delete</button>" + "</p>";
    inputText.value = "";
});

inputText.addEventListener("keydown", (event) => event.key === "Enter" && addButton.click());

function deleteTask(button) {
    let pElement = button.parentElement;
    
    let taskText = pElement.innerText.replace("Delete", "").trim();

    let index = arr.indexOf(taskText);

    if (index !== -1) {
        arr.splice(index, 1);
        localStorage.setItem("task", JSON.stringify(arr));
    }


    pElement.remove();
}