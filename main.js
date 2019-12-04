 

function wishList (addWish){
// being able to write text to create the list 
const list = document.getElementById(list);
const text = `<li class="item">
<i class="fa fa-circle-thin" job ="complete"></i>
<p class="text"> ${addWish} </p>
<i class="fa fa-trash-o delete" job="delete"></i>
</li>`
const position = "beforeend";
// insertAdjacentHTML() need to research
list.insertAdjacentHTML(position,text);
console.log("is this working");
}

// wishList ("weighted blanket");

// const input = document.getElementById("input");
// const dateItem = document.getElementById("date");
// const clear = document.querySelector(".clear-item");
// element.insertAdjacentHTML(position, text);