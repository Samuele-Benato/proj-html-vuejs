<script>
import { cardsCar } from "../../dataArrays";

export default {
  data() {
    return {
      cardsCar,
      iconColor: "black",
    };
  },
  methods: {
    changeIconColor() {
      if (this.iconColor === "black") {
        this.iconColor = "red";
      } else {
        this.iconColor = "black";
      }
    },
  },
};
</script>

<template>
  <div id="Vehicles" class="container">
    <div v-for="(cardCar, index) in cardsCar" :key="index" class="card my-3">
      <div class="card-image">
        <img :src="cardCar.image" alt="cardCar image" />
      </div>
      <div class="card-text pb-2">
        <h6>{{ cardCar.model }}</h6>
        <span>{{ cardCar.typology }}</span>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <font-awesome-icon icon="dollar" />
            {{ cardCar.price }}
            <font-awesome-icon class="ms-2" icon="car" />
            {{ cardCar.brand }}
            <font-awesome-icon class="ms-2" icon="gas-pump" />
            {{ cardCar.fuel }}
          </div>
          <font-awesome-icon
            :style="{ color: iconColor }"
            @click="changeIconColor()"
            icon="heart"
          />
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-dark my-2">Show All Cars</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .card {
    width: calc(100% / 4);
    border-radius: 2px;
    padding: 0.5rem;
    box-shadow: 2px 2px 2px 2px #aaa;
    &:hover {
      transform: scale(1.05);
    }
    .card-image {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin-bottom: 0.5rem;

      img {
        width: 100%;
        border-radius: 2px;
      }
    }
  }
  .btn {
    border: 1px solid #fff;
    padding: 15px 30px;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 500;
  }
}
</style>
