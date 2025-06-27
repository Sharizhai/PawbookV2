<script lang="ts">
    import type {MouseEventHandler} from "svelte/elements";

    let {
        onClick,
        label,
        customClass,
        customStyle,
        isDisabled = false,
        isCTA = false,
    } : {
        onClick: MouseEventHandler<HTMLButtonElement>,
        label: string,
        customClass?: string,
        customStyle?: string,
        isDisabled?: boolean,
        isCTA?: boolean,
    } = $props();
</script>

    <button class="dialog-panel-button {customClass ?? ''}"
            onclick={onClick}
            style={customStyle}
            disabled={isDisabled}
            class:main-cta={isCTA}
    > {label} </button>

<style lang="scss">
    .dialog-panel-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 10.625rem;
        height: 2.5rem;
        border-radius: 0.375rem;
        border: 1px solid var(--color-main-dark);
        background-color: rgba(255, 255, 255, 0.5);
        color: var(--main-text-color);
        font-size: 1rem;
        font-weight: bold;
        padding: 0.625rem 1.25rem;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        box-sizing: border-box;

        &:hover {
            color: var(--second-highlight-color);
            border: 1px solid var(--second-highlight-color);
        }
    }

    .main-cta {
        background-color: rgba(30, 138, 182, 0.5);
        border: 1px solid rgba(30, 138, 182, 0.5);
        color: var(--main-text-color);

        &:hover {
            color: var(--main-text-color);
            border: 1px solid var(--main-text-color);
        }
    }

    .shadow-box {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }
</style>