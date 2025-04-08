
const cards = document.querySelector(".cards")
for (const link of window.links) {
const card = document.createElement("a")
card.href=link.href
card.target = "_blank";
  card.setAttribute("style", `--accent-color:${link.accentColor}`);
 card.classList.add("card")
 card.dataset.alt = link.alt || link.href
 card.dataset.originalHref = link.href
 card.innerHTML = `<i class="ti ${link.icon}"></i>
      <p>${link.nome}</p>`;
      card.addEventListener("mousemove",(e)=>{
        card.style.setProperty("--x",e.layerX+"px")
        card.style.setProperty("--y",e.layerY+"px")
      })

document.addEventListener("keydown",e=>{
  if(e.key == "Alt"){
    document.querySelectorAll(".card").forEach((card) => {
      card.href = card.dataset.alt
    });
  }
})
document.addEventListener("keyup", (e) => {
  if (e.key == "Alt") {
    document.querySelectorAll(".card").forEach((card) => {
      card.href = card.dataset.originalHref;
    });
  }
});
cards.appendChild(card)
}