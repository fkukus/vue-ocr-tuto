<template>
  <div class="home">
    <h1>{{ restaurentName }}</h1>
      <p class="description">
        Bienvenue dans notre café {{ restaurentName }} ! Nous sommes réputés pour notre
        pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le matin
        ou avec un goûter réconfortant. Mais attention, vous verrez qu'il est
        difficile de s'arrêter.
      </p>

      <section class="menu">
        <h2>Menu</h2>
        <MenuItem 
          v-for="item in simpleMenu"
          :key="item.name"
          :name="item.name"
          :image="item.image"
          :quantity="item.quantity"
          :inStock="item.inStock"
          :price="item.price"
        />
      </section>

      <aside class="shopping-cart">
        <h2>Panier d'achat: {{ shoppingCart }} article<span v-show="shoppingCart > 1">s</span></h2>
      </aside>

      <footer class="footer">
        <p>{{ copyright }}</p>
      </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuItem from '@/components/MenuItem.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    MenuItem
  },
  computed: {
    ...mapState(['shoppingCart', 'restaurentName', 'simpleMenu']),
    ...mapGetters(['copyright']),
  },
}
</script>

<style lang="scss">
.home {
  text-align: center;

  .description {
    max-width: 960px;
    font-size: 1.2rem;
    margin: 0 auto;
  }

  .footer {
    text-align: center;
    font-style: italic;
  }


  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .shopping-cart {
    position: absolute;
    right: 30px;
    top: 0;
  }
}
</style>