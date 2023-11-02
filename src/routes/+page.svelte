<script>
	//@ts-nocheck
	let apiKey = 'pmPj8A.10JMLQ:kVdYpkwf-_c_2SEftDg9IJlFw1SblYaw5DTAd8G3zCw';
	const ably = new Ably.Realtime.Promise({ key: apiKey });
	console.log('apiKey = ', apiKey);

	let time = 'Sjwejw';

	let channel = ably.channels.get('time');

	setInterval(() => {
		channel.publish('update', { Time: Date.now() });
	}, 3000);

	let sub = channel.subscribe((msg) => {
		time = JSON.stringify(msg.data);
	});
</script>

<svelte:head>
	<script src="https://cdn.ably.com/lib/ably.min-1.js"></script>
</svelte:head>

<h1>Welcome to SvelteKit</h1>

<h3>{time}</h3>
