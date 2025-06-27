<script lang="ts">
    import closeIcon from "$assets/icons/close.svg?raw";
    import backIcon from "$assets/icons/back.svg?raw";
    import {fade} from "svelte/transition";
    import type {Snippet} from "svelte";

    let {
        isVisible = $bindable(),
        title,
        onBackClick,
        onCloseClick,
        steps,
        currentStep = $bindable(0),
    } : {
        isVisible: boolean,
        title: string,
        onBackClick?: () => void,
        onCloseClick?: () => void,
        steps: Snippet[],
        currentStep?: number,
    } = $props();

    const isMultiStep = steps.length > 1;

    let fullScreenBackgroundElement: HTMLElement | undefined = $state();
    let panelElement: HTMLElement | undefined = $state();

    $effect(() => {
        if (!fullScreenBackgroundElement || !panelElement) return;

        const app = document.getElementById("app");

        // if (!app) return;

        if (isVisible) {
            app?.append(fullScreenBackgroundElement);
            app?.append(panelElement);
        }
        else {
            app?.removeChild(fullScreenBackgroundElement);
            app?.removeChild(panelElement);
        }
    })

    function onBackButtonClick() {
        if (isMultiStep && currentStep > 0) currentStep -= 1;

        if (onBackClick) onBackClick();
    }

    function onCloseButtonClick() {
        isVisible = false;

        if (isMultiStep && currentStep > 0) currentStep = 0;

        if (onCloseClick) onCloseClick();
    }
</script>

    {#if isVisible}
        <div class="dialog-panel-background" bind:this={fullScreenBackgroundElement} transition:fade={{duration:200}}></div>

        <div class="dialog-panel" bind:this={panelElement} transition:fade={{duration:200}}>
            <div class="background"></div>
            <div class="dialog-panel-header">
                {#if isMultiStep && currentStep > 0}
                    <button class="dialog-panel-header-back-button" onclick={onBackButtonClick}>
                        <span class="dialog-panel-header-back-button-icon">{@html backIcon}</span>
                    </button>
                {/if}

                <span class="dialog-panel-header-title">{title}</span>

                <button class="dialog-panel-header-close-button" onclick={onCloseButtonClick}>
                    <span class="dialog-panel-header-close-button-icon">{@html closeIcon}</span>
                </button>
            </div>

            <div class="dialog-panel-content">
                {@render steps[currentStep]()}
            </div>

            {#if isMultiStep}
                <div class="dialog-panel-bullets">
                    {#each steps as _, index}
                        <div class="bullet" class:active={index === currentStep}></div>
                    {/each}
                </div>
            {/if}

        </div>
    {/if}

<style lang="scss">
    .dialog-panel-background {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        backdrop-filter: blur(2.5px);
        z-index: 100;
        pointer-events: auto;
        overflow: hidden;
    }

    .dialog-panel {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--main-background-color);
        width: 90%;
        max-width: 40rem;
        max-height: 45rem;
        z-index: 101;
        border-radius: 1.25rem;
        border: 1px solid rgba(30, 138, 182, 0.4);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 1.5rem 0.9rem;

        &-header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            justify-self: flex-start;
            width: 100%;
            padding: 0 0 1.5rem 0;
            margin-bottom: auto;
            border-bottom: 1px solid rgba(30, 138, 182, 0.4);

            &-back-button {
                position: absolute;
                top: 1.6rem;
                left: 1rem;
                background-color: transparent;
                border: none;
                color: var(--main-text-color);
                cursor: pointer;
            }

            &-title {
                padding: 0;
                margin: 0;
                font-size: 1.5rem;
                font-weight: 500;
                color: var(--main-text-color);
                font-family: var(--title-font-family);
            }

            &-close-button {
                position: absolute;
                top: 1.6rem;
                right: 1rem;
                background-color: transparent;
                border: none;
                color: var(--main-text-color);
                cursor: pointer;
            }
        }

        &-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            z-index: 101;
        }

        &-bullets {
            display: flex;
            gap: 0.35rem;
            justify-content: center;
            margin: 0 0 1rem 0;

            .bullet {
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 50%;
                background-color: var(--main-text-color);

                &.active {
                    background-color: var(--main-highlight-color);
                }
            }
        }
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('/paws.png');
        background-size: 68rem auto;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.05;
        border-radius: 1.25rem;
    }

    .dialog-panel-header-close-button-icon :global(svg) {
        width: 1.5rem;
        height: 1.5rem;
        color: var(--main-text-color);
    }

    .dialog-panel-header-back-button-icon :global(svg) {
        width: 1.5rem;
        height: 1.5rem;
        color: var(--main-text-color);
    }
</style>