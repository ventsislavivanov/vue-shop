<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  //Imports
  import header from "./components/header.vue";
  import footer from "./components/footer.vue";

  export default {
    components:{
      'app-header': header,
      'app-footer': footer
    },
    data () {
      return {

      }
    }
  }
</script>

<style>

</style>
