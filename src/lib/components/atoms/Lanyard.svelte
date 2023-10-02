<script lang="ts">
	import { onMount } from 'svelte';
	import LanyardData from '../../stores/LanyardStore';
	import type { IActivity } from '$lib/util/global.interface';

	let Lanyard: any = {};

	onMount(() => {
		LanyardData.subscribe(async (e) => {
			let { data } = await e;
			data.customActivity = data.activities.find((x: IActivity) => x.type === 4);
			data.activities = data.activities.filter((x: IActivity) => x.type !== 4);
			Lanyard = data;
		});
	});

	const DiscordActivityTypes: { [key: string]: string } = {
		0: 'Playing',
		1: 'Streaming',
		2: 'Listening',
		3: 'Watching',
		4: 'Custom',
		5: 'Competing'
	};
</script>

{#if Lanyard.discord_user?.username}
	<div class="p-5 rounded-lg bg-base-200">
		<!-- <p>{localTime}</p> -->

		<div class="flex items-center justify-between">
			<a
				href={`https://discord.com/users/${Lanyard.discord_user.id}`}
				target="_blank"
				class="flex items-center gap-2 duration-300 hover:gap-4 group"
			>
				<img
					src={`https://cdn.discordapp.com/avatars/${Lanyard.discord_user.id}/${Lanyard.discord_user.avatar}`}
					alt="Discord profile"
					class={`w-14 border-4 rounded-full duration-300 group-hover:scale-110 group-hover:rotate-6 ${
						Lanyard.discord_status === 'online'
							? 'border-green-500'
							: Lanyard.discord_status === 'idle'
							? 'border-orange-500'
							: Lanyard.discord_status === 'dnd'
							? 'border-red-500'
							: 'border-gray-500'
					}`}
				/>
				<div class="">
					<h2 class="text-xl font-medium tracking-wide font-rubik group-hover:text-primary">
						@{Lanyard.discord_user.username}
					</h2>
					<div class="flex items-center gap-2 mt-2">
						{#if Lanyard.customActivity}
							{#if Lanyard.customActivity.emoji?.id}
								<img
									src={`https://cdn.discordapp.com/emojis/${Lanyard.customActivity.emoji.id}.${
										Lanyard.customActivity.emoji.animated ? 'gif' : 'png'
									}`}
									alt="Custom Activity Emoji"
									class="object-contain w-6"
								/>
							{/if}
							<p>
								{#if !Lanyard.customActivity.emoji?.id}
									{Lanyard.customActivity.emoji.name}
								{/if}
								{Lanyard.customActivity.state}
							</p>
						{/if}
					</div>
				</div>
			</a>
			<div
				class="tooltip-left tooltip tooltip-info"
				data-tip="This card does not update yet. I couldn't get it to work.."
			>
				<img src="/icons/discord.svg" alt="Discord logo" class="w-6" />
			</div>
		</div>
		<hr class="my-5 border-white/20" />

		{#if Lanyard.spotify}
			<a target="_blank" href={`https://open.spotify.com/track/${Lanyard.spotify.track_id}`}>
				<div class="flex items-center gap-5">
					<img
						src={Lanyard.spotify.album_art_url}
						alt="Spotify Album Art"
						class="h-32 rounded-lg"
					/>
					<div>
						<p class="text-[#1DB954] font-medium">Listening to</p>
						<h6
							class="text-2xl font-semibold tracking-wider text-left font-rubik tooltip tooltip-primary"
							data-tip={`Album: ${Lanyard.spotify.album}`}
						>
							{Lanyard.spotify.song}
						</h6>
						<p>{Lanyard.spotify.artist}</p>
					</div>
				</div>
			</a>
		{:else if Lanyard.activities.length > 0 && Lanyard.activities[0].id !== 'spotify:1'}
			<div class="flex items-center gap-5">
				<img
					src={`https://cdn.discordapp.com/app-assets/${Lanyard.activities[0].application_id}/${Lanyard.activities[0].assets?.large_image}.webp?size=256`}
					alt="Activity_Large_Image"
					class="h-32 rounded"
				/>
				<div>
					<p class="font-medium tracking-wider text-secondary">
						{DiscordActivityTypes[Lanyard.activities[0].type]}
					</p>
					<h6 class="text-xl font-semibold font-rubik">{Lanyard.activities[0].name}</h6>
					<p>{Lanyard.activities[0].details}</p>
					<p>{Lanyard.activities[0].state}</p>
				</div>
			</div>
		{:else}
			<p class="py-5 text-center">Not doing anything... Have a cookie! 🍪</p>
		{/if}
	</div>
{/if}
