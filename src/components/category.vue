<template>
  <div class="flex overflow-x-hidden items-center mx-4 mt-2">
    <div class="flex-1">
      <div
        v-dragscroll.x="true"
        class="container flex items-center my-4 overflow-x-auto text-sm"
        v-if="data"
      >
        <div
          v-for="dat in data"
          :key="dat.id"
          class="border-solid hover:text-gray-400 rounded-full py-2 px-6 text-white mr-4"
          data-dragscroll
        >{{ dat.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data: function() {
    return {
      data: null
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store
        .dispatch("getGenre")
        .then(response => {
          this.data = response;
        })
        .catch(err => {
          this.data = err;
          console.log("error", err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.container::-webkit-scrollbar {
  display: none;
}
.border-solid {
  &:hover {
    background-color: #c53030;
    border: 1px solid #c53030;
  }
  animation: 0.2s all ease-in;
}
</style>