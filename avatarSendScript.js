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

JAKE: When I was lying there in the VA hospital, with a big hole blown through the middle of my life, I started having these dreams of flying.
I was free.
Sooner or later, though, you always have to wake up.
[SIGHS]
[MONITOR BEEPING]
In cryo, you don't dream at all.
It doesn't feel like six years.
More like a fifth of tequila and an ass-kicking.
Tommy was the scientist, not me.
He was the one who wanted to get sh*t light-years out in space
to find the answers.
Are we there yet?
Yeah, we're there, sunshine.
We're there.
AGENT : It's about your brother.
JAKE: So, a week before Tommy's gonna ship out,
a guy with a g*n ends his journey
for the paper in his wallet.
You've been in cryo for five years, nine months and days.
You will be hungry.
You will be weak.
If you feel nausea, please use the sacks...
JAKE: Yeah, Tommy was the scientist.
Me, I'm just another dumb grunt going someplace he's gonna regret.
Up ahead was Pandora.
You grew up hearing about it, but I never figured I'd be going there.
Your brother represented a significant investment.
We'd like to talk to you about taking over his contract.
And since your genome is identical to his, you could step into his shoes, so to speak.
AGENT : It'd be a fresh start on a new world.
AGENT : And the pay is good.
Very good.
Exo-packs on! Let's go!
Exo-packs on!
ASSISTANT: Exo-packs on!
Let's go!
Remember, people, you lose that mask, you're unconscious in seconds, you're dead in four minutes!
Let's nobody be dead today!
Looks very bad on my report.
Hell's Gate tower, this is TAV - on approach.
Crossing outer marker.
Mine is in sight.
JAKE: One life ends,
another begins.
Harnesses off!
Get your packs!
Put it together, let's go!
Let's go!
ASSISTANT: Harnesses off!
One minute!
When that ramp comes down, go directly into the base.
Do not stop!
Go straight inside.
Wait for my mark!
Go, go, go, go!
Get out of there!
Keep moving!
Let's go, let's go!
JAKE: There's no such thing as an ex-Marine.
You may be out, but you never lose the attitude.
I told myself I could pass any test a man could pass.
[BREATHING HEAVILY]
They can fix a spinal, if you got the money,
but not on vet benefits, not in this economy.
Let's go, special case!
Do not make me wait for you!
Well, well, ladies.
Look at all this fresh meat! Whoo!
JAKE: Back on Earth, these guys were Army dogs, Marines,fighting for freedom.
AMPSUIT OPERATOR: Look out, hot rod!
JAKE: But out here they're just hired g*n,taking the money, working for the company.
Check this out, man.
Meals on wheels.
Oh, man, that is just wrong.
MAN : I got two guys free in about minutes!
MAN : Got it!
Need them!
QUARITCH: You are not in Kansas anymore.
You are on Pandora, ladies and gentlemen.
Respect that fact every second of every day.
If there is a hell, you might want to go there for some R&R after a tour on Pandora.
Out there, beyond that fence, every living thing that crawls, flies or squats in the mud wants to k*ll you and eat your eyes for Jujubes.
We have an indigenous population of humanoids called the Na'vi.
They're fond of arrows dipped in a neurotoxin that'll stop your heart in one minute.
And they have bones reinforced with naturally occurring carbon fiber.
They are very hard to k*ll.
As head of security, it is my job to keep you alive.
I will not succeed.
Not with all of you.
If you wish to survive, you need to cultivate a strong mental attitude.
You've got to obey the rules.
Pandora rules.
Rule number one...
JAKE: There's nothing like an old-school safety brief to put your mind at ease.
Excuse me. Excuse me.
Jake!
You're Jake, right?
Tom's brother.
Wow! You look just like him.
Sorry, I'm Norm.
Spellman.
I went through avatar training with him.
[CHUCKLING]
...into the bio-lab.
We're gonna spend a lot of time up here.
Hey! How you doing?
Norm, avatar driver.
FEMALE SCIENTIST: Hi.
MALE SCIENTIST: Hey.
Link... Here's the link room right here.
This is where we're connecting to the avatar.
JAKE: Me and Norm are here to drive
these remotely controlled bodies called avatars.
And they're grown from human DNA mixed with the DNA of the natives.
Hey. Welcome.
Hey.
Welcome to Pandora.
Good to have you.
Thanks.
[LAUGHS] Damn!
They got big.
Yeah, they fully mature on the flight out.
So the proprioceptive sims seem to work really well.
Yeah, they've got great muscle tone.
It'll take us a few hours to get them decanted, but you guys can take them out tomorrow.
There's yours.
Hey.
Dr. Norm Spellman.
Dr. Max Patel. Great to meet you.
NORM: Good to meet you, yeah.
[HEARTBEAT THUMPING]
Looks like him.
No, it looks like you.
NORM: This is your avatar now, Jake.
JAKE: And the concept is that every driver is matched to his own avatar, so that their nervous systems are in tune, or something.
Which is why they offered me the gig, because I can link with Tommy's avatar, which is insanely expensive.
Is this right? I just say whatever to the video log?
Yeah, we gotta get in the habit of documenting everything.
You know, what we see, what we feel.
It's all part of the science.
And good science is good observation.
Plus it'll help to keep you sane for the next six years.
All right.
Whatever.
So, uh...
Well, here I am, doing science.
MALE TECHNICIAN: They're coming out!
WOMAN ON PA: Attention. Drivers coming out of link.
[SIGHING]
Oh, God.
[GROANS]
FEMALE TECH: Where's the lab coat?
Where's the lab coat?
Who's got my g*dd*mn cigarette?
Guys! What's wrong with this picture?
Thank you!
NORM: Grace Augustine is a legend.
She's the head of the Avatar Program.
She wrote the book,
I mean, literally wrote the book on Pandoran botany.
Well, that's 'cause she likes plants better than people.
Here she is, Cinderella back from the ball.
Grace, I'd like you to meet Norm Spellman and Jake Sully.
Norm. I hear good things about you.
How's your Na'vi?
[SPEAKING NA'VI]
[CHUCKLES]
Grace?
This is Jake Sully.
Ma'am.
Yeah, yeah.
I know who you are, and I don't need you. I need your brother.
You know, the PhD who trained for three years for this mission?
He's dead.
I know it's a big inconvenience for everyone.
How much lab training have you had?
I dissected a frog once.
You see? You see? I mean, they're just pissing on us without even the courtesy of calling it rain.
I'm going to Selfridge.
No, Grace, I don't think that's a good idea.
No, man, this is such bullshit!
I'm gonna kick his corporate butt.
He has no business sticking his nose in my department.
Here tomorrow, .
Try and use big words.
[PEOPLE CHATTERING ON RADIO]
Scorpion Two-Hotel, Hell's Gate tower.
You are cleared for south departure.
Hover taxi, Delta runway.
Squawk ident.
Mmm! You see that? Yes, sir.
No, you didn't. You were looking at the monitor.
I love this putter, Ronnie!
I love this putter.
Parker, you know, I used to think it was benign neglect, but now I see that you're intentionally screwing me.
Grace, you know, I enjoy our little talks.
Oops.
I need a researcher.
Not some jarhead dropout.
Well, actually, I thought we got lucky with him.
Lucky?
Yeah.
How is this in any way lucky?
Lucky your guy had a twin brother, and lucky that brother wasn't some oral hygienist or something.
A Marine we can use.
I'm assigning him to your team as security escort.
The last thing I need is another trigger-happy moron out there!
Look, look, you're supposed to be winning the hearts and the minds of the natives.
Isn't that the whole point of your little puppet show?
If you look like them and you talk like them, then they'll start trusting us.
We build them a school, we teach them English, but after, what, how many years?
Relations with the indigenous are only getting worse.
Yeah, that tends to happen when you use machine g*n on them.
Right. Come here.
I can't...
I can't...
This is why we're here.
Unobtanium.
Because this little gray rock sells for million a kilo.
That's the only reason. It's what pays for the whole party.
It's what pays for your science.
Comprendo?
Now, those savages are threatening our whole operation, we're on the brink of w*r, and you're supposed to be finding a diplomatic solution.
So use what you've got, and get me some results.
[PEOPLE CHATTERING]
So, how much link time have you logged?
About hours.
That's good.
You're in there.
You're here.
How much have you logged?
Zip. But I read a manual.
Tell me you're joking.
This is cool.
Let's go.
Don't. I got this.
[SIGHING] So you just figured you'd come out here, to the most hostile environment known to man, with no training of any kind, and see how it went?
What was going through your head?
Maybe I was sick of doctors telling me what I couldn't do.
Biometrics are good.
Link three is ready.
Keep your arms in, hands in, head down.
Down. Just relax and let your mind go blank.
That shouldn't be hard for you.
[CHUCKLING] Kiss the darkest part of my lily white...
Initiate link.
Run sequence unit three. Go.
LINK TECH: Launching.
I have the first congruency.
That's a gorgeous brain.
Nice activity.
Hmm. Go figure.
Phase-lock %.
All right.
Going in.
I'm going in in four.
Phase-lock %.
Link is stable.
[RESPIRATOR HISSING]
[DISTANTLY] He's in. Jake, can you hear me?
Can you hear me, Jake?
Pupillary reflex is good.
Pinna response normal.
How you feeling, Jake?
Hey, guys.
[CHUCKLES] Welcome to your new body, Jake.
FEMALE TECH: Good!
Yeah, we're gonna take this nice and easy, Jake.
And touch your thumb to your fingers. Yeah.
Thumb to your fingers.
No problem.
That's good. I can see you can remember that one.
Got it.
Well, if you want to sit up, that's fine. Okay, good. Just take it nice and slow, Jake. Good.
Okay, well, no truncal ataxia, that's good.
Are you feeling lightheaded or dizzy at all?
You're wiggling your toes!
MALE TECH: Good. Good, Jake.
That's great.
[JAKE GASPING IN AMAZEMENT]
Distal motor control is good.
Good, Jake.
Are you feeling any numbness or pain?
That's great, Jake. Hold on, now.
FEMALE TECH: Whoa, whoa, whoa.
Take it easy. Don't get ahead of yourself, okay?
There's a few more sensory motor reflex tests we need to run, so take it easy.
Ooh! Wait.
Jake. Sit down, Jake.
Jake! Listen to me.
Jake! Whoa.
I need you to sit down.
Jake! It's okay.
Buddy, listen to me.
It's all good. I got this.
Jake, you need to sit down right now.
Guys, get him back on the gurney now.
Listen to me. For your own safety, you need to sit down.
You need time to adjust to the avatar... Whoa! Jake!
God, Jake, watch your tail.
[LAUGHING] Yeah!
Sedate! Sedate him! A thousand milligrams of Supitocam! Stat!
MAX: Guys! Guys!
Whoa! Whoa!
NORM ON INTERCOM: By the numbers.
Jake. Come on. Jake! Listen to me.
You're not used to your avatar body.
This is dangerous. This is great.
MAX: Jake? Listen to me. Come on. They're gonna put you out.
[JAKE LAUGHING]
MALE TECH: Norm, sit down.
No, no. I gotta get out of these leads.
God damn it!
Bring them home!
Norm! Do not leave control!
FEMALE TECH: You're not ready for it!
Oh, come on, you ain't got no skills.
Ooh! Ooh! So close!
I don't even have to play defense on it.
Hey, guys. Hey.
MALE AVATAR: Whoa.
NORM: It's okay,
I'll get him.
Jake, you have to come back!
Jake! Jake!
Excuse me.
Watch it!
Sorry!
Come on!
Jake! We're not supposed to be running!
[LAUGHING]
[PANTING]
[GRUNTING]
Jeez! Sorry.
Watch it!
GRACE: Hey, Marine!
Damn.
Grace?
Well, who'd you expect, numbnuts?
Think fast.
Motor control's looking good.
[CHUCKLING APPRECIATIVELY]
[CHUCKLES]
GRACE: Come on, everybody, quiet down!
All right, g*ng, lights out.
Come on, Louise, chop-chop.
Hey, hey, hey!
GRACE: Don't play with that, you'll go blind.
That's kind of freaky.
Come on. Scat.
Good night.
Lights out! See you at dinner, kiddies.
[CREATURES SCREECHING]
[SIGHS]
[GASPS]
MAX: Welcome back.
You okay?
You all right?
Yeah, I'm okay.
I'm Trudy. I fly all the science sorties.
And this here is my baby.
Hold on a second.
Hey, Wainfleet!
Get it done!
We bounce at zero-nine.
Yeah, I'm on it, capitaine!
Vine strike's still loose.
You guys are packing some heavy gear.
Watch it!
Yeah, that's 'cause we're not the only thing flying around out there.
Or the biggest.
I'm gonna need you on a door g*n.
I'm a man short.
I thought you'd never ask.
There's your man. See you on the flight line.
You wanted to see me, Colonel?
This low gravity'll make you soft.
You get soft,
Pandora will sh*t you out dead with zero warning.
I pulled your record, Corporal.
Venezuela, that was some mean bush.
Nothing like this here, though.
You got some heart, kid, showing up in this neighborhood.
I figured it's just another hellhole.
I was First Recon myself.
A few years ahead of you.
Well, maybe more than a few.
Three tours Nigeria, not a scratch.
I come out here?
Day one. Think I felt like a shavetail louie?
Yeah. Oh, they could fix me up, if I rotated back.
Yeah, and make me pretty again.
But you know what?
I kind of like it.
It reminds me every day what's waiting out there.
Hup! The Avatar Program is a bad joke.
Bunch of limp-d*ck science majors.
However, it does present an opportunity both timely and unique.
Clear!
MAN: Clear!
[POWERING UP]
A recon gyrene in an avatar body.
That's a potent mix.
Give me the goose bumps.
Such a Marine could provide the intel I need, right on the ground.
Right in the hostiles' camp.
Look, Sully. I want you to learn these savages from the inside.
I want you to gain their trust.
I need to know how to force their cooperation or hammer them hard if they won't.
Am I still with Augustine?
On paper.
Yeah, you walk like one of her science pukes, you quack like one, but you report to me.
Can you do that for me, son?
Hell, yeah, sir.
Well, all right, then.
Son, I take care of my own.
You get me what I need, I'll see to it you get your legs back when you rotate home.
Your real legs.
That sounds real good, sir.
Link's ready!
LINK TECH: Phase-lock %.
Just keep your mouth shut and let Norm do the talking.
LINK TECH: I have five congruencies.
Phase-lock %.
MAX: Link three ready.
GRACE: All right, I'm going in.
[SQUAWKING]
[WHOOPING]
[CHUCKLING]
Shut it down. We're gonna stay a while.
Norm! Your pack.
Pack.
Stay with the ship.
One idiot with a g*n is enough.
You the man, Doc.
[DISTANT YOWLING]
[CREATURE COOING]
[SQUEAKING]
Prolemuris.
They're not aggressive.
Relax, Marine. You're making me nervous.
NORM: So, how will they know we're here?
GRACE: I'm sure they're watching us right now.
JAKE: Keep moving, Norm.
GRACE: Keep up, guys!
GRACE: And here I go.
NORM: Scanning.
Oh, wow!
It's that fast?
[LAUGHING]
Amazing, isn't it?
Yeah.
So, that is signal transduction from this root to the root of the tree next to it.
So, we should take a sample.
NORM: Okay. Sample.
NORM: You know, it's probably electrical, based on the speed of the reaction.
GRACE: Norm, you've contaminated the sample with your saliva.
NORM: Right.
[GASPS]
GRACE: So, here I go.
[GRACE CONTINUES CHATTERING]
[LAUGHING]
[TRUMPETING]
Don't sh**t. Don't sh**t, you'll piss him off.
[TRUMPETING]
It's already pissed off.
Jake, that armor's too thick.
Trust me.
It's a territorial thr*at display.
Do not run, or he'll charge.
So, what do I do, dance with it?
Just hold your ground.
[GROWLING]
[TRUMPETING]
[SCREAMING]
[SCREECHING]
[LAUGHING NERVOUSLY]
Yeah? Come on!
What you got?
Oh, yeah. Who's bad?
That's right.
Yeah, that's what I'm talking about, bitch.
That's right, get your punk ass back to mommy.
Yeah? Yeah, you got nothing.
You keep running.
Yeah, and why don't you bring back some of your friends, huh?
[SNARLING SOFTLY]
[ROARING]
Oh, sh*t.
[CREATURES ROARING]
So what about this one?
Run? Don't run? What?
Run! Definitely run!
[GRUNTING]
[SCREAMING]
[ROARING]
[ROARING]
[GRUNTS]
[ROARING]
[ROARING]
I'm gonna have to call it, guys.
We're not allowed to run night ops. Colonel's orders.
I'm sorry, Doc, he's just gonna have to hang on till morning.
He won't make it till morning.
[CREATURES CHITTERING]
[PANTING]
[GROWLING]
[PANTING]
[CREATURES GROWLING]
[CREATURES HISSING]
[GROWLING]
[GRUNTING]
[CHITTERING]
[SNARLING]
[SNARLS]
[HISSING]
I don't have all g*dd*mn night.
Come on!
Come on!
[YELPS]
[YELPING]
[GRUNTING]
[GRUNTING]
[SNARLING]
[YELPS]
[YELLING]
[YELLING]
[YELPING]
[GRUNTING]
[HISSING]
[SPEAKING NA'VI]
JAKE: Hey, wait. Don't!
[SCOFFS]
Great.
[WHIMPERING]
[GRUNTS]
[SPEAKING NA'VI]
[WHIMPERING STOPS]
[SPEAKING NA'VI]
Look, I know you probably don't understand this,
[SPEAKING NA'VI]
but thank you.
Thank you.
That was pretty impressive.
I would have been screwed if you hadn't come along. It was...
Hey, wait a second.
Hey, where you going?
Wait up!
Just... Hey, slow down.
Look, wait up, I just wanted to say thanks for k*lling those things.
[EXCLAIMS IN PAIN]
Damn!
Don't thank.
You don't thank for this.
This is sad.
Very sad only.
Okay. Okay.
I'm sorry.
Whatever I did, I am sorry.
All this is your fault.
They did not need to die.
My fault? They att*cked me.
How am I the bad guy?
Your fault!
Whoa!
Your fault!
[GENTLY] Shh. Easy. Easy.
You're like a baby. Making noise, don't know what to do.
Easy. Shh.
Fine. Fine.
If you love your little forest friends, why not let them just k*ll my ass?
What's the thinking?
Why save you?
Yeah. Yeah, why save me?
You have a strong heart.
No fear.
But stupid!
Ignorant like a child.
[SCOFFS]
Well, if I'm like a child, then...
Look, maybe you should teach me.
Sky People cannot learn.
You do not See.
Well, then teach me how to See.
No one can teach you to See.
Whoa.
Look, come on, can't we talk?
Say, where'd you learn to speak English?
Dr. Augustine's school?
[GRUNTING]
You're like a baby.
[SIGHS]
[SPEAKING NA'VI]
I need your help.
You should not be here.
Okay, take me with you.
No! Go back.
[SPEAKING NA'VI]
No.
Go back.
[EXCLAIMING IN NA'VI]
No!
[SPEAKING SHARPLY IN NA'VI]
[REPEATS SOFTLY]
What...
What are they?
Seeds of the Sacred Tree.
Very pure spirits.
Uh-huh.
[CHUCKLES]
What was that all about?
[WHISPERING IN NA'VI]
Come.
Come!
Where are we going?
Come.
What's your name?
sh*t!
[GROANING]
[GASPS]
[ALL ULULATING]
[CHUCKLES NERVOUSLY]
Okay.
[YELLS]
[SHOUTING IN NA'VI]
[SPEAKING IN NA'VI]
What's going on?
[GROANING] Wait.
[ORDERING IN NA'VI]
What's happening?
Hey!
[VILLAGERS CHATTERING]
[HUNTERS WHOOPING]
[VILLAGERS CHATTERING]
[NEYTIRI SPEAKING NA'VI]
[SPEAKING NA'VI]
What's he saying?
Hey, what's he saying?
My father is deciding whether to k*ll you.
Your father.
It's nice to meet you, sir.
[ALL EXCLAIMING IN NA'VI]
[MO'AT SHOUTING IN NA'VI]
That is Mother.
She is Tsahik. The one who interprets the will of Eywa.
Who's Eywa?
[IN ENGLISH]
What are you called?
Jake Sully.
[GRUNTS]
Why did you come to us?
I came to learn.
We have tried to teach other Sky People.
It is hard to fill a cup which is already full.
Well, my cup is empty, trust me.
Just ask Dr. Augustine.
I'm no scientist.
What are you?
I was a Marine. A...
A warrior of the Jarhead clan.
[SPEAKING NA'VI]
[SPEAKING NA'VI]
[EXCLAIMS IN ANNOYANCE]
It is decided. My daughter will teach you our ways.
Learn well, Jakesully.
Then we will see if your insanity can be cured.
[VILLAGERS CHATTERING]
[DRUMS b*ating]
[SINGING IN NA'VI]
[CHATTERING AND SINGING STOP]
[STAMMERING]
Good evening.
Please don't get up.
Excuse me.
[EXCLAIMS]
Sorry.
[CHATTERING AND SINGING RESUME]
Hey, how you doing?
[BREATHING HEAVILY]
[GRUNTING]
GRACE: [ECHOING] Jake. Jake!
MAX: He's in alpha.
He's coming out right now.
Jake. Jake!
GRACE: Come on back, kid.
Come on. That's it.
[GASPING IN CONFUSION]
There you go. There you go, there you go.
You're okay.
You're okay.
Damn! You were dug in like a tick.
[GROANING]
[SIGHS]
Is the avatar safe?
Yeah, Doc.
And you are not gonna believe where I am.
[LAUGHS]
The last thing we see is this Marine's ass disappearing into the brush with this angry thanator coming after him.
Hey, it's not something you can teach.
MAX: That is awesome.
You know, for reasons I cannot fathom, the Omaticaya have chosen you. God help us all.
[MEN LAUGHING]
"Jarhead clan"?
Mmm-hmm.
[LAUGHING]
And it worked?
Hey, I'm practically family.
They're gonna study me. I have to learn to be one of them.
That's called taking the initiative, son.
I wish I had more like you.
Look, Sully. Sully.
Just find out what the blue monkeys want.
You know, I mean, we try to give them medicine, education, roads.
But no, no, no, they like mud.
And that wouldn't bother me, it's just that they're...
Hey, can you... Can somebody just... Sector .
Okay, go, go, go, stop. Stop...
Rich, stop!
That's... Jesus!
Their damn village happens to be resting on the richest unobtanium deposit within klicks in any direction.
I mean, look at all that cheddar!
[LAUGHS]
Well, who gets them to move?
Guess.
[SCOFFS]
What if
they won't go?
Oh, I'm betting that they will.
Okay, okay, okay, okay, hey.
Look. Look.
k*lling the indigenous looks bad, but there's one thing that shareholders hate more than bad press, and that's a bad quarterly statement.
I didn't make up the rules.
So just find me a carrot that'll get them to move, otherwise it's gonna have to be all stick. Okay?
You got three months. That's when the 'dozers get there.
Well, we're wasting time.
I like this guy.
MAX: Guys, right now...
GRACE: Okay, let's run through them again.
Mo'at. Dragon lady.
Eytucan. Eytukan.
He's the clan leader.
But she's the spiritual leader.
Like a shaman.
Got it.
T'su'tey.
Tsu'tey.
Tsu'tey.
He'll be the next clan leader.
Neytiri.
She'll be the next Tsahik.
They become a mated pair.
So who's this Eywa?
[SHOCKED] Who's Eywa?
Only their deity. Their goddess, made up of all living things.
Everything they know!
You'd know this if you had any training whatsoever.
Who's got a date with the chief's daughter?
Come on. That's... GRACE: All right, knock it off, you two.
Let's go.
Village life starts early.
Don't do anything unusually stupid.
JAKE: Easy, boy.
Pale is female.
[NEYTIRI SPEAKING
SOOTHINGLY IN NA'VI]
JAKE: Okay.
Easy, girl.
[GRUNTING]
[SPEAKING SOOTHINGLY IN NA'VI]
[WHINNYING]
[EXHALING]
That is tsaheylu. The bond.
Feel her.
Feel her heartbeat.
Her breath.
Feel her strong legs.
You may tell her what to do.
Inside.
For now, say where to go.
Forward!
[GRUNTING]
[LAUGHING]
You should go away.
No, you'd miss me.
I knew you could speak English.
[SCOFFING]
[SPEAKS NA'VI]
[SPEAKS NA'VI]
Again.
JAKE: If you want to hit this thing, it's gonna be complicated.
Your scan doesn't show the internal structure.
There's an outer row of columns.
QUARITCH: Uh-huh.
Real heavy duty. There's a secondary ring here, and an inner ring.
There's a core structure like a spiral.
That's how they move up and down.
We're gonna need accurate scans on every column.
Roger that.
What else can you tell us about the structure?
JAKE: I'm guessing this secondary ring, that's also load-bearing.
So where are we going?
Getting out of Dodge.
I'm not about to let Selfridge and Quaritch micro-manage this thing.
There's a mobile link up at Site we can work out of, way up in the mountains.
The Hallelujah Mountains?
That's right.
Are you serious?
Yeah.
Yes!
[NORM LAUGHING]
The legendary floating mountains of Pandora.
Heard of them?
We're getting close.
Yeah, look at my instruments.
Yep. We're in the Flux Vortex.
We're VFR from here on.
What's VFR?
Means you gotta see where you're going.
You can't see anything.
[LAUGHING] Exactly.
Ain't that a bitch?
Oh, my God.
[LAUGHING] You should see your faces.
Thank you for flying Air Pandora.
[AIRLOCK HISSING]
Welcome to camp.
GRACE: So, this is my bunk.
This stuff is nasty.
GRACE: Norm, go under.
NORM: All right.
JAKE: Grace didn't miss a thing.
GRACE: Trudy, you'll take the top one.
She knew I was talking to the Colonel.
But I had what she needed, a way back in with the clan,
so she's playing nice.
All right. Jake, hang a left.
You'll be in the link at the end.
Unit one. Beulah.
She's the least glitchy.
[IMITATING BIRD CALL]
[BIRDS CAWING]
[SQUAWKING]
[LAUGHING NERVOUSLY]
Holy sh*t!
Do not look
in her eye.
[SPEAKING NA'VI]
Ikran is not horse.
Once tsaheylu is made,
ikran will fly with only one hunter in the whole life.
To become taronyu, hunter,
you must choose your own ikran and he must choose you.
When?
When you are ready.
[EXCLAIMS]
[NEYTIRI WHOOPING]
Okay. This is
video log .
Time's .
[SIGHING] Do I have to do this now?
I really need to get some rack.
No, now.
When it's fresh.
Okay, location, shack, and the days are starting to blur together.
[SPEAKING NA'VI SLOWLY]
[REPEATING TENTATIVELY]
JAKE: The language is a pain, but, you know, I figure it's like field-stripping a w*apon.
Just repetition, repetition.
Navi. "Nari."
Nari.
[IMPATIENTLY] "Narrri"!
Narrri!
Txur ni'ul. Stronger.
[INHALES]
[INHALES]
JAKE: Neytiri calls me skxawng.
It means moron.
This is a very important part of it.
Norm's attitude has improved lately.
I see you. I see you.
But it's not just, "I'm seeing you in front of me," it's "I see into you. I See you."
It's good he's back on board,
but he thinks I'm a skxawng, too.
"I'm accepting you. I understand you."
So you gotta get this, okay?
I gotta run! Okay?
Let's go.
My feet are getting tougher. I can run farther every day.
I have to trust my body to know what to do.
Yeah! Check it out!
Oh, crap!
Every day it's reading the trails,the tracks at the waterhole,the tiniest scents and sounds.
[CUBS SQUEAKING]
She's always going on about the flow of energy, the spirits of animals.
I really hope this tree-hugger crap isn't on the final.
This isn't just about eye-hand coordination out there, you know.
You need to listen to what she says.
Try to see the forest through her eyes.
Excuse me. This is my video log here.
With Neytiri, it's learn fast or die.
You gotta be kidding me.
[SCREAMING]
[BRANCHES CRACKING]
[GRUNTING]
[EXCLAIMS]
[PANTING]
[GROANING]
[SPEAKING NA'VI]
I talked Mo'at into letting Grace into the village.
It's the first time since her school was closed down.
[CHILDREN LAUGHING]
Whoa, whoa, whoa. No, you don't.
Come back here.
Bon appetit.
[CHIRPING]
[POWERING OFF]
[GENTLY]
Come on, Marine.
JAKE: I'm trying to understand this deep connection
the people have to the forest.
She talks about a network of energy
that flows through all living things.
She says all energy is only borrowed,
and one day you have to give it back.
[GROWLS]
[MOANING]
[SPEAKING NA'VI]
[STABS]
A clean k*ll.
You are ready.
JAKE: Learning to ride an ikran, we call them banshees,
is the test every young hunter has to pass.
[SPEAKING NA'VI]
But to do that, you gotta go where the banshees are.
Oo-rah.
[SPEAKING NA'VI]
Now what?
[SPEAKING NA'VI]
[COMMANDS IN NA'VI]
[GRUNTING]
[GRUNTS]
[FEMALE HUNTER WHOOPING]
[SCREECHING]
[EXCLAIMING]
[NEYTIRI SPEAKING NA'VI]
[SPEAKING SOFTLY IN NA'VI]
[PANTING]
Jakesully will go first.
[EXHALES SHARPLY]
[SCREECHING]
Now you choose your ikran. This you must feel inside.
If he also chooses you, move quick like I showed.
You will have one chance, Jake.
How will I know if he chooses me?
He will try to k*ll you.
Outstanding.
[EXCLAIMS]
[HISSING]
[HISSING]
[GRUNTS]
[EXCLAIMING]
[SPEAKING NA'VI]
[ROARING]
[SPEAKS NA'VI]
[HISSING]
[HISSING]
Let's dance.
[LAUGHING]
[SCREECHING]
[WHOOPING]
[GRUNTING]
Make the bond!
[GRUNTING] No!
[EXCLAIMS]
Jake!
[LAUGHING]
[GRUNTING]
[IKRAN SCREECHING]
[SHOUTING]
Tsaheylu, Jake.
NEYTIRI: Tsaheylu!
[YELLING]
Stop!
[SPEAKING SOFTLY IN NA'VI]
[CHUCKLES] Yeah, that's right.
You're mine. Huh?
First flight seals the bond.
You cannot wait.
Think, "Fly!"
Fly?
[EXCLAIMING]
[SCREAMING]
God damn!
Oh, sh*t!
[YELLING]
[SCREECHING]
Shut up and fly straight!
[JAKE PANTING]
That's it.
Bank left!
Level out!
That's it.
[HUNTERS WHOOPING]
WARRIOR: Whoo!
Jakesully!
[WHOOPING]
[SPEAKS SHARPLY IN NA'VI]
[CHUCKLING]
[NEYTIRI HOOTING]
Hey!
Let's go!
Yeah, baby, I got this!
Oh, sh*t!
[WHOOPING]
JAKE: I may not be much of a horse guy, but I was born to do this.
[CHUCKLES] Yeah!
I came like this. This you.
Yeah, yeah.
I turn. I feel the wind. I turn very strong.
Look, yeah, see, I banked so hard...
[GASPS]
[SPEAKS NA'VI]
[LAUGHING]
[JAKE WHOOPING]
GRACE: The Tree of Souls.
[TRANSLATING INTO NA'VI]
It's their most sacred place.
See the Flux Vortex in these false color images?
Yeah, that's what messes up my instruments.
There is something really interesting going on in there biologically.
I would die to get samples.
Outsiders are strictly forbidden.
GRACE: You lucky swine.
JAKE: I was a stone-cold aerial hunter.
Death from above.
Only problem is, you're not the only one.
[JAKE AND NEYTIRI EXCHANGING YELPS]
Dive!
[ROARING]
[SCREECHING]
Go, go!
[NEYTIRI IMITATING BIRD CRIES]
Follow me!
[ROARING]
[SOFTLY] Whew.
[ROARING]
[BOTH HOOTING]
[SPEAKING SOOTHINGLY IN NA'VI]
[SHUSHING]
[BOTH LAUGHING]
Our guys call it a Great Leonopteryx.
It is Toruk.
Last Shadow.
Yeah, right. It's the last one you ever see.
My grandfather's grandfather was Toruk Macto.
Rider of Last Shadow.
He rode this?
Toruk chose him.
It has only happened five times since the time of the First Songs.
That's a long time.
Yes.
Toruk Macto was mighty.
He brought the clans together in a time of great sorrow.
All Na'vi people know the story.
[INHALING DEEPLY]
JAKE: Everything is backwards now.
Like out there is the true world
and in here is the dream.
[SIGHS]
It's hard to believe it's only been three months.
I can barely remember my old life.
I don't know who I am anymore.
[SNIFFLES]
Haven't gotten lost in the woods, have you?
Your last report was more than two weeks ago.
I'm starting to doubt your resolve!
The way I see it, it's time to terminate the mission.
No, I can do this.
You already have.
You give me good, usable intel.
This Tree of Souls place.
Yeah, I got them by the balls with that when this turns into a sh*t fight, which it will. Yeah.
Now it's time to come in.
By the way, you gonna get your legs back.
Yeah. I got your corporate approval.
It's a done deal.
Gonna have you on a shuttle tonight.
I'm a man of my word.
I gotta finish this.
There's one more thing.
Ceremony. It's the final stage of becoming a man.
If I do it, I'm one of them.
And they'll trust me.
And I can negotiate the terms of their relocation.
Well, then, you'd better get it done, Corporal.
JAKE: The Na'vi say that every person is born twice.
The second time is when you earn your place among The People forever.
[SPEAKING NA'VI]
[SNIFFLING SOFTLY]
[LAUGHING]
Come. Come.
[LAUGHS]
This is a place for prayers to be heard.
And sometimes answered.
[SIGHS]
We call these trees Utraya Mokri.
The Tree of Voices.
The voices of our ancestors.
[VOICES WHISPERING]
[VOICES CHATTERING DISTANTLY]
I can hear them.
They live, Jake,
within Eywa.
[CHILDREN LAUGHING]
You are Omaticaya now.
You may make your bow from the wood of Hometree.
And you may choose a woman.
We have many fine women.
Ninat is the best singer.
But I don't want Ninat.
[BLOWING]
Peyral is a good hunter.
Yeah, she is a good hunter.
[EXHALES]
[SOFTLY]
I've already chosen.
But this woman must also choose me.
She already has.
[GASPS]
I am with you now, Jake.
We are mated for life.
JAKE: What the hell are you doing, Jake?
[MACHINERY RUMBLING]
[BRANCH CRACKING]
[MACHINERY APPROACHING]
[GASPING]
[ENGINES RUMBLING]
Ma Jake!
NORM: Don't forget your phase integration.
GRACE: Jake! No, no, the middle button.
You gotta eat something.
Yeah, there you go.
Jake! Jake. Wake up!
Jake, please!
Don't make me force-feed a cr*pple.
[CHUCKLES] Grace, I don't want... Hey!
[POWERING DOWN]
[GRUNTS IN ALARM]
Jake!
[CHUCKLING] Okay.
[GRUNTING]
Here. I'm done.
Let's go.
And when was the last time you took a shower?
I don't need a shower.
Jesus, Marine.
[GRUNTING]
Jake!
Jake! Wake up!
Jake! Wake up!
Hey!
Stop! Stop!
NEYTIRI: Jake!
Go back, stop!
Hey, boss.
Hey!
[BULLDOZER POWERING DOWN]
What?
I got a native doing the funky chicken here.
He's blocking my blade.
Well, keep going.
He'll move.
SELFRIDGE: These people have to learn that we don't stop. Come on, go, go, go.
Stop! Hey!
Go! Go!
There, see?
He moved.
[GRUNTING]
Whoa, whoa, whoa, whoa, whoa, whoa, whoa.
Dude, dude. Whoa, dude!
Dude, no!
Oh! I'm blind.
[g*n CONTINUES]
Jake!
Neytiri!
Here, come on!
[NEYTIRI SOBBING]
[INHALING]
QUARITCH: Freeze it right there.
Scale up.
Enhance.
SELFRIDGE: Son of a bitch.
Unbelievable.
Get me a pilot.
Yes, sir.
[HUNTERS HOOTING w*r CRIES]
[SPEAKING NA'VI]
[ALL SHOUTING w*r CRIES]
[SPEAKING NA'VI]
You do not speak here!
[SPEAKING NA'VI]
[ALL SHOUTING w*r CRIES]
JAKE: Tsu'tey!
Don't do this.
You!
Listen. Brother...
[SHOUTS IN NA'VI]
[SHOUTING IN NA'VI]
You mated with this woman?
Oh, sh*t.
[STERNLY] Is this true?
We are mated before Eywa.
It is done.
[BREATHING TREMULOUSLY]
JAKE: Brother, please.
Do not att*ck the Sky People.
Many Omaticaya will die if you do.
You are not my brother!
[YELLING]
And I am not your enemy!
The enemy is out there, and they are very powerful!
Go! Go! Go!
I can talk to them.
No more talk.
NEYTIRI: Tsu'tey!
I am Omaticaya.
I am one of you.
And I have the right to speak.
[SIGHS]
[SPEAKING NA'VI]
[IN ENGLISH] The words are like stones in my heart.
NORM: Sir, I'm sorry.
No, no, no! Hold on!
You can't interrupt a link in progress!
It's very dangerous!
NEYTIRI: Grace!
Oh, no.
Wait!
Stay down, sir.
[BEEPING]
Okay. Look...
I was sent here to...
[CROWD MURMURING]
[GRUNTS]
[SPEAKING NA'VI]
[NEYTIRI YELLING]
[GROWLING]
[EXCLAIMS]
[GASPS]
Are you out of your g*dd*mn mind?
You crossed the line.
Wheel this meat out of here.
GRACE: Jake! What the hell is going on here?
QUARITCH: You let me down, son.
So, what, you find yourself some local tail and you just completely forget what team you're playing for?
Parker, there is time to salvage the situation.
Parker...
Shut your pie hole!
Or what, Ranger Rick?
You gonna sh**t me?
I could do that.
You need to muzzle your dog.
Yeah, can we just take this down a couple of notches, please?
You say you want to keep your people alive?
You start by listening to her.
Those trees were sacred to the Omaticaya in a way you can't imagine.
You know what?
You throw a stick in the air around here, it's gonna land on some sacred fern,
[MOCKINGLY] for Christ's sake!
I'm not talking about some kind of pagan voodoo here.
I'm talking about something real, something measurable in the biology of the forest.
Which is what, exactly?
What we think we know is that there is some kind of electrochemical communication between the roots
of the trees, like the synapses between neurons.
And each tree has ten-to-the-fourth connections to the trees around it.
And there are ten-to-the-twelfth trees on Pandora.
Which is a lot, I'm guessing.
It's more connections than the human brain.
Get it?
It's a network.
It's a global network, and the Na'vi can access it.
They can upload and download data.
Memories.
At sites like the one you just destroyed.
[IN AWE] Yes!
[LAUGHING] What the hell have you people been smoking out there?
They're just g*dd*mn trees!
[LAUGHING]
You need to wake up, Parker.
No. You need to wake up.
The wealth of this world isn't in the ground.
It's all around us.
The Na'vi know that, and they are fighting to defend it.
If you want to share this world with them, you need to understand them.
I'd say we understand them just fine, thanks to Jake here.
Hey, Doc, come take a look.
They're not gonna give up their home.
They're not gonna make a deal.
[SCOFFING] For what?
Lite beer?
And blue jeans?
There's nothing that we have that they want.
Everything they sent me out here to do is a waste of time.
They're never gonna leave Hometree.
So, since a deal can't be made,
I guess things get real simple.
Jake, thanks. I'm getting all emotional.
I might just give you a big wet kiss.
[SIGHS]
I'll do it with minimal casualties to the indigenous.
I'll drive them out with gas first.
[SIGHS]
It'll be humane.
More or less.
All right, let's pull the trigger.
MAX: Come on, people.
[SIGHING] Oh, man.
MAX: Let's pack it up, let's go.
This is how it's done.
When people are sitting on sh*t that you want, you make them your enemy.
JAKE: Then you're justified in taking it.
Quaritch is rolling the g*n.
He's gonna hit Hometree.
My God.
Dr. Augustine! You cannot be up here!
Back off!
Parker. Wait. Stop. These are people you're about to...
No. No, no, no, no. I said back off!
They're fly-bitten savages that live in a tree!
All right?
Look around!
I don't know about you, but I see a lot of trees! They can move!
Can you guys just please...
Yes, sir.
There are families in there.
There are children. Babies.
Are you gonna k*ll children?
You don't want that kind of blood on your hands. Believe me.
Just let me try to talk them out.
They trust me.
Calibrate fast. We're going in, right now.
FEMALE TECHNICIAN: Calibrating three and four.
GRACE: Run sequence.
MAX: Initiating. Thirty seconds.
[POWERING UP]
Listen to me.
You've got one hour.
Unless you want your girlfriend in there when the a* comes down, you get them to evacuate.
One hour.
[SPEAKING NA'VI]
[SPEAKING NA'VI]
[SPEAKING NA'VI]
Look, tell them they're gonna be here soon.
[SPEAKING NA'VI]
[IN ENGLISH] You have to leave, or you're gonna die.
Are you certain of this?
Look, they sent me here to learn your ways so one day I could bring this message and that you would believe it.
What are you saying, Jake?
You knew this would happen?
Yes.
Look, at first it was just orders, and then everything changed.
Okay? I fell in love.
I fell in love with the forest and with the Omaticaya people.
And with you.
I trusted you.
With you. With you.
I trusted you!
Trust me now, please.
[SHOUTING IN NA'VI]
You will never be one of The People!
I shouldn't have...
We tried to stop them!
Neytiri, please!
Please.
[MO'AT SPEAKING NA'VI]
[SPEAKING NA'VI]
[GRACE SPEAKING NA'VI]
You have to go.
They're coming!
[SHOUTING w*r CRY]
[ALL SHOUTING w*r CRY]
DRAGON PILOT: Time on target, one mike.
SCORPION PILOT: Copy. We have a visual.
Roger that. Stay on heading .
SCORPION PILOT: Roger, .
[BOTH SHOUTING IN NA'VI]
Run to the forest!
They're coming!
[SPEAKING NA'VI]
They will destroy this place.
Neytiri, you must go now!
[YIPPING]
Run to the forest!
Run!
[SHOUTING IN NA'VI]
Run! Run!
[SPEAKING NA'VI]
No! God damn it, run!
[SPEAKING NA'VI]
[SPEAKS NA'VI]
That is one big damn tree.
Well, well, well. I'd say diplomacy has failed.
All right, people, let's get this done!
I want every gas round you got right in the front door.
Roger.
CS. 's going hot.
Fire.
f*ring.
[ALL SCREAMING]
[ALL COUGHING]
Bingo. Mighty good sh**ting, ace.
[SCREAMING IN NA'VI]
Sir, they've opened fire.
[ARROWS CLATTERING]
You've got to be kidding me!
[SPEAKING NA'VI]
[ALL COUGHING]
These dumb bastards ain't getting the message.
All right, let's turn up the heat.
Switch incendiaries!
Switching incendiaries.
Fire.
No!
[SHOUTING IN NA'VI]
[SPEAKS NA'VI]
And that's how you scatter the roaches.
[EYTUKAN SHOUTING IN NA'VI]
JAKE: Neytiri!
We gotta move! He's gonna blow the columns!
My God!
[COMMANDING IN NA'VI]
[PROTESTING]
[SHOUTING IN NA'VI]
Mo'at! No!
If you are one of us,
help us.
All call signs, switch m*ssile.
Give me HE's at the base of the west columns.
This way!
OFFICER ON RADIO: Rider section, switch m*ssile.
PILOT : One's good.
PILOT : Two's rocks up.
PILOT : Three's up.
Yeah, baby, get some!
Charlie Oscar, g*n standing by.
Bring it down. Cleared hot.
[ALL GRUNTING]
Come on, Grace, move!
Down! Head down!
Come on, come on! Down!
[GROANING]
PILOT : Solid hits. PILOT : Solid rocks on target.
Screw this.
Hey! What the hell are you doing?
I didn't sign up for this sh*t!
OFFICER: Repeat. Ripple fire.
[WOOD CREAKING]
Go! Go! Go!
[VILLAGERS SCREAMING]
[YIPPING]
[SHOUTING IN NA'VI]
[SCREECHING]
No, no, get back! Back!
[YELLS]
[EXCLAIMING IN PANIC]
[ALL SCREAMING]
Come on! Come on, move! Move!
[VILLAGERS SCREAMING]
[SCREAMING IN HORROR]
That's good work, people. First round's on me tonight.
Let's boogie.
PILOT: Dragon coming left, heading home.
OFFICER: g*n coming left.
Thunder copies. Rider section copies.
[SPEAKING NA'VI]
[MOANING]
[WAILING IN NA'VI]
[GROANING WEAKLY]
[SPEAKING NA'VI]
[SOBBING]
Neytiri!
[SOBBING]
[SPEAKING NA'VI]
[WAILING IN GRIEF]
I'm sorry.
I'm sorry.
[SOBBING] Get away.
[SHRIEKING] Get away!
Get away from here!
Never come back!
[WAILING]
Pull the plug.
No, you can't do that!
WOMAN: You can't do that!
Calm down! Calm down!
No! Please!
[GIRL SHOUTING IN NA'VI]
JAKE: I was a warrior who dreamed he could bring peace.
[ALL ARGUING]
Sooner or later, though, you always have to wake up.
[DISTANTLY] Let's go!
Put him down!
You m*rder!
[VILLAGERS SOBBING]
What's going on, brother? Long time no see.
SECURITY MAN: Hey.
Personally, I don't feel these tree-hugging traitors deserve steak.
They get steak? That's bullshit.
Let me see that.
[CHUCKLING]
Yeah. You know what that is. Down.
Trudy!
All the way down.
[GROANS]
Max!
Trudy, fire up the ship! Go!
Here.
Clear. Come on.
Here you go.
Max, stay here. I need someone on the inside I can trust.
Okay. Go.
NORM: [SOFTLY] Clear.
[ENGINE POWERING UP]
Come on, baby.
Colonel? Sir?
I got a situation here.
It's Samson - .
Unauthorized engine start.
NORM: [GRUNTING] Three!
Come on!
Mask on!
Gas, gas, gas!
I'm taking fire!
Let's go!
Grab my hand! Come on, we're in.
Let's go!
Come on, let's go!
Let's go, go!
Colonel!
[AIR HISSING]
Yeah! Yeah!
NORM: All right! Yes!
[LAUGHS]
[WHOOPING]
Crap.
TRUDY: Everybody all right back there?
JAKE: Oh, yeah, baby!
Norm, you good?
NORM: Yeah!
[GROANING] This is gonna ruin my whole day.
Grace is hit!
What?
Get the trauma kit.
Trauma kit!
Keep the pressure on, Grace.
Trauma kit's forward, on the bulkhead.
Hang on, Grace.
Doesn't matter.
It's fine.
[STIFLES GROAN]
JAKE ON RADIO: You're good to go.
Take it up!
TRUDY ON RADIO: Hold on. I'm pulling pitch.
You're clear!
Just keep going north. Get us deep in the mountains.
TRUDY: Copy that.
Norm, you all good up there?
Yep! Still here.
Well, at least they can't track us up here.
Not this far into the Vortex.
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
JAKE: The People say Eywa will provide.
With no home, no hope, there was only one place they could go.
[SOBBING]
Link's running.
What's the plan here, Jake?
There's no plan.
Tsu'tey is Olo'eyktan now.
He's not gonna let you near that place.
I gotta try.
Launching.
[EXHALES]
[COUGHING]
JAKE: Outcast.
Betrayer.
Alien.
I was in the place the eye does not see.
I needed their help, and they needed mine.
But to ever face them again,
I was gonna have to take it to a whole new level.
[SCREECHING]
[SCREECHING]
Sometimes your whole life boils down to one insane move.
There's something we gotta do.
You're not gonna like it.
Yah!
[SQUAWKING]
The way I had it figured, Toruk is the baddest cat in the sky.
Nothing att*cks him.
Easy, boy.
So why would he ever look up?
But that was just a theory.
[GRUNTING]
[ROARING]
[ALL SINGING IN NA'VI]
[ALL MURMURING IN GROWING ALARM]
[SCREAMING]
[ALL SCREAMING]
[ROARING]
Toruk Macto?
[GROWLING SOFTLY]
[VILLAGERS MURMURING]
[PANTING SOFTLY]
I See you.
I See you.
I was afraid, Jake.
For my people.
I'm not anymore.
[SPEAKING NA'VI]
[IN ENGLISH] You are Olo'eyktan, and you are a great warrior.
I can't do this without you.
[ROARING]
Toruk Macto,
I will fly with you.
My friend is dying.
Grace is dying.
I beg the help of Eywa.
[ALL CHANTING]
Look where we are, Grace.
I need to take some samples.
[JAKE CHUCKLING SOFTLY]
The Great Mother may choose to save all that she is in this body.
Is that possible?
She must pass through the eye of Eywa and return.
But, Jakesully, she is very weak.
Hang on, Grace. They're gonna fix you up.
[MO'AT SPEAKING NA'VI]
[ALL REPLYING IN NA'VI]
[ALL REPLYING IN NA'VI]
[ALL REPLYING IN NA'VI]
[ALL REPLYING IN NA'VI]
[ALL REPLYING IN NA'VI]
[ALL CHANTING]
[SPEAKS NA'VI]
[CHANTING STOPS]
[WEAKLY] Jake.
Grace.
I'm with her, Jake.
She's real!
[DISTANTLY] Grace? Grace, please. Grace!
What's happening?
What's happening?
Grace!
Grace!
JAKE: What's happening?
Did it work?
Her wounds were too great. It was not enough time.
She is with Eywa now.
With your permission, I will speak now.
You would honor me by translating.
The Sky People have sent us a message
[TSU'TEY TRANSLATING]
that they can take whatever they want and no one can stop them.
Well, we will send them a message.
You ride out as fast as the wind can carry you.
You tell the other clans to come.
[EXCLAIMING IN AGREEMENT]
You tell them Toruk Macto calls to them.
And you fly now with me!
My brothers!
Sisters!
[ALL HOOTING]
And we will show the Sky People that they cannot take whatever they want, and that this, this is our land!
[REPEATING IN NA'VI]
[ALL CHEERING]
[ROARS] Yah!
[EXCLAIMING IN NA'VI]
Yah!
[SCREECHING]
[ALL CHATTERING EXCITEDLY]
[HOOTING]
Yah!
JAKE: We rode out to the four winds.
[SHOUTS IN NA'VI]
To the horse clans of the plain.
JAKE: Back to the stars!
To the ikran people of the Eastern Sea.
For our children's children!
When Toruk Macto called them, they came.
[SHOUTING IN NA'VI]
[ALL CHEERING]
Yah!
[ULULATING]
[NEYTIRI HOOTING]
Everyone on this base, every one of you, is fighting for survival.
That's a fact!
There's an aboriginal horde out there massing for an att*ck.
Now, these orbital images tell me that the hostiles' numbers have gone from a few hundred to well over , in one day.
And more are pouring in.
In a week's time, there could be , of them.
At that point, they will overrun our perimeter.
Well, that's not gonna happen!
Our only security lies in pre-emptive att*ck.
We will fight terror with terror.
Now, the hostiles believe that this mountain stronghold of theirs is protected by their...
[SCORNFULLY]
Their deity.
[SOLDIERS SNICKERING]
And when we destroy it, we will blast a crater in their racial memory so deep that they won't come within , klicks of this place ever again.
And that, too, is a fact.
[SOLDIERS CHEERING]
Yeah! Yeah.
[SOLDIERS CHATTERING]
Jake, it's crazy here. It's full mobilization.
They're rigging the shuttle as a b*mb.
They've got these huge pallets of mine expl*sives.
It's for some kind of shock-and-awe campaign.
Fricking daisy cutters!
Quaritch has taken over.
He's rolling, and there's no stopping him.
When?
tomorrow.
WOMAN: Max! Max! I gotta go.
We're screwed!
[TRUDY LAUGHING]
And I was hoping for some sort of tactical plan that didn't involve martyrdom.
TRUDY: We're going up against g*n with bows and arrows.
I have clans out there.
That's over , warriors.
Now, we know these mountains.
We fly them. You fly them.
They don't.
Their instruments won't work up here.
m*ssile tracking won't work.
They'll have to fire a line of sight.
If they bring the fight to us, then we have the home-field advantage.
You know he's gonna commit that b*mb straight to the Tree of Souls.
Yeah, I know.
If they get to the Tree of Souls, it's over.
That's their direct line to Eywa, their ancestors.
It'll destroy them.
Then I guess we'd better stop him.
[EXHALES SOFTLY]
I'm probably just talking to a tree right now.
[SIGHS]
But if you're there, I need to give you a heads-up.
If Grace is with you, look into her memories.
See the world we come from.
There's no green there.
They k*lled their Mother.
And they're gonna do the same here.
More Sky People are gonna come.
They're gonna come like a rain that never ends.
Unless we stop them.
Look, you chose me for something.
I will stand and fight.
You know I will.
But I need a little help here.
Our Great Mother does not take sides, Jake.
[SIGHS]
She protects only the balance of life.
It was worth a try.
[BOTH SIGHING]
MAN: Yeah! Yeah! That's what I'm talking about!
Yeah! Yeah! That's what I'm talking about, man!
This is Group Leader. We are entering the Flux Vortex.
Switch to manual flight mode.
PILOT: Copy. Manual flight mode.
This is Papa Dragon.
I want this mission high and tight.
I want to be home for dinner.
Suit Team, go.
All right, ladies, let's bring the pain!
STAFF SERGEANT: Move, move, move!
AMPSUIT COMMANDER : Bravo - , move left.
AMPSUIT COMMANDER : Bravo - moving left.
Watch flank.
Watch formation. Keep moving.
AMPSUIT COMMANDER : Roger that.
Charlie - , watch your spacing.
AMPSUIT COMMANDER : Copy that. Over.
Eyes up. Check that overhead.
And watch those thermal scans.
All call signs, Papa has lead, pushing to target.
Escorts, stay close on my shuttle.
We are gonna lose some paint in here.
QUARITCH: g*n crews, keep your head on a swivel.
Make no mistake, people, they're out there.
All right, people, target in sight.
Range, four klicks.
Valkyrie - , get your payload ready.
Copy.
Prepare to offload.
Staff Sergeant, stage the w*apon.
Roll it to the ramp!
Let's go!
Hold!
AMPSUIT COMMANDER : Charlie - , got big movement.
Hold position. Hold up, hold up.
We got movement out there, meters.
Charlie - , hold position.
Sir, ground has movement!
Fast approaching.
PILOT: Charlie Oscar, Rider section.
f*ring line!
Targets closing. Range, meters.
Can't you clean it up?
No, sir.
It's the Flux.
[SHOUTING]
[WHOOPING]
[WARRIORS HOOTING]
[SCREAMING]
[SCREECHING]
[HOOTING]
[SHOUTING IN NA'VI]
[ULULATING]
[WHOOPING]
[ULULATING]
Brother, I'm gonna punch a hole.
You follow me through.
[RESPONDS IN NA'VI]
[ALL ULULATING]
[APPROACHING w*r CRIES]
[SCREECHING]
[SCREAMING]
[EXCLAIMING]
[EXCLAIMING]
[EXCLAIMS]
All aircraft, w*apon free!
w*apon free!
Break right.
Come around.
Light them up!
Break formation, engage all hostiles.
Yeah! Get some!
[SCREAMING]
[SCREAMING]
[SCREAMING]
Scorpions, pursue and destroy.
Jake! Jake!
You copy?
We're falling back!
We're getting hammered!
Copy.
Get out of there.
[SCREECHING]
That's him.
Get after him!
Take him out!
Oops.
Light her up!
Right there!
You're not the only one with a g*n, bitch.
Keep her in your sights. Purging.
Feeding the leak.
Arming all pods.
That's it!
[GASPS]
[SHRIEKS]
[GRUNTING]
Seze!
[GASPING IN CONCERN]
[SHRIEKS]
[SCREAMS]
[SCREAMS]
[SHOUTING]
TRUDY: Rogue One is hit. I'm going in.
Sorry, Jake.
[GRUNTS]
Fire.
[PANTING]
Tsu'tey! Brother, do you read?
Rogue One, you copy?
Trudy!
[GASPING]
Time to target, two minutes.
Valkyrie - , you are cleared and hot.
Copy, Dragon. We are starting our b*mb run.
Arm number one!
Number one armed!
Ma Jake!
I read you.
JAKE: Neytiri!
Seze's dead.
They are very close.
They are many.
Do not att*ck.
Do you read me, Neytiri?
Do not att*ck!
Fall back now. Get out of there! That's an order!
Neytiri!
AMPSUIT COMMANDER : I got movement, I got movement.
Hold position.
Something's coming.
AMPSUIT COMMANDER : Bravo - , I got a big seating.
Turn screens over.
We got movement meters.
Hold your formation.
Be ready. Watch your flanks.
Hundred meters and closing fast.
[TRUMPETING]
[EXCLAIMING]
We gotta get out of here!
Fall back! Fall back! AMPSUIT COMMANDER : Move! Move! Move!
Fall back! On the run! On the run!
[SCREAMING]
Jake, Eywa has heard you.
[SCREECHING]
Eywa has heard you!
[ALL SCREECHING]
Come on!
[SNARLING]
Fall back!
Move! Move!
[SCREAMING]
[EXCLAIMS]
[ROARING]
[ROARS]
[EXHALES SLOWLY]
PILOT: Sir! All escorts are down or falling back.
Let's get this done. Valkyrie - , this is Dragon.
Press to target.
Copy.
Pressing to target.
Stand by to drop, seconds.
[SHOUTING]
On my mark.
Two, one, mark.
Drop! Drop! Drop!
Go, go, go, go!
[SCREAMING]
QUARITCH: Brace!
QUARITCH: It's Sully.
[ALARM BLARING]
Mask on!
Breach alarm!
[GRUNTING]
[SCREAMING]
[GRUNTING]
[GRUNTING]
[GRUNTS]
[ROARING]
[SCREAMING]
[SCREAMING]
[GRUNTING]
Come on.
Come to papa.
[NEYTIRI SCREAMING]
[HOWLING IN PAIN]
[SHRIEKS]
[GRUNTING]
[NEYTIRI GROANING]
[HISSING]
JAKE: Give it up, Quaritch!
It's all over.
Nothing's over while I'm breathing.
I kind of hoped you'd say that.
[GRUNTING]
[ROARING]
[GASPING]
[GRUNTING]
[ALARM BEEPING]
Come on!
[GASPS]
Hey, Sully, how's it feel to betray your own race?
[HISSING]
You think you're one of them?
Time to wake up.
[ALARM BLARING]
[JAKE GRUNTING]
[GRUNTING]
[ALARM BLARING]
[COUGHING]
[GASPING]
[GASPING]
[GASPING]
[SCREAMING]
[GRUNTING]
[PANTING]
[GROANS]
[GASPING]
[EXCLAIMS]
[GRUNTS]
[HISSING]
Jake?
[GASPING]
[GRUNTING]
[GASPS]
Jake.
[PANTING SHALLOWLY]
Jake.
[GASPS]
[EXHALES]
[MOANING]
Jake! Ma Jake!
[AIR HISSING FAINTLY]
[COUGHING]
[PRESSURIZING]
[BREATHING DEEPLY]
I See you.
I See you.
JAKE: The aliens went back to their dying world.
Only a few were chosen to stay.
The time of great sorrow was ending.
Toruk Macto was no longer needed.
[SCREECHING]
Well, I guess this is my last video log.
'Cause whatever happens tonight, either way, I'm...
I'm not gonna be coming back to this place.
Well, I guess I'd better go.
Yeah, I don't want to be late for my own party.
[CHUCKLES]
Yeah, it's my birthday, after all.
This is Jake Sully signing off.
[ALL CHANTING]
[SPEAKING NA'VI]
Walking through a dream
I see you
My light in darkness breathing hope of new life
Now I live through you and you through me
Enchanting
I pray in my heart
That this dream never ends
I see me through your eyes
Breathing new life, flying high
Your love shines the way into paradise
So I offer my life
I offer my love for you
And my heart was never open
And my spirit never free
To the world that you have shown me
But my eyes could not envision
All the colors of love and of life evermore
Evermore
I see me through your eyes
Flying high
Your love shines the way into paradise
So I offer my life as a sacrifice
I live through your love
I live
Through your life
I see you
I see you
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
