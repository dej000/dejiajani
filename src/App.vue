<script>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted} from 'vue'
import {animate} from 'motion'
import navigationVue from './components/navigation.vue';
import socialVue from './views/social.vue';
import Footerview from './views/FooterView.vue';
import WorksView from './views/WorksView.vue';
import AboutView from './views/AboutView.vue';
import FullPage from 'vue-fullpage.js';

onMounted (()=>{
  const animation = animate(
    
  )
})



 export default{
 
    components :{ navigationVue, socialVue, Footerview,WorksView,AboutView}
 }

 
</script>

<template>
  <full-page :options="options"  id="fullpage">
    <navigationVue/>
  


    <div>
       <RouterView />
    </div>
    <WorksView/>
    <AboutView/>
    <socialVue/>
   
  </full-page>
  

 
</template>

<style >

html{
  scroll-behavior: smooth;
}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    
  }
  .app {
    height: 100vh;
    position: relative;
   
    
  
  }
  .container {
    padding: 0 20px;
    max-width: 1140px;
    margin: 0 auto;
    
    
  }
</style>
