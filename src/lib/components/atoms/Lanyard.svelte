<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { useLanyard } from 'sk-lanyard';
	import { Separator } from '$lib/components/ui/separator';

	const data: any = useLanyard({ method: 'rest', id: '462914535351779328' });

	let filteredActivity: any;
	let activities: any[];
	let spotify: any;
	$: {
		if ($data && $data.activities) {
			filteredActivity = $data.activities.filter((x: any) => x.type === 4)[0];
			activities = $data.activities.filter((x: any) => x.id !== 'spotify:1' && x.id !== 'custom');
			spotify = $data.spotify;
		}
	}

	function parseLargeImage(asset: string, application_id?: number) {
		if (asset.startsWith('mp:external')) {
			let link = asset.split('https')[1];
			if (link.includes('%2520')) link = link.replace('%2520', '%20');
			return link.replace('/', 'https://');
		} else {
			return `https://cdn.discordapp.com/app-assets/${application_id}/${asset}.webp?size=256`;
		}
	}
</script>

{#if $data}
	<div class="">
		<Card.Root>
			<Card.Header>
				<Card.Title class="flex items-center gap-2">
					<img
						src={`https://cdn.discordapp.com/avatars/${$data.discord_user.id}/${$data.discord_user.avatar}.webp`}
						alt="Avatar"
						class="w-10 h-10 rounded-full"
					/>
					{$data.discord_user.global_name}
				</Card.Title>
				<Card.Description class="flex items-center gap-2">
					{#if filteredActivity?.emoji?.id}
						<img
							src={`https://cdn.discordapp.com/emojis/${filteredActivity.emoji.id}.${filteredActivity.emoji.animated ? 'gif' : 'png'}`}
							alt="Emoji"
							class="w-6 h-6"
						/>
					{/if}
					{#if filteredActivity?.state}
						{filteredActivity ? filteredActivity.state : ''}
					{/if}
				</Card.Description>
			</Card.Header>
			<Card.Content>
				{#if activities || spotify}
					<div class="flex flex-col gap-4">
						{#if spotify}
							<a
								class="flex items-center gap-4"
								target="_blank"
								href={`https://open.spotify.com/track/${spotify.track_id}`}
							>
								<img
									src={spotify.album_art_url}
									alt="Spotify Album Art"
									class="object-contain h-16 rounded lg:h-20"
								/>
								<div>
									<p class="text-xs font-bold text-green-500 lg:text-sm">Listening to</p>
									<p class="font-semibold lg:text-lg">{spotify.song}</p>
									<p class="class-sm text-muted-foreground">by{spotify.artist}</p>
									<p class="class-sm text-muted-foreground">on {spotify.album}</p>
								</div>
							</a>
						{/if}

						{#each activities as x, i (x.id)}
							{#if spotify || i !== 0}
								<Separator />
							{/if}
							<div class="flex items-center gap-2">
								{#if x.assets?.large_image}
									<img
										src={parseLargeImage(x.assets?.large_image, x.application_id)}
										alt="Activity_Large_Image"
										class="object-contain h-16 rounded lg:h-20"
									/>
								{:else}
									<img
										src="/catMoonPhases.jpg"
										alt="Activity_Large_Image"
										class="object-contain h-16 rounded lg:h-20"
									/>
								{/if}
								<div>
									<p class="font-medium lg:text-lg">{x.name}</p>
									<p class="text-sm lg:text-base text-muted-foreground">{x.state ?? ''}</p>
									<p class="text-sm lg:text-base text-muted-foreground">{x.details ?? ''}</p>
								</div>
							</div>
						{/each}
					</div>
				{/if}

				{#if !activities[0] && !spotify}
					<p class="text-muted-foreground">Currently {$data.discord_status} on Discord.</p>
				{/if}
			</Card.Content>
		</Card.Root>
		<!-- <pre>
            {JSON.stringify($data ?? 'empty bish', null, 2)}
        </pre> -->
	</div>
{:else}
	<p>Loading...</p>
{/if}
