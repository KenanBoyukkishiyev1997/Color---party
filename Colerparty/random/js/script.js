
function RandomColorGenerator(){
    let symbols = "0123456789abcdef".split("");
    let color = "#";

    for(let i = 1; i <= 8; i++){
        color += symbols[RandomNumberGenerator(0, 15)];
    }

    return color;
}

function RandomNumberGenerator(min, max){
    return min + Math.round(Math.random()*(max-min));
}

let timeInterval;
 function Starter() {
	timeInterval = setInterval(function() {
		let div =document.createElement('div');
		div.classList.add('exp');
		section.appendChild(div);
		div.style.width = '150px';
		div.style.height = '100px';
		div.style.background = RandomColorGenerator(1,100);
		div.style.top = RandomNumberGenerator(1,50)+'%';
		div.style.left = RandomNumberGenerator(1,130)+'%';
		div.style.bottom = RandomNumberGenerator(1,50)+'%';
		div.style.right = RandomNumberGenerator(1,130)+'%';
		div.style.borderRadius = '100%';
	},10)
};

star2.onclick = function(){
	Starter();
}

stop2.onclick = function() {
	clearInterval(timeInterval);
}




