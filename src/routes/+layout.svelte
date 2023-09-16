<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.postcss';
</script>

<main class="font-quicksand font-semibold">
	<Navigation />

	<slot />
</main>
