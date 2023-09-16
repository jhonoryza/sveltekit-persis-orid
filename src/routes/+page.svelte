<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { posts } from '$lib/posts';

	let page = 1;

	async function fetchData() {
		let resp = await fetch(
			`https://api.persis.or.id/api/module/post/v1/post?page=${page}&limit=6`
		).then((resp) => resp.json());
        
        /** @type {never[]} */
		let data = await resp.data.posts.data;
        posts.update(posts => [...posts, ...data] );
	}

	onMount(() => {
		fetchData();
	});

    /** @param {any} event */
    function loadMore(event) {
        const documentHeight = event.target.body.scrollHeight;
        const currentScroll = window.scrollY + window.innerHeight;
        if(currentScroll >= documentHeight) {
            page++;
            fetchData();
        }
    }

    /** @param {any} post */
    function openDetailPage(post) {
        goto(`/posts/${post.slug}`);
    }

</script>

<svelte:window on:scroll={loadMore}/>

<section>
	<div class="flex flex-wrap justify-center">
		{#each $posts as post}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="mt-12 mx-12 rounded-xl shadow overflow-hidden border border-slate-200 w-3/12 hover:cursor-pointer" on:click={() => openDetailPage(post)}>
				<img src={post.thumbnail} class="w-full h-64" alt="" />
				<p class="text-2xl m-2">{post.title}</p>
				<p class="text-sm m-2">{post.summary || ''}</p>
			</div>
		{/each}
	</div>
</section>
