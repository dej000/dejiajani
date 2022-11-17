<template>
    <header class="header" :class="{'scrolled-nav':scrolledNav}"> 
        
       
       
        <nav class="navbar">
            <ul v-show="!mobile" class="navigation">
                <li><a href="#home">HOME</a></li>
                <li><a href="#work">PORTFOLIO</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contact">CONTACTS</a></li>
            
            </ul>    
        </nav>
       <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active':mobileNav}"></i>
       </div>

       <transition>
        <ul v-show="mobileNav" class="dropdown-nav">
            <li @click="toggleMobileNav"><a href="#home">HOME</a></li>
            <li @click="toggleMobileNav"><a href="#work">PORTFOLIO</a></li>
            <li @click="toggleMobileNav"><a href="#about">ABOUT</a></li>
            <li @click="toggleMobileNav"><a href="#contact">CONTACTS</a></li> 
        
        </ul>   
       </transition>

    </header>

    
</template>

<script>
    export default{
        name :'navigation',
        data(){
            return{
                scrolledNav:null,
                mobile:null,
                mobileNav:null,
                windowWidth:null,
            }
        },
        created(){
            window.addEventListener('resize',this.checkScreen)
            this.checkScreen()
        },

        mounted(){
            window.addEventListener('scroll',this.updateScroll)
        },
        methods: {
            toggleMobileNav(){
                this.mobileNav =!this.mobileNav
            },

            updateScroll() {
                const scrollPosition = window.scrollY;
                if(scrollPosition > 460){
                    this.scrolledNav = true;
                    return
                }
                this.scrolledNav = false
            },

            checkScreen(){
                this.windowWidth =window.innerWidth;
                if(this.windowWidth <= 750){
                    this.mobile = true
                    return
                }
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        },
    };
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: center; 
        align-items: center;
        padding: 10px 10%;
        z-index: 999;
        transition: .5s ease all;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        right: 0;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(5px);
        background-color: rgba(252, 243, 243, -2);
        
    }
    nav{
        display: flex;
        justify-content: space-between;
        width: 100%;
      
    }

    .scrolled-nav{
        background-color: rgb(141, 132, 132,0);
        box-shadow: 0 20px 50px rgb(0 0 0 / 46%);
        backdrop-filter: blur(5px);
        height: 50px;
        transition: .3s ease;
    }

    .scrolled-nav header{
        padding: 3px 10%;
    }

    .scrolled-nav .logo img{
        height: 30px;

    }

    .scrolled-nav .navbar a{
        font-size: 12px;
        color: rgb(255, 255, 255);
    }
    
  
    .icon{
        color: white;
        cursor: pointer;
    }

    .icon i{
        transition: 0.8s ease all;
    }

    .icon-active{
        transform: rotate(180deg);
    }
    
    .dropdown-nav{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(1.7857142857rem);
        top: 53px;
        left: 0;
        gap: 20px;
        transition: height .2s ease-in-out;
        padding: 0;
        

       
        
    } 

    .dropdown-nav::before{
        content: '';
       position: absolute;
       width: 100%;
       height: 100%;
       background-color: rgba(16, 16, 16, 0.5);
       backdrop-filter: blur(1.7857142857rem);
       z-index: -1;
   }

    .dropdown-nav li{
         margin-left: 0;
         list-style: none;
         
    }

    .dropdown-nav a{
        color: white;
        text-decoration: none;
        padding: 5px;
    }

    .dropdown-nav a:hover{
        color: whitesmoke;
        box-shadow: inset 100px 0 0 0 #636768;
    
    }


    
    .logo img{
        height: 40px;
    }
    
    .navigation{
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: center;
    }

    .navigation li{
        list-style: none;
        margin-left: 60px;
        display: flex;
        
    }

    ul.navigation{
        margin-bottom: 0;
        padding-left: 0;
    }
   
    
    nav.navbar a{
        box-shadow: inset 0 0 0 0 #4e5051;
        color: whitesmoke; 
        padding: 4px;
        font-size: 14px;
        transition: color .3s ease-in-out, box-shadow .3s ease-in-out ;
        text-decoration: none;
    }
    
    
    
    nav.navbar a:hover {
        color: whitesmoke;
        box-shadow: inset 100px 0 0 0 #636768;
    
    
    }  
    

    @media (max-width : 750px){
        .header .nav-links{
            display: none ;
         }
        
         .header .nav-links.active{
            position: fixed;
            height: 100vh;
            width: 100%;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column ;
            justify-content: center;
            align-items: center;
            background: rgba(1,1,1,0.9);
         }
        
      
        
        
         header nav.navbar a{
            box-shadow: inset 0 0 0 0 #54b3d6;
            color: rgb(255, 255, 255);
            font-weight:bold;
            padding: 4px;
            font-size: 14px;
            transition: color .3s ease-in-out, box-shadow .3s ease-in-out ;
            
        }
        
        
    }
    
</style>