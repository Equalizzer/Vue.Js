import Vue from 'vue'
import Router from 'vue-router'
import testComponent from "../components/testComponent";
import ParentComponent from "../components/ParentComponent";
import RememberingComponent from "../Pages/RememberingComponent";


import auth from "../Pages/auth/auth";
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    { path: '/', name: 'TestComponent', component: testComponent },
    { path: '/input', name: 'ParentComponent', component: ParentComponent },
    { path: '/rem', name: 'RememberingComponent', component: RememberingComponent },
    ...auth,
  ]
})
