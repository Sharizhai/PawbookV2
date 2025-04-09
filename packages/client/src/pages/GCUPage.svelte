<svelte:head>
  <title>Pawbook GCU</title>
</svelte:head>

<script lang="ts">
    import LanguageDropdown from "$assets/components/LanguageDropdown.svelte";

</script>

<main class="gcu-page-container">
    <div class="language-dropdown-container">
        <LanguageDropdown />
    </div>
    <h1 class="gcu-page-title">Conditions Générales d’Utilisation</h1>
</main>

<style lang="scss">
    .gcu-page-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    } 
       
    .gcu-page-title {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    
    .language-dropdown-container {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
</style>