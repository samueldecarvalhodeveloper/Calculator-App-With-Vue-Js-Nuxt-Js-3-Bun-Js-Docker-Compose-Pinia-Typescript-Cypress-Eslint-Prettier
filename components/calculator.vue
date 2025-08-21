<template>
  <div class="calculator">
    <div class="viewfinder">
      <h1 class="label">Calculator</h1>
      <div class="hint">
        <h4>Result:</h4>
      </div>
      <div class="value">
        <h2>{{ value }}</h2>
      </div>
    </div>
    <div class="keyboard">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  value: String,
});
</script>

<style>
@import "../assets/colors/primary_colors.css";
@import "../assets/colors/neutrals_colors.css";

.calculator {
  width: 100%;
  height: 629rem;
  padding: 20rem;
  max-width: 350rem;
  border-width: 1rem;
  border-style: solid;
  border-color: var(--primary-400);
  border-radius: 20rem;
  background-color: var(--primary-200);
  display: flex;
  gap: 26rem;
  flex-flow: column nowrap;
}

.label {
  margin-bottom: 24rem;
  color: var(--primary-900);
  font-size: 42px;
  line-height: 42px;
}

.hint {
  color: var(--primary-900);
  margin-bottom: 8rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 10rem;
  align-items: center;
}

.value {
  background-color: var(--primary-100);
  padding: 10rem 20rem;
  border-radius: 10rem;
  border-width: 1rem;
  border-style: solid;
  border-color: var(--primary-200);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  color: var(--neutrals-900);
  height: 64rem;
}

.value > h2 {
  height: 42rem;
  white-space: nowrap;
}

.keyboard {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
}

@media screen and (max-width: 400px) {
  .calculator {
    gap: 13rem;
    height: 469rem;
  }

  .label {
    font-size: 26rem;
    margin-bottom: 13rem;
  }

  .value {
    padding: 3rem 8rem;
    height: 44rem;
  }

  .value > h2 {
    font-size: 26rem;
  }
}
</style>
