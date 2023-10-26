let apiKey = 'pmPj8A.10JMLQ:kVdYpkwf-_c_2SEftDg9IJlFw1SblYaw5DTAd8G3zCw';
export const ably = new Ably.Realtime({ key: apiKey });

let time = 'Sjwejw';

let channel = ably.channels.get('time');

setInterval(() => {
	channel.publish('update', { Time: Date.now().toString() });
}, 3000);

let sub = channel.subscribe((msg) => {
	time = JSON.stringify(msg.data);
});
