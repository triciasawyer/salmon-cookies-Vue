<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card-home",
};
</script>

<style lang="scss">
.card {
  width: 65%;
  margin: 10px;
  padding: 15px;
  border-radius: 12px;
}
</style>