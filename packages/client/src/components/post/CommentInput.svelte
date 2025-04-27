<script lang="ts">
    import postIcon from "$assets/icons/posts/post.svg?raw"; 

    let { isVisible = $bindable(), onClick } : { isVisible:boolean, onClick: (commentText: string) => void } = $props();

    let commentText: string = $state("");

    function onSendCommentButtonClick(event: MouseEvent) {
        event.stopPropagation();

        if (commentText.trim() && onClick) {
            onClick(commentText);
            commentText = "";
        }

        isVisible = false;
    }

</script>

{#if isVisible}
    <div class="comment-input-container">
        <input class="comment-input" type="text" bind:value={commentText} />
        <button type="button" class="comment-input-container-button" onclick={onSendCommentButtonClick} aria-label="Send a comment" >
            <span class="comment-input-container-button-icon">{@html postIcon}</span>
        </button>
    </div>
{/if}

<style lang="scss">
    .comment-input-container {
        background-color: transparent;
        border: none;
        color: var(--main-text-color);
        width: 100%;
        font-size: 0.9rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0.5rem 0 0 0;
        gap: 0.5rem;
        cursor: pointer;

        &:hover, &:hover :global(svg) {
            color: var(--second-highlight-color);
        }

        &-button {
            position: absolute;
            right: 0.7rem;
            background-color: transparent;
            border: none;
            color: var(--main-text-color);
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            cursor: pointer;

            &:hover, &:hover :global(svg) {
                color: var(--second-highlight-color);
            }
        }

        &-button-icon {
            width: 1.5rem;
            height: 1.5rem;
        }

        &-button-icon :global(svg) {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--main-text-color);

            &:hover {
                color: var(--second-highlight-color);
            }
        }
    }

    .comment-input {
        background-color: var(--main-background-color);
        border: 1px solid rgba(30, 138, 182, 0.4);
        border-radius: 0.6rem;
        padding: 0.5rem 2.2rem 0.5rem 0.5rem;
        width: 100%;
        font-size: 0.9rem;
        color: var(--main-text-color);
        outline: none;
    }
</style>