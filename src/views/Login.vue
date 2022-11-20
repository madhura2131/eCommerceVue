<template>
  <div id="main">
      <form @submit="login">
      <div class="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Login</h1>
        
        <br />
        <br />
        <label for="uname"><b>Username</b></label
        ><br /><br />
        <input
          class="textbox"
          type="text"
          placeholder="Enter Username"
          name="uname"
          id="userid"
          required
        /><br />
        <br />
        <br />

        <label for="psw"><b>Password</b></label
        ><br /><br />
        <input
          class="textbox"
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="pwdid"
          required
        /><br />
        <br /><br /><br />
        <button type="submit">Login</button><br /><br />
         <button type="submit" v-on:click="profile()">Profile</button><br /><br />
        
      </div>
    </form>
  </div>
</template>

<script>
import store from "../store/index";
import router from "../router/index";
export default {
  name: "Login",
  store,
 methods: {
    login(e) {
      e.preventDefault();
     
      let password = this.password;
      let username = this.username;
      let users = this.$store.state.users.filter(
        (user) => user.username == username && user.password == password
      );

      if (users.length > 0) {
        this.$store.commit("loggedIn");
        this.$store.state.currentUser = users[0];
        router.push("/");
      }
    }
    ,
    profile(e)
    {
      e.preventDefault();
      router.push("/Profile");
    }
  
  },
};
</script>
<style>
body {
  margin: 0%;
  height: 100%;
}
.textbox {
  text-align: center;
  color: #6d6d6d;
  border: 0;
  background-color: #ececec;
  border-radius: 50px;
  height: 35px;
  accent-color: #3a969b;
  transition-duration: 0.5s;
}
.textbox:hover {
  outline: none !important;
  border-color: #3a969b;
  box-shadow: 0 0 10px #2c7377;
  transition-duration: 0.5s;
}

.textbox:focus {
  outline: none !important;
  border-color: #3a969b;
}

button {
  background-color: #3a969b;
  color: white;
  font-weight: bold;
  width: 120px;
  height: 35px;
  border: 0;
  border-radius: 50px;
  transition-duration: 0.5s;
}

button:hover {
  outline: none !important;
  border-color: #3a969b;
  box-shadow: 0 0 10px #2c7377;
  background-color: white;
  color: #3a969b;
  transition-duration: 0.5s;
}
input {
  accent-color: #3a969b;
}
label {
  color: #6d6d6d;
}
</style>
