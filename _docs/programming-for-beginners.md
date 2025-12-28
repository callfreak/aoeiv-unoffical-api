---
layout: default
title: Programming for beginners
---

# Introduction

I can't give you a full tutorial on all things here, but some basics that I will show you in simple language that I'm
capable off. Programming is only hard for those who not understand it now, but we want to change that!

## A BIG Text?

Yes, many lines of text in a specific order(syntax) is basically a code. How can you imagine a PC reading it?
Simple: He does from Line to Line.

1. Reading/Execute Line 1
2. Reading/Execute Line 2
3. Reading/Execute Line 3

If a line is empty -> He ignores it and skip that line.
If the line is only a comment -> Also ignoring that. 

### Comments

Comments vary on the language and we will use a double minus '--' before the Comment to tell the Editor that he can skip it.
Comments are used for explaining code and making it better understandable for you and others.

```lua
-- This is a comment that will be ignored
doSomething()

doSomethingElse()
-- This is also a comment that will be ignored

-- This is a commented code that will be ignored too!
-- doSomethingElse()
```


### IF and ELSE?

A <strong>big</strong> statement in many, many languages you will find is the <strong>IF statement</strong>.
Its like opening a door but only with the right key... when u dont have the right key it will not open and be skipped.

For example: We want reveal the player's position, if the player is playing as the 'English' Civ:

```lua
-- Get the player from the 1st entry of all players in our match
-- Players is a collection and they start from 0 -> Entry 1 is [0] and Entry 2 is [1]....
playerOne = PLAYERS[0]

-- Returns the civilazation name of the given player
playerOne_civ = Player_GetRaceName(playerOne.id)

-- IF the civilazation is equals(==) the text of english then do following code until 'end'
if playerOne_civ == "english" then

		-- Reveal Town Center locations for 30 seconds in a radius of 40 Fields
		FOW_RevealArea(playerOne.town_center.position, 40, 30)
end
```

<strong>IF</strong> we want to ask more than just 1 condition, we can use keywords like 'and', 'or' for more complex
conditions:

```lua
-- Get the player from the 1st entry of all players in our match
-- Players is a collection and they start from 0 -> Entry 1 is [0] and Entry 2 is [1]....
playerOne = PLAYERS[0]

-- Returns the civilazation name of the given player
playerOne_civ = Player_GetRaceName(playerOne.id)

-- This is a boolean this can be only: 0 or 1 (False or True)
playerOne_isLocal = playerOne.isLocal

-- IF the civilazation is equals(==) the text of english then do following code until 'end'
-- AND if the player is run local on our computer (1 = True)
if playerOne_civ == "english" and playerOne_isLocal == 1 then

		-- Reveal Town Center locations for 30 seconds in a radius of 40 Fields
		FOW_RevealArea(playerOne.town_center.position, 40, 30)
end
```

<strong>IF</strong> we want to ask other conditions when it would be skipped, we can use keywords elseif and else as alternative
conditions:

```lua
-- Get the player from the 1st entry of all players in our match
-- Players is a collection and they start from 0 -> Entry 1 is [0] and Entry 2 is [1]....
playerOne = PLAYERS[0]

-- Returns the civilazation name of the given player
playerOne_civ = Player_GetRaceName(playerOne.id)

-- This is a boolean this can be only: 0 or 1 (False or True)
playerOne_isLocal = playerOne.isLocal

-- IF the civilazation is equals(==) the text of english then do following code until 'end'
-- AND if the player is run local on our computer (1 = True)
if playerOne_civ == "english" and playerOne_isLocal == 1 then

		-- Reveal Town Center locations for 30 seconds in a radius of 40 Fields
		FOW_RevealArea(playerOne.town_center.position, 40, 30)
elseif playerOne_civ == "french" then

        -- elseif means exactly: else if -> do that 
        -- U can add as many elseif as you want after the IF and always before the ELSE and END
    	-- Reveal Town Center locations for 60 seconds in a radius of 40 Fields
		FOW_RevealArea(playerOne.town_center.position, 40, 60)
else

        -- else will be used if NONE of the condtions before (if, elseif) was executed
        -- Reveal Town Center locations for 10 seconds in a radius of 40 Fields
		FOW_RevealArea(playerOne.town_center.position, 40, 10)
end
```

### Looping making things easier!

If you have for example 8 Players in your game... we really dont want to repeat the same lines of code for each single player...
Really it would take too long and its not really dynamic, if the player count varies.
INSTEAD we should let the computer handle that! Like here:

```lua
    -- We creating 4 Values with their value to 200
    foodAmount = 200
    woodAmount = 200
    goldAmount = 200
    stoneAmount = 200

    -- FROM THE CONTENT EDITOR EXAMPLE:
    -- This is a for loop that does something for each player in the match.
	-- PLAYERS is a table that contains all of the players in the match.
	-- If there are two players it will run twice, if there are eight players it will run eight times, etc.
	for i, player in pairs(PLAYERS) do
		
		-- Add resource amount that we configured above (200)
		Player_AddResource(player.id, RT_Food, foodAmount)
		Player_AddResource(player.id, RT_Wood, woodAmount)
		Player_AddResource(player.id, RT_Gold, goldAmount)
		Player_AddResource(player.id, RT_Stone, stoneAmount)
		
		-- This checks if the player being looped through is the local player.
		-- It is useful to check if the player is local in cases where we only want a function to run once for each player.
		if player.isLocal then
			
            -- Adds an additional 500 food to our local player
			Player_AddResource(player.id, RT_Food, 500)
			
		end
	end
```

What happened here? <strong>PLAYERS</strong> is a Table(id + value) of all players in our match.

Means each player is in this table like:

| ID | Value |
|----|-------|
| 0 | player 1 |
| 1 | player 2 |
| 2 | player 3 |
| 3 | player 4 |

We split them into i(as ID) and player(as Value) -> The FOR and the keyword IN telling us:
For EACH player inside the Table(PLAYERS) do that: And it will repeat the inside code for each single value it has.


And only for 1 player which is our local player, we add an additional 500 ressource on food.
Heres the graphical example from player 1 to 3

<div class="gif-frame">
	<img src="https://raw.githubusercontent.com/callfreak/aoeiv-unoffical-api/refs/heads/main/assets/images/gifs/for-loop-example.gif" alt="Not Found" class="responsive-gif">
</div>


## Next Steps

- Create your first [Generated Map]({{ site.baseurl }}/docs/generate-maps)
- [Debug your Mod]({{ site.baseurl }}/docs/debug-your-mod)
