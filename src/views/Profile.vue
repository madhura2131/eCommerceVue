


<template>
  <form @submit.prevent="update()" style="border: 1px solid #ccc">
    <div>
      <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label for="password"><b>Password</b></label
        ><br />
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          id="pwd"
          required
        /><br />

        <label for="address"><b>shipping address</b></label
        ><br />
        <input
          type="text"
          placeholder="Enter Email"
          name="address"
         id="add"
          required
        /><br />
      
        
        <button type="submit">Update</button><br />
      </div>
    </div>
  </form>
</template>

<script>
import store from "../store/index";
export default{

    name:'Profile',
    store,
    
    methods:{
        update(){
      
        let userinfo = {
          
          password : (this.password) ? this.password : this.$store.state.currentUser.password,
          address : (this.address) ? this.address : this.$store.state.currentUser.address,
          id : this.$store.state.currentUser.id,
          
        }
        this.$store.commit("updatedetail",userinfo);
    }
    },
};
</script>
