<script>
    export let currentvalue;
    export let tabvalue;

    $: currentclass = (currentvalue == tabvalue) ? "tab svelte-d07p7i is-active" : "tab svelte-d07p7i";
    $: ishidden = (currentvalue == tabvalue) ? "false" : "true";

</script>

<div class={currentclass} aria-hidden={ishidden}>
    <slot></slot>
</div>