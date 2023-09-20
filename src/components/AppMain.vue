<script>
import AppSlider from "./additional_components/AppSlider.vue";
import ButtonList from "./sections/ButtonList.vue";
import ListingsVehicles from "./sections/ListingsVehicles.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppSlider,
    ButtonList,
    ListingsVehicles,
  },
};
</script>

<template>
  <AppSlider />
  <ButtonList />
  <ListingsVehicles />
</template>

<style lang="scss" scoped></style>
