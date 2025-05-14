<script lang="ts">
    import type {MouseEventHandler} from "svelte/elements";
    import Button from "$components/generic/Button.svelte";

    let { onClick, label, incentive } : { onClick: MouseEventHandler<HTMLButtonElement>, label:string, incentive: string } = $props();
</script>

    <div id="empty-content-cta">
        <span class="empty-content-cta-incentive">{incentive}</span>
        <Button label={label} onClick={onClick} isCTA/>
    </div>

<style lang="scss">
    #empty-content-cta {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(30, 138, 182, 0.4);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 0.75rem;
        padding : 6rem 1.25rem;
        width: 100%;
        max-width: 40rem;
        backdrop-filter: blur(3px);
    }

    .empty-content-cta {
        &-incentive {
            color: var(--main-text-color);
            font-weight: bold;
            margin: 0 0 2.5rem 0;

        }
    }
</style>