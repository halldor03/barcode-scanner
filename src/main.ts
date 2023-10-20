import "./assets/main.css";
import "./registerServiceWorker";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faDatabase, faCartShopping, faChartSimple, faBox} from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);
library.add(faDatabase, faHouse, faCartShopping, faChartSimple, faBox);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
