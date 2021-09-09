/*var stage = document.getElementById('svs'), // Get the canvas element by Id
        ctx = stage.getContext('2d'), // Canvas 2d rendering context
        x = 20, //intial horizontal position of drawn rectangle
        y = 20, //intial vertical position of drawn rectangle
        wid = 30, //width of the drawn rectangle
        hei = 30; //height of the drawn rectangle

//Draw Rectangle function		
function drawRect(x,y,wid,hei) {
    ctx.fillStyle = '#red'; // Fill color of rectangle drawn
    ctx.fillRect(x, y, wid, hei); //This will draw a rectangle of 20x20*/





 window.onload= function () {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext)
    canvas.addEventListener("Keyboard",movit, true ); {
      var ctx = canvas.getContext('2d');
 
      ctx.fillRect( 100, 100, 30,30);
      var x=100
      var y=100
/*drawRect(x,y,wid,hei); //Drawing rectangle on initial load*/


function moveIT(e)
{

    if( e.keycode=="38")
    {
    
    
    ctx.Clearreact(  canvas.Height,canvas.widht);
     y = y -10  ;
     ctx.fillRect(x, y, 30, 30)
    
    }
    


    if (e.keycode=="40");
    {
    
    
    ctx.Clearreact (0, 0, canvas.height,canvas.widht);
     y = y +10  ;
     ctx.fillRect(x, y, 30, 30);
    
    }
    

    if( e.keycode ==37 ) 
    {
    
    
    ctx.Clearreact( 0, 0,canvas.height,canvas.widht);
     x = x -10  ;
     ctx.fillRect(x, y, 30, 30)
    
    }

    if( e.keycode=="39")
    {
    
    
    ctx.Clearreact( 0, 0,canvas.height,canvas.widht);
     x = x +10  ;
     ctx.fillRect(x, y, 30, 30)
    
    }
    


}

}






//move rectangle inside the canvas using arrow keys
/*window.onkeydown = function(event) {
    var keyPr = event.keyCode; //Key code of key pressed
  
    if(keyPr === 39 && x<=460){ 
        x = x+20; //right arrow add 20 from current
    }
    else if(keyPr === 37 && x>10){
        x = x-20; //left arrow subtract 20 from current
    }
    else if(keyPr === 38 && y>10) {
        y = y-20; //top arrow subtract 20 from current
    }
    else if(keyPr === 40 && y<=460){
        y = y+20; //bottom arrow add 20 from current
    }
		
  	/*clearing anything drawn on canvas
     *comment this below do draw path */
    //ctx.clearRect(0,0, 500, 500);
  
  	//Drawing rectangle at new position
   /* drawRect (x,y,wid, hei )*/