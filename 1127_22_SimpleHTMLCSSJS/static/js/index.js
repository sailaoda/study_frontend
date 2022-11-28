/* let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; */

document.querySelector('h1').onclick = function() {
	alert('1111');
}

document.querySelector('img').addEventListener('click', () => {
	alert('this is img');
});

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'static/images/box-model.png') {
		myImage.setAttribute('src', 'static/images/container.png');
	} else {
		myImage.setAttribute('src', 'static/images/box-model.png');
	}
}

// document.querySelector('h1').textContent = 'Hello World!';

document.querySelector('h1').addEventListener('click', () => {
	alert('dfkjlasf');
});
document.querySelector('h1').onclick = function(){};