import Vue from "vue";
import Vuex from "vuex";
import User from "../store/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: "",
    loggedIn:0,

    items: [
      {
        id: 1,
        name: "Nuur Skin Toner",
        description:
          "Our skin toner is made from natural ingredients and is fit for all skins. Our products don't hamper the skin's natural aging process, instead its nutrient rich compound helps reduce its visible effects.",
        price: 16.99,
        count: 0,
        comments: [{ user: "", comment: "" }],
      },
      {
        id: 2,
        name: "Nuur Bleach Cream",
        description:
          "Our bleach cream is made from natural ingredients and is fit for all skins. Our products don't hamper the skin's natural aging process, instead its nutrient rich compound helps reduce its visible effects.",
        price: 21.99,
        count: 0,
        comments: [{ user: "", comment: "" }],
      },
      {
        id: 3,
        name: "Nuur Foundation",
        description:
          "Our foundation is made from natural ingredients and is fit for all skins. Our products don't hamper the skin's natural aging process, instead its nutrient rich compound helps reduce its visible effects.",
        price: 59.99,
        count: 0,
      },
      {
        id: 4,
        name: "Nuur Aloe Gel",
        description:
          "Our aloe gel is made from natural ingredients and is fit for all skins. Our products don't hamper the skin's natural aging process, instead its nutrient rich compound helps reduce its visible effects.",
        price: 12.99,
        count: 0,
      },
      {
        id: 5,
        name: "Nuur Face Pack",
        description:
          "Our face pack is made from natural ingredients and is fit for all skins. Our products don't hamper the skin's natural aging process, instead its nutrient rich compound helps reduce its visible effects.",
        price: 21.99,
        count: 0,
      },
    ],
    cartItems: [],
    cartCount: 0,
  },
  mutations: {
    userdata(state,userinfo){
      var user = new User(userinfo.username,userinfo.password)
      var setid = 0;
            state.users.forEach(user => {
                if(user.id>setid)
                {
                    setid = user.id
                }
            });
            setid++;
            user.id = setid; 
            state.users = [...state.users,user];
    
  },
  loggedIn(){
    this.state.loggedIn++;
  },

  updatedetail(state,userinfo)
        {
            var user = new User(userinfo.username,userinfo.password,userinfo.address)
            user.id = userinfo.id
           

            state.currentUser =user
        },
  },

  actions: {},
  modules: {},
});
