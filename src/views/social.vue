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
        padding: 52px 50px;
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
      width: 100%;
     
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