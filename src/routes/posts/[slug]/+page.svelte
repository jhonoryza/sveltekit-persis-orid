<script>
	export let data;

	const back = '< Back';
</script>

<section>
	<div class="flex flex-col border border-slate-300 shadow m-4 rounded-xl">
		<a href="/" class="flex justify-start items-center m-2">
			{back}
		</a>
		<div class="overflow-hidden w-auto rounded-2xl mx-4 lg:mx-40">
			<img src={data?.post?.thumbnail || ''} class="w-auto mx-auto" alt="" />
		</div>
		<div class="m-2">
			<p class="font-bold text-4xl my-2 text-center">{data?.post?.title || ''}</p>
			<p class="text-sm my-4 italic text-center">{data?.post?.summary || ''}</p>
			<div class="text-justify m-2 text-lg text-dark-400 font-quicksand font-medium">
				{@html data?.post?.content || ''}
			</div>
			<p class="text-end my-2">Published: {data?.post?.publishedAt || ''}</p>
		</div>
	</div>
</section>
