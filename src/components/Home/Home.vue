<template>
  <header />

  <img class="image" src="@/assets/salmon.png" alt="salmon" />

  <div class="content">
    <Card>
      <p>
        At Salmon Cookies, we offer the most delicious and mouthwatering
        assortment of homemade cookies. Our store is based in the heart of
        Seattle, where we take pride in creating unique and flavorful treats for
        all cookie lovers.
      </p>
    </Card>

    <Card>
      <p>
        Each cookie is carefully crafted using fresh ingredients and secret
        family recipes passed down through generations. Whether you're a fan of
        classic chocolate chip, indulgent double chocolate, or adventurous fruit
        and nut flavors, we have something to satisfy every craving.
      </p>
    </Card>

    <Card>
      <p>
        Visit us today and experience the irresistible taste of Salmon Cookies.
        We're open from 9am to 7pm, seven days a week. Don't miss out on the
        cookie goodness!
      </p>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card/Card.vue";

export default {
  name: "homeComponent",
  components: {
    Card,
  },
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>