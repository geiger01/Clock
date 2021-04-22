const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hrsHand = document.querySelector(".hour-hand");
const hands = document.querySelector(".hand");

function setDate(){
        const now= new Date();
        const seconds = now.getSeconds();
        const secondsDegree = ((seconds/60)*360)+90;

        const min = now.getMinutes()
        const minDegree = ((min/60)*360)+90;

        const hrs = now.getHours();
        const hrsDegree = ((hrs/12)*360)+90;

        secondHand.style.transform = `rotate(${secondsDegree}deg)`;
        minHand.style.transform = `rotate(${minDegree}deg)`;
        hrsHand.style.transform = `rotate(${hrsDegree}deg)`;

        


}

setInterval(setDate, 1000);