<template>
  <div id="header" class="header">
    <div class="container">
      <div class="header-inner">
        <a href="" class="logo">
          <img v-bind:src="getImgUrl(logoImage)" v-bind:alt="logoAlt"/>
        </a>

        <nav>
          <ul>
            <li>
              <router-link exact to="/">home</router-link>
            </li>

            <li>
              <router-link exact to="/about">about</router-link>
            </li>

            <li>
              <router-link exact to="/products">products</router-link>
            </li>

            <li>
              <router-link exact to="/contact">contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  // Imports
	import getUrlImg from "../mixins/getUrlImg";

  export default {
    data(){
      return{
        logoImage: 'logo.png',
        logoAlt: 'site - logo'
      }
    },
    methods:{

    },
    mixins: [getUrlImg]
	}
</script>

<style scoped>
  .header { padding: 10px; background-color: #337AB7; }

  .header-inner { display: flex; justify-content: space-between; align-items: center; padding: 0 15px; }

  ul { display: flex; margin-bottom: 0; padding-left: 0; list-style-type: none; }

  ul li { padding: 0 5px}

  ul li a { display: inline-block; padding: 5px 13px; border-radius: 5px; text-transform: capitalize; color: #fff; }

  a:hover,
  .router-link-active{ background: rgba(255,255,255,0.8); color: #444; }

  img { max-width: 15%; }
</style>
