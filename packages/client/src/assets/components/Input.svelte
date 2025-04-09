<script lang="ts">
    let {
        label,
        customClass,
        type,
        placeholder,
        isDisabled = false
    } : {
        label: string,
        customClass?: string,
        type: string,
        placeholder?: string,
        isDisabled?: boolean
    } = $props();
</script>

    <div class="input-container {customClass ?? ''}">
        <label class="input-container-label" for="input-field">{label}</label>
        <input class="input-container-input" type={type} placeholder={placeholder} disabled={isDisabled}>
    </div>

<style lang="scss">
    .input-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 1rem;
        width: 100%;

        &-label {
            font-size: 1rem;
            margin-bottom: 0.2rem;
            color: var(--main-text-color);
            font-weight: bold;
        }

        &-input {
            width: 100%;
            padding: 0.3rem 0.5rem;
            border-radius: 0.375rem;
            border: 1px solid var(--color-main-dark);
            background-color: #FFFFFF;
            color: var(--main-text-color);
            font-size: 1rem;

            &:disabled {
                background-color: #f0f0f0;
                cursor: not-allowed;
            }

            &:hover {
            color: var(--second-highlight-color);
            border: 1px solid var(--second-highlight-color);
        }
        }
    }
</style>