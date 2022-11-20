<template>
  <div>
    
    <CartItem />
    <!-- <button v-on:click="gotoCheckOut()">Checkout</button> -->
  </div>
</template>
<script>
import CartItem from "../components/CartItem.vue";
export default {
  components: { CartItem },
  name: "Cart",
  methods: {
    gotoCheckOut() {
      this.$router.push("/checkout");
    },
  },
};
</script>


