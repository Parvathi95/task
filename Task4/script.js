let input=document.getElementById("input")
let button=document.getElementById("add")
let items=document.getElementById("items")

document.querySelector("#add").onclick=function() {
    if(document.querySelector('#newtask input').value.length==0){
        alert("Please Enter Your Text");
    }
    
    else{
        document.querySelector("#items").innerHTML+=`
        <div class="task">
        <span id="taskname">
            ${document.querySelector('#newtask input').value}
            </span>

            <button class="delete">
                <i class="far fa-trash-alt"></i>

            </button>
            </div>
            `;
            
            var current_items=document.querySelectorAll(".delete");
            for(var i=0;i<current_items.length;i++){
            current_items[i].onclick=function(){
        this.parentNode.remove();
    }
        }
    }
    }

