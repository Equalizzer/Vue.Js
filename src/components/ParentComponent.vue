<template>
  <div>
    <input type="number" v-model="columnsCount">
    <button @click="setColumnsCount()">Submit</button>
    <div class="container" v-if="actualCount">
      <ColumnComponent
        v-for="n in Number(actualCount)"
      />
    </div>
  </div>
</template>

<script>
import ColumnComponent from "./ColumnComponent";

export default {
  components: {ColumnComponent},
  props: [
    'actualCount'
  ],
  data() {
    return {
      columnsCount: 0
    }
  },
  methods: {
    setColumnsCount() {
      this.actualCount = this.columnsCount;
    }
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  padding-top: 10px;
}
</style>
