<template>
  <full-page :options="options">
    <section class="contact vh-100  " >
    
      <div>
        <h2 class="text-white">Contact </h2>
    </div>
      
       <div class="contact-form container">
        
         <form class="contact" ref="form" @submit.prevent="sendEmail">
           <input v-model="name" type="text" name="name" class="text-box" placeholder="Your Name" required>
           <input v-model="email" type="email" name="email" class="text-box" placeholder="Your Email" required>
           <textarea v-model="message" name="message" rows="5" placeholder="Your Message" required></textarea>
           <input @click="msgSENT" type="submit" name="submit" class="send-btn" value="Send">
         </form>
      </div>
    
    
  
     </section>
  
      
      <!-- <section class="social  bg-secondary " id="contact">
          
          
          <div class="social-links ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2.857142857142857rem" height="2.857142857142857rem" class="brandhub-social-media-box-item__icon brandhub-icon"><path d="M16 7.677c-4.516 0-8.258 3.677-8.258 8.258s3.677 8.258 8.258 8.258c4.581 0 8.258-3.742 8.258-8.258S20.516 7.677 16 7.677zm0 13.549c-2.903 0-5.29-2.387-5.29-5.29s2.387-5.29 5.29-5.29 5.29 2.387 5.29 5.29-2.387 5.29-5.29 5.29zM26.452 7.484a1.871 1.871 0 11-3.743 0 1.871 1.871 0 013.743 0z" fill="currentColor"></path><path d="M29.419 2.645C27.742.903 25.355 0 22.645 0H9.355C3.742 0 0 3.742 0 9.355v13.226c0 2.774.903 5.161 2.71 6.903C4.452 31.161 6.774 32 9.42 32h13.161c2.774 0 5.097-.903 6.774-2.516C31.097 27.807 32 25.42 32 22.645V9.355c0-2.71-.903-5.032-2.581-6.71zm-.258 20c0 2-.71 3.613-1.871 4.71s-2.774 1.677-4.71 1.677H9.419c-1.935 0-3.548-.581-4.71-1.677-1.161-1.161-1.742-2.774-1.742-4.774V9.355c0-1.935.581-3.548 1.742-4.71 1.097-1.097 2.774-1.677 4.71-1.677h13.29c1.935 0 3.548.581 4.71 1.742 1.097 1.161 1.742 2.774 1.742 4.645v13.29z" fill="currentColor"></path></svg>
  
              <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="2.857142857142857rem" height="2.857142857142857rem" class="brandhub-social-media-box-item__icon brandhub-icon"><path d="M512 0c282.77 0 512 230.58 512 515.02 0 257.06-187.23 470.12-432 508.76V663.89h119.3L734 515.02l-1.243-.031.564-3.539-141.32-.002v-93.037c0-38.958 18.148-76.974 75.388-80.206l8.05-.222h64.562v-126.74l-.421-.071-.023-2.045s-60.882-10.011-119.09-10.011c-121.52 0-200.94 70.956-200.94 199.42v112.92h-135.08v152.45l135.05-.045.024 357.8C169.871 961.152 6.471 779.381.161 528.281l-.166-13.256c0-284.44 229.23-515.02 512-515.02V.004z" fill="currentColor"></path></svg>
  
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="2.857142857142857rem" height="2.857142857142857rem" class="brandhub-social-media-box-item__icon brandhub-icon"><path d="M32 6.076a13.025 13.025 0 01-3.771 1.033 6.581 6.581 0 002.887-3.632 13.144 13.144 0 01-4.169 1.594 6.556 6.556 0 00-4.792-2.073 6.565 6.565 0 00-6.565 6.565c0 .514.058 1.015.17 1.496A18.643 18.643 0 012.227 4.2a6.533 6.533 0 00-.889 3.301 6.563 6.563 0 002.92 5.464 6.54 6.54 0 01-2.974-.822l-.001.083a6.57 6.57 0 005.267 6.437 6.62 6.62 0 01-2.966.112 6.571 6.571 0 006.133 4.559 13.17 13.17 0 01-8.153 2.811 13.29 13.29 0 01-1.566-.092 18.576 18.576 0 0010.064 2.95c12.076 0 18.679-10.003 18.679-18.679 0-.284-.006-.568-.018-.85a13.307 13.307 0 003.275-3.397z" fill="currentColor"></path></svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" width="2.857142857142857rem" height="2.857142857142857rem" viewBox="0 0 22 22" class="brandhub-social-media-box-item__icon brandhub-social-media-box-item__wb"><path d="M20.354 0H1.622C.727 0 0 .71 0 1.584v18.811c0 .875.727 1.586 1.622 1.586h18.732c.897 0 1.627-.711 1.627-1.586V1.584C21.982.71 21.251 0 20.354 0zM6.519 18.731h-3.26V8.241H6.52v10.49zM4.89 6.807a1.89 1.89 0 110-3.782 1.89 1.89 0 010 3.782zm13.841 11.924h-3.258V13.63c0-1.216-.022-2.781-1.694-2.781-1.696 0-1.957 1.325-1.957 2.693v5.189H8.564V8.241h3.127v1.433h.044c.435-.825 1.499-1.694 3.085-1.694 3.301 0 3.911 2.173 3.911 4.997v5.754z"></path></svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2.857142857142857rem" height="2.857142857142857rem" class="brandhub-social-media-box-item__icon brandhub-icon"><path d="M31.68 9.556s-.313-2.221-1.272-3.199c-1.217-1.284-2.581-1.29-3.206-1.365-4.478-.326-11.195-.326-11.195-.326h-.014s-6.717 0-11.195.326c-.626.074-1.989.08-3.207 1.364C.632 7.334.32 9.554.32 9.554S0 12.162 0 14.77v2.445c0 2.608.32 5.216.32 5.216s.312 2.221 1.271 3.198c1.218 1.284 2.817 1.244 3.529 1.378 2.56.248 10.88.324 10.88.324s6.724-.01 11.202-.336c.625-.076 1.989-.081 3.206-1.366.959-.978 1.272-3.198 1.272-3.198s.32-2.607.32-5.216V14.77c0-2.607-.32-5.216-.32-5.216zM12.696 20.18l-.001-9.055 8.646 4.543-8.645 4.512z" fill="currentColor"></path></svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="2.857142857142857rem" height="2.857142857142857rem"
              viewBox="0 0 30 30"
              style=" fill:#000000;">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
          </div>
  
      </section>
   -->
  </full-page>
  
    
    
   
</template>



<script>
import FullPage from 'vue-fullpage.js'
import emailjs from 'emailjs-com';


export default {
  name: 'social',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail() {
      
        emailjs.sendForm('service_lkfqu15', 'template_5goj0mj', this.$refs.form,
        'SQG0cUG62JHnUBx8r', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
     
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
    msgSENT(){
      alert('message sent')
    }
  }
}
</script>

<style scoped>
    .container {
        padding: 52px 100px;
    }
    .contact{
      background-color: black;
    }


    h2{
        font-weight: 500;
        font-size: 48px;
        text-align: center;
       padding: 20px;
    }

    .social{
        width: 100%;
        height: 20%;
     
     
    }

    .social-links{
        display: flex;
        justify-content: space-around;
        padding: 20px;
        z-index: 2;
    }
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }
    
    body{
      min-height: 100vh;
      background: url(background.jpg) no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .contact-section{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    background-color: rgb(0, 0, 0);
    }
    
    .contact-info{
      color: #fff;
      max-width: 500px;
      line-height: 65px;
      padding-left: 50px;
      font-size: 18px;
    }
    
    .contact-info i{
      margin-right: 20px;
      font-size: 25px;
    }
    
    .contact-form{
      max-width: 700px;
     
    }
    
    .contact-info, .contact-form{
      flex: 1;
    }
    
    .contact-form h2{
      color: #fff;
      text-align: center;
      font-size: 35px;
      text-transform: uppercase;
      margin-bottom: 30px;
    }
    
    .contact-form .text-box{
      background: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
      border: none;
      width: calc(50% - 10px);
      height: 50px;
      padding: 12px;
      font-size: 15px;
      border-radius: 5px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      opacity: 0.9;
    }
    
    .contact-form .text-box:first-child{
      margin-right: 15px;
    }
    
    .contact-form textarea{
      background: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
      border: none;
      width: 100%;
      padding: 12px;
      font-size: 15px;
      min-height: 200px;
      max-height: 400px;
      resize: vertical;
      border-radius: 5px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      opacity: 0.9;
    }
    
    .contact-form .send-btn{
      float: right;
      background: #2E94E3;
      color: #fff;
      border: none;
      width: 120px;
      height: 40px;
      font-size: 15px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
      transition-property: background;
    }
    
    .contact-form .send-btn:hover{
      background: #0582E3;
    }
    
    @media screen and (max-width: 950px){
      .contact-section{
        flex-direction: column;
      }
    
      .container[data-v-fecc9fea] {
        padding: 50px 32px;
    }
    
      .contact-form h2{
        font-size: 30px;
      }
    
      .contact-form .text-box{
        width: 100%;
      }
    }
    
    /*css for alert messages*/
    
    .alert-success{
      z-index: 1;
      background: #D4EDDA;
      font-size: 18px;
      padding: 20px 40px;
      min-width: 420px;
      position: fixed;
      right: 0;
      top: 10px;
      border-left: 8px solid #3AD66E;
      border-radius: 4px;
    }
    
    .alert-error{
      z-index: 1;
      background: #FFF3CD;
      font-size: 18px;
      padding: 20px 40px;
      min-width: 420px;
      position: fixed;
      right: 0;
      top: 10px;
      border-left: 8px solid #FFA502;
      border-radius: 4px;
    }

    

    @media(max-width :650px){
        h2 {
            font-weight: 500;
            font-size: 36px;
            text-align: center;
            margin: 0;
        }

        .social-links{
            column-gap: 4.5714285714rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            row-gap: 2.8571428571rem;
            text-align: center;
            transition: opacity .5s;
            z-index: 2;
        
        }
        
    }

</style>