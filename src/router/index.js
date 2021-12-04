import Vue from 'vue'
import Router from 'vue-router'
import testComponent from "../components/testComponent";
import ParentComponent from "../components/ParentComponent";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { path: '/', name: 'TestComponent', component: testComponent },
    { path: '/input', name: 'ParentComponent', component: ParentComponent },
  ]
})
