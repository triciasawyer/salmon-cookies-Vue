<template>
  <div>
    <table>
    <thead>
    <tr>
    <th>Locations</th>
    <th v-for="hour in hours" :key="hour>{{ hour }}</th>
    <th>Total</th>
  </div>
</template>

<script>
export default {

};
</script>


