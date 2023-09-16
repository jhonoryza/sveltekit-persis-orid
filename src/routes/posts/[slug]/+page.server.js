export async function load({ params }) {
	const slug = params.slug;
	const resp = await fetch(
		`https://api.persis.or.id/api/module/post/v1/post/read-slug?slug=${slug}`
	).then((resp) => resp.json());

	const data = await resp.data.post;
    return {
        post : data
    }
}
