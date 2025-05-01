<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements";

    let {
        onClick,
        label,
        customClass,
        customStyle
    } : {
        onClick: MouseEventHandler<HTMLButtonElement>,
        label?: string,
        customClass?: string,
        customStyle?: string
    } = $props();
</script>

<button class="back-button-default {customClass ?? ''}" onclick={onClick} style={customStyle}>
    <span class="material-icons">keyboard_backspace</span>
    {label}
</button>

<style lang="scss">
    .back-button-default {
        background-color: transparent;
        border: none;
        color: var(--main-text-color);
        font-size: 0.90rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        &:hover {
            color: var(--second-highlight-color);
        }
    }
</style>