<template>
  <div>
    <h1> Hello from new component</h1>
  <ChildComponent
    :number = "tiv"
    @dataSended="calculate"
  />
<!--    <input type="number" v-model="arg1">-->
<!--    <input type="text" v-model="operator" maxlength="1">-->
<!--    <input type="number" v-model="arg2">-->
<!--    <button v-on:click="calculate()">Submit</button>-->

<!--    <p>{{ preview }}</p>-->

    <p v-if=""></p>
    <p v-show=""></p>
    <form action="" @submit.prevent="calculate"></form>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent";
export default {
  components: {ChildComponent},

  watch: {
    text: (e) => {
      console.log(e)
    }
  },
  data() {
    return {
      tiv: 6,
      arg1: '',
      arg2: '',
      operator: '',
      preview: '',
    }
  },
  methods: {
    calculate(e) {
      console.log(e)
    },
    // calculate() {
    //   let num1 = Number(this.arg1)
    //   let num2 = Number(this.arg2)
    //
    //   if (this.operator === '+') {
    //     this.preview = num1 + num2
    //   }
    //   if (this.operator === '-'){
    //     this.preview = num1 - num2
    //   }
    //   if (this.operator === '/'){
    //     this.preview = num1 / num2
    //   }
    //   if (this.operator === '*'){
    //     this.preview = num1 * num2
    //   }else{
    //     this.preview = 'not an argument'
    //   }
    // }
  }
}
</script>


<style scoped>

</style>
