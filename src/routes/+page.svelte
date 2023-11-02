<script>
	//@ts-nocheck
	import { onMount } from 'svelte';

	let i = 'Hey';
	let time = 'Sometime';

	let channel;
	let sub;

	onMount(() => {
		const apiKey = 'pmPj8A.10JMLQ:kVdYpkwf-_c_2SEftDg9IJlFw1SblYaw5DTAd8G3zCw';
		const ably = new Ably.Realtime.Promise({ key: apiKey });
		channel = ably.channels.get('time');

		setInterval(() => {
			channel.publish('update', { Time: Date.now().toString() });
		}, 3000);

		sub = channel.subscribe((msg) => {
			time = JSON.stringify(msg.data);
		});
	});
</script>

<svelte:head>
	<script src="https://cdn.ably.com/lib/ably.min-1.js"></script>
</svelte:head>

<h1>Welcome to SvelteKit</h1>

<h3>{time}</h3>
