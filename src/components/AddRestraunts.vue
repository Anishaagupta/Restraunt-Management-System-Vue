<template>
  <Header />
  <div class="restraunt-container">
    <form class="register" @submit="onSubmit">
      <img class="logo" src="../assets/restraunt.png" alt="Logo" />
      <h2>Add New Restraunts</h2>
      <input
        required
        type="text"
        v-model="name"
        placeholder="Restraunt's Name"
      />
      <input
        required
        type="text"
        v-model="address"
        placeholder="Restraunt's Address"
      />
      <input
        required
        type="number"
        v-model="contact"
        placeholder="Restraunt's Contact Number"
      />
      <button class="btn">Add</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header";
export default {
  name: "Add",
  components: { Header },
  data() {
    return {
      name: "",
      address: "",
      contact: "",
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const restrauntsData = {
        name: this.name,
        address: this.address,
        id: Math.floor(Math.random() * 1),
        contact: this.contact,
      };
      let result = await axios.post(
        "http://localhost:3000/restraunts",
        restrauntsData
      );
      if (result.status == 201) {
        localStorage.setItem("restraunt-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
      (this.name = ""), (this.address = ""), (this.contact = "");
    },
  },
  mounted() {
    localStorage.getItem("restraunt-info");
  },
};
</script>

<style scoped>
.restraunt-container {
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
