<script>
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    export let currentvalue;
    export let tabvalue;
    export let text;

    $: currentclass = (currentvalue == tabvalue) ? "is-active" : "";

    function handlemousedown()
    {
        dispatch('tabchange', {value: tabvalue});
    }
</script>

<ul>
    <li class={currentclass}>
        <div class="clickable" on:mousedown={handlemousedown}>
            <span>{text}</span>
        </div>
    </li>
</ul>