<svelte:head>
  <title>Home Page</title>
</svelte:head>

<script lang="ts">
    import LanguageDropdown from "$assets/components/LanguageDropdown.svelte";
    import Button from "$assets/components/Button.svelte";
    import * as messages from "$lib/paraglide/messages";
    import { app } from "$stores/stores.svelte";
    import logo from "$public/logo.png";
  
    const catchphraseLabel = messages.website_catchphrase();
    const connectionLabel = messages.home_connection();
    const inscriptionLabel = messages.home_inscription();

    function onConnectionButtonClick() {
        app.activeLocale = "en";
    }

    function onInscriptionButtonClick() {
        app.activeLocale = "fr";
    }
    
  </script>
  
  <div class="app-container">
    <div class="language-dropdown-container">
      <LanguageDropdown />
    </div>
    <img alt="PawBook Logo" class="app-logo" src={logo} />
    <h1 class="app-title">Pawbook</h1>
    <p class="app-catchphrase">{catchphraseLabel}</p>
    <Button label={inscriptionLabel} onClick={onInscriptionButtonClick} customClass="extra-margin" isCTA/>
    <Button label={connectionLabel} onClick={onConnectionButtonClick} />
  </div>
  
  <style lang="scss">
    .app-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .language-dropdown-container {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .app-logo {
      width: 22rem;
      height: 22rem;
      margin: 0;
    }

    .app-title {
      font-family: var(--title-font-family);
      text-align: center;
      font-size: 3.5rem;
      margin: 0;
    }
  
    .app-catchphrase{
      font-size: 1rem;
      margin: 0.5rem 0 4rem 0;
    }

    :global(.extra-margin) {
      margin: 0 0 1rem 0;
    }
  </style>