AFRAME.registerComponent('target-ring',{
    init:function(){
        for(var i = 1; i<=25;i++){
            var id = `ring${i}`
            var posX = (Math.random()*2000-1000)
            var posY = (Math.random()*2-1)
            var posZ = (Math.random()*2000-1000)
            var pos = {x:posX,y:posY,z:posZ}
            this.createRings(id,pos)
        }
    },

    createRings:function(id,pos){
        var ringEl = document.createElement('a-entity')
        ringEl.setAttribute('material','color','yellow')
        ringEl.setAttribute('position',pos)
        ringEl.setAttribute('id',id)
        ringEl.setAttribute('geometry',{primitive:'torus',radius:5})
        var terrainElement = document.querySelector('#terrain')
        terrainElement.appendChild(ringEl)
        ringEl.setAttribute('static-body',{
            shape:'sphere',sphereRadius:2
        })
        ringEl.setAttribute('gameplay',{
            elementId:`#${id}`
        })
    }
})