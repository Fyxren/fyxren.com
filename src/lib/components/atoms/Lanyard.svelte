<script lang="ts">
	import type { StatusColors } from '$lib/types/lanyard.interface';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { useLanyard, type Activity, type Spotify } from 'sk-lanyard';
	import { onDestroy } from 'svelte';
	const lanyard = useLanyard({ method: 'ws', id: '462914535351779328' });

	let progress = 0;
	let duration = '';
	let intervalId: any;
	const statusColors: StatusColors = {
		online: 'border-green-500',
		offline: 'border-gray-500',
		idle: 'border-yellow-500',
		dnd: 'border-red-500',
		streaming: 'border-purple-500'
	};

	// Reactive statements
	$: lanyardData = $lanyard;
	$: status = statusColors[lanyardData?.discord_status];
	$: customStatus = lanyardData?.activities.find((activity) => activity.type === 4);
	$: activities = lanyardData?.activities.filter(
		(activity) => activity.type !== 4 && activity.type !== 2
	);
	$: if (lanyardData && lanyardData.spotify) {
		startProgress(lanyardData.spotify);
	}

	function startProgress(spotify: Spotify) {
		clearInterval(intervalId);

		intervalId = setInterval(() => {
			progress = spotifyProgress(spotify);
			duration = formatDuration(spotify);
		}, 1000);
	}

	function spotifyProgress(spotify: Spotify) {
		const total = (spotify.timestamps.end || 0) - (spotify.timestamps.start || 0);
		const current = Date.now() - (spotify.timestamps.start || 0);
		return (current / total) * 100;
	}

	function formatDuration(spotify: Spotify) {
		const durationMs = (spotify.timestamps?.end || 0) - (spotify.timestamps?.start || 0);
		const durationSec = Math.floor(durationMs / 1000);
		const minutes = Math.floor(durationSec / 60);
		const seconds = durationSec % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}

	onDestroy(() => {
		clearInterval(intervalId);
	});

	// function parseLargeImage(asset: string) {
	// 	/*
	// 		If the link is an external link, it will start with "mp:external"
	// 		It looks something like this: "mp:external/mi5SEosv4mEXgyHRM1OCDl40N78Y_WS9hb1c8ji-2nQ/https/cdn.rcd.gg/PreMiD/websites/P/Pinterest/assets/logo.png"
	// 		By splitting at "https" and taking the second item, we get the actual link when we replace the first "/" with "https://"
	// 	*/
	// 	if (asset.startsWith('mp:external')) {
	// 		let link = asset.split('https')[1];
	// 		if (link.includes('%2520')) link = link.replace('%2520', '%20');
	// 		return link.replace('/', 'https://');
	// 	} else {
	// 		return `https://cdn.discordapp.com/app-assets/${Lanyard.activities[0].application_id}/${Lanyard.activities[0].assets?.large_image}.webp?size=256`;
	// 	}
	// }
</script>

{#if lanyardData}
	<div class="card p-4 space-y-4 h-full">
		<div class="flex items-center gap-4 font-thin">
			<img
				src={`https://cdn.discordapp.com/avatars/${lanyardData.discord_user.id}/${lanyardData.discord_user.avatar}.png`}
				alt="discord profilepicture"
				class={`rounded-full w-16 object-contain border-4 ${status}`}
			/>
			<div class="space-y-2">
				<div class="text-2xl">
					{lanyardData.discord_user.global_name}
				</div>
				<div>
					<p class="flex gap-3 items-center">
						{#if customStatus?.emoji}
							<img
								src={`https://cdn.discordapp.com/emojis/${customStatus?.emoji.id}.${
									customStatus?.emoji.animated ? 'gif' : 'png'
								}`}
								alt="emoji"
								class="w-6 h-6"
							/>
						{/if}
						<span>{customStatus?.state ?? ''}</span>
					</p>
				</div>
			</div>
		</div>
		<div class="">
			{#if lanyardData.spotify}
				<a target="_blank" href={`https://open.spotify.com/track/${lanyardData.spotify.track_id}`}>
					<div class="flex items-center gap-5">
						<img
							src={lanyardData.spotify.album_art_url}
							alt="Spotify Album Art"
							class="h-32 rounded-lg"
						/>
						<div class="w-full">
							<p class="text-[#1DB954] font-bold">Listening to</p>
							<p class="text-2xl tracking-wide text-left">
								{lanyardData.spotify.song}
							</p>
							<p>{lanyardData.spotify.artist}</p>

							<div class="flex gap-2">
								<ProgressBar class="w-full h-2 mt-2" value={progress} />
								<p class="text-right">{duration ?? '?:??'}</p>
							</div>
						</div>
					</div>
				</a>
			{:else}
				<div class="flex items-center justify-center py-4 italic">Not listening to Spotify</div>
			{/if}
		</div>
	</div>
{:else}
	<div class="card"></div>
{/if}

<!-- <pre>
    {JSON.stringify($lanyard ?? {}, null, 2)}
</pre> -->
