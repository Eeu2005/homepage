const overlay = document.querySelector(".overlay")
const titleInput = document.getElementById("link-nome")
const urlInput = document.getElementById("link-url")
const iconInput = document.getElementById("link-icon")
const colorInput = document.getElementById("cor-icone")
function fecharModal() { 
  overlay.classList.add("invisible")
}
function abrirModal() { 
  overlay.classList.remove("invisible")
}
document.addEventListener("keydown", function (event) {
  if (event.key === "q" && event.ctrlKey) {
    abrirModal()
  } else {
    if(event.key==="Escape"){
      fecharModal()
    }
  }
})
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    fecharModal()
  }
})


function salvarAtalho() { 
  /**
   * {
    icon: "ti-crop-landscape",
    nome: "blank",
    href: "about:blank",
    accentColor: "white",
  }[],
   */
  let database = localStorage.getItem("links") ? JSON.parse(localStorage.getItem("links")) :[]
  const link= {
    icon: iconInput.value,
    nome:titleInput.value,
    href: urlInput.value,
    accentColor: colorInput.value,
  }
  database.push(link)
  localStorage.setItem("links", JSON.stringify(database))
  iconInput.value = ""
  titleInput.value = ""
  urlInput.value = ""
  fecharModal()
}