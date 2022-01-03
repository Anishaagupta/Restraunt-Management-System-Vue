<template>
  <Header />
  <div class="restaurant-container">
    <form class="register" @submit="onSubmit">
      <img class="logo" src="../assets/restraunt.png" alt="Logo" />
      <h2>Update Old Restaurants</h2>
      <input
        required
        type="text"
        v-model="restaurants.name"
        placeholder="Restaurant's Name"
      />
      <input
        required
        type="text"
        v-model="restaurants.address"
        placeholder="Restaurant's Address"
      />
      <input
        required
        type="number"
        v-model="restaurants.contact"
        placeholder="Restaurant's Contact Number"
      />
      <button class="btn">Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header";
export default {
  name: "Update",
  components: { Header },
  data() {
    return {
      restaurants: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const updatedRestaurantsData = {
        name: this.restaurants.name,
        address: this.restaurants.address,
        id: Math.floor(Math.random() * 1),
        contact: this.restaurants.contact,
      };
      let result = await axios.put(
        `http://localhost:3000/restaurants/${this.$route.params.id}`,
        updatedRestaurantsData
      );
      if (result.status == 200) {
        localStorage.setItem("restraunt-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
      (this.name = ""), (this.address = ""), (this.contact = "");
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
    console.log(`this.$route.params.id`, this.$route.params.id);
    let result = await axios.get(
      `http://localhost:3000/restraunts/${this.$route.params.id}`
    );

    this.restaurants = result.data;
  },
};
</script>

<style scoped>
.restaurant-container {
  margin-top: 30px;
}
.logo {
  width: 150px;
  height: 150px;
}
.register {
  width: 30vw;
  display: block;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid rgb(51, 77, 160);
  border-radius: 10px;
  font-size: 20px;
}
.register input {
  height: 40px;
  width: 280px;
  display: block;
  padding-left: 30px;
  margin: 0px auto 30px auto;
  border: 2px solid rgb(51, 77, 160);
  border-radius: 5px;
}
.btn {
  height: 44px;
  width: 317px;
  margin-bottom: 30px;
  border: 1px solid rgb(0, 30, 128);
  background: rgb(0, 30, 128);
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover {
  transform: scale(1.1);
}
</style>
