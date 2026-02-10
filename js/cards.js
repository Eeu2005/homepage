
const cards = document.querySelector(".cards")
let altClicked = false
for (const index in window.links) {
  const link = window.links[index]
  console.log(link)
const card = document.createElement("a")
card.href=link.href
card.target = "_blank";
  card.setAttribute("style", `--accent-color:${link.accentColor}`);
 card.classList.add("card")
 card.dataset.alt = link.alt || link.href
  card.dataset.originalHref = link.href
  card.dataset.id = index

card.innerHTML = `<i class="ti ${link.icon}"></i>
      <p>${link.nome}</p>`;
      card.addEventListener("mousemove",(e)=>{
        card.style.setProperty("--x",e.layerX+"px")
        card.style.setProperty("--y",e.layerY+"px")
      })

  card.addEventListener("click", e => {
    if (!e.ctrlKey) return
    e.preventDefault()
    
    let arr = ["sfa"]
    let database = localStorage.getItem("links") ? JSON.parse(localStorage.getItem("links")) : []
    const x = database.findIndex(e => {

      return e.nome==link.nome
    })
    console.log(arr.splice())
    database.splice(x, 1) 
    localStorage.setItem("links", JSON.stringify(database))
    console.log(database)
  })
    cards.appendChild(card)
}
document.body.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key == "Alt") {
    altClicked = !altClicked;
  }

  if (altClicked) {
    document.querySelectorAll(".card").forEach((card) => {
      card.href = card.dataset.alt;
      card.classList.add("alt");
    });
  } else {
    document.querySelectorAll(".card").forEach((card) => {
      card.href = card.dataset.originalHref;
      card.classList.remove("alt");
    });
  }
});