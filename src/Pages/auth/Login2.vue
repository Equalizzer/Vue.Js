<template>
  <div>
    <b-container>
      <b-row>
        <input type="text" v-model="record.name" placeholder="name">
        <input type="number" v-model="record.age" placeholder="age">
        <input type="email" v-model="record.email" placeholder="email">
        <b-button @click="savePerson">save</b-button>
        <b-table striped hover :items="records"></b-table>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import { savePerson } from "../../plugins/helpers";

export default {
  mounted() {
    this.getRecords()
  },
  // computed: {
  //   records: () => {
  //     return JSON.parse(localStorage.getItem('record'));
  //   }
  // },
  data() {
    return {
      record: {
        name: "",
        age: "",
        email: "",
      },
      records: [],
    }
  },
  methods: {
    savePerson() {
      this.records.push(this.record)
      localStorage.setItem('record', JSON.stringify(this.records));
    },
    getRecords() {
      if(JSON.parse(localStorage.getItem('record'))){
        this.records = JSON.parse(localStorage.getItem('record'));
      }else {
        return []
      }
    }
  }
}
</script>


<style scoped>
</style>
