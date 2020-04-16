const stretchVids = ['shorturl.at/loRWY', 'shorturl.at/qvQ24', 'shorturl.at/QXY23'];
const exerciseVids = [];

document.addEventListener('DOMContentLoaded', function() {
    const leftSide = document.getElementsByClassName('left Side');
    // onClick's logic below:
    left.addEventListener('click', function() {
        stretches();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const rightSide = document.getElementsByClassName('right Side');
    // onClick's logic below:
    right.addEventListener('click', function() {
        exercises();
    });
});

// $(document).ready(() => {
//     // $('#left').on('click', function() { 
//     //     $('.left').animate({width:'100%'}, 500);
//     //     $('.right').fadeOut('slow')
//     //     $('#leftVideo').fadeIn('slow')
//     // });


//     $('leftSide').bind('click', function() { 
//         alert('this works')
//         $('.left').animate({width:'100%'}, 500);
//         $('.right').fadeOut('slow')
//         $('#leftVideo').fadeIn('slow')
//     });


//     $('.right').bind('click', function() {
//         alert('this works')
//     })

// })

  

const stretches = () => {
    // $(".split left").style.background-color = green;
    // $('.right').css('background', 'green');
    $('.left').animate({width:'100%'}, 500);
    $('.right').fadeOut('slow')
    $('#leftVideo').fadeIn('slow')
    // $('#left').animate({top: "-10%"}, 500)
};


// $('.split left').click(function(){
//     $('.split left').animate({width:'100%'}, 500);
    
// });



const exercises = () => {
    $('.right').animate({width:'100%'}, 500);
    $('.left').fadeOut('slow')
    $('#rightVideo').fadeIn('slow')
};