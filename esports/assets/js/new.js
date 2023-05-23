window.addEventListener('DOMContentLoaded', init)


function init(){
  let type = document.querySelector('#typeOfBeard')
  let style = document.querySelector('#styleOfBeard')
  style.style.display = "none"
  let groom = document.querySelector('#groomOfBeard')
  groom.style.display = "none"

    
  let typeSubmit = document.querySelector('#typeOfBeardSubmit')
   typeSubmit.addEventListener('click', () => {
    console.log("hllo")
      type.style.display = "none"
      style.style.display = "block"
   });
  
   let styleBack = document.querySelector('#styleOfBeardBack')
   styleBack.addEventListener('click', () => {
      style.style.display = "none"
      type.style.display = "block"
   });
  
   let styleSubmit = document.querySelector('#styleOfBeardSubmit')
    styleSubmit.addEventListener('click', () => {
       style.style.display = "none"
       groom.style.display = "block"
    });
  
    let groomBack = document.querySelector('#groomOfBeardBack')
    groomBack.addEventListener('click', () => {
      groom.style.display = "none"
      style.style.display = "block"
    });
   
    let rec  =document.querySelector('#recommendedProducts')
    rec.addEventListener('click', () => {
      groom.style.display = "none"
      
   });
   
        
  
  }
