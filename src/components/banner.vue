<template>
  <div
    v-if="data"
    class="banner"
    :style="'background-image: url(https://image.tmdb.org/t/p/w500/' + data.backdrop_path + ');'"
  >
    <div class="container max-w-4xl z-10 absolute inset-0">
      <div class="flex flex-col sm:flex-row h-full sm:pt-0 items-center justify-center mx-4">
        <img
          class="poster"
          :src="'https://image.tmdb.org/t/p/w500/' + data.poster_path"
          alt="poster"
        />
        <div class="ml-0 mt-2 sm:mt-0 sm:ml-10 sm:flex-1 text-white">
          <div class="font-bold text-xl sm:text-4xl">{{data.title}}</div>
          <div class="text-sm text-gray-400">
            {{data.release_date.substring(0,4)}} Ratings
            <span
              class="ml-2 text-green-500"
            >{{data.vote_average}}</span>
          </div>
          <div class="text-xs sm:text-sm my-2 text-gray-400">{{data.overview}}</div>
          <div class="quotes pl-2 flex items-center italic">{{data.tagline}}</div>
          <button
            class="border-solid text-sm bg-transparent text-gray-400 py-2 px-4 mt-4 hover:bg-white hover:text-black"
          >Detail</button>
        </div>
      </div>
    </div>
    <div class="w-full h-full absolute bg-black bg-opacity-75"></div>
  </div>
</template>

<script>
export default {
  name: "Banner",
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
          var transisi = response[Math.floor(Math.random() * response.length)];
          this.$store
            .dispatch("getDetail", transisi.id)
            .then(response => {
              this.data = response;
              console.log("data detail", this.data);
            })
            .catch(err => {
              this.data = err;
            });
        })
        .catch(err => {
          this.data = err;
          console.log("error", err);
        });
    }
  }
};
</script>

<style>
.banner {
  width: 100%;
  min-height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}
.poster {
  width: 200px;
}
@media only screen and (max-width: 640px) {
  .poster {
    width: 150px;
  }
}
.quotes {
  border-left: 2px solid #c53030;
  height: 30px;
}
.border-solid {
  border: 1px solid;
}
button {
  transition: 0.3s all ease-in-out;
}
</style>