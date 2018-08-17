
// Polyfill: http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/


window.onload = function() {
    
    const body = document.body;    
    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;
    
    const demon = document.querySelector('.demon');
    let fireballPositionLeft = 0;
    let fireballPositionTop = 0;
    let fireballPositionBottom = 0;
    let fireballPositionRight = 0;
    const fireballs = ['left', 'top', 'bottom', 'right'];
    const fireballLeft = document.querySelector('.fireballLeft');
    const fireballTop = document.querySelector('.fireballTop');
    const fireballBottom = document.querySelector('.fireballBottom');
    const fireballRight = document.querySelector('.fireballRight');
    let button = document.querySelector('button');

    // let min = 0;
    // let max = 0;

    
    // function renderFrame() {
    //     fireballPosition += 2;
    //     fireballLeft.style.left = fireballPosition + 'px';
    //     fireballTop.style.top = fireballPosition + 'px';
    //     fireballBottom.style.bottom = fireballPosition + 'px';
    //     fireballRight.style.right = fireballPosition + 'px';

    //     requestAnimationFrame(renderFrame);
    // };
    
    function shootLeftFireball() {
        fireballPositionLeft += 1;
        fireballLeft.style.left = fireballPositionLeft + 'px';
        requestAnimationFrame(shootLeftFireball);
        if(fireballPositionLeft === 700) {
            fireballPositionLeft = 0;
        }
    }
    
    function shootTopFireball() {
        fireballPositionTop += 1;
        fireballTop.style.top = fireballPositionTop + 'px';
        requestAnimationFrame(shootTopFireball);
        if(fireballPositionTop === 700) {
            fireballPositionTop = 0;
        }
    }
    
    function shootBottomFireball() {
        fireballPositionBottom += 1;
        fireballBottom.style.bottom = fireballPositionBottom + 'px';
        requestAnimationFrame(shootBottomFireball);
        if(fireballPositionBottom === 700) {
            fireballPositionBottom = 0;
        }
    }
    
    function shootRightFireball() {
        fireballPositionRight += 1;
        fireballRight.style.right = fireballPositionRight + 'px';
        requestAnimationFrame(shootRightFireball);
        if(fireballPositionRight === 700) {
            fireballPositionRight = 0;
        }
    }
    
    const shootFireballs = [
        shootLeftFireball,
        shootTopFireball,
        shootBottomFireball,
        shootRightFireball
    ];
    
    button.addEventListener('click', function() {

       setTimeout(shootFireballs[0], Math.floor(Math.random() * 7000));
       setTimeout(shootFireballs[1], Math.floor(Math.random() * 7000));
       setTimeout(shootFireballs[2], Math.floor(Math.random() * 7000));
       setTimeout(shootFireballs[3], Math.floor(Math.random() * 7000));
       
       
        // for(i = 0; i < shootFireballs.length; i++) {
        //     // let randomFireball = shootFireballs[Math.random() * shootFireballs.length];
        //     shootFireballs[i]();
        // }
    });
    
    // function continuousFireballs() {
    //     setTimeout(function() {
    //         requestAnimationFrame(renderFrame);
    //     }, 1000);
    // }
    
    document.body.addEventListener('keydown', function(event) {
        if (event.keyCode === 37) {
            buildBorderLeft();
            setTimeout(function() {
            demon.classList.toggle = ('.demonEvolve');
            }, 500);    
        } else if (event.keyCode === 38) {
            buildBorderTop();
            setTimeout(function() {
            demon.classList.toggle = ('.demonEvolve');
            }, 500);    
        } else if (event.keyCode === 39) {
            buildBorderRight();
            setTimeout(function() {
            demon.classList.toggle = ('.demonEvolve');
            }, 500);    
        } else if (event.keyCode === 40) {
            buildBorderBottom();
            setTimeout(function() {
            demon.classList.toggle = ('demonEvolve');
            }, 500);    
        }
    });
    
    function blockFireball() {
        let fireballEdge = {
            x: 5, 
            y: 5, 
            width: 50, 
            height: 50,
        }
        let borderEdge = {
            x: 20, 
            y: 10, 
            width: 10, 
            height: 10,
        }
    
if (fireballEdge.x < borderEdge.x + borderEdge.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.y + rect1.height > rect2.y) {
    // collision detected!
    }
}
    
    function buildBorderLeft() {
        // setTimeout(function() {
            demon.style.borderLeft = '5px solid black';
        // }, 500);
    }
    
    function buildBorderTop() {
        // setInterval(function() {
            demon.style.borderTop = '5px solid black';
        // }, 500);
    }

    function buildBorderRight() {
        // setInterval(function() {
            demon.style.borderRight = '5px solid black';
        // }, 500);
    }
    

    function buildBorderBottom() {
        // setInterval(function() {
            demon.style.borderBottom = '5px solid black';
        // }, 500);
    }
    

}




// https://itnext.io/javascript-raf-requestanimationframe-456f8a0d04b0
// 60 FPS
// (1000 ms /60 frames) = 16.7 ms. Let’s move our DOM element 1px in callback execution while 
// callback needs to be called at every 16.7ms.