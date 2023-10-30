const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

function ovr(){
    document.body.style.backgroundColor="white"
}

out=(ot)=>{
    document.body.style.backgroundColor="lime"
}


buttons.forEach((btn)=>{
    btn.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        // switch(e.target.id){
        //     case "grey" :
        //         body.style.backgroundColor=e.target.id;
        //         break;
        //     case "white" :
        //         body.style.backgroundColor=e.target.id;
        //         break;
        //     case "blue" :
        //         body.style.backgroundColor=e.target.id;
        //         break;
        //     case "yellow" :
        //         body.style.backgroundColor=e.target.id;
        //         break;
        //      case "purple":
        //          body.style.backgroundColor = e.target.id;
        //          break;
        //     default:
        //         break;
        // }
        if(e.target.id === "grey"){
            document.body.style.backgroundColor=e.target.id
        }
        if(e.target.id === "white"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor=e.target.id
        }
    })
})