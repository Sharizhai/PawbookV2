<svelte:head>
  <title>Pawbook Profile</title>
</svelte:head>

<script lang="ts">
    import EmptyContentCTA from "$components/profile/EmptyContentCTA.svelte";
    import ProfileCard from "$components/profile/ProfileCard.svelte";
    import AnimalCard from "$components/profile/AnimalCard.svelte";
    import ProfileTabs from "$components/profile/ProfileTabs.svelte";
    import PostCard from "$components/post/PostCard.svelte";
    import Navbar from "$components/navbar/Navbar.svelte";
    import * as messages from "$lib/paraglide/messages";
    import {ProfileTab} from "$types/profileTabsTypes";
    import {profileTabs} from "$config/profileTabsUI";

    const emptyPostIncentive = messages.profile_tab_posts_incentive();
    const emptyPostButtonLabel = messages.profile_tab_first_post();
    const emptyAnimalIncentive = messages.profile_tab_animals_incentive();
    const emptyAnimalButtonLabel = messages.profile_tab_first_animal();

    let activeTab = $state(ProfileTab.Publications);
    let hasNoPosts = $state(true);
    let hasNoAnimals = $state(true);

    function onHeaderTabButtonClick(tab: ProfileTab) {
        activeTab = tab;
    }

    function onCreateFirstPostButtonClick() {

    }
</script>
    {#snippet profileTabContentSnippet()}
        {#if activeTab === ProfileTab.Publications}
            <div class="content-container">
                {#if hasNoPosts}
                    <EmptyContentCTA label={emptyPostButtonLabel} incentive={emptyPostIncentive} onClick={onCreateFirstPostButtonClick}/>

                {:else}
                    <PostCard />
                {/if}
            </div>

        {:else if activeTab === ProfileTab.Animals}
            <div class="content-container">
                {#if !hasNoAnimals}
                    <EmptyContentCTA label={emptyAnimalButtonLabel} incentive={emptyAnimalIncentive} onClick={onCreateFirstPostButtonClick}/>

                {:else}
                    <AnimalCard animalAge={5} animalType={"Chat"} animalLikes={150} animalName="Lulu" animalRace="hnfdju" animalDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque est a sapien semper bibendum. Mauris velit neque, tempor non tellus metus."/>
                    <AnimalCard animalLikes={12} animalType={"Chien"} animalName="Lili" animalRace="hnfdju"/>
                {/if}
            </div>
        {/if}
    {/snippet}

    <main id="profile-page">
        <div class="profile-page-background"></div>

        <div class="profile-page-container">
            <ProfileCard firstName={"User"} lastName="Name" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque est a sapien semper bibendum. Mauris velit neque, tempor non tellus metus."/>
            <ProfileTabs onClick={onHeaderTabButtonClick} tabContent={profileTabContentSnippet} activeTab={activeTab} tabs={profileTabs} />
        </div>
        <Navbar />
    </main>

<style lang="scss">
    #profile-page {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 5px;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;

        @media only screen and (min-width: 1200px) {
          padding: 70px 5px 5px 5px;
        }
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

        &-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            max-width: 40rem;
            margin-bottom: 80px;
            box-sizing: border-box;
        }
    }

    .content-container {
        margin: 1rem 0 0 0;
    }
</style>