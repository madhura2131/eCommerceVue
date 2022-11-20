<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="item" v-for="item in this.$store.state.items" :key="item.name">
      <!-- <div id="itemId">{{ item.id }}</div> -->
      <div id="container"><img id="productImg" src="../assets/cs.png" /></div>
      <div id="itemName">
        {{ item.name }}<br />
        <p>{{ item.description }}</p>
      </div>
      <!-- <div id="itemDesc"></div> -->
      <div id="itemPrice">${{ item.price }}/-</div>
      <input type="text" placeholder="Enter Comment" />

      <!-- <div id="itemCount">{{ item.count }}</div> -->

      <div>
        <br />
        <br />
        <br />
        <button id="comment">Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  //   methods: {
  //     addToCart(item) {
  //       if (item.count > 0) {
  //         this.$store.state.cartItems.push(item);
  //         this.$store.state.cartCount = this.$store.state.cartCount + item.count;
  //       }
  //     },

  //     removeFromCart(item) {
  //       for (let i = 0; i < this.$store.state.cartItems.length; i++) {
  //         if (item.id == this.$store.state.cartItems[i].id) {
  //           this.$store.state.cartItems.splice(i, 1);
  //           this.$store.state.cartCount =
  //             this.$store.state.cartCount - item.count;
  //           console.log("removed Item");
  //         }
  //       }
  //     },

  //     addQuantity(item) {
  //       item.count++;
  //       console.log(item.count);
  //     },
  //     subtractQuantity(item) {
  //       item.count--;
  //       console.log(item.count);
  //     },
  //   },
};
</script>

<style>
input {
  height: 35px;
}
body {
  margin: 0%;
  height: 100%;
}
#productImg {
  height: 140px;
}
#title {
  color: #ffffff;
  width: 1000px;
  height: 40px;
  background-color: #3a969b;
  margin: 25px auto;
  display: flex;
  padding: 0px 30px 20px 30px;
  border-radius: 10px;
}
#t1 {
  width: 80%;
}
#t2 {
  width: 5%;
}
#t3 {
  width: 20%;
}
#t4 {
  width: 10%;
}
#container :hover {
  background-color: #3a969b;
  transition-duration: 0.7s;
}
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #8d8d8d;
  display: flex;
  border-radius: 10px;
  width: 1000px;
  height: 150px;
  background-color: #f7f7f7;
  margin: 25px auto;
  padding: 30px;
}

#banner {
  margin-top: 100px;
  padding: 0px;
}
.item div {
  margin: 0px;
}
/* #itemId {
  width: 10%;
} */
#itemName {
  text-align: left;
  margin-left: 50px;
  font-size: 1.2em;
  height: 20px;
  font-weight: 600;
  min-width: 400px;
}
#itemName p {
  text-align: justify;
  font-size: 0.75em;
  font-weight: 200;
}
#itemDesc {
  width: 10px;
}
#itemPrice {
  min-width: 180px;
}
#itemCount {
  font-weight: 900;
  width: 10%;
}
</style>
