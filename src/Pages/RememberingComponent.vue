<template>
  <div>
  <b-container>
    <b-row>
      <b-col cols="6" class="second-col">
        <PartOne
          :partTwoSending ="sendParent"
          @sum="fromChild"
        />
      </b-col>
      <b-col cols="6" class="second-col">
        <PartTwo
          :result="tvyal"
        />
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import PartOne from "../components/PartOne";
import PartTwo from "../components/PartTwo";
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  components: {
    PartOne,
    PartTwo
  },
  data() {
    return {
      tvyal: '',
      sendParent: '',
    }
  },
  methods: {
    fromChild(arg) {
      this.tvyal = arg
    }
  }
}
</script>

<style scoped>

.firs-col {
}

.second-col {
}
</style>
