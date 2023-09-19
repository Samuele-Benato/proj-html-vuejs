<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppLoader from "./components/additional_components/AppLoader.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppLoader,
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
  <AppLoader />
</template>

<style lang="scss" scoped></style>
