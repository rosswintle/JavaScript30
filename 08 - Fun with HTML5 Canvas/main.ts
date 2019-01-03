const canvas : HTMLCanvasElement | null = document.querySelector('canvas');
let context : CanvasRenderingContext2D | null = null;

if (canvas) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	canvas.addEventListener( 'mousemove', draw );

	canvas.addEventListener( 'mousedown', startDrawing );
	canvas.addEventListener( 'mouseup', endDrawing );

	context = canvas.getContext('2d');

	if (context) {
		context.lineJoin = 'round';
		context.lineCap = 'round';
	}

}


let isDrawing : boolean = false;
let lastX : number = 0;
let lastY : number = 0;
let hue : number = 0;
let width : number = 100;
let widthGrow : number = 2;

function startDrawing( e: MouseEvent ) {
	isDrawing = true;
	lastX = e.offsetX;
	lastY = e.offsetY;
}

function endDrawing( e: MouseEvent ) {
	isDrawing = false;
}

function draw( e: MouseEvent ) : null {
	console.log(e);
	if (isDrawing) {
		console.log('Drawing');

		if (context) {
			// Set colour
			context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
			hue = hue === 360 ? 0 : hue + 2;

			// Set width
			widthGrow = ( width === 100 || width === 0 ) ? -widthGrow : widthGrow; 
			width = width + widthGrow;

			// Draw!
			context.lineWidth = width;
			context.beginPath();
			context.moveTo(lastX, lastY);
			context.lineTo( e.offsetX, e.offsetY );
			context.stroke();
			lastX = e.offsetX;
			lastY = e.offsetY;
		}

	}


	return null;
}

