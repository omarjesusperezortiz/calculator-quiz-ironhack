console.log('Gracias por usar mi calculadora!')

// DECLARAMOS VARIABLES 
const clear = document.getElementById("clear")
const result = document.getElementById("result")
const display = document.getElementById("display")
const number = document.querySelectorAll('.number')
const numArray= Array.from(number);
const operador = document.querySelectorAll('.operador')
const operadoresArray= Array.from(operador);
let consoleNumber = 0

// FUNCION CLEAR
const clearDisplay = () => {

display.innerHTML = `0`
consoleNumber=0;

}

clear.addEventListener("click", clearDisplay)
  
// CON ESTO AGREGAMOS NUMEROS AL DISPLAY
numArray.forEach(element => element.addEventListener("click", function(){
    // `${display.innerHTML + element.innerHTML}`
    display.innerHTML = display.innerHTML + element.innerHTML
    while( display.innerHTML.charAt( 0 ) === '0' )
    {display.innerHTML = display.innerHTML.slice( 1 )}
    if (display.innerHTML == 0){
    display.innerHTML= 0
    }
    
    
}))

//CON ESTO AGREGAMOS LOS OPERADORES AL DISPLAY
operadoresArray.forEach(element => element.addEventListener("click", function(){
    //EVITAMOS UN CERO AL INICIO Y QUE SIGA SUMANDO CEROS.
    display.innerHTML= `${display.innerHTML}${element.innerHTML}`
    while( display.innerHTML.charAt( 0 ) === '0' )
    {display.innerHTML = display.innerHTML.slice( 1 )}
    //EVITAMOS QUE 
    display.innerHTML = display.innerHTML.replace('++', '+')
    display.innerHTML = display.innerHTML.replace('--', '-')
    display.innerHTML = display.innerHTML.replace('xx', 'x')
    display.innerHTML = display.innerHTML.replace('//', '/')
    display.innerHTML = display.innerHTML.replace('+/', '/')
    display.innerHTML = display.innerHTML.replace('-/', '/')
    display.innerHTML = display.innerHTML.replace('x/', '/')
    display.innerHTML = display.innerHTML.replace('/+', '+')
    display.innerHTML = display.innerHTML.replace('x+', '+')
    display.innerHTML = display.innerHTML.replace('-+', '+')
    display.innerHTML = display.innerHTML.replace('+-', '-')
    display.innerHTML = display.innerHTML.replace('x-', '-')
    display.innerHTML = display.innerHTML.replace('/-', '-')
    display.innerHTML = display.innerHTML.replace('+x', 'x')
    display.innerHTML = display.innerHTML.replace('-x', 'x')
    display.innerHTML = display.innerHTML.replace('/x', 'x')

    
}))

//CON ESTO EVALUAMOS LA INFORMACION DEL DISPLAY Y OBTENEMOS EL RESULTADO
//TAMBIEN SE AGREGA UN TRY/CATCH ERROR PARA MOSTRAR EN EL DISPLAY EN CASO HAYA ERROR
const resultado = () => {
try {
    display.innerHTML=eval(display.innerHTML.replace('x', '*'))
} catch (error) {
    display.innerHTML="Error"
}
}

result.addEventListener("click", resultado)
      

