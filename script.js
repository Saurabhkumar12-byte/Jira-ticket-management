let add = document.querySelector(".add");
let display = false;
let modal = document.querySelector(".modal");
var ticketColor;
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
        ticketColor = children[i].classList[1];
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
    div.innerHTML=`<div class="ticket-color ${ticketColor}"></div>
   
    <div class="ticket-content" style="background-image:url(${url})" >${textArea.value}</div>`;
    main.appendChild(div);
    display=false;
    modal.style.display="none"
    textArea.value="";
    for (let i = 0; i < children.length-1; i++) {
        
            border.classList.remove("border");

       
    }
    children[3].classList.add("border")
}

let remove= document.querySelector(".remove");
remove.addEventListener("click", (e)=>{
    document.querySelectorAll(".ticket").forEach(element => {
        element.addEventListener("click",()=>{
            element.style.display="none";
        })
    });
//     remove.addEventListener("dblclick", function remove(params) {
//         // console.log('removed');
//         remove.removeEventListener('click', function ge() {
//             console.log('Button Clicked');
//          });
            
//    })
})

// let priorityCont= document.querySelector(".priority-cont");
// let priorchildren= priorityCont.children;
// for (let i = 0; i < priorchildren.length; i++) {
//     const element = priorchildren[i];
    
//     element.addEventListener("click", ()=>)
    
// }


