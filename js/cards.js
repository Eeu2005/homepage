
const cards = document.querySelector(".cards")
for (const link of window.links) {
const card = document.createElement("a")
card.href=link.href
  card.setAttribute("style", `--accent-color:${link.accentColor}`);
 card.classList.add("card")
 card.innerHTML = `<i class="ti ${link.icon}"></i>
      <p>${link.nome}</p>`;
      card.addEventListener("mousemove",(e)=>{
        console.log("evento",e)
        card.style.setProperty("--x",e.layerX+"px")
        card.style.setProperty("--y",e.layerY+"px")
      })


cards.appendChild(card)
}