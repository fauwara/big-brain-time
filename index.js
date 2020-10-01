let primColor = "#adff00";
let secColor = "#363636";

let button = document.getElementsByTagName('button');
let nextButton = '0-0';
let cont = 0;

function winnerDeclaration(){
    alert(' Omedetō 🎀 ');
}


function clicked(element){
    if ( nextButton == '0-0'){
        element.style.backgroundColor = primColor;
        nextButton = element.classList[1];
        cont++;
        if( cont == 13 ){ winnerDeclaration(); }
    
    }else{
        if( `box-${nextButton}` == element.id ){
            element.style.backgroundColor = primColor;
            nextButton = element.classList[1];
            cont++;
            if( cont == 13 ){ winnerDeclaration(); }
            
        }else{
            nextButton = '0-0'
            for (const i in button) {
                button[i].style.backgroundColor = secColor ;
                cont = 0;
            }
        }
    }
}