const expenseBtn= document.getElementById('submitBtn');
expenseBtn.addEventListener('click',fun);

function fun(){
    
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    if (description==''|| amount==''){
        alert('Please Enter all details');
    }
    
    else{
    const tBody = document.getElementById('expenseList')
    const newRow = document.createElement('tr');
    tBody.appendChild(newRow);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;

    const categoryCell = document.createElement('td');
    categoryCell.textContent = category;

    const amountCell = document.createElement('td');
    amountCell.textContent = amount;

    newRow.appendChild(descriptionCell);
    newRow.appendChild(categoryCell);
    newRow.appendChild(amountCell);

    
    document.getElementById("description").value = null;
    document.getElementById("category").value="Select Category";
    document.getElementById("amount").value=null;
    }
   
}
