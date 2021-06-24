$(document).ready(function(){
    $('.btn1').click(function(){

        $('.box2').addClass('active')
        if($('.input').val() != 0){
            let value =$("<div class='list'></div>").text($('.input').val());
            let deleteBtn = $("<i class ='fa fa-trash'></i>").click(function(){
                let removeAdded = $(this).parent();
                removeAdded.fadeOut(function(){
                //    console.log(removeAdded)
                removeAdded.remove()
                $('.list2').append(removeAdded);
                removeAdded.fadeIn()

                deleteBtn.removeClass()
                     
                });
            })
            // let list = $("<div class ='items'></div>");
            value.append(deleteBtn)
            $('.items').append(value);
            $('.input').val("");
        }else{
            alert('input text')
        };
    })

    $('.btn2').click(function(){
        $('.list2').remove();
        $('.btn2').css({background:'red', color:'white'});
    })


})








































// var canvas = document.createElement('canvas');
// vic = canvas.getContext('2d');
// vic = canvas.getContext('2d');

// canvas.width = 400;
// canvas.height = 400;

// document.body.appendChild(canvas);

// vic.fillStyle = 'black';
// vic.fillRect(0, 0, canvas.width, canvas.height);

// var posX = 200;
// posY = 200;
// dx = 0;
// dy = 1;

// setInterval (function(){   
// vic.fillStyle = 'black';
// vic.fillRect(0, 0, canvas.width, canvas.height);
//     posX += dx;
//     posY += dy;

//     if(posX > 390){
//         dx =0;
//         posx = 390;  
//     }

//     if(posX < 0){
//         dx =0;
//         posx = 0;  
//     }
    
//     if(posY > 390){
//         dy =0;
//         posy = 390;  
//     }
    
//     if(posY < 0){
//         dy = 0;
//         posy = 0;  
//     }


// vic.fillStyle = 'white';
// vic.fillRect(posX, posY, 10, 10);
// },20 );

// window.addEventListener('keydown', move,true);
// function move(e){
//     switch(e.keyCode){
//         case 37: 
//         dx = -1;
//         dy = 0;
//         break;

//         case 38: 
//         dx = 0;
//         dy = -1;
//         break;

//         case 39: 
//         dx = 1;
//         dy = 0;
//         break;

//         case 40: 
//         dx = 0;
//         dy = 1;
//         break;

//         case 32: 
//             dx = 0;
//             dy = 0;
//             break;
//     }

// }