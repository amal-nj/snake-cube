import React, { Component } from 'react'
import * as THREE from "three";

export default class Game extends Component {
  constructor(){
      super();
      this.render=this.render.bind(this);
      this.gameLoop=this.gameLoop.bind(this);
  }
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    cubeArr=[];
    renderThree(){
        this.renderer.render(this.scene, this.camera);
    }
    gameLoop(){
        requestAnimationFrame(this.gameLoop);
        // update();
        this.renderThree();
    }
    componentDidMount() {
        this.scene.background = new THREE.Color(0xCCFFDD);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio( window.devicePixelRatio );
        document.body.appendChild(this.renderer.domElement);
        this.camera.position.set(8,-3,15);
        // this.camera.rotation.x=5;
        let color=[0xffDD00, 0xffDDff];
        let isColor=true;

        for(let i=0;i<27;i++){
            var geomtry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color:isColor?color[0]:color[1] , wireframe: false });
            var cube = new THREE.Mesh(geomtry, material);
            this.cubeArr.push(cube);
            this.scene.add(cube);
            isColor=!isColor;
        }
        this.cubeArr[0].position.set(0,0,0);
        this.cubeArr[1].position.set(1,0,0);
        this.cubeArr[2].position.set(2,0,0);
        this.cubeArr[3].position.set(2,-1,0);
        this.cubeArr[4].position.set(3,-1,0);
        this.cubeArr[5].position.set(3,-2,0);
        this.cubeArr[6].position.set(3,-3,0);
        this.cubeArr[7].position.set(4,-3,0);
        this.cubeArr[8].position.set(4,-4,0);
        this.cubeArr[9].position.set(4,-5,0);
        this.cubeArr[10].position.set(5,-5,0);
        this.cubeArr[11].position.set(5,-6,0);
        this.cubeArr[12].position.set(6,-6,0);
        this.cubeArr[13].position.set(7,-6,0);
        this.cubeArr[14].position.set(7,-7,0);
        this.cubeArr[15].position.set(7,-8,0);
        this.cubeArr[16].position.set(8,-8,0);
        this.cubeArr[17].position.set(8,-9,0);
        this.cubeArr[18].position.set(9,-9,0);
        this.cubeArr[19].position.set(9,-10,0);
        this.cubeArr[20].position.set(9,-11,0);
        this.cubeArr[21].position.set(10,-11,0);
        this.cubeArr[22].position.set(11,-11,0);
        this.cubeArr[23].position.set(11,-12,0);
        this.cubeArr[24].position.set(11,-13,0);
        this.cubeArr[25].position.set(12,-13,0);
        this.cubeArr[26].position.set(13,-13,0);

        this.gameLoop();
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
