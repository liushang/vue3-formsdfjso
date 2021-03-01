import { createApp } from "vue";
import router from "./router";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// import "/@/styles/index.scss";
import App from "./App.vue";
import ceshi from 'vthree-form-design';
console.log(ceshi)

const app = createApp(App as any);
app.use(router);
app.use(Antd);
app.use(ceshi);
app.mount("#app");
console.log(app)