<template>
  <div id="app" class="bg-black min-h-screen">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/header.vue";
export default {
  components: {
    Header
  }
};
</script>


