<template>
  <div class="menu-item">
    <img
      class="menu-item__image"
      :src="image.source"
      :alt="image.alt"
    />
    <div>
      <h3>{{ name }}</h3>
      <p v-if="inStock">En stock</p>
      <p v-else>En rupture de stock</p>
      <h4>{{ getPrice }}</h4>
      <div v-if="inStock">
        <label for="add-item-quantity">Quantité :</label>
        <input id="add-item-quantity" type="number" v-model.number="quantity" />
        <button @click="addFunction(quantity)">Ajouter au panier d'achat</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: [
    'name',
    'image',
    'quantity',
    'inStock',
    'addFunction',
    'price'
  ],
  data() {
    return {
      discount: 0
    }
  },
  computed: {
    getPrice() {
      const calculatedPrice = (this.price * (100 + this.discount) / 100).toFixed(2)
      let formatedDiscount = ''

      if (this.discount !== 0) {
        formatedDiscount = ' (' + this.discount + '%)'
      }

      return calculatedPrice + ' €' + formatedDiscount
    }
  },
  beforeMount() {
    const today = new Date().getDate()
    
    if (today % 2 === 0) {
      this.discount = -10
    }
  },
}
</script>

<style>
.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.menu-item__image {
  max-width: 300px;
}
</style>