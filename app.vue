<template>
  <CalculatorScreen />
</template>

<script lang="ts" setup>
import CalculatorScreen from "./screens/calculator_screen.vue";
</script>

<style>
@import url("./assets/colors/primary_colors.css");
@import url("./assets/fonts/inter/inter.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  line-height: 125%;
  font-family: "Inter";
}

html,
body {
  height: 100%;
  scroll-behavior: smooth;
  font-size: 6.25%;
}

body {
  font-size: 16rem;
  background-color: var(--primary-100);
}

#__nuxt {
  height: 100%;
}

:focus {
  outline: 3rem solid dodgerblue;
}

:active {
  outline: none;
}

h1 {
  font-size: 68rem;
  line-height: 84rem;
}

h2 {
  font-size: 42rem;
  line-height: 42rem;
}

h3 {
  font-size: 26rem;
  line-height: 42rem;
}

h4 {
  font-size: 16rem;
  line-height: 21rem;
}

h5 {
  font-size: 16rem;
  line-height: 21rem;
}
</style>
