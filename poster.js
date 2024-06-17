//Ma'am, this is Vivaan. Can you please help me with this project because the thumbnails are overlapping with the poster plane?
AFRAME.registerComponent("store", {
    init: function () {
      this.comicsContainer = this.el;
      this.createCards()
      this.posterEl(position,id)
      this.createPoster(item)
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "asterix",
          title: "Asterix The Gaul",
          url: "./asterix.jpg",
        },
        {
          id: "d-and-a",
          title: "Dhruva & Ashtavakra",
          url: "./D&A.jpg",
        },
  
        {
          id: "tintin",
          title: "Tintin In America",
          url: "./tintin.jpg",
        },
        {
          id: "garfield",
          title: "Garfield Vol. 1",
          url: "./garfield.jpg",
        },
      ];
      let previousXPosition = -62.5;
  
      for (var item of thumbNailsRef) {
        const posX = previousXPosition + 25;
        const posY = 0;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;
        const posterEl=this.createPoster(position,item.id)
        const thumbnail=this.createThumbnail(item)
        posterEl.appendChild(thumbnail)
        this.comicsContainer.appendChild(posterEl)
        }
      },
        // Border Element
        createPoster:function(position,id){
          const entityEl=document.createElement("a-entity")
          entityEl.setAttribute("id",id)
          entityEl.setAttribute("visible",true)
          entityEl.setAttribute("geometry",{primitive:"plane",width:20,height:28})
          entityEl.setAttribute("position",position)
          entityEl.setAttribute("material",{color:"white",opacity:1})
          entityEl.setAttribute("cursor-listener",{})
          return entityEl
        },
  
        
        // Thumbnail Element
        createThumbnail:function(item){
          const entityEl=document.createElement("a-entity")
          entityEl.setAttribute("visible",true)
          entityEl.setAttribute("geometry",{primitive:"plane",width:18,height:26})
          entityEl.setAttribute("material",{src:item.url})
          entityEl.setAttribute("position",{x:0,y:0,z:0.1})
          return entityEl
        },
    },
  );
  