AFRAME.registerComponent('gameplay',{
    schema:{
        elementId:{type:'string',default:'#ring1'}
    },
    init:function(){
        var duration = 120
        const timerEl = document.querySelector('#timer')
        this.startTimer(duration,timerEl)
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
    },
    
    startTimer:function(duration,timerEl){
        var min
        var sec
        setInterval(()=>{
            if(duration>=0){
                min = parseInt(duration/60)
                sec = parseInt(duration%60)
                if(min<10){
                    min = '0'+min
                }
                if(sec<10){
                    sec = '0'+sec
                }
                timerEl.setAttribute('text',{value:min+':'+sec})
                duration-=1
            }
        },1000)
    },

    updateTargets:function(){
        const element = document.querySelector('#targets')
        var count = element.getAttribute('text').value
        let currentTargets = parseInt(count)
        currentTargets-=1
        element.setAttribute('text',{
            value:currentTargets
        })
    }
})
