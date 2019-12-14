 // being able to write text to create the list 
 const list = document.getElementById(list);

 function addToDo(toDo) {
     const text = `<li class="item">
<i class="fa fa-circle-thin" job ="complete"></i>
<p class="text"> ${toDo} </p>
<i class="fa fa-trash-o delete" job="delete"></i>
</li>`
     const position = "beforeend"; //this will put the wish after the last child 
     // insertAdjacentHTML() need to research
     list.insertAdjacentHTML(position, text);
 }

 const input = document.getElementById('input');
 document.addEventListener('keyup', function (event) {
             if (event.keyCode == 13) {
                 const toDo = input.value;
                 if (toDo) {
                     wishList(toDo, id, false, false);
                     list.push({
                         name: toDo,
                         id: id,
                         done: false,
                         trash: false,
                     });

                     input.value = "";
                     id++;
                    }
                }
                 });

             let List = [];
             let id = 0;

             list = [{}, {}, ...];
             list[0];

             {
                 name: "Drink Coffe",
                 id: 0,
                 done: false,
                 trash: false,
             }

             list[1]; {
                 name: 'money',
                 id: 1,
                 done: true,
                 trash: false,
             }


             // wishList('weighted Blanket');
             // console.log("is this working");


             // const input = document.getElementById("input");
             // const dateItem = document.getElementById("date");
             // const clear = document.querySelector(".clear-item");
             // element.insertAdjacentHTML(position, text);