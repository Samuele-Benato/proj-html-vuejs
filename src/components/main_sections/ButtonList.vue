<script>
import { buttonList } from "../../dataArrays";

export default {
  data() {
    return {
      buttonList,
    };
  },
};
</script>

<template>
  <div class="container">
    <div v-for="(button, index) in buttonList" :key="index" class="dropdown">
      <button
        :class="button.text ? 'dropdown-toggle' : ''"
        class="btn mt-4"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ button.title }}
      </button>
      <ul v-if="button.text" class="dropdown-menu">
        <li v-for="text in button.text">
          <a class="dropdown-item" href="#">{{ text }}</a>
        </li>
      </ul>
    </div>
    <button class="btn btn-dark mt-4">Serch</button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .btn {
    border: 1px solid #aaa;
    padding: 10px 20px;
    border-radius: 2px;
    box-shadow: 1px 1px 1px 1px #aaa;
    color: #aaa;
  }
}
</style>
