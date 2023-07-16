<template>
  <div class="container">
    <form @submit.prevent="addStore" class="form">
      <fieldset>
        <div class="form-border">
        <legend class="form-heading">Add store location</legend>

        <div class="form-group">
          <label for="storeName">Store Name</label>
          <input type="text" id="storeName" v-model="storeName" />
        </div>

        <div class="form-group">
          <label for="minCust">Minimum customer</label>
          <input type="text" id="minCust" v-model="minCust" />
        </div>

        <div class="form-group">
          <label for="maxCust">Maximum customer</label>
          <input type="text" id="maxCust" v-model="maxCust" />
        </div>

        <div class="form-group">
          <label for="avgCookies">Average cookies</label>
          <input type="text" id="avgCookies" v-model="avgCookies" />
        </div>
        </div>
      </fieldset>

      <fieldset class="fieldset">
        <div class="button-container">
          <button type="reset" value="reset">Reset Form</button>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>

    <table id="cookieSales-table" class="table">
      <thead>
        <tr>
          <th>Locations</th>
          <th v-for="hour in hours" :key="hour">{{ hour }}</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="store in storeLocations" :key="store.storeName">
          <td>{{ store.storeName }}</td>
          <td v-for="cookies in store.cookiesPerHour" :key="cookies">
            {{ cookies }}
          </td>
          <td>{{ store.totalDailyCookies }}</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <th>Total</th>
          <th v-for="total in hourlyTotals" :key="total">{{ total }}</th>
          <th>{{ grandTotal }}</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "CookieSales",
  data() {
    return {
      storeName: "",
      minCust: "",
      maxCust: "",
      avgCookies: "",
      storeLocations: [],
      hours: [
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12am",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
      ],
    };
  },
  computed: {
    hourlyTotals() {
      const totals = [];
      for (let i = 0; i < this.hours.length; i++) {
        let total = 0;
        for (let j = 0; j < this.storeLocations.length; j++) {
          total += this.storeLocations[j].cookiesPerHour[i];
        }
        totals.push(total);
      }
      return totals;
    },
    grandTotal() {
      return this.hourlyTotals.reduce((acc, total) => acc + total, 0);
    },
  },
  methods: {
    addStore() {
      // if the form is empty, don't add "NaN" when submitting
      if (!this.storeName || !this.minCust || !this.maxCust || !this.avgCookies) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      const newStore = {
        storeName: this.storeName,
        minCust: parseInt(this.minCust),
        maxCust: parseInt(this.maxCust),
        avgCookies: parseInt(this.avgCookies),
        totalDailyCookies: 0,
        cookiesPerHour: [],
      };

      for (let i = 0; i < this.hours.length; i++) {
        newStore.cookiesPerHour[i] = Math.floor(
          randomCust(newStore.minCust, newStore.maxCust) * newStore.avgCookies
        );
        newStore.totalDailyCookies += newStore.cookiesPerHour[i];
      }

      this.storeLocations.push(newStore);
      this.resetForm();
    },

    resetForm() {
      this.storeName = "";
      this.minCust = "";
      this.maxCust = "";
      this.avgCookies = "";
    },
  },
};

function randomCust(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}
</script>


<style lang="scss">
@import "./styles.scss";
</style>
