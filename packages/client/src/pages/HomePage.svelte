<svelte:head>
  <title>Home Page</title>
</svelte:head>

<script lang="ts">
    import * as messages from "$lib/paraglide/messages";
    import { app } from "$stores/stores.svelte";
  
    const catchphraseLabel = messages.website_catchphrase();
    
  </script>
  
  <div class="app-container">
    <h1 class="app-title">PawBook !</h1>
    <p class="app-catchphrase">{catchphraseLabel}</p>
    <button on:click={() => app.activeLocale = "en"}>🇬🇧 English</button>
    <button on:click={() => app.activeLocale = "fr"}>🇫🇷 Français</button>
  </div>
  
  <style lang="scss">
    .app-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .app-title {
      font-family: var(--title-font-family);
      text-align: center;
      font-size: 3rem;
    }
  
    .app-catchphrase{
      font-size: 1rem;
    }
  </style>