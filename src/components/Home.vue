<template>
  <Header />
  <h1>Welcome {{ name }} To Home Page</h1>
  <div class="table-div">
    <table border="1">
      <tr>
        <td class="headers">S.No</td>
        <td class="headers">Name</td>
        <td class="headers">Contact</td>
        <td class="headers">Address</td>
        <td class="headers">Action</td>
      </tr>
      <tr v-for="item in restraunts" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <button>
            <router-link :to="`/update/${item.id}`">Update</router-link>
          </button>
          &nbsp; &nbsp;
          <button v-on:click="deleteRestraunt(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from "./Header";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return { name: "", restraunts: [] };
  },
  components: { Header },
  methods: {
    async fetchData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "Login" });
      }

      let result = await axios.get("http://localhost:3000/restraunts");
      this.restraunts = result.data;
    },
    async deleteRestraunt(id) {
      let result = await axios.delete(`http://localhost:3000/restraunts/${id}`);
      if (result.status == 200) {
        this.fetchData();
      }
    },
  },
  async mounted() {
    this.fetchData();
  },
};
</script>

<style lang="css" scoped>
.table-div {
  display: flex;
  justify-content: center;
}
.headers {
  height: 50px;
  background-color: rgb(0, 30, 128);
  color: white;
}
td {
  width: 240px;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
}
</style>
