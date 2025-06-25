const seachInput = document.getElementById("search");
let altPressed = false
addEventListener("keyup",(e)=>{
  if(e.key == "Alt"){
    altPressed=!altPressed
    if(altPressed){
      seachInput.classList.add("bypass");
    }else{
       seachInput.classList.remove("bypass");
    }
  }
})

const regex = /(http|https):\/\/([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?/i
seachInput.addEventListener("keypress",e=>{
  let value = e.target.value;  
  if(e.key=="Enter"){
    if(altPressed){
    const url = `https://google.com/search?q=${value}`;
    const a = document.createElement("a")
    a.href=url
    a.target="_blank"
    a.click()
    // document.appendChild(a)
    e.target.value = "";
    return
  }
    if(regex.test(value)){
      const a = document.createElement("a");
      a.href = value;
      a.target = "_blank";
      a.click();
    e.target.value = "";
      return
    }
    const url = `https://google.com/search?q=${value}`;
    const a = document.createElement("a")
    a.href=url
    a.target="_blank"
    a.click()
    // document.appendChild(a)
    e.target.value = "";
  }
})