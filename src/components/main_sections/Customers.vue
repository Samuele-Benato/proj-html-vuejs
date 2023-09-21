<script>
import { customers } from "../../dataArrays";

export default {
  data() {
    return {
      customers,
      title: "What are Our Customers Saying ?",
      subTitle: "Opinions from our happy customers.",
      polliceImage: "src/assets/JPG/Pollice.JPG",
    };
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="text-center text-white my-4">
        <div class="my-4">
          <img :src="polliceImage" alt="pollice" />
        </div>
        <h2>{{ title }}</h2>
        <h6>{{ subTitle }}</h6>
      </div>
      <div class="d-flex">
        <div
          v-for="(customer, index) in customers"
          :key="index"
          class="card text-center p-4 mx-3"
        >
          <font-awesome-icon
            class="quotation-mark"
            icon="quote-right"
          ></font-awesome-icon>
          <p>{{ customer.slogan }}</p>
          <div class="card-image my-4">
            <img :src="customer.image" alt="customer image" />
          </div>
          <span class="my-4">{{ customer.name }}</span>
        </div>
      </div>
      <div class="line-container">
        <div class="line"></div>
        <div class="line2"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-image: url("src/assets/JPG/comment-bg-autocar.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
  padding: 2rem;
  .card {
    margin-top: 2.5rem;
    width: calc(100% / 4);
    position: relative;

    .quotation-mark {
      position: absolute;
      top: 15%;
      left: 45%;
      font-size: 5rem;
      color: rgba($color: #000000, $alpha: 0.3);
      transform: rotate(15deg);
    }
    .card-image {
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 50%;
      }
    }
  }
  .line-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin-top: 2rem;
    .line {
      width: 10%;
      height: 7px;
      border-radius: 3px;
      background-color: rgba($color: #000000, $alpha: 0.8);
    }
    .line2 {
      margin-left: 0.5rem;
      width: 5%;
      height: 7px;
      border-radius: 3px;
      background-color: rgba($color: #aaa, $alpha: 0.8);
    }
  }
}
</style>
