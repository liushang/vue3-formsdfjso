// import Switch from './Switch.vue'
// const components = [
//   Switch
// ]
// const install = function(Vue) {
//   components.forEach(component => {
//     Vue.component(component.name, component)
//   })
// }

// import { App } from 'vue';
import Switch from './Switch.vue';
// declare const install: (app: App) => App<any>;
// export { Switch, install,};
// declare const _default: {
//     version: any;
//     install: (app: App<any>) => App<any>
// };
// export default _default;
// const components = [Switch]
const install = app => {
  console.log('我要开始install')
  console.log(Switch)
    // app.use(Switch);
    app.component(Switch.name, Switch)
  return app;
};
// App.use(Switch);
// exports.install = install;
// exports.install = install;
export default { install };