var med=[];
var imgElement=document.querySelector('td');


function addMed(){
    event.preventDefault();
    let newMed= {
        "medName": document.getElementById("fname").value,
        "medQtd": document.getElementById("fqtd").value,
        "medClass": document.getElementById("fclass").value
        
    }
    resetForm();
    med.push(newMed);
    renderTable();
    
}

function removeMed(index){
    med.splice(index,1);
    renderTable();
}

function renderTable(){
    let table= document.getElementById("dataTable");
    table.innerHTML=` <tr>
    <th>ID</th>
    <th>MEDICAMENTO</th>
    <th>QUANTIDADE</th>
    <th>CLASSE DE MEDICAMENTO</th>
    <th>REMOVER</th>
</tr>`;


    console.log(med.length);
    for(let i=0; i< med.length; i++ ){
    table.innerHTML = table.innerHTML  +  `<tr>
    <td>${i}</td>
    <td>${med[i].medName}</td>
    <td>${med[i].medQtd}</td>
    <td>${med[i].medClass}</td>
    <td><img src="./img/remover.svg" tdElement.style.cursor='pointer' width="25px" height="25px" onclick="removeMed(${i})" ></td>
    </tr>`
    
    

    }

}
function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("fqtd").value = "";
    document.getElementById("fclass").value = "";
  
}

renderTable();
