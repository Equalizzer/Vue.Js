<template>
  <div>
    <input type="number" v-model="columnsCount">
    <button @click="generateColumns()">Submit</button>
    <div class="container">
      <ColumnComponent
        v-bind:key="element.background" :element="element" v-for="element in elements"
      />
    </div>
  </div>
</template>

<script>
import ColumnComponent from "./ColumnComponent";

export default {
  components: {ColumnComponent},
  data() {
    return {
      'columnsCount': null,
      'elements': []
    }
  },
  methods: {
    generateColumns() {
      this.elements = []; 

      for (let i = 0; i < this.columnsCount; i++) {
        this.elements.push({
          'background': '#' + Math.floor(Math.random()*16777215).toString(16)
        })
      }
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
