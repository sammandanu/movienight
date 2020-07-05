<template>
  <div class="mx-4 text-sm border-t-2 border-gray-400 pt-2 pb-2 flex">
    <div class="flex-1">
      <div class="text-gray-400">Contact Me</div>
      <div class>
        <div class="text-gray-400 inline-block mr-4">
          <i class="fab fa-instagram"></i>
          <span class="ml-2">@samm.thing</span>
        </div>
        <div class="text-gray-400 inline-block">
          <i class="fab fa-whatsapp"></i>
          <span class="ml-2">+62 822-2194-0237</span>
        </div>
      </div>
    </div>
    <div class="text-gray-400">© {{year}} Samm.Thing. All rights reserved.</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: function() {
    return {
      year: null
    };
  },
  mounted: function() {
    this.getYear();
  },
  methods: {
    getYear: function() {
      var date = new Date();
      this.year = date.getFullYear();
    }
  }
};
</script>

<style>
</style>