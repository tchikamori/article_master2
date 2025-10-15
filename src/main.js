import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ContextMenu from 'primevue/contextmenu';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Select from 'primevue/select';
import Menubar from 'primevue/menubar';

const app = createApp(App)
app.use(PrimeVue)
app.component('ContextMenu', ContextMenu);
app.component('Textarea', Textarea);
app.component('Button', Button);
app.component('Select', Select);
app.component('Menubar', Menubar);
app.mount('#app')
