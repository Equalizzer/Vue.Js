<template>
  <div>
    <b-col cols="6" class="firs-col">
      <ValidationObserver ref="percent_observer">
        <b-form @submit.prevent="calc">
        <ValidationProvider
          name="number"
          rules="required|numeric"
        >
          <b-form-group
            label-class="form-label"
            label-for="number"
            slot-scope="{ errors }"
            :invalid-feedback="errors[0]"
          >
            <b-form-input
              id="number"
              name="number"
              placeholder="Type your number"
              v-model="number"
              :state="errors[0] ? false : null"
              trim
            />
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider
          name="percent"
          rules="required|numeric"
        >
          <b-form-group
            label-class="form-label"
            label-for="percent"
            slot-scope="{ errors }"
            :invalid-feedback="errors[0]"
          >
            <b-form-input
              type="number"
              id="percent"
              placeholder="Type Your Percent"
              v-model="percent"
              :state="errors[0] ? false : null"
              trim
            />
          </b-form-group>
        </ValidationProvider>

        <div class="d-grid gap-2 mt-33 mb-35">
          <b-button
            variant="primary"
            block
            type="submit"
          >
            Calculate
          </b-button>
        </div>
        </b-form>
      </ValidationObserver>
    </b-col>
  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      number: '',
      percent: '',
      sum: '',
    }
  },
  methods: {
    calc() {
      this.sum = (this.number * this.percent)/100
      this.$emit('sum', this.sum)
    },
  },
}
</script>

<style scoped>

</style>
