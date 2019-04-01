<template>
  <div>
    <div class="container">
      <h1>{{computedProducts.length}} Products</h1>

      <div>
        <div class="col-md-2">
          <div class="filters">
            <h2>Filters</h2>

            <div class="checkboxes-categories">
              <h3>Categories</h3>

              <div class="form-group">
                <input type="checkbox" value="pants" v-model="categories" id="checkbox-pants"/>
                <label for="checkbox-pants">Pants</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="t-shirt" v-model="categories" id="checkbox-t-shirts"/>
                <label for="checkbox-t-shirts">T-shirts</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="jakets" v-model="categories" id="checkbox-jakets"/>
                <label for="checkbox-jakets">Jakets</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="gloves" v-model="categories" id="checkbox-gloves"/>
                <label for="checkbox-gloves">Gloves</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="boots" v-model="categories" id="checkbox-boots"/>
                <label for="checkbox-boots">Boots</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="blouses" v-model="categories" id="checkbox-blouses"/>
                <label for="checkbox-blouses">Blouse</label>
              </div>
            </div>

            <div class="checkboxes-brands">
              <h3>Brands</h3>

              <div class="form-group">
                <input type="checkbox" value="adidas" v-model="brands" id="checkbox-adidas"/>
                <label for="checkbox-adidas">Adidas</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="nike" v-model="brands" id="checkbox-nike"/>
                <label for="checkbox-nike">Nike</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="reebok" v-model="brands" id="checkbox-reebok"/>
                <label for="checkbox-reebok">Reebok</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="puma" v-model="brands" id="checkbox-puma"/>
                <label for="checkbox-puma">Puma</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="la-sportiva" v-model="brands" id="checkbox-la-sportiva"/>
                <label for="checkbox-la-sportiva">La Sportiva</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="scarpa" v-model="brands" id="checkbox-scarpa"/>
                <label for="checkbox-scarpa">Scarpa</label>
              </div>
            </div>

            <div class="checkboxes-brands">
              <h3>Sizes:</h3>

              <div class="form-group">
                <input type="checkbox" value="s" v-model="sizes" id="checkbox-s"/>
                <label for="checkbox-s">S</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="m" v-model="sizes" id="checkbox-m"/>
                <label for="checkbox-m">M</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="l" v-model="sizes" id="checkbox-l"/>
                <label for="checkbox-l">L</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="xl" v-model="sizes" id="checkbox-xl"/>
                <label for="checkbox-xl">XL</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="xxl" v-model="sizes" id="checkbox-xxl"/>
                <label for="checkbox-xxl">XXL</label>
              </div>

              <div class="form-group">
                <input type="checkbox" value="xxxl" v-model="sizes" id="checkbox-xxxl"/>
                <label for="checkbox-xxxl">XXXL</label>
              </div>
            </div>
          </div><!--/.filters -->
        </div>

        <div class="col-md-10">
          <div class="products">
            <div class="product col-md-4 text-center" v-for="(product, index) in computedProducts" :key="index">
              <div class="product-img">
                <img v-bind:src="getImgUrl(product.image)" />
              </div>

              <div>
                <h3>{{product.title}}</h3>
                <p>{{product.brand | upper}}</p>
                <p>Size: <em>{{product.size | upper}}</em></p>
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
        products:[
          { id:  1, title: 'T-shirt La Sportiva', brand: 'la-sportiva', size: 's',  category: 't-shirt', price: '50', image: 'la-sportiva-t-shirt.jpg'},
          { id:  2, title: 'T-shirt Scarpa',      brand: 'scarpa',      size: 'm',  category: 't-shirt', price: '45', image: 'scarpa-t-shirt.jpg' },
          { id:  3, title: 'Originals Trefoil',   brand: 'adidas',      size: 'm',  category: 'blouses',  price: '54', image: 'Mens-blouse-adidas-Originals-Trefoil.jpg' },
          { id:  4, title: 'T-shirt Adidas',      brand: 'adidas',      size: 'l',  category: 't-shirt', price: '50', image: 'addidas-t-shirt.jpg' },
          { id:  5, title: 'T-shirt Puma',        brand: 'puma',        size: 'xl', category: 't-shirt', price: '43', image: 'puma-t-shirt.jpg' },
          { id:  6, title: 'Pants Woman',         brand: 'la-sportiva', size: 'm',  category: 'pants',   price: '65', image: 'la-sportiva-pants-white-women.jpg' },
          { id:  7, title: 'Man jacket',          brand: 'la-sportiva', size: 'm',  category: 'jakets',  price: '48', image: 'la-sportiva-man-jacket.jpg' },
          { id:  8, title: 'Softshell',           brand: 'la-sportiva', size: 'xl', category: 'jakets',  price: '90', image: 'la-sportiva-theory-hoody-softshell-jacket.jpg' },
          { id:  9, title: 'Trefoil blouse',      brand: 'adidas',      size: 'm',  category: 'blouses',  price: '39', image: 'adidas_trefoil_blouse.jpg' },
          { id: 10, title: 'Windbreaker Woman',   brand: 'la-sportiva', size: 'l',  category: 'jakets',  price: '42', image: 'la-sportiva-womens-briza-windbreaker-jacket.jpg' },
          { id: 11, title: 'Oversized Women',     brand: 'adidas',      size: 's',  category: 'blouses',  price: '44', image: 'Womens-blouse-adidas-Originals-Oversized-Sweat.jpg' },
          { id: 12, title: 'Syborg jacket',       brand: 'la-sportiva', size: 'm',  category: 'jakets',  price: '48', image: 'LaSportiva-syborg-jacket-womens.jpg' },
          { id: 13, title: 'football blouse',     brand: 'adidas',      size: 'm',  category: 'blouses',  price: '51', image: 'adidas-football-blouse.jpg' },
        ],
        categories: [],
        brands: [],
        sizes: []
      }
    },
    computed: {
      computedProducts: function () {
        return this.products.filter((item) => {
          return (this.brands.length === 0 || this.brands.includes(item.brand)) &&
            (this.categories.length === 0 || this.categories.includes(item.category)) &&
            (this.sizes.length === 0 || this.sizes.includes(item.size))
        })
      }
    },
    filters:{
      'upper':function (value) {
        return value.toUpperCase();
      }
    },
    mixins: [getUrlImg]
  }
</script>

<style scoped>
  .form-group {margin-bottom: 0;}
</style>
