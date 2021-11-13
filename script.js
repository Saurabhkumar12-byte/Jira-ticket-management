let add = document.querySelector(".add");
let display = false;
let modal = document.querySelector(".modal");
add.addEventListener("click",(e)=>{
    display=!display;
    if (display) modal.style.display="flex"
    else modal.style.display="none"
   
})

let colorBox= document.querySelector(".priority");
children= colorBox.children;
for (let i = 0; i < children.length-1; i++) {
    children[i].addEventListener("click",(e)=>{
        let border= document.querySelector(".border");
        border.classList.remove("border");
        children[i].classList.add("border");
    })
    
}

let button= document.querySelector("button");
button.addEventListener("click",(e)=>{
   
         createTicket();      
    
})

function createTicket() {
    let textArea = document.querySelector("textarea");
    if (!textArea.value) {
       return alert("you must enter something to generate ticket")
    }
    let main =document.querySelector(".main")
    // console.log(main.innerHTML);
    let border= document.querySelector(".border");
    let url;
    
    if(border.getAttribute("data-color")==="pink"){
        url='1.png'
        console.log(url);
        
    }
    else if(border.getAttribute("data-color")==="green"){
        url='2.png'
    }
    else if(border.getAttribute("data-color")==="blue"){
        url='3.png'
    }
    else{
        url='4.png'
    }
    let div = document.createElement("div");
    div.setAttribute("class","ticket");
    div.innerHTML=`<div class="ticket-color"></div>
    <div class="ticket-id"></div>
    <div class="ticket-content" style="background-image:url(${url})" >${textArea.value}</div>`;
    main.appendChild(div);
    display=false;
    modal.style.display="none"
    textArea.value="";

}