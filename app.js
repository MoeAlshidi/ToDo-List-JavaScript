//declearing Elements
const input = document.querySelector("input");
const list = document.querySelector("ul");
const clear = document.getElementById("clear");
const date = document.getElementById("date");
let id = 0;




// show the date
const opt = { weekday: "long", month: "short", day: "numeric" };
today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", opt);



//add Tasks
const Add = (e) => {
  if (e.key == "Enter") {
    if (input.value != "") {
      let li = document.createElement("li");
      li.innerHTML = `<i class="far fa-circle" job="Complete" "data-id=${id}"></i> ${input.value} <i class="fas fa-trash"  job="Trash" "data-id=${id}"></i> `;
      list.appendChild(li);
      input.value = "";
      id++

    }

  }
}





//function to toggle the classes

list.addEventListener("click", (e) => {
  const element = e.target;
  const elementJob = element.getAttribute('job');
  let li_items = document.querySelectorAll("li");
  for (let i = 0; i < li_items.length; i++) {
    if (element.dataset.id === li_items[i].dataset.id && elementJob == "Complete") {
      element.classList.toggle("fa-circle");
      element.classList.toggle("fa-check-circle");
      element.parentNode.classList.toggle("done");
      return;
    }
    if (element.dataset.id === li_items[i].dataset.id && elementJob == "Trash") {
      element.parentNode.remove();
      return;


    }
  }


}
)

//refresh the page
clear.addEventListener("click", () => {
  location.reload();
})

//callback 
input.addEventListener("keydown", Add);





