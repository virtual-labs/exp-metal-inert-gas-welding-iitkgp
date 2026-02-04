/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */

import * as THREE from 'three' ;

import { STLLoader } from './threejs/jsm/loaders/STLLoader.js';

import {OrbitControls} from './threejs/jsm/controls/OrbitControls.js';
import WebGL from 'three/addons/capabilities/WebGL.js';


function aditya(){
const mn=0.0001;
const mx=100;
var actme, arnme, mldme, trnme;
const sizs={
    wd:window.innerWidth*0.65,
    ht:window.innerHeight*0.65
};
let l=(sizs.wd / sizs.ht /1000).toFixed(4);
let b=(sizs.wd / sizs.ht /1000).toFixed(4);
let h=(sizs.wd / sizs.ht /1000).toFixed(4);
window.addEventListener("resize",()=>{
    rndr.setSize(sizs.wd, sizs.ht, mn, mx);
    $("#smaw").animate({
        width:sizs.wd,
        height:sizs.ht
    },1);
    window.location.reload();
});
const stldr = new STLLoader();
const scn=new THREE.Scene();
const lgt=new THREE.PointLight(0xffffff, mn, mx);
lgt.position.set(20, 20, 20);
const cam=new THREE.PerspectiveCamera(45, sizs.wd / sizs.ht, mn, mx);
cam.position.set(-2.0,0.8,1.5);
scn.add(cam);            
scn.add(lgt);

const cnvs= document.querySelector("#gmaw");
const rndr=new THREE.WebGLRenderer({canvas:cnvs});

rndr.setSize(sizs.wd, sizs.ht, mn, mx);
rndr.render(scn,cam);



stldr.load( './images/wldma.stl', function ( act ) {
    const actma = new THREE.MeshBasicMaterial( { opacity: act.alpha, vertexColors: true } );
    actme = new THREE.Mesh( act, actma );
	scn.add( actme );
    actme.position.set( sizs.wd / sizs.ht*2, sizs.wd / sizs.ht*0.0, 0 );
    actme.rotation.set( -Math.PI/2, 0, Math.PI/1 );
    actme.scale.set(l*0.8, b*0.8, h*0.8 );
    actme.castShadow = true;
    actme.receiveShadow = true;

}, undefined, function ( error ) {

	//console.error( error );

} );
let ml='./images/wrkpclmp.stl';
stldr.load(ml, function ( mld ) {
    const mldma = new THREE.MeshMatcapMaterial( { opacity: mld.alpha, vertexColors: true } );
    mldme = new THREE.Mesh( mld, mldma );
	scn.add( mldme );
    mldme.rotation.set( -Math.PI / 2, 0, Math.PI/1.2*0 );
    mldme.position.set( sizs.wd / sizs.ht*0.19 , -sizs.wd / sizs.ht*0, sizs.wd / sizs.ht*0.3 );
    mldme.scale.set(sizs.wd / sizs.ht*0.002 , sizs.wd / sizs.ht*0.002, sizs.wd / sizs.ht*0.002 );
    mldme.castShadow = true;
    mldme.receiveShadow = true;

}, undefined, function ( error ) {

	//console.error( error );

} );


const tr='./images/trch.stl';
stldr.load(tr, function ( trn ) {
    const trnma = new THREE.MeshMatcapMaterial( { opacity: trn.alpha, vertexColors: true } );
    trnme = new THREE.Mesh( trn, trnma );
	scn.add( trnme );
    trnme.rotation.set( Math.PI/2, -Math.PI/2, Math.PI/2*0 );
    trnme.position.set(-sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.16, sizs.wd / sizs.ht*0.38);
    trnme.scale.set(l,b,h );
    trnme.castShadow = true;
    trnme.receiveShadow = true;

}, undefined, function ( error ) {

	//console.error( error );

} );

const ar='./images/arc.stl';
stldr.load(ar, function ( arn ) {
    const arma = new THREE.MeshMatcapMaterial( { opacity: arn.alpha, vertexColors: true } );
    arnme = new THREE.Mesh( arn, arma );
	scn.add( arnme );
    arnme.rotation.set( -Math.PI/2, Math.PI/2*0, Math.PI/2 );
    //arnme.position.set(-sizs.wd / sizs.ht*0.00, -sizs.wd / sizs.ht*0.5, sizs.wd / sizs.ht*0.6);
    arnme.scale.set(l*0.55,b*0.55,h*0.65);
    arnme.castShadow = true;
    arnme.receiveShadow = true;

}, undefined, function ( error ) {

	//console.error( error );

} );

let crvo = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( sizs.wd / sizs.ht*1.26, sizs.wd / sizs.ht*0.40, -sizs.wd / sizs.ht*0.05 ),
    new THREE.Vector3( sizs.wd / sizs.ht*0.56, sizs.wd / sizs.ht*0.40, -sizs.wd / sizs.ht*0.05 ),
    new THREE.Vector3( 0, 0, -sizs.wd / sizs.ht*0.2 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.0, sizs.wd / sizs.ht*0.34, -sizs.wd / sizs.ht*0.14 ),
    new THREE.Vector3( -sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.34, sizs.wd / sizs.ht*0.18 )
] );


let crva = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( sizs.wd / sizs.ht*1.26, sizs.wd / sizs.ht*0.395, -sizs.wd / sizs.ht*0.098 ),
    new THREE.Vector3( sizs.wd / sizs.ht*1.06, sizs.wd / sizs.ht*0.395, -sizs.wd / sizs.ht*0.098 ),
    new THREE.Vector3( sizs.wd / sizs.ht*0.85, -sizs.wd / sizs.ht*0.040, sizs.wd / sizs.ht*0.30 ),
    new THREE.Vector3( sizs.wd / sizs.ht*0.55, -sizs.wd / sizs.ht*0.040, sizs.wd / sizs.ht*0.30 )
] );

const gmtryo = new THREE.TubeGeometry( crvo, 64, sizs.wd / sizs.ht*0.015, 16, false );
const mtuo = new THREE.MeshStandardMaterial( { color: 0x39a300, emissive: 0x39a300, metalness:1.0 ,side: 2 } );
const mshtuo = new THREE.Mesh( gmtryo, mtuo );
const gmtrya = new THREE.TubeGeometry( crva, 64, sizs.wd / sizs.ht*0.015, 16, false );
const mtua = new THREE.MeshStandardMaterial( { color: 0xe60505, emissive: 0xe60505, metalness:1.0 ,side: 2 } );
const mshtua = new THREE.Mesh( gmtrya, mtua );

scn.add(mshtua);
scn.add(mshtuo);

let wbv = new THREE.Shape();
wbv.moveTo( 0,0 );
wbv.lineTo( ((sizs.wd / sizs.ht)/8).toFixed(2), 0 );
wbv.lineTo( (sizs.wd / sizs.ht+0.12).toFixed(2), (sizs.wd / sizs.ht+0.12).toFixed(2) );
wbv.lineTo( -(sizs.wd / sizs.ht+0.12).toFixed(2), (sizs.wd / sizs.ht+0.12).toFixed(2) );
wbv.lineTo( -((sizs.wd / sizs.ht)/8).toFixed(2), 0 );
wbv.lineTo( 0, 0 );
wbv.closed=true;
var extset = {
	steps: 0,
	depth: 0,
	bevelEnabled: false,    
};
const gmtf = new THREE.ExtrudeGeometry( wbv, extset );
const matf = new THREE.MeshBasicMaterial( { color: 0x404040, wireframe: false, side: THREE.DoubleSide } );
const fill = new THREE.Mesh( gmtf, matf );
fill.position.set(sizs.wd / sizs.ht*0.0015, -sizs.wd / sizs.ht*0.0155, sizs.wd / sizs.ht*0.39);
fill.rotation.set( Math.PI/1*0, -Math.PI/6*0, -Math.PI/2*0);
fill.scale.set((sizs.wd / sizs.ht*0.0174).toFixed(4),(sizs.wd / sizs.ht*0.0225).toFixed(4),(sizs.wd / sizs.ht*0.12).toFixed(4));
scn.add( fill );


const ctr = new OrbitControls(cam, cnvs);

const lstnr = new THREE.AudioListener();
cam.add(lstnr);
const aud = new THREE.Audio(lstnr);
const adldr = new THREE.AudioLoader();
adldr.load('./images/mgwldsd.mp3', (buffer) => {
    aud.setBuffer(buffer);
});

let actLabelSprite = null;
let actArrow = null;

function crtlbl(text,fnt) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.font =  fnt+'px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
}

function crtar(objprt,objnm) {
    if (!objprt) return;
    const nameText = objnm;
    const tex = crtlbl(nameText,14);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
    actLabelSprite = new THREE.Sprite(mat);

    const upOffset = new THREE.Vector3(0, (sizs.wd / sizs.ht) * 0.45, 0);
    actLabelSprite.position.copy(objprt.position).add(upOffset);

    const baseScale = (sizs.wd / sizs.ht) * 0.8;
    actLabelSprite.scale.set(baseScale * 2.2, baseScale * 0.6, 1);

    scn.add(actLabelSprite);

    const dir = new THREE.Vector3().subVectors(objprt.position, actLabelSprite.position).normalize();
    const length = actLabelSprite.position.distanceTo(objprt.position);
    const headLength = (sizs.wd / sizs.ht) * 0.03;
    const headWidth = (sizs.wd / sizs.ht) * 0.15;
    actArrow = new THREE.ArrowHelper(dir, actLabelSprite.position.clone(), length, 0xffcc00, headLength, headWidth);
    scn.add(actArrow);

    return [actLabelSprite, actArrow];
}


let pwlsprt = null;
const pwrlbl = setInterval(() => {
    if (!actme) return;
    if (pwlsprt) {return;}
    const lbar=crtar(actme,"Welding Power Source");
    pwlsprt=lbar[0];
    if (actLabelSprite && actArrow) {
        const upOffset = new THREE.Vector3(-2.5, (sizs.wd / sizs.ht) * 0.35, 0.5);
        const labelPos = actme.position.clone().add(upOffset);
        lbar[0].position.copy(labelPos);

        const dir = new THREE.Vector3().subVectors(actme.position, labelPos).normalize();
        const length = labelPos.distanceTo(actme.position);
        lbar[1].position.copy(labelPos);
        lbar[1].setDirection(dir);
        lbar[1].setLength(length*0.39, (sizs.wd / sizs.ht) * 0.03, (sizs.wd / sizs.ht) * 0.02);
    }
}, 100);

let cynsprt = null;
const cynlbl = setInterval(() => {
    if (!actme) return;
    if (cynsprt) {return;}
    const lbar=crtar(actme,"Argon Gas Cylinder");
    cynsprt=lbar[0];
    if (actLabelSprite && actArrow) {
        const upOffset = new THREE.Vector3(-0.5, (sizs.wd / sizs.ht) * 0.65, 0.35);
        const labelPos = actme.position.clone().add(upOffset);
        lbar[0].position.copy(labelPos);
        const dir = new THREE.Vector3().subVectors(actme.position, labelPos).normalize();
        const length = labelPos.distanceTo(actme.position);
        lbar[1].position.copy(labelPos);
        lbar[1].setDirection(dir);
        lbar[1].setLength(length*0.65, (sizs.wd / sizs.ht) * 0.03, (sizs.wd / sizs.ht) * 0.02);
    }
}, 100);

let clmsprt = null;
const clmplbl = setInterval(() => {
    if (!mldme) return;
    if (clmsprt) {return;}
    const lbar=crtar(mldme,"Clamp");
    clmsprt=lbar[0];
    if (actLabelSprite && actArrow) {
        const upOffset = new THREE.Vector3(0.55, (sizs.wd / sizs.ht) * 0.25, 0);
        const labelPos = mldme.position.clone().add(upOffset);
        lbar[0].position.copy(labelPos);

        const dir = new THREE.Vector3().subVectors(mldme.position, labelPos).normalize();
        const length = labelPos.distanceTo(mldme.position);
        lbar[1].position.copy(labelPos);
        lbar[1].setDirection(dir);
        lbar[1].setLength(length*0.8, (sizs.wd / sizs.ht) * 0.03, (sizs.wd / sizs.ht) * 0.02);
    }
}, 100);

let bsmtsprt = null;
const bsmtlbl = setInterval(() => {
    if (!mldme) return;
    if (bsmtsprt) {return;}
    const lbar=crtar(mldme,"Base Material");
    bsmtsprt=lbar[0];
    if (lbar[0] &&  lbar[1]) {
        const upOffset = new THREE.Vector3(-1.5, (sizs.wd / sizs.ht) * 0.15, 0);
        const labelPos = mldme.position.clone().add(upOffset);
        lbar[0].position.copy(labelPos);
        const upof = new THREE.Vector3(-0.25, 0, 0);
        const dir = new THREE.Vector3().subVectors(mldme.position, labelPos).normalize();
        const length = labelPos.distanceTo(mldme.position);
        lbar[1].position.copy(labelPos).add(upof);
        lbar[1].setDirection(dir);
        lbar[1].setLength(length*0.8, (sizs.wd / sizs.ht) * 0.03, (sizs.wd / sizs.ht) * 0.02);
    }
}, 100);

let ecblsprt = null;
let ecblarw = null;
let ecblof = null;

const eclbl = setInterval(() => {
    if (!trnme) return;
    if (ecblsprt || ecblarw) {return;}
    else
    {const lbar=crtar(trnme,"MIG welding Torch");
    ecblsprt=lbar[0];
    ecblarw=lbar[1];
    if (lbar[0] &&  lbar[1]) {
        let upOffset = new THREE.Vector3(0, (sizs.wd / sizs.ht) * 0.28, -0.5);
        ecblof=upOffset;
        let labelPos = trnme.position.clone().add(upOffset);
        lbar[0].position.copy(labelPos);
        let dir = new THREE.Vector3().subVectors(trnme.position, labelPos).normalize();
        let length = labelPos.distanceTo(trnme.position);
        lbar[1].position.copy(labelPos);
        lbar[1].setDirection(dir);
        lbar[1].setLength(length*0.35, (sizs.wd / sizs.ht) * 0.03, (sizs.wd / sizs.ht) * 0.02);
    }}
}, 100);

window.addEventListener('beforeunload', () => {
    clearInterval(pwrlbl);
    clearInterval(clmplbl);
    clearInterval(bsmtlbl);
    clearInterval(eclbl);
    clearInterval(cynlbl);
});

const adit = (x) => {
            aud.playbackRate = 2.5;
            if(x==1){
                aud.play();}
                else if(x==0){
                    aud.stop();
                }
        };
        
function lblupd(objprt,sprt,arw,upof){
    if (!objprt || !sprt || !arw) return;
        const lblps = objprt.position.clone().add(upof);
        sprt.position.copy(lblps);
        arw.position.copy(lblps);
}

let i=0,j=0, k=sizs.wd / sizs.ht*0.0011, m=sizs.wd / sizs.ht*0.0019, adi=0;

const loop = () => {
    if(i==0){
      scn.add(actme);     
    setTimeout(function() {window.requestAnimationFrame(loop);},50);
    
    }
    else  if(i<= ((sizs.wd / sizs.ht)*0.5252555))  {
      scn.add(actme);
      adit(1);  
      window.requestAnimationFrame(loop);             
        
    }
    rndr.render(scn,cam);
      if(actme || arnme || trnme ) {
    if(i<= ((sizs.wd / sizs.ht)*0.525)){
        
        trnme.position.set(-sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.16, sizs.wd / sizs.ht*0.38-m);
        arnme.position.set(-sizs.wd / sizs.ht*0.00, -sizs.wd / sizs.ht*0.018, sizs.wd / sizs.ht*0.415-m);
        lblupd(trnme,ecblsprt,ecblarw,ecblof);
        let crvo = new THREE.CatmullRomCurve3( [
            new THREE.Vector3( sizs.wd / sizs.ht*1.26, sizs.wd / sizs.ht*0.40, -sizs.wd / sizs.ht*0.05 ),
            new THREE.Vector3( sizs.wd / sizs.ht*0.56, sizs.wd / sizs.ht*0.40, -sizs.wd / sizs.ht*0.05 ),
            new THREE.Vector3( 0, 0, -sizs.wd / sizs.ht*0.2 ),
            new THREE.Vector3( -sizs.wd / sizs.ht*0.0, sizs.wd / sizs.ht*0.34, -sizs.wd / sizs.ht*0.14-m ),
            new THREE.Vector3( -sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.34, sizs.wd / sizs.ht*0.18-m )
        ] );

        scn.remove(mshtuo);
        clearInterval(clmplbl);
        clearInterval(bsmtlbl);
        mshtuo.geometry= new THREE.TubeGeometry( crvo, 64, sizs.wd / sizs.ht*0.015, 16, false );
        scn.add(mshtuo);
        rndr.render(scn,cam);
        k+=sizs.wd / sizs.ht*0.0011;
        m+=sizs.wd / sizs.ht*0.0009;
        i+=sizs.wd / sizs.ht*0.001455;

        extset = {
            steps: j,
            depth: -j/100,
            bevelEnabled: false
        };
        fill.geometry= new THREE.ExtrudeGeometry( wbv, extset );
        j=j+0.793;
        rndr.render(scn,cam);
        console.clear();
    }
    else{
        adit(0);
        if(adi==0){
                scn.remove(fill);
                scn.remove(arnme);
                scn.remove(mldme);
                adi=1;
                ml='./images/wrkpicclamp.stl';
                stldr.load(ml, function ( mld ) {
                const mldma = new THREE.MeshMatcapMaterial( { opacity: mld.alpha, vertexColors: true } );
                mldme = new THREE.Mesh( mld, mldma );
                scn.add( mldme );
                mldme.rotation.set( -Math.PI / 2, 0, Math.PI/1.2*0 );
                mldme.position.set( sizs.wd / sizs.ht*0.19 , -sizs.wd / sizs.ht*0, sizs.wd / sizs.ht*0.30 );
                mldme.scale.set(sizs.wd / sizs.ht*0.002 , sizs.wd / sizs.ht*0.002, sizs.wd / sizs.ht*0.002 );
                mldme.castShadow = true;
                mldme.receiveShadow = true;

            }, undefined, function ( error ) {

            //console.error( error );

            } );
                console.clear();
                }
        }
    }
}

loop();

}
$(document).ready(()=>{
 
    if ( WebGL.isWebGLAvailable() ) {
        $('#adisim').hide();
         $("#pstr").show();
        $("#pstr").click(function(){
            $('#adisim').show();
            aditya();
          });
    
    } else {
    
        const warning = WebGL.getWebGLErrorMessage();
        document.getElementById( 'war' ).appendChild( warning );
    
    }
    

 
});