<script>
    import { setTheme, getTheme } from '../../scripts/utilities/theme';
    import { Switch } from 'svelma';
    import { createEventDispatcher,  afterUpdate } from 'svelte';
	const dispatch = createEventDispatcher();

    let checked = (getTheme() == 'dark-mode' ? true : false);

    afterUpdate(() => {
        var theme = checked ? 'dark-mode' : 'light-mode';
        setTheme(theme);
        dispatch('theme-change', {});
    });
</script>

<Switch bind:checked={checked} type="is-dark">
    <slot/>
</Switch>
