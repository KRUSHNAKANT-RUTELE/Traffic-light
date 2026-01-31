let lights = document.querySelectorAll('.circle')
console.log(lights)

let currentlight = 0

            // TURN OFF ALL THE LIGHTS
lights.forEach(light => light.style.opacity = 0)

            // TURN OF 1ST LIGHT
lights[currentlight].style.opacity = 1
setInterval(()=>{

            // TURN OF CURRENT LIGHT
    lights[currentlight].style.opacity = 0

            // MOVE TO NEXT LIGHT
    currentlight++
    if(currentlight > 2){
        currentlight = 0
    }
            // TURN ON LIGHTS
    lights[currentlight].style.opacity=1
},3000)
