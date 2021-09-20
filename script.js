
function getAndupdate(){
    
    tit=document.getElementById('title').value;
    desc=document.getElementById('description').value;

    if(localStorage.getItem('item')==null)
    {
        itemarry=[];
        itemarry.push([tit,desc]);
        localStorage.setItem('item',JSON.stringify(itemarry));
    }
    else
    {
        itemarrayStr=localStorage.getItem('item');
        itemarry=JSON.parse(itemarrayStr);
        itemarry.push([tit,desc]);
        localStorage.setItem('item',JSON.stringify(itemarry));
    }
    update();
    document.getElementById('title').value='';
    document.getElementById('description').value='';
}
function update(){
    

    if(localStorage.getItem('item')==null)
    {
        itemarry=[];
        localStorage.setItem('item',JSON.stringify(itemarry));
    }
    else
    {
        itemarrayStr=localStorage.getItem('item');
        itemarry=JSON.parse(itemarrayStr);
       
    }

    let tablebody=document.getElementById("display");
    let str="";



    itemarry.forEach((element,index)=>
    {
        str +=`
        <tr>
        <td>${index+1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button onclick="deleted(${index})" id="delete">Delete</button></td>
        </tr>
        `
    })
  
    document.getElementById("display").innerHTML=str;
}
    add=document.getElementById("add");
add.addEventListener("click",getAndupdate);
update();

function deleted(item)
{
    console.log('Delete',item);
    itemarrayStr=localStorage.getItem('item');
    itemarry=JSON.parse(itemarrayStr);
    itemarry.splice(item,1);

    localStorage.setItem('item',JSON.stringify(itemarry));
    update();
}

function clearstr()
{ 
    if(confirm("Do you want to really clear all the todo tasks"))
    {

    console.log("claear all the task");
    localStorage.clear();
    update();
    }
}



    
let searchtextbox=document.getElementById("s1");

searchtextbox.addEventListener("input",function()
{
    let mytable=document.getElementById("display");
    let trlist=mytable.getElementsByTagName("tr");
    //let trlist=document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item)
    {
        let td1=item.getElementsByTagName("td")[1].innerText;
        let searchtextboxval=searchtextbox.value;
        let re=new RegExp(searchtextboxval,'gi');
        if(td1.match(re))
        {
            item.style.display="table-row";

        }
        else
        {
            item.style.display="none";
        }
    })
})

