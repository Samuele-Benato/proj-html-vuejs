<script>
import { headerUrls } from "../dataArrays";
export default {
  data() {
    return {
      headerUrls,
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <!-- LOGO -->
      <img src="src/assets/PNG/logo-autocar11.png" alt="logo-autocar" />
      <!-- HEADER URLS -->
      <ul>
        <li v-for="(headerUrl, index) in headerUrls" :key="index">
          <a :href="headerUrl.goTo"> {{ headerUrl.title }}</a>
        </li>
      </ul>
      <div>
        <!-- HEADER PNG -->
        <div class="header-png">
          <img src="src/assets/PNG/padlock.png" alt="padlock" />
          <a href="#">My Account</a>
        </div>
        <div class="header-png">
          <img src="src/assets/PNG/add.png" alt="add" />
          <a href="#">Add Car</a>
        </div>
        <div class="header-png">
          <img src="src/assets/PNG/headphones.png" alt="headphones" />
          <a href="#">+1 (234) 567 89 10</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "src/assets/style.scss" as *;
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 80px;
  background-color: rgba($color: #fff, $alpha: 1);
  box-shadow: 2px 2px 2px 2px #000;
  .container {
    min-width: 960px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      max-height: 70px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      .header-png {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 70px;
        padding: 1rem;
        margin-right: 0.5rem;
        border-radius: 5px;

        background-color: black;
        &:hover {
          transform: scale(1.03);
        }
        img {
          min-height: 50%;
          max-height: 100%;
          filter: invert(100%);
          margin-right: 0.5rem;
        }
        a {
          color: white;
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>
