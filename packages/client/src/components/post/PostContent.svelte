<script lang="ts">
    import { onMount } from "svelte";
    let { textContent, imageContent } : { textContent?: string, imageContent?: string[] } = $props();

    onMount(() => {
        if (!textContent && !imageContent) return;
    });

    function onImageClick(index: number) {
        console.log(`Image ${index} cliquée`);
    }

    function onOverlayImageClick(e: Event, index: number): void {
        e.stopPropagation();
        onImageClick(index);
    }

</script>
    <div class="postcard-content">
        {#if textContent}
            <p class="postcard-content-text-content {imageContent ? "postcard-content-extra-margin" : ""}">{textContent}</p>
        {/if}

        {#if imageContent && imageContent.length > 0}
            <div class="post-images-grid" class:one-image={imageContent.length === 1} class:two-images={imageContent.length === 2}>
            {#each imageContent.slice(0, 3) as image, index}
                <div role="button" tabindex="0" class="post-image-content" onclick={() => onImageClick(index)} onkeydown={() => onImageClick(index)} aria-label={`Voir l'image ${index + 1} en plein écran`}>
                <img src={image} alt={`Post image ${index + 1}`} />
                
                {#if index === 2 && imageContent.length > 3}
                    <div role="button" tabindex="0" class="post-image-overlay" onclick={(e) => onOverlayImageClick(e, 3)} onkeydown={(e) => onOverlayImageClick(e, 3)} aria-label="test">
                    +{imageContent.length - 3}
                    </div>
                {/if}
                </div>
            {/each}
            </div>
        {/if}
    </div>

<style lang="scss">
    .postcard-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin-top: 1rem;
        font-size: 0.9rem;
        color: var(--main-text-color);
        text-align: left;

        &-text-content {
            margin: 0;
        }

        &-extra-margin {
            margin-bottom: 0.5rem;
        }
    }

    .post-images-grid {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3, 1fr);
        
        &.two-images {
            grid-template-columns: repeat(2, 1fr);
        }
        
        &.one-image {
            grid-template-columns: 1fr;
        }
    }

    .post-image-content {
        position: relative;
        width: 100%;
        height: 12.5rem;
        overflow: hidden;
        border-radius: 0.375rem;
        margin-top: 10px;
        cursor: pointer;
        border: 1px solid rgba(30, 138, 182, 0.4);
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.375rem;
        }
    }

    .post-image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.4);
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        border-radius: 0.375rem;

        &:hover {
            background-color: rgba(30, 138, 182, 0.3);
            color: var(--main-text-color);
        }
    }
</style>