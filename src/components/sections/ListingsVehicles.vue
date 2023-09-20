<script>
const listingsVehicles = [
  {
    image: "src/assets/JPG/cabrio.jpg",
    title: "Cabrio",
    text: "3 Listings",
    brand: "Audi",
    fuel: "Electric",
    transmission: "Automatic Transmission",
    status: "New",
  },
  {
    image: "src/assets/JPG/coupe.jpg",
    title: "Coupe",
    text: "0 Listings",
    brand: "BMW",
    fuel: "Diesel",
    transmission: "Automatic Transmission",
    status: "New",
  },
  {
    image: "src/assets/JPG/hatchback.jpg",
    title: "Hatchback",
    text: "2 Listings",
    brand: "Ford",
    fuel: "Gasoline",
    transmission: "Automatic Transmission",
    status: "Used",
  },
  {
    image: "src/assets/JPG/pickup.jpg",
    title: "Pick Up",
    text: "0 Listings",
    brand: "BMW",
    fuel: "Diesel",
    transmission: "Manual Transmission",
    status: "Used",
  },
  {
    image: "src/assets/JPG/sedan.jpg",
    title: "Sedan",
    text: "3 Listings",
    brand: "Mercedes-Benz",
    fuel: "Gasoline",
    transmission: "Manual Transmission",
    status: "Used",
  },
  {
    image: "src/assets/JPG/suv.jpg",
    title: "Suv",
    text: "4 Listings",
    brand: "Audi",
    fuel: "Diesel",
    transmission: "Automatic Transmission",
    status: "New",
  },
];
export default {
  data() {
    return {
      listingsVehicles,
    };
  },
};
</script>

<template>
  <div class="container">
    <div
      v-for="(vehicle, index) in listingsVehicles"
      :key="index"
      class="card my-3"
    >
      <div class="card-image">
        <img :src="vehicle.image" alt="vehicle image" />
      </div>
      <div class="card-text pb-2">
        <h4>{{ vehicle.title }}</h4>
        <span>{{ vehicle.text }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "src/assets/style.scss" as *;
.container {
  display: flex;
  .card {
    width: calc(100% / 6);
    text-align: center;
    border-radius: 2px;
    box-shadow: 2px 2px 2px 2px #aaa;
  }
}
</style>
