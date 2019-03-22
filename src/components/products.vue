<template>
  <div>
    <div class="shell">
      <h1>This is product page</h1>

      <div class="container">
        <div class="filters">
          <h2>Filters</h2>

          <h3>Categories</h3>
          <div class="checkboxes-categories">
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

          <h3>Brands</h3>
          <div class="checkboxes-brands">
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

          <h3>Sizes:</h3>
          <div class="checkboxes-brands">
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

        <div class="products">
          <div class="products-inner">
            <div class="product" v-for="product in filtredProducts">
              <div class="product-img">
                <img v-bind:src="getImgUrl(product.image)" />
              </div>

              <div class="product-content">
                <h3>{{product.title}}</h3>
                <p>{{product.brand}}</p>
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
          {
            id: 1,
            title: 'T-shirt La Sportiva',
            brand: 'la-sportiva',
            size: 's',
            category: 't-shirt',
            price: '50',
            image: 'la-sportiva-t-shirt.jpg',
          },
          {
            id: 2,
            title: 'T-shirt Scarpa',
            brand: 'scarpa',
            size: 'm',
            category: 't-shirt',
            price: '45',
            image: 'scarpa-t-shirt.jpg',
          },
          {
            id: 2,
            title: 'T-shirt Adidas',
            brand: 'adidas',
            size: 'l',
            category: 't-shirt',
            price: '50',
            image: 'addidas-t-shirt.jpg',
          },
          {
            id: 4,
            title: 'T-shirt Puma',
            brand: 'puma',
            size: 'xl',
            category: 't-shirt',
            price: '43',
            image: 'puma-t-shirt.jpg',
          },
        ],
        categories: [],
        brands: [],
        sizes: []
      }
    },
    methods:{

    },
    computed:{
      filtredProducts:function () {
        return this.products.filter((product) => {
          if (this.brands.length !== null) {
            return product.brand.match(this.brands);
          }
          if (this.sizes.length !== null) {
            console.log(this.sizes);
            return product.size.match(this.sizes);
          }
          if (this.categories.length !== null) {
            return product.category.match(this.categories);
          }
        });
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
  .container {display: flex; justify-content: space-between; flex-wrap: wrap;}
  .filters { flex: 0 0 20%; background: lightgray; padding: 10px;}
  .products { flex: 0 0 80%;}
  .products-inner {display: flex; justify-content: space-between; flex-wrap: wrap;}
  h3 {padding: 10px;}
  .product-img {flex: 1 0 50%;}
  .product-content {flex: 1 0 50%; text-align: center;}
</style>
