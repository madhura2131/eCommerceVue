<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div
      class="item"
      v-for="item in this.$store.state.cartItems"
      :key="item.name"
    >
      <!-- <div id="itemId">{{ item.id }}</div> -->
      <div id="container"><img id="productImg" src="../assets/cs.png" /></div>
      <div id="itemName">{{ item.name }}</div>
      <!-- <div id="itemDesc">{{ item.description }}</div> -->
      <div id="itemPrice">${{ item.price }}/-</div>
      <div id="itemCount">{{ item.count }}</div>
      <div>
        <button id="manipulators" v-on:click="addQuantity(item)">+</button>
        <button id="manipulators" v-on:click="subtractQuantity(item)">-</button>
        <button id="add" v-on:click="removeFromCart(item)">Remove Item</button>
      </div>
    </div>
    <button v-on:click="gotoCheckOut()">Checkout</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  methods: {
    addToCart(item) {
      if (item.count > 0) {
        this.$store.state.cartItems.push(item);
        this.$store.state.cartCount = this.$store.state.cartCount + item.count;
      }
    },
    gotoCheckOut() {
      this.$router.push("/checkout");
    },
    removeFromCart(item) {
      for (let i = 0; i < this.$store.state.cartItems.length; i++) {
        if (item.id == this.$store.state.cartItems[i].id) {
          this.$store.state.cartItems.splice(i, 1);
          this.$store.state.cartCount =
            this.$store.state.cartCount - item.count;
          console.log("removed Item");
        }
      }
    },

    addQuantity(item) {
      item.count++;
      this.$store.state.cartCount += 1;
      for (let i = 0; i < this.$store.state.cartItems.length; i++) {
        if (item.name == this.state.cartItems[i].name) {
          this.$store.state.cartItems[i].count += 1;
        }
      }
      console.log(item.count);
    },
    subtractQuantity(item) {
      item.count--;
      this.$store.state.cartCount -= 1;
      for (let i = 0; i < this.$store.state.cartItems.length; i++) {
        if (item.name == this.state.cartItems[i].name) {
          this.$store.state.cartItems[i].count -= 1;
        }
      }
      console.log(item.count);
    },
  },
};
</script>

<style>
#manipulators {
  margin: 5px;
  width: 35px;
  height: 35px;
  color: #ffffff;
  border: none;
  background-color: #3a969b;
  border-radius: 50px;
  font-weight: 700;
}
#add {
  width: 100px;
  height: 50px;
  color: #ffffff;
  border: none;
  background-color: #dd5e5e;
  border-radius: 10px;
  margin: 15px;
  font-weight: 700;
}
.item {
  display: flex;
}
.item div {
  width: 1000px;
}
#itemId {
  width: 10%;
}
#itemName {
  width: 30%;
}
#itemDesc {
  width: 35%;
}
#itemPrice {
  width: 10%;
}
#itemCount {
  width: 10%;
}
</style>
