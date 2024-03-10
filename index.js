function test() {
    console.log('success');
}

let state = 0;

let title = document.querySelector(".titleScreen");

let info = document.querySelector(".info");

let infoButtonbx = document.querySelector(".infoButtonbx");

const infoHeight = info.offsetHeight;


function infoShow() {
    if (state === 0) {
        state++;
    } else if (state === 1) {
        state--;
    }
    // console.log(state);
    handleAnim();
}

function handleAnim() {
    const viewportHeight = window.innerHeight;

    const viewportHeightPx = (infoHeight / viewportHeight) * 100;

    const infoHeightPx = viewportHeightPx.toFixed(0);

    const moveHeight = 100 - infoHeightPx;
    console.log(moveHeight);

    
    if (state === 0) {
        title.style.height = 100 + 'vh';
        infoButtonbx.style.height = '95%';
    } else if (state === 1) {
        title.style.height = moveHeight + 'vh';
        infoButtonbx.style.height = (moveHeight - 5) + 'vh';
    }
}