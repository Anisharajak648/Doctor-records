

let arr =  JSON.parse(localStorage.getItem("todoList")) || [];
displayTable(arr)
 
document.querySelector("form").addEventListener("submit", todoList);
function todoList(event){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let docId = document.querySelector("#docID").value;
    let dept = document.querySelector("#dept").value;
    let exp = document.querySelector("#exp").value;
    let email= document.querySelector("#email").value;
    let mbl = document.querySelector("#mbl").value;
 
let obj = {
    name,
    docId,
    dept,
    exp, 
    email,
    mbl
}
arr.push(obj);
localStorage.setItem("todoList", JSON.stringify(arr));
displayTable(arr);
}
function displayTable(arr){
    document.querySelector("tbody").innerHTML = "";
arr.forEach((element, index) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = element.name;

    let td2 = document.createElement("td");
    td2.innerText = element.docId;

    let td3 = document.createElement("td");
    td3.innerText = element.dept;
 
    let td4 = document.createElement("td");
    td4.innerText = element.exp;

    let td5 = document.createElement("td");
    td5.innerText = element.email;

    let td6 = document.createElement("td");
    td6.innerText = element.mbl;

    let td7 = document.createElement("td");
    if(element.exp >= 5){
        td7.innerText = "Senior"
    }
    else if (element.exp >= 2 && element.exp <= 4){
       td7.innerText = "Junior"
    }
    else{
        td7.innerText = "Trainee"
    }
    let td8 = document.createElement("td");
    td8.innerText = "delete";
    td8.style.backgroundColor = "red"

    td8.addEventListener("click", function(){
        
        arr.splice(index, 1);

        localStorage.setItem("arr", JSON.stringify(arr))
        displayTable(arr)
    })

     row.append(td1, td2, td3, td4, td5, td6, td7, td8);

     document.querySelector("tbody").append(row)
    });

}
// function deleteButton(element, 1){
   
// }



