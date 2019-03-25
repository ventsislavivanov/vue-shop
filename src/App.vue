<template>
  <div>
    <paginate>  </paginate>
    <!--<app-header></app-header>-->
    <!--<router-view></router-view>-->
    <!--<app-footer></app-footer>-->
  </div>
</template>

<script>
  //Imports
  import header from "./components/header.vue";
  import footer from "./components/footer.vue";
  import paginate from "./components/paginate.vue";

  export default {
    components:{
      'app-header': header,
      'app-footer': footer,
      'paginate' : paginate,
    },
    data () {
      return {

      }
    }
  }
</script>

<style>
  *,
  *:before,
  *:after { margin: 0; padding: 0; outline: 0; box-sizing: border-box}

  .shell { max-width: 800px; margin: 0 auto; }

  ul,
  ol { margin-bottom: 20px; padding-left: 20px; list-style-type: none; list-style-position: inside; }

  a { text-decoration: none; }

  img { height: auto; display: inline-block; vertical-align: middle; }
</style>
