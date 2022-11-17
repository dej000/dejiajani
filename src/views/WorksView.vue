<template>

   
    <div class="work bg-black " id="work">
      
     <section class="bg-black" id="portfolio">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase p-3 mb-5 text-white">Portfolio</h2>
              <h4 class="section-heading text-uppercase p-3 mb-5 text-white">Some of my works</h4>
            </div>
          </div>
          <div class="row">
            
              <div class="col-md-6 col-sm-6 portfolio-item box  "
             
              v-motion
              :initial="{opacity: 0, y: 100}"
              :visibleOnce="{ opacity: 1, y: 0}"
             >
                  <a class="portfolio-link image  hover-zoom " data-toggle="modal" href="https://legendary-meme.vercel.app/" target="_blank" >
                      
                      <img class="img-fluid rounded p-3  " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1667819376/portfolio/img1_emlavv.png" alt="">
        
                  </a>
                  <div class="portfolio-caption ">
                      <h4 class="text-white">Landing Page</h4>
                      <p class="text-muted"></p>
                  </div>
              </div>

              <div class="col-md-6 col-sm-6 portfolio-item box mb-5"
              v-motion
              :initial="{opacity: 0, y: 100}"
              :visibleOnce="{ opacity: 1, y: 0}"
              >
                  <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://turbo-octo-dollop.vercel.app/" target="_blank" >
                      
                      <img class="img-fluid rounded  p-3  " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1667819376/portfolio/img2_w5ujuf.png" alt="">
        
                  </a>
                  <div class="portfolio-caption text-white">
                      <h4>Banking Website</h4>
                      <p class="text-muted"></p>
                  </div>
              </div>

              <div class="col-md-6 col-sm-6 portfolio-item box mb-5"
              v-motion
              :initial="{opacity: 0, y: 100}"
              :visibleOnce="{ opacity: 1, y: 0}"
              >
                  <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://adventure-kqxw.vercel.app/" target="_blank" >
                      
                      <img class="img-fluid rounded  p-3 " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1667819384/portfolio/img3_joq6t3.png" alt="">
        
                  </a>
                  <div class="portfolio-caption text-white ">
                      <h4>Adventure Website</h4>
                      <p class="text-muted"></p>
                  </div>
              </div>

              <div class="col-md-6 col-sm-6 portfolio-item box"
              v-motion
              :initial="{opacity: 0, y: 100}"
              :visibleOnce="{ opacity: 1, y: 0}"
              >
                  <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://sapa-es404020.vercel.app/" target="_blank" >
                      
                      <img class="img-fluid rounded  p-3  " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1667819376/portfolio/img4_wahppb.png" alt="">
        
                  </a>
                  <div class="portfolio-caption  text-white ">
                      <h4>Blockchain</h4>
                      <p class="text-muted"></p>
                  </div>
              </div>

              <div class="col-md-6 col-sm-6 portfolio-item box"
              v-motion
              :initial="{opacity: 0, y: 100}"
              :visibleOnce="{ opacity: 1, y: 0}"
              >
                  <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://taylo.vercel.app/" target="_blank" >
                      
                      <img class="img-fluid rounded p-3 " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1667819376/portfolio/img5_kjgtzz.png" alt="">
        
                  </a>
                  <div class="portfolio-caption  text-white  ">
                      <h4> Dashboard</h4>
                      <p class="text-muted"></p>
                  </div>
              </div>

              <div class="col-md-6 col-sm-6 portfolio-item box"
              v-motion
              :initial="{opacity: 0, y: 100}"
              :visibleOnce="{ opacity: 1, y: 0}"
              >
                  <a class="portfolio-link image  hover-zoom " data-toggle="modal" href="https://ethfunds.vercel.app" target="_blank" >
                      
                      <img class="img-fluid rounded  p-3 " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1667819376/portfolio/img6_hziymt.png" alt="">
        
                  </a>
                  <div class="portfolio-caption text-white ">
                      <h4>Blockchain Website</h4>
                      <p class="text-muted"></p>
                  </div>
              </div>

              <div class="col-md-6 col-sm-6 portfolio-item box"
              v-motion
              :initial="{opacity: 0, y: 100}"
              :visibleOnce="{ opacity: 1, y: 0}"
              >
                  <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://prateve.vercel.app/" target="_blank" >
                      
                      <img class="img-fluid rounded p-3 " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1668084464/Vite-App_rfdtfa.png" alt="">
        
                  </a>
                  <div class="portfolio-caption  text-white  ">
                      <h4> Loan Website</h4>
                      <p class="text-muted"></p>
                  </div>
              </div>
          </div>
        </div>
      </section>
 
      
    </div>
    
  </template> 
  
  <script >
  import { ref } from 'vue'
  import gsap from 'gsap'
  import FullPage from 'vue-fullpage.js'

  export default {
  
        data: () => ({
        portfolioJSON: [
            {
                img: 'src/assets/pexels-andy-vu-3244513.jpg',
                caption: 'Explore',
                title: 'Graphic Design'
            },
            {
                img: 'src\assets\img1.png',
                caption: 'Finish',
                title: 'Identify'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Lines',
                title: 'Branding'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Southwest',
                title: 'Website Design'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Window',
                title: 'Photography'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Coffee',
                title: 'Drink a Lot!' 
            }
        ]
    })

    }
    

 </script>

 <script setup>
import {onMounted} from 'vue'
 import {animate,spring} from 'motion'
 
// onMounted(()=>{
//     const animation = animate('.box',{scale : 1.1},
//     {
//         duration : 1,
//         easing : 'ease-out',
//         repeat : 1,
//         direction : 'alternate',
//     }

//     )
// })

</script>

 <style scoped>
 ul, dl {
    margin-top: 0;
    margin-bottom: 0;
}

ul {
    padding-left: 0;
}

img{
    width: 400px;
    z-index: -1;
}

.hover-zoom:hover{
    background: linear-gradient(
        45deg,
        rgba(29, 236, 197, 0.5),
        rgba(91, 14, 214, 0.5) 100%
      );
}

.image{
    display: flex;
    justify-content: center;
    margin: 0;
}

h4,p{
    text-align: center;
}


 </style>