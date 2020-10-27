<template>
  <div class="container-fluid px-0" id="main-wrapper">
      <Header @show-menu="this.menuShow=true" :menuShow="menuShow" @close-menu="this.menuShow=false"></Header>
      <SideMenu v-if="menuShow"></SideMenu>
  </div>

</template>

<script>
  import Header from './components/Header.vue';
  import SideMenu from './components/SideMenu';
  export default{
    data(){
      return{
          menuShow:false
      }
    },
    components:{
      Header,
      SideMenu
    }
  }
</script>

<style lang="scss">
#app {

}
</style>
