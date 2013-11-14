


var canvas = null;
var ctx = null;
var frameRate = 1000/30;
var frame = 0;
var assets = ['/media/img/gamedev/robowalk/robowalk00.png',
              '/media/img/gamedev/robowalk/robowalk01.png',
              '/media/img/gamedev/robowalk/robowalk02.png',
              '/media/img/gamedev/robowalk/robowalk03.png',
              '/media/img/gamedev/robowalk/robowalk04.png',
              '/media/img/gamedev/robowalk/robowalk05.png',
              '/media/img/gamedev/robowalk/robowalk06.png',
              '/media/img/gamedev/robowalk/robowalk07.png',
              '/media/img/gamedev/robowalk/robowalk08.png',
              '/media/img/gamedev/robowalk/robowalk09.png',
              '/media/img/gamedev/robowalk/robowalk10.png',
              '/media/img/gamedev/robowalk/robowalk11.png',
              '/media/img/gamedev/robowalk/robowalk12.png',
              '/media/img/gamedev/robowalk/robowalk13.png',
              '/media/img/gamedev/robowalk/robowalk14.png',
              '/media/img/gamedev/robowalk/robowalk15.png',
              '/media/img/gamedev/robowalk/robowalk16.png',
              '/media/img/gamedev/robowalk/robowalk17.png',
              '/media/img/gamedev/robowalk/robowalk18.png'
             ];
var frames = [];

var onImageLoad = function(){
    console.log("IMAGE!!!");
};

var setup = function() {
    body = document.getElementById('body');
    canvas = document.createElement('canvas');

    ctx = canvas.getContext('2d');
    
    canvas.width = 100;
    canvas.height = 100;

    body.appendChild(canvas);

    // Load each image URL from the assets array into the frames array 
    // in the correct order.
    // Afterwards, call setInterval to run at a framerate of 30 frames 
    // per second, calling the animate function each time.
    // YOUR CODE HERE
    for (i = 0; i < assets.length; i++) {
        frames.push(new Image());
        frames[i].onLoad = onImageLoad;
        frames[i].src=assets[i];
    }
    setInterval(animate, frameRate);
};

var animate = function(){
    // Draw each frame in order, looping back around to the 
    // beginning of the animation once you reach the end.
    // Draw each frame at a position of (0,0) on the canvas.
    
    // Try your code with this call to clearRect commented out
    // and uncommented to see what happens!
    //
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.drawImage(frames[frame], 100, 100);
    frame = (frame + 1 ) % frames.length;
    
    // YOUR CODE HERE
};

// We'll call your setup function in our test code, so
// don't call it in your code.
// setup();


