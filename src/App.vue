<template>
  <div class="container-fluid px-0" id="main-wrapper">
      <Header @show-menu="this.menuShow=true" :menuShow="menuShow" @close-menu="this.menuShow=false"></Header>
      <SideMenu v-if="menuShow"></SideMenu>
      <router-view></router-view>
      <Footer></Footer>

  </div>

</template>

<script>
  import Header from './components/Header.vue';
  import SideMenu from './components/SideMenu';
  import Footer from './components/Footer.vue';

  export default{
    data(){
      return{
          menuShow:false
      }
    },
    components:{
      Header,
      SideMenu,
      Footer
    }
  }
</script>

<style lang="scss">
#app {

}
</style>
