const seachInput = document.getElementById("search");
seachInput.addEventListener("keypress",e=>{
  console.log(e)
  if(e.key=="Enter"){
    const url = `https://google.com/search?q=${e.target.value}`;
    location.href=url
  }
})