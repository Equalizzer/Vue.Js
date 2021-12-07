<template>
  <div>
    <div class="column" v-bind:style="{ background:background }"></div>
  </div>
</template>

<script>
export default {
  props: [
    'background'
  ],
  data() {
    return {

    }
  },
  mounted: function () {
    this.background = '#' + Math.floor(Math.random()*16777215).toString(16);
  }

}
</script>

<style scoped>
.column {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 0 5px 5px 5px;
}
</style>
