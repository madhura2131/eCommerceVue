<template>
  <div id="app">
    <nav>
      <img id="logo" src="./assets/nuur (4).png" />
      <div>
        <ul>
          <li><router-link to="/reviews"> Reviews</router-link></li>
          <li><router-link to="/"> Products</router-link></li>
          <li><router-link to="/login"> Login</router-link></li>
          <li><router-link to="/signup"> Sign Up</router-link></li>
          <li>{{ this.$store.state.currentUser.username }}</li>
          <li>
            <router-link to="/cart"
              ><img src="./assets/cart.png" width="25px" />
              <strong>{{ this.$store.state.cartCount }}</strong></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#logo {
  margin-left: 20px;
}
nav {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0px 5px 15px #225457;
  width: 100%;
  height: 100px;
  background-color: #338185;
  color: white;
  display: flex;
  margin: auto;
  position: fixed;
}
nav ul {
  margin-top: 30px;
  display: inline-block;
  position: absolute;
  right: 20px;
}
nav ul li {
  display: inline-block;
  margin-right: 60px;
}
nav ul li img {
  margin-right: 10px;
}
nav a {
  color: white;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
