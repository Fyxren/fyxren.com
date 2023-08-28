<script>
	import Link from '$lib/components/atoms/Link.svelte';
	const ANIME = 'https://anilist.co/user/Fyxren/animelist';
	const MANGA = 'https://anilist.co/user/Fyxren/mangalist';
	const PIANO = 'https://www.youtube.com/playlist?list=PLOT6alYbTjQQ-tlYPUODnaKjDrzT-Fy2C';

	// I didn't write this,did modify it a little bit though
	let getAge = () => {
		let birthDate = new Date('2004/03/25');
		const ageMs = Date.now() - birthDate.getTime();
		const preciseAge = (ageMs / 31536000000).toFixed(10);
		return {
			round: Math.floor(Number(preciseAge)),
			precise: preciseAge
		};
	};

	let age = getAge();
	setInterval(() => {
		age = getAge();
	}, 120_000);
</script>

<div class="grid gap-5 lg:grid-cols-2">
	<div class="">
		<img
			src="https://lanyard-profile-readme.vercel.app/api/462914535351779328?idleMessage=404%20-%20Activity%20Not%20Found"
			alt="Discord Status"
			class=""
		/>
	</div>
	<div class="space-y-1">
		<p>
			Hey there! My name is <span class="font-semibold text-primary">Ben // Fyxren</span>. I am a
			<span class="font-semibold text-primary">Smart Industry</span> student and dabble as a
			<span class="font-semibold text-primary">hobbist coder</span>. Clocking in at
			<span class="font-semibold text-primary tooltip" data-tip={age.precise}>{age.round}</span>
			years old, I try to play the <Link link={PIANO}>piano</Link>, enjoy watching
			<Link link={ANIME}>anime</Link> and reading <Link link={MANGA}>manga</Link>.
		</p>
		<p>
			Starting things is my jam, but the follow-through? Well, let's just say it's a rare sighting.
			Currently, my focus lies on creating <span class="font-semibold text-primary">websites</span>,
			albeit often encountering more bugs than lines of code along the way.
		</p>
		<p class="italic">
			Truth be told, my life doesn't exactly qualify as a 'thrill ride', that was about it. Besides,
			if it slipped my mind, it's probably not worth losing sleep over, am I right?
		</p>
	</div>
</div>
