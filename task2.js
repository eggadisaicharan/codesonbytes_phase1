const input=document.getElementById('my-Input');
const tasks=document.getElementById('my-task');
const firsttask=document.getElementsByClassName('activity');
function add()
{
    var newtask=document.createElement('li');
    newtask.classList.add('activity');
    newtask.innerHTML=input.value;
    var newtaskbuttons=document.createElement('div');
    var editbutton=document.createElement('button');
    editbutton.innerHTML="edit";
    var deletebutton=document.createElement('button');
    deletebutton.innerHTML="delete";
    editbutton.classList.add('edit');
    deletebutton.classList.add('delete');
    newtaskbuttons.classList.add('actions');
    newtaskbuttons.appendChild(editbutton);
    newtaskbuttons.appendChild(deletebutton);
    newtask.appendChild(newtaskbuttons);
    tasks.appendChild(newtask);
    input.value="";
    deletebutton.addEventListener('click',function(){
        newtask.remove();
    });
    editbutton.addEventListener('click',function(){
        newtaskbuttons.remove();
        input.value=newtask.textContent;
        newtask.remove();
    })
   

    


}