<svelte:head>
  <title>Pawbook GCU</title>
</svelte:head>

<script lang="ts">
    import LanguageDropdown from "$assets/components/LanguageDropdown.svelte";

</script>

<main class="forgotten-password-page-container">
    <div class="language-dropdown-container">
        <LanguageDropdown />
    </div>
    <h1 class="forgotten-password-page-title">Forgotten password</h1>
</main>

<style lang="scss">
    .forgotten-password-page-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    } 
       
    .forgotten-password-page-title {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    
    .language-dropdown-container {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
</style>