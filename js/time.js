dayjs.locale("pt-br")
const divHorario  = document.querySelector(".horario")
const divData  = document.querySelector(".data")
const setTime = async ()=>{
  const [error,clima] = await fetchClima()
  const isday = (clima) =>{
    if(clima.current.is_day==1){
      return "day"
    }else{
      return "night"
    }
  }
  const climaHTML = `
  <p>${
    weather_codes[clima.current.weather_code][isday(clima)].description
  }  <i class="ti ${
    weather_codes[clima.current.weather_code][isday(clima)].image
  }" ></i><p>
  <p>Tempearatura ${clima.current.temperature_2m}C°</p>
  `;

  const data = dayjs()
  divHorario.innerHTML = `
  <h1>${data.format("HH:mm")}</h1>
  <p>${mensagemDaHora(new Date())}</p>`;
  divData.innerHTML = `
  <h1>${data.format("MMMM")} ${data.format("DD")}</h1>
  <div>
  ${error ? "Error ao pegar o clima" : climaHTML}
  </div>
  `;
}
setTime()
setInterval(setTime,10000)

/**
 * @param {Date}data
 * @returns {string}
 */
function mensagemDaHora(data){
  const hora= data.getHours() 
  console.log(hora)
  if(hora==23|| hora<8){
    return "Vai Dormir"
  }
  if(hora>=8&&hora<12){
    return "Bom Dia"
  }
  if(hora>=12&&hora<18){
    return "Boa Tarde"
  }
  if(hora>=18&&hora<=22){
    return "Boa Noite"
  }
}
async function fetchClima(){
  try {
    const fetchData = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&current=temperature_2m,precipitation,weather_code,rain,is_day,apparent_temperature&timezone=America%2FSao_Paulo"
    );
    const data = await fetchData.json()
    return [null, data];
  } catch (error) {
    return [error,null]
  }
}
