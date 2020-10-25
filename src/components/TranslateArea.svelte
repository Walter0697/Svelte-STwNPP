<script>
    import { Input } from 'svelma'

    export let disabled; 
    export let value;
</script>

{#if disabled}
    <Input type="textarea" bind:value disabled/>
{:else}
    <Input type="textarea" bind:value />
{/if}