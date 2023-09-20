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
  <body>
    <AppHeader />
    <AppMain />
    <AppFooter />
    <AppLoader />
  </body>
</template>

<style lang="scss" scoped>
body {
  min-width: 1100px;
}
</style>
