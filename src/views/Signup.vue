<template>
  <form @submit.prevent="onsubmit" style="border: 1px solid #ccc">
    <div>
      <div class="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <label for="uname"><b>Username</b></label
        ><br /><br />
        <input
          class="textbox"
          type="text"
          placeholder="Enter Username"
          id="userd"
          name="uname"
          required
        /><br /><br /><br />

        <label for="email"><b>Email</b></label
        ><br /><br />
        <input
          class="textbox"
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        /><br /><br /><br />

        <label for="psw"><b>Password</b></label
        ><br /><br />
        <input
          class="textbox"
          type="password"
          placeholder="Enter Password"
          id="pwd"
          name="psw"
          required
        /><br /><br /><br />

        <label for="address"><b>Address</b></label
        ><br /><br />
        <textarea
          class="textbox"
          type="textarea"
          placeholder="Enter address"
          name="address"
          required
        ></textarea
        ><br /><br />
        <button type="submit">Sign up</button><br />
      </div>
    </div>
  </form>
</template>
<script>
import router from "../router/index";
import store from "../store/index";
export default {
  name: "Signup",
  store,

  methods: {
    onsubmit() {
      //  this.userData.username = document.getElementById("userd").value;
      //  this.userData.password = document.getElementById("pwd").value;
      //  this.userData.address = document.getElementById("add").value;
      //  this.$store.state.users.push(this.userData);

      const userinfo = {
        username: this.username,
        password: this.password,
        address: this.address,
        email: this.email,
      };
      this.$store.commit("userdata", userinfo);
      router.push("/login");
    },
  },
};
</script>
