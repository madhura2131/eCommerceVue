<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br /><br />
    <br />
    <br />
    <h1>Enter shipping address</h1>
    <br />
    <textarea id="address"></textarea><br />
    <button v-on:click="checkout()">Place Order</button>
  </div>
</template>
<script>
export default {
  name: "CheckOut",
  data: () => {
    return {
      orderData: {
        username: "",
        items: [],
        address: "",
      },
    };
  },
  methods: {
    checkout() {
      // this.orderData.address = document.getElementById("address").value;
      // this.orderData.username = this.$store.state.currentUser;
      // this.orderData.items.push(this.$store.state.CartItem);
      // this.$store.state.orders.push(this.orderData);
      // console.log(this.$store.state.orders);
      alert("Order is placed successfully.");
      this.$router.push("/");
    },
  },
};
</script>
