const container= document.getElementById("container")

for (let i=0; i<16*16; i++){
    const square= document.createElement("div")
    square.style.width= "50px"
    square.style.height= "50px"
    square.classList.add("squares")
    container.appendChild(square)
}

const square = document.getElementsByClassName("squares")

Array.from(square).forEach((square)=>{
    square.addEventListener("mouseenter",()=>{
            square.style.backgroundColor= "black"
            square.style.opacity= "0.2"
    })
})

const button= document.getElementById("btn")
button.addEventListener("click",()=>{
    number=prompt("how many squares you want big guy?")
    while (!(100>=number && number>0)){
        number=prompt("chose a NUMBER between 0 and 100 :)")

    }
    let squareSize= 800/number
    container.innerHTML=""
    for (let i=0;i<number*number;i++){
        const square= document.createElement("div")
        square.classList.add("squares")
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseenter",()=>{
            square.style.backgroundColor= "black"
            square.style.opacity= "0.2"
        })
        container.appendChild(square)



    }
})

