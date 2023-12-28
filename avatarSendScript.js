async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
AVATAR

When I was lying there in the VA hospital,
with a big hole blown through the middle of my life,
I started having these dreams of flying.
I was free.
Sooner or later, though, you always have to wake up.
They can fix a spinal, if you got the money,
but not on vet benefits, not in this economy.
A VA check and 12 bucks will get you a cup of coffee.
I'm what they call... waitlisted.
The Bengal Tiger, extinct for over a century is making a comeback.
These cloned tiger cubs at the Beijing Zoo are the latest of a number of species
that have been cloned back into existence in the past five years.
I became a marine for the hardship. To be hammered on the anvil of life.
I told myself I can pass any test a man can pass.
Jake! Jake! Jake! Jake! Jake!
Let's get it straight, upfront.
I don't want your pity.
You want a fair deal, you're on the wrong planet.
The strong prey on the weak.
That's just the way things are.
And nobody does a damn thing.
Get off! Get off of him!
All I ever wanted in my sorry-ass life was a single thing worth fighting for.
I hope you realized you just lost yourself a customer.
Candy-ass bitch.
If it ain't raining, we ain't training.
- It doesn't look like him.
- It's him.
You Jake Sully?
Step off. You're ruining my good mood.
It's about your brother.
We're looking for Sully, T.
In there.
Jesus, Tommy.
The strong prey on the weak.
A guy with a knife took all Tommy would ever be
for the paper in his wallet.
The concern of the suits was touching.
Your brother represented a significant investment.
We'd like to talk to you about taking over his contract.
And since your genome is identical to his, you could step into his shoes,
so to speak.
It'd be a fresh start on a new world.
You could do something important. You can make a difference.
And the pay is good.
Very good.
Tommy was the scientist, not me.
He was the one who wanted to get shot light-years out in space
to find the answers.
Me, I was just another dumb grunt getting sent someplace he was gonna regret.
In cryo, you don't dream at all.
It doesn't feel like six years.
More like a fifth of tequila and an ass-kicking.
Are we there yet?
Yeah, we're there, sunshine.
We're there.
You've been in cryo for five years, nine months and 22 days.
You will be hungry. You will be weak.
If you feel nausea, please use the sacks provided for your convenience.
The staff thanks you in advance.
Up ahead was Pandora.
You grew up hearing about it, but I never figured I'd be going there.
Valkyrie 1-6, copy...
Valkyrie 1-6, you are clear for de-orbit burn at 2-2-4-niner.
Copy, Venture Star. Go for de-orbit burn at 2-2-4-niner.
- Exo-packs on! Let's go! Exo-packs on!
- Exo-packs on! Let's go!
Remember, people, you lose that mask,
you're unconscious in 20 seconds, you're dead in four minutes!
Let's nobody be dead today! Looks very bad on my report.
Hell's Gate tower, this is TAV 1-6 on approach.
Crossing outer marker. Mine is in sight.
Harnesses off! Get your packs!
- Put it together, let's go! Let's go!
- Harnesses off! One minute!
When that ramp comes down, go directly into the base. Do not stop!
Go straight inside. Wait for my mark!
Go, go, go, go! Get out of there! Keep moving! Let's go, let's go!
There's no such thing as an ex-Marine.
You may be out, but you never lose the attitude.
Let's go, special case! Do not make me wait for you!
Well, well, ladies.
Look at all this fresh meat!
Back on Earth, these guys were Army dogs, Marines,
fighting for freedom.
Look out, hot rod!
But out here they're just hired guns,
taking the money, working for the company.
Check this out, man.
Meals on wheels.
Oh, man, that is just wrong.
I got two guys free in about 20 minutes!
Got it! Need them!
You're not in Kansas anymore.
You are on Pandora, ladies and gentlemen.
Respect that fact every second of every day.
If there is a hell,
you might want to go there for some R&R after a tour on Pandora.
Out there, beyond that fence,
every living thing that crawls, flies or squats in the mud
wants to kill you and eat your eyes for Jujubes.
We have an indigenous population of humanoids called the Na'vi.
They're fond of arrows dipped in a neurotoxin
that'll stop your heart in one minute.
And they have bones reinforced with naturally occurring carbon fiber.
They are very hard to kill.
As head of security, it is my job to keep you alive.
I will not succeed.
Not with all of you.
If you wish to survive,
you need to cultivate a strong mental attitude.
You've got to obey the rules.
Pandora rules.
Rule number one...
There's nothing like an old-school safety brief to put your mind at ease.
Excuse me. Excuse me. Jake! You're Jake, right? Tom's brother.
Wow! You look just like him.
Sorry, I'm Norm. Spellman. I went through avatar training with him.
...into the bio-lab.
We're gonna spend a lot of time up here. Hey! How you doing? Norm, avatar driver.
- Hi.
- Hey.
Link... Here's the link room right here.
This is where we're connecting to the avatar.
Me and Norm are here to drive
these remotely controlled bodies called avatars.
And they're grown from human DNA mixed with the DNA of the natives.
- Hey. Welcome.
- Hey.
- Welcome to Pandora. Good to have you.
- Thanks.
Damn! They got big.
Yeah, they fully mature on the flight out.
So the proprioceptive sims seem to work really well.
Yeah, they've got great muscle tone.
It'll take us a few hours to get them decanted,
but you guys can take them out tomorrow.
There's yours.
Hey. Dr. Norm Spellman.
- Dr. Max Patel. Great to meet you.
- Good to meet you, yeah.
Looks like him.
No, it looks like you.
This is your avatar now, Jake.
And the concept is that every driver is matched to his own avatar,
so that their nervous systems are in tune,
or something.
Which is why they offered me the gig, because I can link with Tommy's avatar,
which is insanely expensive.
Is this right? I just say whatever to the video log?
Yeah, we gotta get in the habit of documenting everything.
You know, what we see, what we feel.
- It's all part of the science.
- And good science is good observation.
Plus it'll help to keep you sane for the next six years.
All right. Whatever.
So...
Well, here I am,
doing science.
They're coming out!
Attention. Drivers coming out of link.
Oh, God.
Where's the lab coat? Where's the lab coat?
Who's got my goddamn cigarette? Guys! What's wrong with this picture?
- Thank you!
- Grace Augustine is a legend.
She's the head of the Avatar Program. She wrote the book,
I mean, literally wrote the book on Pandoran botany.
Well, that's 'cause she likes plants better than people.
Here she is, Cinderella back from the ball.
Grace, I'd like you to meet Norm Spellman and Jake Sully.
Norm. I hear good things about you. How's your Na'vi?
May the All Mother...
...smile upon our first meeting.
Not bad. You sound a little formal.
I studied for five years...
...but there is much to learn.
- Grace? This is Jake Sully.
- Ma'am.
Yeah, yeah. I know who you are, and I don't need you. I need your brother.
You know, the PhD who trained for three years for this mission?
He's dead.
I know it's a big inconvenience for everyone.
- How much lab training have you had?
- I dissected a frog once.
You see? You see? I mean, they're just pissing on us
without even the courtesy of calling it rain.
- I'm going to Selfridge.
- No, Grace,
- I don't think that's a good idea.
- No, man, this is such bullshit!
I'm gonna kick his corporate butt.
He has no business sticking his nose in my department.
Here tomorrow, 0800. Try and use big words.
Scorpion Two-Hotel, Hell's Gate tower. You are cleared for south departure.
Hover taxi, Delta runway. Squawk ident.
- You see that?
- Yes, sir.
No, you didn't. You were looking at the monitor.
I love this putter, Ronnie! I love this putter.
Parker, you know, I used to think it was benign neglect,
but now I see that you're intentionally screwing me.
Grace, you know, I enjoy our little talks.
I need a researcher. Not some jarhead dropout.
Well, actually, I thought we got lucky with him.
- Lucky?
- Yeah.
How is this in any way lucky?
Lucky your guy had a twin brother,
and lucky that brother wasn't some oral hygienist or something.
A Marine we can use.
I'm assigning him to your team as security escort.
The last thing I need is another trigger-happy moron out there!
Look, look, you're supposed to be winning the hearts
and the minds of the natives.
Isn't that the whole point of your little puppet show?
If you look like them and you talk like them,
then they'll start trusting us.
We build them a school, we teach them English,
but after, what, how many years?
Relations with the indigenous are only getting worse.
Yeah, that tends to happen when you use machine guns on them.
Right. Come here.
I can't... I can't...
This is why we're here. Unobtanium.
Because this little gray rock sells for 20 million a kilo.
That's the only reason. It's what pays for the whole party.
It's what pays for your science.
Now, those savages are threatening our whole operation,
we're on the brink of war,
and you're supposed to be finding a diplomatic solution.
So use what you've got, and get me some results.
So, how much link time have you logged?
- About 520 hours.
- That's good.
You're in there. You're here. How much have you logged?
Zip. But I read a manual.
Tell me you're joking.
This is cool.
Let's go.
Don't. I got this.
So you just figured you'd come out here,
to the most hostile environment known to man,
with no training of any kind, and see how it went?
What was going through your head?
Maybe I was sick of doctors telling me what I couldn't do.
- Biometrics are good.
- Link three is ready.
Keep your arms in, hands in, head down.
Down. Just relax and let your mind go blank.
That shouldn't be hard for you.
Kiss the darkest part of my lily white...
Initiate link.
Run sequence unit three. Go.
Launching.
I have the first congruency.
- That's a gorgeous brain. Nice activity.
- Go figure.
Phase-Iock 40%.
All right. Going in.
I'm going in in four.
Phase-Iock 99%. Link is stable.
He's in. Jake, can you hear me? Can you hear me, Jake?
Pupillary reflex is good.
Pinna response normal. How you feeling, Jake?
Hey, guys.
Welcome to your new body, Jake.
Good!
Yeah, we're gonna take this nice and easy, Jake.
- And touch your thumb to your fingers.
- Yeah.
- Thumb to your fingers.
- No problem.
That's good. I can see you can remember that one.
- Got it.
- Well, if you want to sit up,
- that's fine.
- Okay, good. Just take it
nice and slow, Jake. Good. Okay, well, no truncal ataxia, that's good.
Are you feeling lightheaded or dizzy at all? You're wiggling your toes!
- Good. Good, Jake.
- That's great.
Distal motor control is good. Good, Jake.
Are you feeling any numbness or pain?
That's great, Jake. Hold on, now.
Take it easy. Don't get ahead of yourself, okay?
There's a few more sensory motor reflex tests we need to run,
- so take it easy.
- Wait.
- Jake.
- Sit down, Jake.
Jake! Listen to me. Jake!
- I need you to sit down. Jake!
- It's okay.
- Buddy, listen to me.
- It's all good. I got this.
- Jake, you need to sit down right now.
- Guys, get him back on the gurney now.
Listen to me. For your own safety, you need to sit down.
You need time to adjust to the avatar... Whoa! Jake!
- God, Jake, watch your tail.
- Yeah!
Sedate! Sedate him! A thousand milligrams of Supitocam! Stat!
Guys! Guys! Whoa! Whoa!
By the numbers.
- Jake. Come on.
- Jake! Listen to me.
You're not used to your avatar body.
- This is dangerous.
- This is great.
- Jake? Jake, listen to me.
- Come on. They're gonna put you out.
- Norm, sit down.
- No, no. I gotta get out of these leads.
God damn it! Bring them home!
- Norm! Do not leave control!
- You're not ready for it!
- Oh, come on, you ain't got no skills.
- So close!
I don't even have to play defense on it.
Hey, guys. Hey.
- It's okay, I'll get him.
- Jake, you have to come back!
Jake! Jake! Excuse me.
- Watch it!
- Sorry!
Come on!
Jake! We're not supposed to be running!
- Jeez! Sorry.
- Watch it!
Hey, Marine!
Damn.
- Grace?
- Well, who'd you expect, numbnuts?
Think fast.
Motor control's looking good.
Come on, everybody, quiet down! All right, gang, lights out.
Come on, Louise, chop-chop.
Hey, hey, hey!
Don't play with that, you'll go blind.
That's kind of freaky.
Come on. Scat.
Good night.
Lights out! See you at dinner, kiddies.
Welcome back.
- You okay? You all right?
- Yeah, I'm okay.
I'm Trudy. I fly all the science sorties. And this here is my baby.
Hold on a second.
Hey, Wainfleet! Get it done!
- We bounce at zero-nine.
- Yeah, I'm on it, capitaine!
Vine strike's still loose.
You guys are packing some heavy gear.
Watch it!
Yeah, that's 'cause we're not the only thing flying around out there.
Or the biggest.
I'm gonna need you on a door gun. I'm a man short.
I thought you'd never ask.
There's your man. See you on the flight line.
You wanted to see me, Colonel?
This low gravity'll make you soft.
You get soft,
Pandora will shit you out dead with zero warning.
I pulled your record, Corporal.
Venezuela, that was some mean bush.
Nothing like this here, though.
You got some heart, kid, showing up in this neighborhood.
I figured it's just another hellhole.
I was First Recon myself.
A few years ahead of you. Well, maybe more than a few.
Three tours Nigeria, not a scratch.
I come out here?
Day one. Think I felt like a shavetail louie?
Yeah. They could fix me up, if I rotated back.
Yeah, and make me pretty again. But you know what? I kind of like it.
It reminds me every day what's waiting out there.
The Avatar Program is a bad joke. Bunch of limp-dick science majors.
However, it does present an opportunity both timely and unique.
- Clear!
- Clear!
A recon gyrene in an avatar body. That's a potent mix.
Give me the goose bumps.
Such a Marine could provide the intel I need,
right on the ground.
Right in the hostiles' camp.
Look, Sully. I want you to learn these savages from the inside.
I want you to gain their trust.
I need to know how to force their cooperation
or hammer them hard if they won't.
- Am I still with Augustine?
- On paper.
Yeah, you walk like one of her science pukes, you quack like one,
but you report to me.
Can you do that for me, son?
Hell, yeah, sir.
Well, all right, then.
Son, I take care of my own.
You get me what I need,
I'll see to it you get your legs back when you rotate home.
Your real legs.
That sounds real good, sir.
- Link's ready!
- Phase-Iock 40%.
Just keep your mouth shut and let Norm do the talking.
I have five congruencies. Phase-Iock 90%.
Link three ready.
All right, I'm going in.
Sturmbeest herd coming up on your right.
Got it! Thanks.
Looks like a bull, a dozen cows and some juveniles.
Shut it down. We're gonna stay a while.
- Norm! Your pack.
- Pack.
Stay with the ship. One idiot with a gun is enough.
You the man, Doc.
Prolemuris. They're not aggressive.
Relax, Marine. You're making me nervous.
So, how will they know we're here?
I'm sure they're watching us right now.
This was our school.
Now it's just... storage.
The kids were so bright.
Eager to learn.
They picked up English faster than I could teach it.
So, we'll take a couple of these Ph monitors...
...and a soil probe.
That little yellow case back there. The old microscope.
Here.
Oh, yeah. I love this one.
The stingbats knocked them down.
I keep hoping someone will come back in and read them.
Why don't they come back?
The Omaticaya... learned as much about us as they needed to.
What happened here?
Are you going to help us with this gear? We've got a lot to do.
- Keep moving, Norm.
- Keep up, guys!
- And here I go.
- Scanning.
Wow! It's that fast?
- Amazing, isn't it?
- Yeah.
So, that is signal transduction from this root
to the root of the tree next to it. So, we should take a sample.
Okay. Sample.
You know, it's probably electrical, based on the speed of the reaction.
Norm, you've contaminated the sample with your saliva.
Right.
So, here I go.
Don't shoot. Don't shoot, you'll piss him off.
It's already pissed off.
Jake, that armor's too thick. Trust me.
It's a territorial threat display. Do not run, or he'll charge.
So, what do I do, dance with it?
Just hold your ground.
Yeah? Come on! What you got?
Oh, yeah. Who's bad? That's right.
Yeah, that's what I'm talking about, bitch.
That's right, get your punk ass back to mommy.
Yeah? Yeah, you got nothing. You keep running.
Yeah, and why don't you bring back some of your friends, huh?
Oh, shit.
So what about this one? Run? Don't run? What?
Run! Definitely run!
I'm gonna have to call it, guys.
We're not allowed to run night ops. Colonel's orders.
I'm sorry, Doc, he's just gonna have to hang on till morning.
He won't make it till morning.
I don't have all goddamn night.
Come on! Come on!
Hey, wait. Don't!
Great.
Look, I know you probably don't understand this,
but thank you.
Thank you.
That was pretty impressive.
I would have been screwed if you hadn't come along. It was...
Hey, wait a second. Hey, where you going?
Wait up!
Just... Hey, slow down.
Look, wait up, I just wanted to say thanks for killing those things.
- Damn!
- Don't thank.
You don't thank for this.
This is sad. Very sad only.
Okay. Okay. I'm sorry.
Whatever I did, I am sorry.
All this is your fault. They did not need to die.
My fault? They attacked me. How am I the bad guy?
Your fault!
- Your fault!
- Easy. Easy.
You're like a baby. Making noise, don't know what to do.
Easy.
Fine. Fine.
If you love your little forest friends,
why not let them just kill my ass?
What's the thinking?
- Why save you?
- Yeah. Yeah, why save me?
You have a strong heart.
No fear.
But stupid! Ignorant like a child.
Well, if I'm like a child, then...
Look, maybe you should teach me.
Sky People cannot learn. You do not See.
Well, then teach me how to See.
- No one can teach you to See.
- Whoa.
Look, come on, can't we talk?
Say, where'd you learn to speak English? Dr. Augustine's school?
You're like a baby.
I need your help.
You should not be here.
- Okay, take me with you.
- No! Go back.
No.
Go back.
No!
What...
What are they?
Seeds of the Sacred Tree.
Very pure spirits.
What was that all about?
Come.
Come!
Where are we going?
Come.
What's your name?
Shit!
Okay.
Calm people, calm.
What are you doing, Tsu'tey?
These demons are forbidden here.
There has been a sign.
This is a matter for the Tsahik.
Bring him.
What's going on?
Wait.
What's happening?
Hey!
Father...
...I see you.
This creature...
...why do you bring him here?
I was going to kill him...
...but there was a sign from Eywa.
I have said...
...no dreamwalker will come here.
What's he saying?
His alien smell fills my nose.
Hey, what's he saying?
My father is deciding whether to kill you.
Your father. It's nice to meet you, sir.
Step back!
I will look at this alien.
That is Mother.
She is Tsahik. The one who interprets the will of Eywa.
Who's Eywa?
What are you called?
Jake Sully.
- Why did you come to us?
- I came to learn.
We have tried to teach other Sky People.
It is hard to fill a cup which is already full.
Well, my cup is empty, trust me.
Just ask Dr. Augustine. I'm no scientist.
What are you?
I was a Marine. A...
A warrior of the Jarhead clan.
A warrior! I could kill him easily!
No!
This is the first warrior dreamwalker...
...we have seen.
We need to learn more about him.
My Daughter...
...you will teach him our way...
...to speak and walk as we do.
Why me? That's not fair...
It is decided. My daughter will teach you our ways.
Learn well, Jakesully.
Then we will see if your insanity can be cured.
Good evening.
Please don't get up.
Excuse me.
Sorry.
Hey, how you doing?
Thank you.
You know, I don't even know your name.
Neytiri te Ckaha Mo'at'ite.
Neytiri te Ckaha Mo'at'ite.
Again, a whole lot slower?
Neytiri.
Neytili.
Neytiri.
Neytiri.
It's nice to meet you, Neytiri.
It's nice.
- Jake. Jake!
- He's in alpha.
- He's coming out right now.
- Jake. Jake!
Come on back, kid. Come on. That's it.
There you go. There you go, there you go.
You're okay. You're okay.
Damn! You were dug in like a tick.
- Is the avatar safe?
- Yeah, Doc.
And you are not gonna believe where I am.
The last thing we see is this Marine's ass
disappearing into the brush with this angry thanator coming after him.
- Hey, it's not something you can teach.
- That is awesome.
You know, for reasons I cannot fathom,
the Omaticaya have chosen you. God help us all.
"Jarhead clan"?
- And it worked?
- Hey, I'm practically family.
They're gonna study me. I have to learn to be one of them.
That's called taking the initiative, son.
- I wish I had 10 more like you.
- Look, Sully. Sully.
Just find out what the blue monkeys want.
You know, I mean, we try to give them medicine, education, roads.
But no, no, no, they like mud.
And that wouldn't bother me, it's just that they're...
Hey, can you... Can somebody just... Sector 12.
Okay, go, go, go, stop. Stop...
Rich, stop! That's... Jesus!
Their damn village happens to be resting on the richest unobtanium deposit
within 200 klicks in any direction. I mean, look at all that cheddar!
- Well, who gets them to move?
- Guess.
- What if they won't go?
- I'm betting that they will.
Okay, okay, okay, okay, hey. Look. Look.
Killing the indigenous looks bad,
but there's one thing that shareholders hate more than bad press,
and that's a bad quarterly statement. I didn't make up the rules.
So just find me a carrot that'll get them to move,
otherwise it's gonna have to be all stick. Okay?
You got three months. That's when the 'dozers get there.
Well, we're wasting time.
I like this guy.
- Guys, right now...
- Okay, let's run through them again.
Mo'at. Dragon lady.
- Eytucan.
- Eytukan. He's the clan leader.
But she's the spiritual leader. Like a shaman.
Got it.
- T'su'tey.
- Tsu'tey.
- Tsu'tey.
- He'll be the next clan leader.
- Neytiri.
- She'll be the next Tsahik.
They become a mated pair.
- So who's this Eywa?
- Who's Eywa?
Only their deity. Their goddess, made up of all living things.
Everything they know!
You'd know this if you had any training whatsoever.
Who's got a date with the chief's daughter?
Come on. That's...
Knock it off. It's like kindergarten around here.
Neytiri was my best student.
She and her sister, Sylwanin.
Just amazing girls.
I got a date with Sylwanin too.
She's dead.
Let's go. Village life starts early.
Don't do anything unusually stupid.
Easy, boy.
Pale is female.
Okay. Easy, girl.
That is shahaylu. The bond.
Feel her.
Feel her heartbeat. Her breath.
Feel her strong legs.
You may tell her what to do.
Inside.
For now, say where to go.
Forward!
- You should go away.
- No, you'd miss me.
I knew you could speak English.
This alien will learn nothing...
...a rock sees more...
...look at him.
Again.
If you want to hit this thing, it's gonna be complicated.
Your scan doesn't show the internal structure.
There's an outer row of columns.
Real heavy duty. There's a secondary ring here,
and an inner ring. There's a core structure like a spiral.
That's how they move up and down.
We're gonna need accurate scans on every column.
Roger that.
What else can you tell us about the structure?
I'm guessing this secondary ring, that's also load-bearing.
- So where are we going?
- Getting out of Dodge.
I'm not about to let Selfridge and Quaritch micro-manage this thing.
There's a mobile link up at Site 26 we can work out of,
way up in the mountains.
The Hallelujah Mountains?
- That's right.
- Are you serious?
- Yeah.
- Yes!
The legendary floating mountains of Pandora. Heard of them?
We're getting close.
Yeah, look at my instruments.
Yep. We're in the Flux Vortex.
We're VFR from here on.
What's VFR?
Means you gotta see where you're going.
- You can't see anything.
- Exactly. Ain't that a bitch?
Oh, my God.
You should see your faces.
Thank you for flying Air Pandora.
So what does hold them up?
Grace explained it to me.
Some kind of maglev effect.
Because unobtanium is a superconductor... or something.
Welcome to camp.
- So, this is my bunk.
- This stuff is nasty.
- Norm, go under.
- All right.
- Grace didn't miss a thing.
- Trudy, you'll take the top one.
She knew I was talking to the Colonel.
But I had what she needed, a way back in with the clan,
so she's playing nice.
All right. Jake, hang a left. You'll be in the link at the end.
Unit one. Beulah. She's the least glitchy.
Holy shit!
Do not look in her eye.
Ikran is not horse.
Once shahaylu is made,
ikran will fly with only one hunter in the whole life.
To become taronyu, hunter,
you must choose your own ikran and he must choose you.
- When?
- When you are ready.
Okay. This is video log 12.
Time's 2132.
Do I have to do this now? I really need to get some rack.
No, now. When it's fresh.
Okay, location, shack,
and the days are starting to blur together.
The language is a pain, but, you know,
I figure it's like field-stripping a weapon. Just repetition, repetition.
- Navi.
- "Nari."
- Nari.
- "Narrri"!
Narrri!
Txurni'ul. Stronger.
Neytiri calls me skxawng. It means moron.
This is a very important part of it.
- Norm's attitude has improved lately.
- I see you. I see you.
But it's not just, "I'm seeing you in front of me,"
it's "I see into you. I See you."
It's good he's back on board, but he thinks I'm a skxawng, too.
"I'm accepting you. I understand you." So you gotta get this, okay?
I gotta run! Okay? Let's go.
My feet are getting tougher. I can run farther every day.
I have to trust my body to know what to do.
Yeah! Check it out!
Oh, crap!
Every day it's reading the trails, the tracks at the waterhole,
the tiniest scents and sounds.
She's always going on about the flow of energy, the spirits of animals.
I really hope this tree-hugger crap isn't on the final.
This isn't just about eye-hand coordination out there, you know.
You need to listen to what she says.
Try to see the forest through her eyes.
Excuse me. This is my video log here.
With Neytiri, it's learn fast or die.
You gotta be kidding me.
I talked Mo'at into letting Grace into the village.
Look how big you are.
It's the first time since her school was closed down.
You are so pretty.
Come on, Marine.
I'm trying to understand this deep connection
the people have to the forest.
She talks about a network of energy
that flows through all living things.
She says all energy is only borrowed,
and one day you have to give it back.
You were in 16 hours today.
You're still losing weight.
No, you don't.
- I gotta get some sleep.
- Come back here.
Bon appetit.
Today I made a kill.
And we ate it. At least, I know where that meal came from.
Other body. You need to take care of this body. Okay?
- Get it? Let's eat it.
- Yeah, yeah.
Here. I'll make it easy for you.
Give it to me.
- You look like crap.
- Thank you.
You're burning way too hard.
Get rid of this shit.
And then you can lecture me.
Now, I'm telling you, as your boss,
and as someone who might even consider being a friend someday
to take some down time.
Eat this, please.
Trust me, I... learned the hard way.
What did happen at the school, Grace?
Neytiri's sister, Sylwanin, stopped coming to school.
She was angry about the clear-cutting.
And one day, she and a couple of other young hunters came running in
all painted up.
They had set a bulldozer on fire.
I guess they thought I could protect them.
The troopers pursued them to the school.
They killed Sylwanin in the doorway.
Right in front of Neytiri.
And then shot the others.
I got most of the kids out.
But they never came back.
I'm sorry.
A scientist stays objective.
We can't be ruled by emotion.
But I put 10 years of my life into that school.
They called me sa'nok.
Mother.
Mother.
That kind of pain reaches back through the link.
I see you...
...Brother
...and thank you.
Your spirit goes with Eywa.
Your body stays behind...
...to become part of The People.
A clean kill.
You are ready.
Learning to ride an ikran, we call them banshees,
is the test every young hunter has to pass.
But to do that, you gotta go where the banshees are.
Oo-rah.
Now what?
Jakesully will go first.
Now you choose your ikran. This you must feel inside.
If he also chooses you, move quick like I showed.
You will have one chance, Jake.
How will I know if he chooses me?
He will try to kill you.
Outstanding.
Let's dance.
That moron's going to die.
Don't be afraid, warrior.
Make the bond!
No!
Jake!
Shahaylu, Jake.
Shahaylu!
Stop!
Yeah, that's right. You're mine. Huh?
First flight seals the bond. You cannot wait.
- Think, "Fly!"
- Fly?
God damn!
Oh, shit!
Shut up and fly straight!
That's it. Bank left!
Level out! That's it.
Jakesully!
Hey!
Let's go!
Yeah, baby, I got this!
Oh, shit!
I may not be much of a horse guy, but I was born to do this.
Yeah!
- I came like this. This you.
- Yeah, yeah.
- I turn. I feel the wind. I turn very strong.
- Look, yeah, see, I banked so hard...
The Tree of Souls.
It's their most sacred place.
See the Flux Vortex in these false color images?
Yeah, that's what messes up my instruments.
There is something really interesting going on in there biologically.
I would die to get samples.
Outsiders are strictly forbidden.
You lucky swine.
Hell, yeah!
Hell, yeah!
I was a stone-cold aerial hunter. Death from above.
Only problem is, you're not the only one.
Dive!
Go, go!
Follow me!
Our guys call it a Great Leonopteryx.
It is Toruk. Last Shadow.
Yeah, right. It's the last one you ever see.
My grandfather's grandfather was Toruk Macto.
Rider of Last Shadow.
He rode this?
Toruk chose him.
It has only happened five times since the time of the First Songs.
- That's a long time.
- Yes.
Toruk Macto was mighty.
He brought the clans together in a time of great sorrow.
All Na'vi people know the story.
Everything is backwards now. Like out there is the true world
and in here is the dream.
It's hard to believe it's only been three months.
I can barely remember my old life.
I don't know who I am anymore.
Haven't gotten lost in the woods, have you?
Your last report was more than two weeks ago.
I'm starting to doubt your resolve!
The way I see it, it's time to terminate the mission.
No, I can do this.
You already have.
You give me good, usable intel.
This Tree of Souls place.
Yeah, I got them by the balls with that when this turns into a shit fight
which it will. Yeah.
Now it's time to come in.
By the way,
you gonna get your legs back.
Yeah. I got your corporate approval. It's a done deal.
Gonna have you on a shuttle tonight.
I'm a man of my word.
I gotta finish this.
There's one more thing.
Ceremony. It's the final stage of becoming a man.
If I do it, I'm one of them.
And they'll trust me.
And I can negotiate the terms of their relocation.
Well, then, you'd better get it done, Corporal.
The Na'vi say that every person is born twice.
The second time is when you earn your place among The People forever.
You are now a son of the Omaticaya.
You are part of The People.
Come. Come.
This is a place for prayers to be heard.
And sometimes answered.
We call these trees Utraya Mokri.
The Tree of Voices.
The voices of our ancestors.
I can hear them.
They live, Jake,
within Eywa.
You are Omaticaya now.
You may make your bow from the wood of Hometree.
And you may choose a woman.
We have many fine women.
Ninat is the best singer.
But I don't want Ninat.
Beyral is a good hunter.
Yeah, she is a good hunter.
I've already chosen.
But this woman must also choose me.
She already has.
I am with you now, Jake.
We are mated for life.
What the hell are you doing, Jake?
Ma Jake!
Don't forget your phase integration.
- Jake!
- No, no, the middle button.
- You gotta eat something.
- Yeah, there you go.
Jake! Jake. Wake up! Jake, please!
Don't make me force-feed a cripple.
Grace, I don't want... Hey!
Jake!
Okay.
Here. I'm done. Let's go.
And when was the last time you took a shower?
- I don't need a shower.
- Jesus, Marine.
Jake!
Jake! Wake up! Jake! Wake up!
Hey!
Stop! Stop!
- Jake!
- Go back, stop!
Hey, boss.
Hey!
- What?
- I got a native
doing the funky chicken here. He's blocking my blade.
Well, keep going. He'll move.
These people have to learn that we don't stop. Come on, go, go, go.
Stop! Hey!
Go! Go!
There, see? He moved.
Dude, dude. Whoa, dude! Dude, no!
I'm blind.
- Jake!
- Neytiri!
Here, come on!
Freeze it right there.
Scale up. Enhance.
Son of a bitch.
Unbelievable.
- Get me a pilot.
- Yes, sir.
Tsu'tey will lead the war party.
Stop please!
This will only make it worse.
You do not speak here!
We will strike them in the heart.
Tsu'tey! Don't do this.
- You!
- Listen. Brother...
- You mated with this woman?
- Oh, shit.
Is this true?
We are mated before Eywa. It is done.
Brother, please.
Do not attack the Sky People. Many Omaticaya will die if you do.
You are not my brother!
And I am not your enemy!
The enemy is out there, and they are very powerful!
Go! Go! Go!
- I can talk to them.
- No more talk.
Tsu'tey!
I am Omaticaya. I am one of you.
And I have the right to speak.
I have something to say...
...to all of you.
The words are like stones in my heart.
Sir, I'm sorry. No, no, no! Hold on!
You can't interrupt a link in progress!
It's very dangerous!
Grace!
Oh, no.
- Wait!
- Stay down, sir.
Okay. Look...
I was sent here to...
You see?
It is a demon in a false body.
- Are you out of your goddamn mind?
- You crossed the line.
Wheel this meat out of here.
Jake! What the hell is going on here?
You let me down, son.
So, what,
you find yourself some local tail
and you just completely forget what team you're playing for?
Parker, there is time to salvage the situation.
- Parker...
- Shut your pie hole!
Or what, Ranger Rick? You gonna shoot me?
- I could do that.
- You need to muzzle your dog.
Yeah, can we just take this down a couple of notches, please?
You say you want to keep your people alive?
You start by listening to her.
Those trees were sacred to the Omaticaya
- in a way you can't imagine.
- You know what?
You throw a stick in the air around here,
it's gonna land on some sacred fern,
- for Christ's sake!
- I'm not talking
about some kind of pagan voodoo here. I'm talking about something real,
something measurable in the biology of the forest.
Something measurable in the biology of the forest.
Which is what, exactly?
What we think we know
is that there is some kind of electrochemical communication
between the roots of the trees, like the synapses between neurons.
And each tree has ten-to-the-fourth connections to the trees around it.
And there are ten-to-the-twelfth trees on Pandora.
Which is a lot, I'm guessing.
It's more connections than the human brain.
Get it? It's a network.
It's a global network, and the Na'vi can access it.
They can upload and download data. Memories.
At sites like the one you just destroyed.
Yes!
What the hell have you people been smoking out there?
They're just goddamn trees!
- You need to wake up, Parker.
- No. You need to wake up.
The wealth of this world isn't in the ground. It's all around us.
The Na'vi know that, and they are fighting to defend it.
If you want to share this world with them, you need to understand them.
I'd say we understand them just fine, thanks to Jake here.
Hey, Doc, come take a look.
They're not gonna give up their home.
They're not gonna make a deal.
For what? Lite beer?
And blue jeans?
There's nothing that we have that they want.
Everything they sent me out here to do is a waste of time.
They're never gonna leave Hometree.
So, since a deal can't be made, I guess things get real simple.
Jake, thanks. I'm getting all emotional.
I might just give you a big wet kiss.
Talk to me, Lyle.
It looks like they hit it with banshees first.
See the angle's steep?
They set the ampsuit on fire.
Driver's toast.
The rest of the squad?
Six bodies. That's all of them.
The equipment's totaled.
Jesus Christ.
I'll do it with minimal casualties to the indigenous.
I'll drive them out with gas first.
It'll be humane.
More or less.
All right, let's pull the trigger.
Come on, people. Let's get it packed, let's go.
You know, they never even wanted us to succeed.
They bulldozed a sacred site on purpose to trigger a response.
Just fabricating this war to get what they want.
This is how it's done.
When people are sitting on shit that you want,
you make them your enemy. Then you're justified in taking it.
Quaritch is rolling the gunships. He's gonna hit Hometree.
My God.
- Dr. Augustine! You cannot be up here!
- Back off!
Parker. Wait. Stop. These are people you're about to...
- No. No, no, no, no.
- I said back off!
They're fly-bitten savages that live in a tree!
All right? Look around!
I don't know about you, but I see a lot of trees! They can move!
- Can you guys just please...
- Yes, sir.
There are families in there. There are children. Babies.
Are you gonna kill children?
You don't want that kind of blood on your hands. Believe me.
Just let me try to talk them out.
They trust me.
Calibrate fast. We're going in, right now.
Calibrating three and four.
- Run sequence.
- Initiating. Thirty seconds.
Listen to me. You've got one hour.
Unless you want your girlfriend in there when the ax comes down,
you get them to evacuate. One hour.
Father!
Mother!
Eytukan, I have something to say.
Listen!
Speak, Jakesully.
A great evil is upon us...
The Sky People are coming...
...to destroy Hometree.
Look, tell them they're gonna be here soon.
You have to leave, or you're gonna die.
Are you certain of this?
Look, they sent me here to learn your ways
so one day I could bring this message and that you would believe it.
What are you saying, Jake? You knew this would happen?
Yes.
Look, at first it was just orders,
and then everything changed.
Okay? I fell in love.
I fell in love with the forest and with the Omaticaya people.
And with you.
- I trusted you.
- With you. With you.
- I trusted you!
- Trust me now, please.
You will never be one of The People!
- I shouldn't have...
- We tried to stop them!
Neytiri, please! Please.
Bind them.
Leave now!
You have to go. They're coming!
Time on target, one mike.
Copy. We have a visual.
Roger that. Stay on heading 030.
Roger, 030.
- Run to the forest!
- They're coming!
- They will destroy this place.
- Neytiri, you must go now!
Run to the forest! Run!
Run! Run!
Have no fear.
No! God damn it, run!
Take the ikran...
...attack from above.
That is one big damn tree.
Well, well, well. I'd say diplomacy has failed.
All right, people, let's get this done!
I want every gas round you got right in the front door.
Roger. CS.40's going hot.
- Fire.
- Firing.
Bingo. Mighty good shooting, ace.
Sir, they've opened fire.
You've got to be kidding me!
These dumb bastards ain't getting the message.
All right, let's turn up the heat.
- Switch incendiaries!
- Switching incendiaries.
Fire.
No!
Get everyone to the forest.
And that's how you scatter the roaches.
Neytiri!
We gotta move! He's gonna blow the columns!
My God!
- Mo'at! No!
- Lf you are one of us,
help us.
All call signs, switch missiles.
Give me HE's at the base of the west columns.
This way!
Rider section, switch missiles.
- One's good.
- Two's rocks up.
- Three's up.
- Yeah, baby, get some!
Charlie Oscar, Gunrunner standing by.
- Bring it down.
- Cleared hot.
Come on, Grace, move!
Down! Head down!
Come on, come on! Down!
- Solid hits.
- Solid rocks on target.
Screw this.
Hey! What the hell are you doing?
I didn't sign up for this shit!
Repeat. Ripple fire.
Go! Go! Go!
No, no, get back! Back!
Come on! Come on, move! Move!
That's good work, people. First round's on me tonight.
Let's boogie.
Dragon coming left, heading home.
Gunrunner coming left.
- Thunder copies.
- Rider section copies.
Father!
Daughter...
take... my... bow.
Protect The People.
Neytiri!
- I'm sorry. I'm sorry.
- Get away.
Get away!
Get away from here!
Never come back!
Pull the plug.
- No, you can't do that!
- You can't do that!
- Calm down! Calm down!
- No! Please!
I was a warrior who dreamed he could bring peace.
Sooner or later, though, you always have to wake up.
Let's go!
Put him down!
You murderer!
What's going on, brother? Long time no see.
Hey.
Personally, I don't feel these tree-hugging traitors deserve steak.
They get steak? That's bullshit. Let me see that.
Yeah. You know what that is. Down.
- Trudy!
- All the way down.
Max!
Trudy, fire up the ship! Go!
Here.
- Clear. Come on.
- Here you go.
Max, stay here. I need someone on the inside I can trust.
Okay. Go.
Clear.
Come on, baby.
Colonel? Sir? I got a situation here.
It's Samson 1-6. Unauthorized engine start.
Three!
Come on!
Mask on!
Gas, gas, gas!
I'm taking fire! Let's go!
Grab my hand! Come on, we're in. Let's go!
Come on, let's go! Let's go, go!
Colonel!
- Yeah! Yeah!
- All right! Yes!
- Crap.
- Everybody all right back there?
Oh, yeah, baby!
- Norm, you good?
- Yeah!
This is gonna ruin my whole day.
- Grace is hit!
- What?
- Get the trauma kit.
- Trauma kit!
- Keep the pressure on, Grace.
- Trauma kit's forward, on the bulkhead.
- Hang on, Grace.
- Doesn't matter. It's fine.
- You're good to go.
- Take it up!
Hold on. I'm pulling pitch.
You're clear!
Just keep going north. Get us deep in the mountains.
Copy that.
- Norm, you all good up there?
- Yep! Still here.
Well, at least they can't track us up here. Not this far into the Vortex.
It's strongest at the Tree of Souls, right?
Yeah.
Good. 'Cause that's where we're going.
Ouch.
You big baby.
We're moving.
I'm gonna get you some help, Grace.
I'm a scientist, remember?
I don't believe in fairy tales.
The People can help you.
I know it.
Why would they help us?
The People say Eywa will provide.
With no home, no hope,
there was only one place they could go.
Link's running.
- What's the plan here, Jake?
- There's no plan.
Tsu'tey is Olo'eyktan now. He's not gonna let you near that place.
I gotta try.
Launching.
Outcast.
Betrayer.
Alien.
I was in the place the eye does not see.
I needed their help, and they needed mine.
But to ever face them again,
I was gonna have to take it to a whole new level.
Sometimes your whole life boils down to one insane move.
There's something we gotta do.
You're not gonna like it.
The way I had it figured, Toruk is the baddest cat in the sky.
Nothing attacks him.
Easy, boy.
So why would he ever look up?
But that was just a theory.
Toruk Macto?
I See you.
I See you.
I was afraid, Jake.
For my people.
I'm not anymore.
Tsu'tey, son of Ateyo...
...I stand before you...
...ready to serve the Omaticaya people.
You are Olo'eyktan, and you are a great warrior.
I can't do this without you.
Toruk Macto,
I will fly with you.
My friend is dying.
Grace is dying.
I beg the help of Eywa.
Look where we are, Grace.
I need to take some samples.
The Great Mother may choose to save all that she is
in this body.
Is that possible?
She must pass through the eye of Eywa and return.
But, Jakesully,
she is very weak.
Hang on, Grace. They're gonna fix you up.
Hear us please, All Mother.
Eywa, help her.
Take this spirit into you...
...and breathe her back to us.
Let her walk among us...
...as one of The People.
Jake.
Grace.
I'm with her, Jake.
She's real!
Grace? Grace, please. Grace!
What's happening?
What's happening?
Grace!
Grace!
What's happening?
Did it work?
Her wounds were too great. It was not enough time.
She is with Eywa now.
With your permission, I will speak now.
You would honor me by translating.
The Sky People have sent us a message
that they can take whatever they want
and no one can stop them.
Well, we will send them a message.
You ride out as fast as the wind can carry you.
You tell the other clans to come.
You tell them Toruk Macto calls to them.
And you fly now with me!
My brothers! Sisters!
And we will show the Sky People
that they cannot take whatever they want,
and that this,
this is our land!
Yah!
Yah!
Yah!
We rode out to the four winds.
To the horse clans of the plain.
Back to the stars!
To the ikran people ofthe Eastern Sea.
For our children's children!
When Toruk Macto called them, they came.
Yah!
Everyone on this base, every one of you,
is fighting for survival.
That's a fact!
There's an aboriginal horde out there massing for an attack.
Now, these orbital images tell me
that the hostiles' numbers have gone from a few hundred
to well over 2,000 in one day.
And more are pouring in.
In a week's time, there could be 20,000 of them.
At that point, they will overrun our perimeter.
Well, that's not gonna happen!
Our only security lies in pre-emptive attack.
We will fight terror with terror.
Now, the hostiles believe that this mountain stronghold of theirs
is protected by their...
Their deity.
And when we destroy it,
we will blast a crater in their racial memory so deep
that they won't come within 1,000 klicks of this place ever again.
And that, too, is a fact.
Yeah! Yeah.
Jake, it's crazy here. It's full mobilization. They're rigging the shuttle as a bomber.
They've got these huge pallets of mine explosives.
It's for some kind of shock-and-awe campaign.
Fricking daisy cutters!
Quaritch has taken over. He's rolling, and there's no stopping him.
- When?
- 0600 tomorrow.
- Max! Max!
- I gotta go.
We're screwed!
And I was hoping for some sort of tactical plan
that didn't involve martyrdom.
We're going up against gunships with bows and arrows.
I have 15 clans out there.
That's over 2,000 warriors.
Now, we know these mountains. We fly them. You fly them. They don't.
Their instruments won't work up here. Missile tracking won't work.
They'll have to fire a line of sight.
If they bring the fight to us, then we have the home-field advantage.
You know he's gonna commit that bomber straight to the Tree of Souls.
Yeah, I know.
If they get to the Tree of Souls, it's over.
That's their direct line to Eywa, their ancestors.
It'll destroy them.
Then I guess we'd better stop him.
I'm probably just talking to a tree right now.
But if you're there, I need to give you a heads-up.
If Grace is with you, look into her memories.
See the world we come from.
There's no green there.
They killed their Mother.
And they're gonna do the same here.
More Sky People are gonna come.
They're gonna come like a rain that never ends.
Unless we stop them.
Look, you chose me for something.
I will stand and fight.
You know I will.
But I need a little help here.
Our Great Mother does not take sides, Jake.
She protects only the balance of life.
It was worth a try.
Yeah! Yeah! That's what I'm talking about!
Yeah! Yeah! That's what I'm talking about, man!
This is Group Leader. We are entering the Flux Vortex.
- Switch to manual flight mode.
- Copy. Manual flight mode.
This is Papa Dragon.
I want this mission high and tight. I want to be home for dinner.
- Suit Team, go.
- All right, ladies, let's bring the pain!
Move, move, move!
Bravo 1-1, move left.
Bravo 1-1 moving left. Watch flank.
- Watch formation. Keep moving.
- Roger that.
Charlie 2-1, watch your spacing.
Copy that. Over.
Eyes up. Check that overhead. And watch those thermal scans.
All call signs, Papa has lead, pushing to target.
Escorts, stay close on my shuttle.
We are gonna lose some paint in here.
Gun crews, keep your head on a swivel.
Make no mistake, people, they're out there.
All right, people, target in sight. Range, four klicks.
Valkyrie 1-6, get your payload ready.
- Copy. Prepare to offload.
- Staff Sergeant, stage the weapon.
Roll it to the ramp! Let's go!
Hold!
Charlie 2-1, got big movement.
- Hold position.
- Hold up, hold up.
- We got movement out there, 500 meters.
- Charlie 2-1, hold position.
Sir, ground has movement! Fast approaching.
- Charlie Oscar, Rider section.
- Firing line!
Targets closing. Range, 400 meters.
- Can't you clean it up?
- No, sir. It's the Flux.
Brother, I'm gonna punch a hole. You follow me through.
All aircraft, weapons free! Weapons free!
Break right. Come around.
Light them up!
Break formation, engage all hostiles.
Yeah! Get some!
Scorpions, pursue and destroy.
Jake! Jake! You copy?
We're falling back! We're getting hammered!
Copy. Get out of there.
That's him. Get after him!
Take him out!
Light her up!
Right there!
You're not the only one with a gun, bitch.
- Keep her in your sights.
- Purging. Feeding the leak.
Arming all pods.
That's it!
Seyzey!
Rogue One is hit. I'm going in.
Sorry, Jake.
Fire.
Tsu'tey! Brother, do you read?
Rogue One, you copy?
Trudy!
Time to target, two minutes.
Valkyrie 1-6, you are cleared and hot.
Copy, Dragon. We are starting our bomb run.
- Arm number one!
- Number one armed!
Ma Jake!
I read you.
- Neytiri!
- Seyzey's dead.
They are very close. They are many.
Do not attack.
Do you read me, Neytiri?
Do not attack!
Fall back now. Get out of there! That's an order!
Neytiri!
I got movement, I got movement.
Hold position. Something's coming.
Bravo 1-1, I got a big seating. Turn screens over.
- We got movement 200 meters.
- Hold your formation.
- Be ready.
- Watch your flanks.
Hundred meters and closing fast.
We gotta get out of here!
- Fall back! Fall back!
- Move! Move! Move!
Fall back! On the run! On the run!
Jake, Eywa has heard you.
Eywa has heard you!
Come on!
Fall back! Move! Move!
Sir! All escorts are down or falling back.
Let's get this done. Valkyrie 1-6, this is Dragon.
- Press to target.
- Copy. Pressing to target.
Stand by to drop, 30 seconds.
On my mark. Two, one, mark.
Drop! Drop! Drop! Go, go, go, go!
Drop! Drop! Drop! Go, go, go, go!
Brace!
It's Sully.
- Mask on!
- Breach alarm!
Come on. Come to papa.
Give it up, Quaritch!
It's all over.
Nothing's over while I'm breathing.
I kind of hoped you'd say that.
Come on!
Hey, Sully, how's it feel to betray your own race?
You think you're one of them?
Time to wake up.
Jake?
Jake.
Jake.
Jake! Ma Jake!
I See you.
I See you.
I See you, Brother.
Are The People safe?
They're safe.
I can't...
I cannot lead The People.
You must lead them... Jakesully.
I'm not officer material.
It is decided.
Now...
...do the duty of Olo'eyktan.
I will not kill you.
It is the way!
And it is good.
I will be remembered.
I fought... with Toruk Macto!
And we were brothers.
And he... was my last shadow.
The aliens went back to their dying world.
Only a few were chosen to stay.
The time of great sorrow was ending.
Toruk Macto was no longerneeded.
Well, I guess this is my last video log.
'Cause whatever happens tonight, either way, I'm...
I'm not gonna be coming back to this place.
Well, I guess I'd better go.
Yeah, I don't want to be late for my own party.
Yeah, it's my birthday, after all.
This is Jake Sully signing off.
Walking through a dream
I see you
My light in darkness breathing hope of new life
Now I live through you and you through me
Enchanting
I pray in my heart that this dream never end
I see me through your eyes
Living through life flying high
Your life shines the way into paradise
So I offer my life
I offer my love, for you
When my heart was never open
And my spirit never free
To the world that you have shown me
But my eyes could not division
All the colours of love and of life ever more
Evermore(I see me through your eyes)
I see me through your eyes(Living through life flying high)
Flying high
Your love shines the way into paradise
So I offer my life as a sacrifice
And live through your love
And live through your life
I see you
I see you
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
