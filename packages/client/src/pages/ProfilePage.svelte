<svelte:head>
  <title>Pawbook Profile</title>
</svelte:head>

<script lang="ts">
    import Navbar from "$components/navbar/Navbar.svelte";
</script>

    <main id="profile-page-container">
        <div class="profile-page-background"></div>
        <h2 class="profile-page-title">Profile</h2>
        <Navbar />
    </main>

<style lang="scss">
    #profile-page-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .profile-page {
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