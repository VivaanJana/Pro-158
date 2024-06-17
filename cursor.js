AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePostersList()
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId}=this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute("id")
                if(id==selectedItemId){
                    el.setAttribute("material",{color:"blue",opacity:1})
                }

            }
        })
    },
    handlePostersList:function(){
        const id=this.el.getAttribute("id")
        const comicsId=["asterix","d-and-a","tintin","garfield"]
        if(comicsId.includes(id)){
            const comicsContainer=document.querySelector("#comics-container")
            comicsContainer.setAttribute("cursor-listener",{selectedItemId:id})
            this.el.setAttribute("material",{color:"red",opacity:1})
        }
    },
});