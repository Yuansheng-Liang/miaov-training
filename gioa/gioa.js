let background = document.querySelector("#background");


// set up a function for moving background with mouse
function backgroundMove(background){
    let down = function(e){
        let startX = e.clientX, startY = e.clientY;
        let gapX = Number(background.style.backgroundPositionX.slice(0, -2)),
            gapY = Number(background.style.backgroundPositionY.slice(0, -2));

        let move = function(e){
            let x = e.clientX, y = e.clientY;
            let dx = x - startX, dy = y - startY;


            background.style.backgroundPositionX = gapX + dx + "px";
            background.style.backgroundPositionY = gapY + dy + "px"; 

            if(Number(background.style.backgroundPositionX.slice(0, -2)) < 0) {
                background.style.backgroundPositionX = "0px";
            } else if(Number(background.style.backgroundPositionX.slice(0, -2)) > 300) {
                background.style.backgroundPositionX = "300px";
            }

            if(Number(background.style.backgroundPositionY.slice(0, -2)) < 0) {
                background.style.backgroundPositionY = "0px";
            } else if(Number(background.style.backgroundPositionY.slice(0, -2)) > 485) {
                background.style.backgroundPositionY = "485px";
            }

        }
        let up = function(e) {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mousemove", up);
        }

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);
    }
    background.addEventListener("mousedown", down);
}

backgroundMove(background);




/*
    money price
    M       P

    total num(TN) = M / P

    

    bit num (BN) = TN * bit rate(BR)
    eos num (EN) = TN * eos rate(ER)
    xin num (XN) = TN * xin rate(XR)

    P = BR * bit price (BP) 
      + ER * eos price (EP) 
      + XR * xin price (XP)

*/