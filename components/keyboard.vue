<template>
  <div class="keyboard">
    <slot class="content" />
  </div>
</template>

<script lang="ts" setup></script>

<style>
.keyboard {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 10rem;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
}
</style>
