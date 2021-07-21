AFRAME.registerComponent('flying-birds',{
    init:function(){
        for(var i = 1;  i<=10; i++){
            var id = `bird${i}`
            var posX = (Math.random()*3000-1000)
            var posY = (Math.random()*2-1)
            var posZ = (Math.random()*3000-1000)
            var pos = {x:posX,y:posY,z:posZ}
            this.flyingBirds(id,pos)
        }
    },
    flyingBirds:(id,pos)=>{
        var birdEl = document.createElement('entity')
        birdEl.setAttribute('scale',{x:500,y:500,z:500})
        birdEl.setAttribute('gltf-model','./assets/models/bird/scene.gltf')
        birdEl.setAttribute('animation-mixer',{})
        birdEl.setAttribute('position',pos)
        birdEl.setAttribute('id',id)
        var terrainEl = document.querySelector('#terrain')
        terrainEl.appendChild('birdEl')
        birdEl.setAttribute('static-body',{
            shape:'sphere',sphereRadius:5
        })
        birdEl.setAttribute('gameplay',{
            elementId:`#${id}`
        })
    }
})