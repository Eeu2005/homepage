
const cards = document.querySelector(".cards")
let altClicked = false
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