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
    wd:window.innerWidth*0.9,
    ht:window.innerHeight*0.9
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
cam.position.set(-4,1,3);
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
    arnme.position.set(-sizs.wd / sizs.ht*0.00, -sizs.wd / sizs.ht*0.038, sizs.wd / sizs.ht*0.443);
    arnme.scale.set(l*1,b*1,h*1 );
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

let i=0,j=0, k=sizs.wd / sizs.ht*0.0011, m=sizs.wd / sizs.ht*0.0019, adi=0;

const loop = () => {

    rndr.render(scn,cam);
    window.requestAnimationFrame(loop);

    if(i<= ((sizs.wd / sizs.ht)*0.525)){
    trnme.position.set(-sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.16, sizs.wd / sizs.ht*0.38-m);
    arnme.position.set(-sizs.wd / sizs.ht*0.00, -sizs.wd / sizs.ht*0.038, sizs.wd / sizs.ht*0.443-m);

    let crvo = new THREE.CatmullRomCurve3( [
        new THREE.Vector3( sizs.wd / sizs.ht*1.26, sizs.wd / sizs.ht*0.40, -sizs.wd / sizs.ht*0.05 ),
        new THREE.Vector3( sizs.wd / sizs.ht*0.56, sizs.wd / sizs.ht*0.40, -sizs.wd / sizs.ht*0.05 ),
        new THREE.Vector3( 0, 0, -sizs.wd / sizs.ht*0.2 ),
        new THREE.Vector3( -sizs.wd / sizs.ht*0.0, sizs.wd / sizs.ht*0.34, -sizs.wd / sizs.ht*0.14-m ),
        new THREE.Vector3( -sizs.wd / sizs.ht*0.00, sizs.wd / sizs.ht*0.34, sizs.wd / sizs.ht*0.18-m )
    ] );

    scn.remove(mshtuo);
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
mldme.position.set( sizs.wd / sizs.ht*0.19 , -sizs.wd / sizs.ht*0, sizs.wd / sizs.ht*0.34 );
mldme.scale.set(sizs.wd / sizs.ht*0.002 , sizs.wd / sizs.ht*0.002, sizs.wd / sizs.ht*0.002 );
mldme.castShadow = true;
mldme.receiveShadow = true;

}, undefined, function ( error ) {

//console.error( error );

} );
    }
}
}
loop();
}
$(document).ready(()=>{
 
    if ( WebGL.isWebGLAvailable() ) {
        $('#adisim').hide();
        $("#pstr").click(function(){
            $('#adisim').show();
            aditya();
          });
    
    } else {
    
        const warning = WebGL.getWebGLErrorMessage();
        document.getElementById( 'war' ).appendChild( warning );
    
    }
    

 
});