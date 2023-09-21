<script>
import AppSlider from "./additional_components/AppSlider.vue";
import ButtonList from "./main_sections/ButtonList.vue";
import ListingsVehicles from "./main_sections/ListingsVehicles.vue";
import CardsCar from "./main_sections/CardsCar.vue";
import BuyOrSell from "./main_sections/BuyOrSell.vue";
import Customers from "./main_sections/Customers.vue";
import ResentArticles from "./main_sections/ResentArticles.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppSlider,
    ButtonList,
    ListingsVehicles,
    CardsCar,
    BuyOrSell,
    Customers,
    ResentArticles,
  },
};
</script>

<template>
  <AppSlider />
  <ButtonList />
  <ListingsVehicles />
  <CardsCar />
  <BuyOrSell />
  <Customers />
  <ResentArticles />
</template>

<style lang="scss" scoped></style>
