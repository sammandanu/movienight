<template>
  <div class>
    <banner />
    <category />
    <latest />
    <foter />
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
import category from "@/components/category.vue";
import latest from "@/components/latest.vue";
import foter from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    banner,
    category,
    latest,
    foter
  }
};
</script>

<style scoped lang="scss">
</style>
