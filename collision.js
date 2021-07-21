AFRAME.registerComponent('gameplay',{
    schema:{
        elementId:{type:'string',default:'#ring1'}
    },
    isCollided:function(elementId){
        var element = document.querySelector(elementId)
        element.addEventListener('collide',(e)=>{
            if(elementId.includes('#ring')){
                console.log(elementId+'collision')
            }
            else if(elementId.includes('#bird')){
                console.log(elementId+'collision')
            }
        })
    },
    update:function(){
        this.isCollided(this.data.elementId)
    }
})