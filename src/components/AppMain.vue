<script>
import AppSlider from "./additional_components/AppSlider.vue";
import ButtonList from "./sections/ButtonList.vue";
import ListingsVehicles from "./sections/ListingsVehicles.vue";
import CardsCar from "./sections/CardsCar.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppSlider,
    ButtonList,
    ListingsVehicles,
    CardsCar,
  },
};
</script>

<template>
  <AppSlider />
  <ButtonList />
  <ListingsVehicles />
  <CardsCar />
</template>

<style lang="scss" scoped></style>
