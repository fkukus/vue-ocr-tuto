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
        <BaseButton @click="updateShoppingCart">
          Ajouter au panier
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue"

export default {
  name: 'MenuItem',
  components: {
    BaseButton,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      default: () => ({
        source: 'https://picsum.photos/id/112/300/200',
        alt: 'Illustration',
      })
    },
    quantity: {
      type: Number,
      default: 1,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
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
  methods: {
    updateShoppingCart() {
      this.$emit('add-items-to-cart', { quantity: this.quantity })
    }
  }
}
</script>

<style lang="scss">
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