 
// being able to write text to create the list 
const list = document.getElementById(list);

function wishList (addWish){
const text = `<li class="item">
<i class="fa fa-circle-thin" job ="complete"></i>
<p class="text"> ${addWish} </p>
<i class="fa fa-trash-o delete" job="delete"></i>
</li>`
const position = "beforeend"; //this will put the wish after the last child 
// insertAdjacentHTML() need to research
list.insertAdjacentHTML(position,text);
}

const input =document.getElementById('input');
document.addEventListener('keyup',function(event){
    if(event.keyCode == 13){
        const toDo = input.value; 
        wishList(toDo);
    }
    input.value="";
});

let List = [];
let id = 0;

list =[{},{},...];
list[0];
{
    name:"'Drink Coffe",
    id :0,
    done : false,
    trash : false
}

wishList('weighted Blanket');
console.log("is this working");


// const input = document.getElementById("input");
// const dateItem = document.getElementById("date");
// const clear = document.querySelector(".clear-item");
// element.insertAdjacentHTML(position, text);