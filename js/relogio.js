//DOM

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const saudacao = document.querySelector('#palavra')
const sol = document.querySelector('#sol')
const fundo = document.querySelector('body')
const noite = document.querySelector('#noite')
const tarde = document.querySelector('#tarde')


//EVENTOS

setInterval(relogio,1000)

//FUNÇÃO

function relogio(){
    let hoje = new Date()
    
    let hr = hoje.getHours()
    let min = hoje.getMinutes()
    let seg = hoje.getSeconds()
    let day = hoje.getDate()
    let month = hoje.getMonth() + 1;
    let year = hoje.getFullYear()
    
    if(hr<10){
        hr="0"+hr
    }
    if(min<10){
        min="0"+min
    }
    if(seg<10){
        seg="0"+seg
    }
    if(day<10){
        day="0"+ day
    }

    if(month<10){
        month="0"+ month
    }
    if(hr>5){
        saudacao.textContent = 'Bom dia!!'
        sol.src = 'images/Zon.webp'
        fundo.classList.remove('tarde')
        fundo.classList.remove('noite')
    }
    if(hr>12){
        saudacao.textContent = 'Boa Tarde!!'
        sol.src = 'images/Zon.webp'
        fundo.classList.add('tarde')
        fundo.classList.remove('noite')
        fundo.classList.remove('body')
    }
    if(hr>18){
        saudacao.textContent = 'Boa Noite!!'
        sol.src = 'images/Lun.webp'
        fundo.classList.add('noite')
        fundo.classList.remove('tarde')
        fundo.classList.remove('body')
        
    }
    

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    dia.textContent = day
    mes.textContent = month
    ano.textContent = year
}




