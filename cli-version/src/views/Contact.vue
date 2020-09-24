<template>
  <div>
    <h2>Contactez-nous</h2>
      <p><strong>{{ restaurant.name }}</strong></p>
      <p>Adresse : {{ restaurant.address }}</p>
      <p>Téléphone : {{ restaurant.phone }}</p>
      <p>Email : {{ restaurant.email }}</p>
      <p>Horaires :</p>
      <ul>
        <li>L-V: 06:00 à 16:00</li>
        <li>Samedi: 07:00 à 14:00</li>
        <li>Dimanche: 07:00 à 12:00</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: () => {
    return {
      restaurant: {
        name: "La belle vue",
        address: "18 avene du Beurre, Paris, France",
        email: "hello@cafewithavue.bakery",
        phone: "01 88 88 88 88",
      }
    }
  }
}
</script>

<style lang="scss">

</style>