<script>
import { listingsVehicles } from "../../dataArrays";
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
        <h4 class="fs-5">{{ vehicle.typology }}</h4>
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
