var scene = (function () {
    "use strict";

    var scene = new  THREE.Scene();
    var renderer = window.WebGLRenderingContext ?
        new THREE.WebGLRenderer({alpha:true}) : new THREE.CanvasRenderer();
    var camera,box;

    function InitScene() {
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.getElementById('container').appendChild(renderer.domElement);
        camera = new THREE.PerspectiveCamera(35,window.innerWidth/innerHeight,1,1000);
        camera.position.x=10;
        camera.position.y=5;
        camera.position.z=150;

        scene.add(camera);
        box = new  THREE.Mesh(new  THREE.BoxGeometry(30,30,30),new THREE.MeshBasicMaterial({color:0xff0000}));
        scene.add(box);
        var axisHelper = new THREE.AxisHelper(500);
        scene.add(axisHelper);

        render();
    }

    function render() {
        box.rotation.x +=0.01;
        box.rotation.y+=0.01;
        renderer.render(scene,camera);
        requestAnimationFrame(render);
    }
    return {
        initScene: InitScene
    }
})();