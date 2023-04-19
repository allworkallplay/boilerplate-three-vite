import * as THREE from 'three';
import GUI from 'lil-gui';

export default class App {

    constructor() {
        this.dom = {
            app: document.getElementById('app'),
        };

        // scene
        this.scene, this.camera, this.renderer = null;
    }

    init() {
        this.setupScene();
        this.addObjects();
        this.addLights();

        this.addGUI();

        this.initComplete();
    }

    initComplete() {
        this.update();
    }

    setupScene() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.dom.app.appendChild(this.renderer.domElement);
    }

    addObjects() {
    }

    addLights() {
    }

    update() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.update.bind(this));
    }


    // GUI
    //

    addGUI() {
        // add GUI for this.pointLight
        this.gui = new GUI();

        // add gui for camera
        const cameraFolder = this.gui.addFolder('Camera');
        cameraFolder.add(this.camera.position, 'x', -10, 10, 0.01);
        cameraFolder.add(this.camera.position, 'y', -10, 10, 0.01);
        cameraFolder.add(this.camera.position, 'z', -10, 10, 0.01);
    }
}