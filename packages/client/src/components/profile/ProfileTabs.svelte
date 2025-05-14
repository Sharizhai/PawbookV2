<script lang="ts">
    import { ProfileTab } from "$types/profileTabsTypes";
    import type {Snippet} from "svelte";

    let { activeTab, onClick, tabContent, tabs } : { activeTab: ProfileTab, onClick: Function, tabContent: Snippet, tabs: { label: string; value: ProfileTab }[] } = $props();

</script>

    <div class="profile-tab">
        <div class="profile-tab-header" class:active={activeTab}>
            {#each tabs as tab}
                <button class="profile-tab-header-button" onclick={() => onClick(tab.value)} class:active={activeTab === tab.value}>
                    {tab.label}
                </button>
            {/each}
        </div>

        <div class="profile-tab-content">
            {@render tabContent()}
        </div>
    </div>

<style lang="scss">
    .profile-tab {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 0 0 0;
        backdrop-filter: blur(3px);

        &-header {
            width: 100%;
            display: flex;
            flex-direction: row;
            border-top: 1px solid var(--main-text-color);

            &-button {
                color: var(--main-text-color);
                font-weight: bold;
                flex: 1;
                padding: 1rem 0;
                background: none;
                border: none;
                cursor: pointer;
                transition: color 0.3s ease;
                position: relative;

                &:hover {
                    color: var(--second-highlight-color);
                }

                &::after {
                    content: "";
                    position: absolute;
                    top: -1px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: var(--second-highlight-color);
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }
            }
        }

        &-content {
            width: 100%;
        }
    }

    .active {
        color: var(--second-highlight-color);
    }

    .profile-tab-header-button.active::after {
        transform: scaleX(1);
    }
</style>