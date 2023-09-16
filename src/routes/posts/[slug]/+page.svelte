<script>
    export let data

    const back = '< Back';
</script>

<section>
	<div class="flex flex-wrap">
		<a href="/" class="flex justify-start items-center m-2">
			{back}
		</a>
		<div class="mt-2 mx-2 overflow-hidden w-full">
			<p class="text-4xl my-2 text-center">{data?.post?.title || ''}</p>
			<img src={data?.post?.thumbnail || ''} class="my-4 h-64" alt="" />
			<p class="text-sm my-4 italic text-center">{data?.post?.summary || ''}</p>
			<div class="text-justify m-2 text-lg text-dark-400 font-quicksand font-medium">
				{@html data?.post?.content || ''}
			</div>
			<p class="text-center my-8">Published: {data?.post?.publishedAt || ''}</p>
		</div>
	</div>
</section>
