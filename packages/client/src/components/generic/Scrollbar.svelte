<script lang="ts">
    import {ScrollbarOrientation} from "$types/scrollbarTypes";
    import type {Snippet} from "svelte";

    let { orientation, children } : { orientation: ScrollbarOrientation, children: Snippet } = $props();

    let scrollbarHeight: number | undefined = $state();
    let scrollbarElement: HTMLElement | undefined = $state();

    let isTrackVisible = $derived((scrollbarElement && scrollbarHeight) ? scrollbarElement.scrollHeight > scrollbarHeight : false);

    function orientationStyle() {
        switch (orientation) {
            case ScrollbarOrientation.None:
                return "orientation-none";
            case ScrollbarOrientation.Horizontal:
                return "orientation-horizontal";
            case ScrollbarOrientation.Vertical:
                return "orientation-vertical";
            case ScrollbarOrientation.Both:
                return "orientation-both";
        }
    }
</script>

<div class="scrollbar {orientationStyle()}" class:track-visible={ isTrackVisible } bind:this={ scrollbarElement } bind:clientHeight={ scrollbarHeight } >
    {@render children()}
</div>

<style lang="scss">
    .scrollbar {
        position: relative;
        width: 100%;

        &.track-visible {
            padding-right: 0.5rem;
        }

        &.orientation-none {
            overflow: hidden;
        }

        &.orientation-horizontal {
            overflow-x: auto;
            overflow-y: hidden;
        }

        &.orientation-vertical {
            overflow-x: hidden;
            overflow-y: auto;
        }
        
        &.orientation-both {
            overflow: auto;
        }
    }
</style>