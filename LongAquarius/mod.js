
module.exports = {
  title: `Long Aquarius`,
  summary: `Long Aquarius`,
  description: `Long Aquarius`,

  author: "Long Aquarius",
  version: 0.1,

  trees: {
    './panels/': 'assets://storyfiles/hs2/'
	//This tree replaces every panel with the aquarius symbol in it with the corresponding panel in the "panels" folder of the mod.
	//Note that file names must match exactly, meaning i have to save static images as .gif files.
	//Also there's fucken' number drift somehow?? Like, panel 2402 is named "02401.gif"! What is this nonsense??
	//(It's probably because of the missing pages, like 2399. Still kinda annoying tho, and it only gets worse later on.)
	//At least panels 2402 and 2406 are exactly the same, saves me some effort.
	//Can you tell i employed the time-favored tactic of "giving the fuck up" for the Do something ridiculous scene?
	//I keep going back and forth on whether to render long aquarius in front of everything, or behind objects it would logically be obscured by. Leaning towards the latter.
	//Lol i got to phone it in so hard on panel 2459, love it when that happens.
	//I'm sure there's a better way to edit gifs than splitting it into the composite frames, editing each one, then putting 'em back together, but that's what i do for gifs.
	//I'm also streamlining the process as i go, which is nice. Take panel 2474, for example. 8 frames, and every other one has the two aquarius symbols moving one pixel up/down, chat bubble style.
	//Using paint.net, i paste my LongAquarius template on a new layer, magic wand out the white part, then copy it and adjust both to line up.
	//From there, i usually do the frames in order, but if i did that here i'd have to adjust the positioning of each long aquarius every time, and i can't do both at once because they move opposite of each other.
	//Instead, i edited frames 1, 3, 5, and 7 first, which all have the aquariuses in the same place, then i only had to adjust once for frame 2, which lines up with 4, 6, and 8.
	//All this because Jack Noir wanted to get slap-happy.
	//I'm not editing the flashes, that'd take more effort than i'm willing to put in for a shitpost mod.
	//Panel 2805 is a weird one to edit. It's also a weird panel in general, artistically speaking.
	//Ok i'll admit: For panel 3361, i actually removed the aquarius sign from the left lens entirely. It was perfectly parallel to the other one, but having them both makes a weird, sort of gaunt overlap.
	//Also the gun and torso don't move relative to each other, which saved me *so much time*, you have no idea.
	//I'm not editing 3508, Dualscar's symbol is too interwoven with his outfit. Plus it'd be basically impossible to see anyway.
	//Weird to think how we don't see the aquarius symbol at all between Eridan getting chainsaw'd and Jake trying to solicit Erisol's relationship advice.
	//That's a pretty big gap, even for a dead character, considering the work.
	//Made it all the way into the trickster arc before running into an aquarius panel that got some retcon oil on it. I'm pleasantly surprised.
	//Panel 7853 is a load of bullshit. There's like, 7 copies of a two-pixel crop of the aquarius pixel, my ass is *not* doing that.
	
	//Making my last checks before sending this out, panel 3174 is my favorite edit. So fucking dumb.
  },

  computed(api) {

    // Compute footnotes object
    let notes = []
    notes.push({
        "author": "Long Aquarius",
        "story": story_longaquarius
	  })
	
	return {
		footnotes: notes
    }
  }
  
}

story_longaquarius = {
  "008761": [{
	"content": `This panel is fucking cursed. I can't get the edit to work.` //Unless it works on your machine, in which case feel free to ignore this.
  }],
  "009946": [{
	"content": `I'm not editing this one.`
  }]
}