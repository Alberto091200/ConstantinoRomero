const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}
function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
   return `<p>${pregunta.titulo}</p>`
}

let respuesta = pregunta.respuestas

function imprimeTodasLasRespuestas(pregunta) {
  
  let todasRespuestas = ""

 for (let i = 0; i < todasRespuestas; i++){
  todasRespuestas += imprimeUnaRespuesta(respuesta[i])
 }
 
 return todasRespuestas
 
  /*   for (let i = 0; i < 5; i++){
    return `${pregunta.respuestas}`
  } */
}

function imprimeUnaRespuesta(respuesta) {
  //return `${pregunta.respuestas.label[0, 1, 2, 3, 4]}`
  //return `${imprimeInput} ${imprimeInput}` 
  let answer = "";
  answer += imprimeLabel(respuesta);
  answer += imprimeInput(respuesta);

  return answer;
}



function imprimeLabel(respuesta) {
 // return `<label for = ${respuesta.id}${respuesta.label}</label>`
 let label = ""
 label += `<label for = "${respuesta.id}"> ${respuesta.label}</label>`
 return label
}

function imprimeInput(respuesta) {
  //return `<input id = ${respuesta.id}${respuesta.name} type = "radio" ${respuesta.value}</input>`
  let input = ""
  input += `<input id= ${respuesta.id} name= ${respuesta.name} type="radio" value= ${respuesta.value}>`
  return input
}

//----------------------------------------------------------------
//Las partes que estan comentadas es mi codigo anterior antes de ponernos a ver como se hacia (la clase)
//Ahora mismo en la linea 51, en (pregunta), me pone que esta declarada pero no se lee, no encuentro el motivo
//----------------------------------------------------------------

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);