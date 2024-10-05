function saludar(){
    console.log('Diseño web 1')
    //alert('DEMACIAAAAAAAAAA')
    console.log(document)
    console.log(document.getElementById('parrafo1').innerHTML)

    console.log(document.getElementById('parrafo1').getAttribute('style'))
}

function cambiarParrafo2(){
    console.log('Button')
   
    document.getElementById('parrafo1').textContent = "Ils ne passeront pas"
    document.getElementById('parrafo2').textContent = "Bonjour"

}

function cambiarFondoBody(){
    const colores = ['#FFFFFF' , '#33FF57' , '#2222FF' , '#22FF11' , '#FF2222']
    const colorAlea = colores[Math.floor(Math.random() * 5) ]
    console.log(colorAlea)
    document.getElementById('cuerpo').style.backgroundColor = colorAlea
}