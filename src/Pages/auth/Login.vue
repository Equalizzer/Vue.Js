<template>
  <div class="form-wrapper login-modal">
    <h3 class="login-header font-weight-bold">Войти</h3>
    <ValidationObserver ref="login_observer">
      <b-form @submit.stop.prevent="login">
        <!--   Email     -->
        <ValidationProvider
          name="email"
          rules="required|email"
        >
          <b-form-group
            label-class="form-label"
            label-for="email"
            slot-scope="{ errors }"
            :invalid-feedback="errors[0]"
          >
            <b-form-input
              id="email"
              placeholder="Электронная почта"
              v-model="login_form.email"
              :state="errors[0] ? false : null"
              trim
            />
          </b-form-group>
        </ValidationProvider>
        <!--   Password   -->
        <ValidationProvider
          name="password"
          rules="required|password"
        >
          <b-form-group
            label-class="form-label"
            class="mt-27 mb-10 position-relative"
            label-for="password"
            slot-scope="{ errors }"
            :invalid-feedback="errors[0]"
          >
            <b-form-input
              id="password"
              name="password"
              placeholder="Пароль"
              v-model="login_form.password"
              :type="visibility"
              :state="errors[0] ? false : null"
              trim
            />
          </b-form-group>
        </ValidationProvider>
        <!--     Login button  -->
        <div class="d-grid gap-2 mt-33 mb-35">
          <b-button
            variant="primary"
            block
            type="submit"
          >
            Войти
          </b-button>
        </div>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script>
import {ValidationProvider, ValidationObserver} from "vee-validate"

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      visibility: 'password',
      login_form: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    async login() {
      let valid = await this.$refs.login_observer.validate();
      if (!valid) return false;

      console.log(this.login_form);
    },
  }
}
</script>

<style scoped>



</style>
