<script>
import { buyOrSell } from "../../dataArrays";

export default {
  data() {
    return {
      buyOrSell,
      divider: "src/assets/JPG/divider.jpg",
      carPng: "src/assets/PNG/aoutcar-about-1.png",
      car1: "src/assets/JPG/car1.JPG",
      car2: "src/assets/JPG/car2.JPG",
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-6">
        <div class="car-png-container">
          <img :src="carPng" alt="" />
          <div class="black-point up">
            <div class="fs-1">24</div>
            <span
              >Years of <br />
              experience</span
            >
          </div>
          <div class="black-point down">
            <div class="fs-1">240</div>
            <span
              >Special Expert <br />
              Team</span
            >
          </div>
        </div>
      </div>
      <div class="col-4 mt-4">
        <div>
          <h2 class="fs-4 fw-bold">{{ buyOrSell.title }}</h2>
          <p class="mb-2">{{ buyOrSell.text }}</p>
        </div>
        <img class="mb-4" :src="divider" alt="divider" />
        <div class="d-flex align-items-center justify-content-center">
          <div class="me-3">
            <img :src="car1" alt="car 1" />
          </div>
          <div>
            <h3 class="fs-5 fw-bold m-0">{{ buyOrSell.subTitle1 }}</h3>
            <p>{{ buyOrSell.subText1 }}</p>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div class="me-3">
            <img :src="car2" alt="car 2" />
          </div>
          <div>
            <h3 class="fs-5 fw-bold m-0">{{ buyOrSell.subTitle2 }}</h3>
            <p>{{ buyOrSell.subText2 }}</p>
          </div>
        </div>
        <button class="btn btn-dark my-2">Get to know us</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  margin-bottom: 5rem;
}
.col-6 {
  background-image: url("src/assets/PNG/circle-auto-car-1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  .car-png-container {
    width: 70%;
    margin: 0 auto;
    position: relative;
    img {
      max-width: 100%;
    }
  }
  .black-point {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
    background-color: rgba($color: #000000, $alpha: 0.9);
    border-radius: 50%;
    padding-top: 0.5rem;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    display: inline-block;
    &:hover {
      transform: scale(1.1);
    }
  }
  .up {
    position: absolute;
    top: 0;
    left: 0;
  }
  .down {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.col-4 {
  .btn {
    border: 1px solid #fff;
    padding: 15px 30px;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 500;
  }
}
</style>
