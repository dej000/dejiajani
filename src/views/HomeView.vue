<script>
import gsap from 'gsap'


 export default {
  setup(){
    const beforeEnter = (el) => {
      console.log('before enter - set intial state')
      el.style.transform = 'translateY(-160px)'
      el.style.opacity = 0
    }
    const enter = (el, done) => {
      console.log('starting to enter - make transition')
      gsap.to(el, {
        duration: 4,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done
      })
    }
    return { beforeEnter, enter }
  }
};
</script>

<template>

 
    <div class="home  vh-100" id="home">
      <full-page :options="options">
        <section class="hero">
          
        
          <div class="hero-text container text animation">
            <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            :css="false"
          >
          <div>
            
            <h2>Hey there, This is Deji Ajani</h2>

            <h3>FRONTEND DEVELOPER</h3>
            <p class="text-white">I am passionate about building excellent software, world-class app and pixel perfect code.</p>
           

            <button><a download href="https://files.fm/f/j5qxxzwy6">Download Resume</a></button>
          </div>
         
          </transition>
           
          </div>
        
        </section>
        
      </full-page>
      </div>
</template>

<style  scoped>

  
    .hero {
      background-image: url(../assets/pexels-pixabay-2150.jpg);
        background: rgb(0, 0, 0);
        background-repeat: no-repeat;
        background-size:cover ;
        background-position: center;
        position: relative;
        height: 100vh;
        z-index: 2;


      }

   .container {
    padding: 52px 10px;
}

      

 .text{
  z-index: 2;
 }
    
 
   .hero h2{
    font-size: 34px;
    font-family: 'MBcorpo title';
    margin: 20px 0;
    z-index: 2;
    
   }

   .hero h3{
    margin: 20px 0;
    color: grey;
    font-size: 18px;
    z-index: 2;
   }

   .hero button{
    border-radius: 1.1428571429rem;
    font-size: 13px;
    padding: 0.4285714286rem 1.1428571429rem;
    cursor: pointer;
    z-index: 4;
   }

   button a{
    text-decoration: none;
    color: black;
    cursor: pointer;
   
   }

      .hero-text {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: rgb(255, 255, 255);
        z-index: 3;
        align-items: flex-start;
        gap: 7px;
       
      }

      section{
        background: black;
      }

      p{
        color: rgb(63, 40, 213);
      }


      @media (max-width :1029px){
        .container[data-v-b4e148ca] {
          padding: 52px 30px;
      }
      .hero h3[data-v-b4e148ca] {
        margin: 20px 0;
        color: grey;
        font-size: 18px;
        z-index: 2;
        text-align: center;
    }
      }
    
</style>