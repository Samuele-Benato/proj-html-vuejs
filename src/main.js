import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

import { FontAwesomeIcon } from "./fontAwesome";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
