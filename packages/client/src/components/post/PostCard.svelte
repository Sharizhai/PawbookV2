<script lang="ts">
    import SettingsButton from "$components/SettingsButton.svelte";
    import LikeButton from "$components/post/LikeButton.svelte";
    import * as messages from "$lib/paraglide/messages";

    import commentIcon from "$assets/icons/posts/comment.svg?raw";

    const commentLabel = messages.post_comment();

    function onSettingsButtonClick() {
        console.log("Settings button clicked!");
    }

    function onLikeButtonClick() {
        console.log("Like button clicked!");
    }

    function onCommentButtonClick() {
        console.log("Comment button clicked!");
    }

</script>

    <div class="postcard-main-container">

        <div class="postcard-user-infos-container">
            <SettingsButton onClick={onSettingsButtonClick} customClass="postcard-settings-button" />
            <img src="/paws.png" alt="User Avatar" class="postcard-user-avatar" />
            <div class="postcard-user-name-container">
                <div class="postcard-user-name">User Name</div>
                <div class="postcard-user-post-date">2j</div>
            </div>   
        </div>
        <div class="postcard-content">
        </div>

        <div class="postcard-buttons-container">
            <LikeButton onClick={onLikeButtonClick}/>
            <button class="postcard-button postcard-comment-button" onclick={onCommentButtonClick}>
                <span class="postcard-button-icon">{@html commentIcon}</span>
                {commentLabel}
            </button>

            <!-- TODO: Add comment count here if post.omment.length > 0 -->
        </div>
    </div>

<style lang="scss">
    .postcard-main-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: var(--main-background-color);
        border-radius: 1rem;
        border: 1px solid rgba(30, 138, 182, 0.4);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin-bottom: 1rem;
        padding: 0.625rem;
    }

    .postcard-user-infos-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }

    .postcard-user {
        &-avatar{
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            margin-right: 0.5rem;
            border: 1px solid rgba(30, 138, 182, 0.4);
        }

        &-name {
            font-size: 0.9rem;
            font-weight: bold;
            color: var(--main-text-color);
        }

        &-post-date {
            font-size: 0.8rem;
            color: var(--second-text-color);
        }
    }

    :global(.postcard-settings-button) {
        position: absolute;
        top: 0.5rem;
        right: 0.2rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .postcard-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin-top: 1rem;
        font-size: 0.9rem;
        color: var(--main-text-color);
        text-align: left;
    }

    .postcard-buttons-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-top: 1rem;
        gap: 1rem;
    }
    
    .postcard-button {
        background-color: transparent;
        border: none;
        color: var(--main-text-color);
        font-size: 0.9rem;
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
            color: var(--main-text-color);
        }
    }
</style>