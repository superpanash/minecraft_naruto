var canvas=new fabric.Canvas("myCanvas");

var block_img_width=30;

var block_img_height=30;

var player_x=10;

var player_y=10;

player_object="";

function player_update(){

    fabric.Image.fromURL("Naruto.png",function(Img){

        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object)
    })
}

function newImage(getImage){

    fabric.Image.fromURL(getImage,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x

        });

        canvas.add(block_img_object)
    })
}


window.addEventListener("keydown",myKeydown);

function myKeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey==true&&keypressed=="80"){
        console.log("Shift Key and p is pressed");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(e.shiftKey==true&&keypressed=="77"){
        console.log("Shift Key and m is pressed");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(keypressed=="38"){
        console.log("UP arrow is pressed");
        up();
    }

    if(keypressed=="40"){
        console.log("DOWN arrow is pressed");
        down();
    } 

    if(keypressed=="39"){
        console.log("RIGHT arrow is pressed");
        right();
    }

    if(keypressed=="37"){
        console.log("LEFT arrow is pressed");
        left();
    }

    if(keypressed=="71"){
        newImage("ground.png");
        console.log("g key is pressed");
    }

    if(keypressed=="68"){
        newImage("dark_green.png");
        console.log("d key is pressed");
    }

    if(keypressed=="76"){
        newImage("light_green.png");
        console.log("l key is pressed");
    }

    if(keypressed=="84"){
        newImage("trunk.jpg");
        console.log("t key is pressed");
    }

    if(keypressed=="82"){
        newImage("roof.jpg");
        console.log("r key is pressed");
    }

    if(keypressed=="89"){
        newImage("yellow_wall.png");
        console.log("y key is pressed");
    }

    if(keypressed=="85"){
        newImage("unique.png");
        console.log("u key is pressed");
    }

    if(keypressed=="67"){
        newImage("cloud.jpg");
        console.log("c key is pressed");
    }

    if(keypressed=="87"){
        newImage("wall.jpg");
        console.log("w key is pressed");
    }

}

function up(){
    if(player_y>=0){
        player_y=player_y-block_img_height;
        console.log("Block Height= "+block_img_height)
        console.log("When Up Arrow Is Clicked X is="+player_x+" ,y= "+player_y )
        canvas.remove(player_object);
        player_update();
    }

}

function down(){
    if(player_y<=500){
        player_y=player_y+block_img_height;
        console.log("Block Height= "+block_img_height)
        console.log("When Down Arrow Is Clicked X is="+player_x+" ,y= "+player_y )
        canvas.remove(player_object);
        player_update();
    }

}

function left(){
    if(player_x>=0){
        player_x=player_x-block_img_width;
        console.log("Block Width= "+block_img_width)
        console.log("When Left Arrow Is Clicked X is="+player_x+" ,y= "+player_y )
        canvas.remove(player_object);
        player_update();
    }

}


function right(){
    if(player_x<=900){
        player_x=player_x+block_img_width;
        console.log("Block Width= "+block_img_width)
        console.log("When Right Arrow Is Clicked X is="+player_x+" ,y= "+player_y )
        canvas.remove(player_object);
        player_update();
    }

}