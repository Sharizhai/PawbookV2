<svelte:head>
  <title>Pawbook Feed</title>
</svelte:head>

<script lang="ts">
    import NavHeader from "$components/Navbar/NavHeader.svelte";
    import Navbar from "$components/Navbar/Navbar.svelte";
</script>

    <main id="feed-page-container">
        <div class="feed-page-background"></div>
        <NavHeader />
        <Navbar />
    </main>

<style lang="scss">
    #feed-page-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .feed-page {
        &-background {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('/paws.png');
            background-size: 68rem auto;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -2;
            opacity: 0.2;
        }
    }
</style>