import { mount } from "svelte";

import "$assets/styles/app.scss";
import App from './App.svelte';

// @ts-ignore
const app = mount(App, { target: document.getElementById('app') });

export default app;