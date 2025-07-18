<script lang="ts">
    import closeIcon from "$assets/icons/close-fill.svg?raw";

    let {
        image,
        onRemoveClick
    } : {
        image: { id: string, file: File, preview: string },
        onRemoveClick: (id: string) => void 
    } = $props();
</script>

<div class="image-container">
    <img src={image.preview} alt={image.file.name} class="image-preview" />
    <button class="remove-button" onclick={() => onRemoveClick(image.id)} type="button">
        <span class="remove-button-icon">
            {@html closeIcon}
        </span>
    </button>
    <div class="image-name">{image.file.name}</div>
</div>

<style lang="scss">
    .image-container {
        position: relative;
        border-radius: 0.6rem;
        overflow: hidden;
        background-color: rgba(var(--main-background-color), 0.9);
        border: 1px solid rgba(30, 138, 182, 0.2);

        &:hover {
            .remove-button {
                opacity: 1;
            }
            .image-name {
                opacity: 1;
            }
        }
    }

    .image-preview {
        width: 100%;
        height: 8rem;
        object-fit: cover;
        display: block;
    }

    .remove-button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        background-color: transparent;
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.2s ease;

        &-icon {
            width: 1.5rem;
            height: 1.5rem;
        }

        &-icon :global(svg) {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    .image-name {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        color: white;
        padding: 0.5rem;
        font-size: 0.75rem;
        opacity: 0;
        transition: opacity 0.2s ease;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>