import Vue from 'vue'
import Router from 'vue-router'
import testComponent from "../components/testComponent";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { path: '/', name: 'TestComponent', component: testComponent },
  ]
})
