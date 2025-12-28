---
layout: default
title: Setup Content Editor
---

# Setup Content Editor

The Content Editor is the main tool for creating mods in Age of Empires IV. You can either find them in your local
installation file of your game or by installing the Age of Empires IV Content Editor (Beta) on steam.

## Within the game files

As soon as you install AoE IV, you most likely also download the "<strong>EssenceEditor.exe</strong>" within the files. This is
located in the root folder of your game. For example:

```
C:\Program Files (x86)\Steam\steamapps\common\Age of Empires IV
```

## By installing the AoE IV Content Editor (Beta)

### Steam

<strong>1.</strong> Make sure that you have all filters set in your "<strong>Steam-Library</strong>".

<div class="gif-frame">
	<img src="https://raw.githubusercontent.com/callfreak/aoeiv-unoffical-api/refs/heads/main/assets/images/gifs/filter-setup-part1.gif" alt="Not Found" class="responsive-gif">
</div>

<strong>2.</strong> Find the <strong>Age of Empires IV Content Editor (Beta)</strong> in your library and install it.

<div class="gif-frame">
	<img src="https://raw.githubusercontent.com/callfreak/aoeiv-unoffical-api/refs/heads/main/assets/images/gifs/filter-setup-part2.gif" alt="Not Found" class="responsive-gif">
</div>

### Windows Store

## Setup the debug arguments

For debugging your mods and gather information from the running Game, you need to start Age of Empires IV with some <strong>Launch Options</strong>.

### Steam

1. Right Click on your Age of Empires IV game in your steam-library.
2. Open the Properties/Settings
3. Under <strong>Launch Options</strong> paste in following text:

```
-dev -enableRpc
```

### Local installation

1. If not done already, create a Desktop-Shortcut from your game. The Exe is usually called <strong>RelicCardinal.exe</strong>
2. On your Desktop-Shortcut, right click and open its properties.
3. On the <strong>Path</strong> to your <strong>RelicCardinal.exe</strong>, add following text <strong>behind</strong> the path:

```
-dev -enableRpc
```

It would look similar to this:

```
"C:\Program Files (x86)\Steam\steamapps\common\Age of Empires IV\RelicCardinal.exe" -dev -enableRpc
```

<div class="info-box warning">
<strong>Note:</strong> <strong>Before</strong> using your game regulary for <strong>online matches, remove the arguments again!</strong>
</div>

<div class="info-box warning">
<strong>Note:</strong> This page is missing information on the Windows Store procedure.
If you want to add some knowledge to this Page please write an email with additional information to:
<strong>bhm.manuel@gmail.com</strong>
</div>
