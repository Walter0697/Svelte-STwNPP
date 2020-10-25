<script>
	import 'bulma/css/bulma.css';

	import { initTheme } from '../scripts/utilities/theme';
	
	import { Router, Route } from "svelte-routing";
	import HomePage from "./routes/HomePage.svelte";
  
	export let url = "";

	initTheme();
    
  </script>

<svelte:head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</svelte:head>

<Router url="{url}">
	<div>
		<Route path="/"><HomePage /></Route>
	</div>
</Router>

<style>
	
</style>