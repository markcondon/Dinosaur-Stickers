function generateDino(){

	//generate a random number between 1 & 10. This will be the number for our dinosaur sticker
	var dino  = 'dino-'+randomNumber(10)+'.png';
	
	//Grab the width and the height of the document. We're subtracting 200 from the width because all the stickers have a fixed width of 200
	//This should prevent the stickers from appearing off to the side of the page creating a horizontal scroll bar
	var documentHeight = document.body.clientHeight;
	var documentWidth = document.body.clientWidth-200;
	
	
	//We're using the random number generator function to create 2 random coordinates based on the docs height and width
	var top = randomNumber(documentHeight)+'px';
	var left = randomNumber(documentWidth)+'px';
	
	//This will give us a random degree to rotate the image
	var rotate = randomNumber(-45);
	
	var newDinosaur = document.createElement('IMG');
	newDinosaur.setAttribute('src', 'dinosaurs/'+dino);
	newDinosaur.setAttribute("style", "position:absolute; z-index:100; top:"+top+"; left:"+left+"; -moz-transform:rotate("+rotate+"deg); -webkit-transform:rotate("+rotate+"deg);width:200px;");
	
	document.body.appendChild(newDinosaur); 
}

function randomNumber(heighest){
	return Math.floor(Math.random()*heighest +1)
}