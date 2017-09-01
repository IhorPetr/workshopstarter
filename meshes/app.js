var scene = (function () {
    "use strict";

    var scene = new  THREE.Scene();
    var renderer =
        new THREE.WebGLRenderer({alpha:true});
    var camera;
    var itemsTorotate=[];

    function InitScene() {
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.getElementById('container').appendChild(renderer.domElement);
        camera = new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,1000);

        camera.position.x=-80;
        camera.position.z=200;

        scene.add(camera);
        var material = new THREE.MeshBasicMaterial({wireframe:true,color: 0xA1D490});
        var box = new  THREE.Mesh(new THREE.BoxGeometry(10,10,10),material);
        box.position.x=-4;
        itemsTorotate.push(box);
        scene.add(box);

        var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(10,10,10,32),material);
        cylinder.position.x=-30;
        itemsTorotate.push(cylinder);
        scene.add(cylinder);

        var  ring = new  THREE.Mesh(new THREE.RingGeometry(1,10,32),material);
        ring.position.x=-60;
        itemsTorotate.push(ring);
        scene.add(ring);

        var torus = new THREE.Mesh(new THREE.TorusGeometry(10,3,16,100),material);
        torus.position.x=-120;
        itemsTorotate.push(torus);
        scene.add(torus);

        var sphere = new THREE.Mesh(new THREE.SphereGeometry(10,32,10),material);
        sphere.position.x=-90;
        itemsTorotate.push(sphere);
        scene.add(sphere);

        var torusKnot = new THREE.Mesh(new THREE.TorusKnotGeometry(10,3,100,16),material);
        torusKnot.position.x=-150;
        itemsTorotate.push(torusKnot);
        scene.add(torusKnot);

        render();
    }

    function render() {
        for(var i=0;i<itemsTorotate.length;i++)
        {
            itemsTorotate[i].rotation.x+=0.03;
            itemsTorotate[i].rotation.y+=0.03;
            itemsTorotate[i].rotation.z+=0.03;
        }
        renderer.render(scene,camera);
        requestAnimationFrame(render);
    }
    return {
        initScene: InitScene
    }
})();