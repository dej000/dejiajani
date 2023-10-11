<template>

   
    <div class="work bg-black " id="work">
      
     <section class="bg-black" id="portfolio">
        <div class="container"  data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading text-uppercase p-3 mb-2 text-white">Portfolio</h2>
              <h4 class="section-heading text-uppercase p-3 mb-5 text-white">Some of my works</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-6 portfolio-item box"
            v-motion
            :initial="{opacity: 0, y: 100}"
            :visibleOnce="{ opacity: 1, y: 0}"
            >
                <a class="portfolio-link image  hover-zoom" data-toggle="modal" href=" https://configure.atella.ca/#/
                " target="_blank" >
                    
                    <img class="img-fluid rounded p-3 " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1697033369/atella-2_5_dp1voz.png" alt="">
      
                </a>
                <div class="portfolio-caption  text-white  ">
                    <p class="text-muted">House sale Website</p>
                </div>
            </div>

            <div class="col-md-6 col-sm-6 portfolio-item box"
            v-motion
            :initial="{opacity: 0, y: 100}"
            :visibleOnce="{ opacity: 1, y: 0}"
            >
                <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://amex-ruddy.vercel.app/
                " target="_blank" >
                    
                    <img class="img-fluid rounded p-3 " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1697033174/Amex_xaof0z.png" alt="">
      
                </a>
                <div class="portfolio-caption  text-white  ">
                    <p class="text-muted">Healthcare Website</p>
                </div>
            </div>

            <div class="col-md-6 col-sm-6 portfolio-item box"
            v-motion
            :initial="{opacity: 0, y: 100}"
            :visibleOnce="{ opacity: 1, y: 0}"
            >
                <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://deamsoft.vercel.app/
                " target="_blank" >
                    
                    <img class="img-fluid rounded p-3 " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1697032984/Deamsoft_2_in678v.png" alt="">
      
                </a>
                <div class="portfolio-caption  text-white  ">
                    <p class="text-muted">Tech Startup</p>
                </div>
            </div>  

            <div class="col-md-6 col-sm-6 portfolio-item box"
            v-motion
            :initial="{opacity: 0, y: 100}"
            :visibleOnce="{ opacity: 1, y: 0}"
            >
                <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://lulaa2-dej000.vercel.app/
                " target="_blank" >
                    
                    <img class="img-fluid rounded p-3 " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1697032762/lulla_dhseth.png" alt="">
      
                </a>
                <div class="portfolio-caption  text-white  ">
                    <p class="text-muted">Women Fashion Website</p>
                </div>
            </div>

            <div class="col-md-6 col-sm-6 portfolio-item box"
            v-motion
            :initial="{opacity: 0, y: 100}"
            :visibleOnce="{ opacity: 1, y: 0}"
            >
                <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://vuetest-jet.vercel.app/
                " target="_blank" >
                    
                    <img class="img-fluid rounded p-3 " :src="discripto" alt="">
      
                </a>
                <div class="portfolio-caption  text-white  ">
                    <p class="text-muted">Transcription Website</p>
                </div>
            </div>

            <div class="col-md-6 col-sm-6 portfolio-item box"
            v-motion
            :initial="{opacity: 0, y: 100}"
            :visibleOnce="{ opacity: 1, y: 0}"
            >
                <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://heed.vercel.app/
                " target="_blank" >
                    
                    <img class="img-fluid rounded p-3 " :src="heed" alt="">
      
                </a>
                <div class="portfolio-caption  text-white  ">
                    <p class="text-muted">Transcription Website</p>
                </div>
            </div>

            <div class="col-md-6 col-sm-6 portfolio-item box"
            v-motion
            :initial="{opacity: 0, y: 100}"
            :visibleOnce="{ opacity: 1, y: 0}"
            >
                <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://prateve.vercel.app/
                " target="_blank" >
                    
                    <img class="img-fluid rounded p-3 " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1668084464/Vite-App_rfdtfa.png" alt="">
      
                </a>
                <div class="portfolio-caption  text-white  ">
                    <p class="text-muted">Loan Website</p>
                </div>
            </div>

            
              <div class="col-md-6 col-sm-6 portfolio-item box  "
             
              v-motion
              :initial="{opacity: 0, y: 100}"
              :visibleOnce="{ opacity: 1, y: 0}"
             >
                  <a class="portfolio-link image  hover-zoom " data-toggle="modal" href="https://legendary-meme.vercel.app/" target="_blank" >
                      
                      <img class="img-fluid rounded p-3  " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1667819376/portfolio/img1_emlavv.png" alt="">
        
                  </a>
                  <div class="portfolio-caption ">
                      <p class="text-muted">Landing Page</p>
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
                      <p class="text-muted">Banking Website</p>
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
                     
                      <p class="text-muted">Adventure Website</p>
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
                      <p class="text-muted">Blockchain Website</p>
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
                      <p class="text-muted">Dashboard</p>
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
                      <p class="text-muted">Blockchain Website</p>
                  </div>
              </div>

              <div class="col-md-6 col-sm-6 portfolio-item box"
              v-motion
              :initial="{opacity: 0, y: 100}"
              :visibleOnce="{ opacity: 1, y: 0}"
              >
                  <a class="portfolio-link image  hover-zoom" data-toggle="modal" href="https://prateve.vercel.app/
                  " target="_blank" >
                      
                      <img class="img-fluid rounded p-3 " src="https://res.cloudinary.com/di6dtlbpj/image/upload/v1668084464/Vite-App_rfdtfa.png" alt="">
        
                  </a>
                  <div class="portfolio-caption  text-white  ">
                   
                      <p class="text-muted">Loan Website</p>
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
  import heed from '../assets/heed.png'
  import discripto from '../assets/discripto.png'

  export default {
  
        data(){
            return{
                heed:heed,
                discripto:discripto
            }
        }

    }
    

 </script>

 <script setup>
import {onMounted} from 'vue'
 import {animate,spring} from 'motion'
 


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