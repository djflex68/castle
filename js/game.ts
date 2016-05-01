import PIXI from 'pixi.js';
 
export default class Game {
    constructor(){
        
    }
    
    public static run(){
        var renderer = new PIXI.WebGLRenderer(800, 600);
        console.log(renderer);
    }
}