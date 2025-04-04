<script lang="ts">
  import Router from "svelte-spa-router";
  import HomePage from "./pages/HomePage.svelte";
  import { app } from "$stores/stores.svelte";
  import { onMount } from "svelte";
  
  const routes = {
    "/": HomePage
  };
 
  onMount(() => {
    app.activeLocale = localStorage.getItem("locale") ?? navigator.language.slice(0, 2);
  });
  
</script>

<Router {routes} />