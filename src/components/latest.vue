<template>
  <div class="mx-auto">
    <div class="text-2xl pb-2 border-b-2 border-white text-white mx-4">Latest</div>
    <div class="flex flex-wrap items-center justify-center" v-if="data">
      <div class="item p-4" v-for="dat in data" :key="dat.id">
        <img
          class="poster mx-auto"
          :src="'https://image.tmdb.org/t/p/w500/' + dat.poster_path"
          alt="poster"
        />
        <div class>
          <div class="text-lg text-white">{{ dat.title }}</div>
          <div class="flex text-gray-400 text-sm">
            <div class="flex-1">{{ dat.release_date.substring(0,4) }}</div>
            <div class>
              Rating
              <span class="text-green-500">{{ dat.vote_average }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Latest",
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
        .dispatch("getLatest")
        .then(response => {
          response.forEach(data => {
            if (data.title.length >= 20) {
              data.title = data.title.substring(0, 20) + "..";
            }
          });
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
.item {
  width: 20%;
  @media only screen and (max-width: 1024px) {
    width: 25%;
  }
  @media only screen and (max-width: 770px) {
    width: 50%;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
}
.poster {
  width: 100%;
}
</style>
