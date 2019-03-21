<template>
  <div>
    <div class="shell">
      <h1>This is product page</h1>

      <div class="container">
        <div class="filters">
          <h2>Filters</h2>

          <h3>Categories</h3>
          <ul>
            <li v-for="category in categories">{{category}}</li>
          </ul>

          <h3>Models</h3>
          <ul>
            <li v-for="brand in brands">{{brand}}</li>
          </ul>

          <h3>Sizes:</h3>
          <ul>
            <li v-for="size in sizes">{{size}}</li>
          </ul>
        </div><!--/.filters -->

        <div class="products">
          <div class="products-inner">
            <div class="product" v-for="product in products">
              <div class="product-img">
                <img v-bind:src="getImgUrl(product.image)" />
              </div>

              <div class="product-content">
                <h3>{{product.title}}</h3>
                <p>{{product.brand}}</p>
                <p>Size: <em>{{product.size}}</em></p>
                <p>Price: <strong>{{product.price}}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // Imports
  import getUrlImg from "../mixins/getUrlImg";

  export default {
    data() {
      return {
        products:{
          1: {
            id: 1,
            title: 'T-shirt La Sportiva',
            brand: 'La Sportiva',
            size: 'M',
            category: 't-shirt',
            price: '50',
            image: 'la-sportiva-t-shirt.jpg',
          },
          2: {
            id: 2,
            title: 'T-shirt Scarpa',
            brand: 'Scarpa',
            size: 'M',
            category: 't-shirt',
            price: '45',
            image: 'scarpa-t-shirt.jpg',
          },
          3: {
            id: 2,
            title: 'T-shirt Adidas',
            brand: 'Adidas',
            size: 'M',
            category: 't-shirt',
            price: '50',
            image: 'addidas-t-shirt.jpg',
          },
          4: {
            id: 4,
            title: 'T-shirt Puma',
            brand: 'Puma',
            size: 'M',
            category: 't-shirt',
            price: '43',
            image: 'puma-t-shirt.jpg',
          },
        },
        categories: ['pants', 't-shirts', 'jakets', 'gloves', 'boots', 'blouses'],
        brands: ['adidas', 'nike', 'reebok', 'puma', 'la sportiva', 'tribord', 'scarpa'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
      }
    },
    methods:{

    },
    mixins: [getUrlImg]
  }
</script>

<style scoped>
  .container {display: flex; justify-content: space-between; flex-wrap: wrap;}
  .filters { flex: 0 0 20%; background: red;}
  .products { flex: 0 0 80%;}
  .products-inner {display: flex; justify-content: space-between; flex-wrap: wrap;}
  .product-img {flex: 1 0 50%;}
  .product-content {flex: 1 0 50%; text-align: center;}
</style>
