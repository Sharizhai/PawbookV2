<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements";
    import settingsIcon from "$assets/icons/settings.svg?raw";

    let {
        onClick,
        customClass,
        customStyle
    } : {
        onClick: MouseEventHandler<HTMLButtonElement>,
        customClass?: string,
        customStyle?: string
    } = $props();
</script>

<button class="settings-button-default {customClass ?? ''}" onclick={onClick} style={customStyle}>
    <span class="settings-button-default-icon">{@html settingsIcon}</span>
</button>

<style lang="scss">
    .settings-button-default {
        background-color: transparent;
        border: none;
        color: var(--main-text-color);
        font-size: 0.90rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        &:hover, &:hover :global(svg) {
            color: var(--second-highlight-color);
        }

        &-icon :global(svg) {
            width: 1.5rem;
            height: 1.5rem;
            margin-bottom: 0.1rem;
            color: var(--main-text-color);
        }
    }
</style>