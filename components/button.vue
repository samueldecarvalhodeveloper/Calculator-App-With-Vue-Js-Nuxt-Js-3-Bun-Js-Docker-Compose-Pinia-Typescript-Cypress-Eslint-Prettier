<template>
  <button :class="[componentClass, 'button']">{{ character }}</button>
</template>

<script lang="ts" setup>
defineProps({
  componentClass: String,
  character: String,
});
</script>

<style>
.button {
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: 42rem;
  border-width: 1rem;
  border-style: solid;
  border-radius: 10rem;
  background-color: transparent;
  border: none;
  color: inherit;
}

.button:hover {
  cursor: pointer;
}

@media screen and (max-width: 400px) {
  .button {
    font-size: 26rem;
    border-radius: 6rem;
  }
}
</style>
