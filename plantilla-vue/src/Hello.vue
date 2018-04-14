
<template>
    <div id="app">
        <div><video ref="video" id="video" width="640" height="480" autoplay></video></div>
        <a id="download">
        <div><button  v-on:click="capture()">Snap Photo</button></div>
        </a>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
        <ul>
            <li v-for="c in captures">
                <img v-bind:src="c" height="50" />
            </li>
        </ul>
    </div>
</template>


<script>

var canvas = document.getElementById("miCanvas");

function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}
  
    export default {
        name: 'app',
        data() {
            return {
                video: {},
                canvas: {},
                captures: []
            }
        },
        mounted() {
    this.video = this.$refs.video;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.srcObject = stream;
            this.video.play();
        });
    }
},


        methods: {
            
    capture() {
        var filename = prompt("Guardar como...","Nombre del archivo");
    
        link = document.getElementById("download");
        //Otros navegadores: Google chrome, Firefox etc...
        link.href = canvas.toDataURL("image/png");// Extensión .png ("image/png") --- Extension .jpg ("image/jpeg")
        link.download = filename;

    }
}

    }
</script>

<style>
    body{
        background-color: #F0F0F0;
    }
    #app {
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #video {
        background-color: #000000;
    }
    #canvas {
        display: none;
    }
    li {
        display: inline;
        padding: 5px;
    }
</style>