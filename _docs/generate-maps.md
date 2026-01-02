---
layout: default
title: Generate Maps
---

# Difference between Crafted and Generated Maps

- Crafted Maps is the "easy" way to create maps for AoE IV without programming knowledge, but as I have experienced it can be a buggy and difficult challenge.
Those maps does not, regenerate or much vary when you load into the match, neither it can have different map sizes, therefore you get the exact map as you created them 
in the Content Editor manually.

- Generated Maps will generate each time a match starts, it leads to a more "random" map experience. Those maps vary and cannot be edited manually except by your code.

| Feature | Crafted Maps | Generated Maps |
|---------|--------------|----------------|
| Map Generation | Manually editable, Fixed  | Regenerating by code, (Random) |
| Map Size | Fixed size up to Large (16 Players) | Dynamic size, depending on the lobby settings |
| Time consuming | Medium | Large |
| Difficulty | Beginner* | Advanced* |

*Recommened by the Content Editor

# Creating a Gererated Map project

1. Open the Content Editor
2. Under the **Get Started**, we select the **Create A New Mod** button
3. From all the existing Mods we choose the **Generated Map** option

## Template

From there we can choose between 2 templates:

- Basic: Includes basic instructions as an example, for beginners
- Advanced: Also has example instructions but also rivers and ocean examples, for advanced mep generation

We will **use the basic template** for our project.

## Names

The **Generated Map Name** has to be written **without!** any whitespaces or tabs. Otherwise the output log will give us an error.

The **Display Name** is the name, which players can see inside the game.

<div class="gif-frame">
	<img src="https://raw.githubusercontent.com/callfreak/aoeiv-unoffical-api/refs/heads/main/assets/images/gifs/display_name.png" alt="Not Found" class="responsive-gif">
</div>

After pressing next you should add your mod description, set your save location and the language of your mod.
When your done you can press **Fininsh**.

## Programming Order

<div class="info-box warning">
    <strong>Note:</strong> If you haven't done any programming yet, I suggest you watch basic tutorials or check out the <a href="{{ site.baseurl }}/docs/progamming-for-beginners">Programming for beginners</a>.
</div>

<svg style="left: 0px; top: 0px; width: 100%; height: 100%; display: block; min-width: 305px; min-height: 985px; background-image: none; background-color: transparent;"><g transformorigin="0 0" transform="scale(1,1)translate(-152,-72)"><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 220 120 L 220 169.88" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));" visibility="hidden" stroke-width="9"></path><path d="M 220 120 L 220 169.88" fill="none" stroke="#ffffff" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path><path d="M 220 178.88 L 215.5 169.88 L 224.5 169.88 Z" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));" visibility="hidden" stroke-width="9"></path><path d="M 220 178.88 L 215.5 169.88 L 224.5 169.88 Z" fill="none" stroke="#ffffff" stroke-miterlimit="10" pointer-events="all" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="160" y="80" width="120" height="40" rx="6" ry="6" fill="#000000" stroke="#ffffff" pointer-events="all" style="fill: light-dark(var(--ge-dark-color, #121212), #ffffff); stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></rect></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 100px; margin-left: 161px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#ffffff, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Inital (Start)</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 220 260 L 220 349.88" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));" visibility="hidden" stroke-width="9"></path><path d="M 220 260 L 220 349.88" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255, rgb(255, 255, 255));"></path><path d="M 220 358.88 L 215.5 349.88 L 224.5 349.88 Z" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));" visibility="hidden" stroke-width="9"></path><path d="M 220 358.88 L 215.5 349.88 L 224.5 349.88 Z" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 220 180 L 270 220 L 220 260 L 170 220 Z" fill="#ffffff" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(var(--ge-dark-color, #121212), #ffffff); stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 90px; height: 1px; padding-top: 218px; margin-left: 175px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#ffffff, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Create Grid</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 220 890 L 220 989.88" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));" visibility="hidden" stroke-width="9"></path><path d="M 220 890 L 220 989.88" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path><path d="M 220 998.88 L 215.5 989.88 L 224.5 989.88 Z" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));" visibility="hidden" stroke-width="9"></path><path d="M 220 998.88 L 215.5 989.88 L 224.5 989.88 Z" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 220 360 L 270 400 L 220 440 L 170 400 Z" fill="#ffffff" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(var(--ge-dark-color, #121212), #ffffff); stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 90px; height: 1px; padding-top: 398px; margin-left: 175px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#ffffff, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Define<br>Grid Tiles</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="160" y="1000" width="120" height="40" rx="6" ry="6" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(var(--ge-dark-color, #121212), #ffffff); stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></rect></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 1020px; margin-left: 161px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#ffffff, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Map Generated(End)</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 220 440 L 220 569.88" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));" visibility="hidden" stroke-width="9"></path><path d="M 220 440 L 220 569.88" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path><path d="M 220 578.88 L 215.5 569.88 L 224.5 569.88 Z" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));" visibility="hidden" stroke-width="9"></path><path d="M 220 578.88 L 215.5 569.88 L 224.5 569.88 Z" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 220 580 L 270 620 L 220 660 L 170 620 Z" fill="#ffffff" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(var(--ge-dark-color, #121212), #ffffff); stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 90px; height: 1px; padding-top: 618px; margin-left: 175px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#ffffff, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Define<br>Player Spawn</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 220 660 L 220 779.88" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));" visibility="hidden" stroke-width="9"></path><path d="M 220 660 L 220 779.88" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path><path d="M 220 788.88 L 215.5 779.88 L 224.5 779.88 Z" fill="none" stroke="white" stroke-miterlimit="10" pointer-events="stroke" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));" visibility="hidden" stroke-width="9"></path><path d="M 220 788.88 L 215.5 779.88 L 224.5 779.88 Z" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 220 790 L 270 840 L 220 890 L 170 840 Z" fill="#ffffff" stroke="#000000" stroke-miterlimit="10" pointer-events="all" style="fill: light-dark(var(--ge-dark-color, #121212), #ffffff); stroke: light-dark(rgb(255, 255, 255), rgb(255, 255, 255));"></path></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 90px; height: 1px; padding-top: 838px; margin-left: 175px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#ffffff, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Game spawn<br>resources</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="160" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="160" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="160" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="200" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="200" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="200" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="240" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="240" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="240" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(#ffffff, var(--ge-dark-color, #121212)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="360" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(51, 153, 255), rgb(51, 153, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="360" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(51, 153, 255), rgb(51, 153, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="360" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(102, 102, 102), rgb(102, 102, 102)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="400" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="400" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="400" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(102, 102, 102), rgb(102, 102, 102)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="440" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="440" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="440" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="560" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(51, 153, 255), rgb(51, 153, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="560" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(51, 153, 255), rgb(51, 153, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="560" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(102, 102, 102), rgb(102, 102, 102)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="600" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 38px; height: 1px; padding-top: 620px; margin-left: 321px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">1</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="600" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="600" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(102, 102, 102), rgb(102, 102, 102)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="640" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="640" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="640" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 38px; height: 1px; padding-top: 660px; margin-left: 401px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">2</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="780" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(51, 153, 255), rgb(51, 153, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 38px; height: 1px; padding-top: 800px; margin-left: 321px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Fish</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="780" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(51, 153, 255), rgb(51, 153, 255)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="780" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(102, 102, 102), rgb(102, 102, 102)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="820" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 38px; height: 1px; padding-top: 840px; margin-left: 321px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">1</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="820" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 38px; height: 1px; padding-top: 840px; margin-left: 361px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Gold</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="820" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(102, 102, 102), rgb(102, 102, 102)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="320" y="860" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="360" y="860" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 38px; height: 1px; padding-top: 880px; margin-left: 361px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Deer</div></div></div></foreignObject></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="400" y="860" width="40" height="40" fill="#ffffff" stroke="#000000" pointer-events="all" style="fill: light-dark(rgb(0, 204, 0), rgb(0, 204, 0)); stroke: light-dark(rgb(0, 0, 0), rgb(255, 255, 255));"></rect></g><g style=""><g><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%"><div style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 38px; height: 1px; padding-top: 880px; margin-left: 401px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; color: #000000; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: light-dark(#000000, #ffffff); line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">2</div></div></div></foreignObject></g></g></g><g></g><g></g></g></svg>

As soon as your Content Editor finished loading you will be greeted by a big long code with many, many commentary! Thats good but, how do we actually use all those things they
throwing at us? Let's start step-by-step... Here it what the code looks like without the commentary and examples:

```lua
terrainLayoutResult = {}

gridHeight, gridWidth, gridSize = SetCoarseGrid()

if (gridHeight % 2 == 0) then
	gridHeight = gridHeight - 1
end

if (gridWidth % 2 == 0) then
	gridWidth = gridWidth - 1
end


gridSize = gridWidth

playerStarts = worldPlayerCount

n = tt_none
h = tt_hills
s = tt_mountains_small
m = tt_mountains
i = tt_impasse_mountains
b = tt_hills_low_rolling
mr = tt_hills_med_rolling
hr = tt_hills_high_rolling
low = tt_plateau_low
med = tt_plateau_med
high = tt_plateau_high
p = tt_plains
t = tt_impasse_trees_plains
v = tt_valley

--bounty squares are used to populate an area of the map with extra resources
bb = tt_bounty_berries_flatland
bg = tt_bounty_gold_plains

--the following are markers used to determine player and settlement spawn points
s = tt_player_start_hills
sp = tt_settlement_plains
sh = tt_settlement_hills
seb = tt_settlement_hills_high_rolling


--BASIC MAP SETUP-------------------------------------------------------------------------------------------------
terrainLayoutResult = SetUpGrid(gridSize, p, terrainLayoutResult)

baseGridSize = 13
mapMidPoint = math.ceil(gridSize / 2)

--set a few more useful values to use in creating specific types of map features
mapHalfSize = math.ceil(gridSize/2)
mapQuarterSize = math.ceil(gridSize/4)
mapEighthSize = math.ceil(gridSize/8)

--Here's a basic loop that will iterate through all squares in your map
for row = 1, gridSize do
	for col = 1, gridSize do
	
	--do stuff with the grid here
	
	end
end

-- SETUP PLAYER STARTS-------------------------------------------------------------------------------------------------
teamsList, playersPerTeam = SetUpTeams()

teamMappingTable = CreateTeamMappingTable()
	
minPlayerDistance = 3.5

minTeamDistance = 8.5

edgeBuffer = 1

innerExclusion = 0.4

cornerThreshold = 2

playerStartTerrain = tt_player_start_classic_plains

impasseTypes = {}
table.insert(impasseTypes, tt_impasse_mountains)
table.insert(impasseTypes, tt_mountains)
table.insert(impasseTypes, tt_plateau_med)
table.insert(impasseTypes, tt_ocean)
table.insert(impasseTypes, tt_river)

impasseDistance = 2.5

topSelectionThreshold = 0.02

startBufferTerrain = tt_plains

startBufferRadius = 2

placeStartBuffer = true

terrainLayoutResult = PlacePlayerStartsRing(teamMappingTable, minTeamDistance, minPlayerDistance, edgeBuffer, innerExclusion, cornerThreshold, impasseTypes, impasseDistance, topSelectionThreshold, playerStartTerrain, startBufferTerrain, startBufferRadius, placeStartBuffer, terrainLayoutResult)

```

### The start

Our map generates based on a grid layout, so at the beginning we:

1. Get the Grid Height, Width and Size.
2. Making sure the Grid Width and Height is always an odd number like (13).
3. Setting the Size, same as the Width to gurantee a Square Map.
4. (Optional) we get the count of players, our match starts with.

```lua
-- Init Layout
terrainLayoutResult = {}

-- Get Height, Width, Size
gridHeight, gridWidth, gridSize = SetCoarseGrid()

-- If they can be divided 2 without decimal places -> subtract 1 from the value
if (gridHeight % 2 == 0) then
	gridHeight = gridHeight - 1
end

if (gridWidth % 2 == 0) then
	gridWidth = gridWidth - 1
end

-- Make it equal Size for a square map
gridSize = gridWidth

-- (Optional) getting the player count
playerStarts = worldPlayerCount
```

### Tile definitions (Terrain-Types)

After the start section you can find also some (optional) declarations of terrain information per tile:

```lua
n = tt_none
h = tt_hills
s = tt_mountains_small
m = tt_mountains
i = tt_impasse_mountains
b = tt_hills_low_rolling
mr = tt_hills_med_rolling
hr = tt_hills_high_rolling
low = tt_plateau_low
med = tt_plateau_med
high = tt_plateau_high
p = tt_plains
t = tt_impasse_trees_plains
v = tt_valley

--bounty squares are used to populate an area of the map with extra resources
bb = tt_bounty_berries_flatland
bg = tt_bounty_gold_plains

--the following are markers used to determine player and settlement spawn points
s = tt_player_start_hills
sp = tt_settlement_plains
sh = tt_settlement_hills
seb = tt_settlement_hills_high_rolling
```

These values like "**tt_plains**" describes a terrain information and we will use these for each single tile, to create our map! They also define their
terrain heights, that means: **tt_plateau_med** is lower than **tt_plateau_high** inside the game.
Defining them as "**m = tt_mountains**" makes the code looks smaller, but I prefer to write them down -> Makes it clear what it really is!

Here I list my personally favorites to use:

<div class="info-box warning">
    <strong>Note:</strong> If you want to see ALL available terrain-types(tt) I listed them here: <a href="https://raw.githubusercontent.com/callfreak/aoeiv-unoffical-api/refs/heads/main/assets/raw/terrrain_types.txt">ALL Terrain Types</a>.
</div>

| Synonym | Meaning |
|---------|--------------|
| Low | Low raised terrain |
| Med | Medium raised terrain |
| High | High raised terrain |
| Impasse | No passable by units, like mountains |
| Settlement | Sometimes called markets |
| Market | Sometimes called settlements |

<div class="info-box warning">
    <strong>Note:</strong> It is not necessary to place tiles that provides extra resources, except you want too. Resources will be 
	equality placed for each player after the map was created by the game itself. Same for the players start location.
</div>

### Map setup: Tiles

This is where we will spend our most time(appart from the game). Here we tell each tile of our map, what kind of terrain it will use.
The most simple way is to use **For loops** -> Iterates each column and row of our grid(iterating). That means instead of writing 20+ lines of code,
we have it all central in 1 place(but its your choice). It also wont matter how big the grid size will be, since the loop always iterate through **all** tiles.

```lua
--BASIC MAP SETUP-------------------------------------------------------------------------------------------------
terrainLayoutResult = SetUpGrid(gridSize, p, terrainLayoutResult)

baseGridSize = 13
mapMidPoint = math.ceil(gridSize / 2)

--set a few more useful values to use in creating specific types of map features
mapHalfSize = math.ceil(gridSize/2)
mapQuarterSize = math.ceil(gridSize/4)
mapEighthSize = math.ceil(gridSize/8)

--Here's a basic loop that will iterate through all tiles in your map
for row = 1, gridSize do
	for col = 1, gridSize do
	
	--do stuff with the grid here
	
	end
end
```

You can also add more loops and lines to set your map up, but it needs to be in between:
```lua
terrainLayoutResult = SetUpGrid(gridSize, p, terrainLayoutResult)
```

and:
```lua
teamsList, playersPerTeam = SetUpTeams()
```

### Player start location

Finally we setting up the players start location, there are many values where we can change spawning locations for players. We will go through each of them:

<div class="info-box warning">
    <strong>Note:</strong> Except we already set a player start location on the tile setup before, the game will automatically create a spawnpoint based on the 
	setting from the lobby and the spawn method we will choose here.
</div>

```lua
-- SETUP PLAYER STARTS-------------------------------------------------------------------------------------------------
teamsList, playersPerTeam = SetUpTeams()

teamMappingTable = CreateTeamMappingTable()
	
minPlayerDistance = 3.5

minTeamDistance = 8.5

edgeBuffer = 1

innerExclusion = 0.4

cornerThreshold = 2

playerStartTerrain = tt_player_start_classic_plains

impasseTypes = {}
table.insert(impasseTypes, tt_impasse_mountains)
table.insert(impasseTypes, tt_mountains)
table.insert(impasseTypes, tt_plateau_med)
table.insert(impasseTypes, tt_ocean)
table.insert(impasseTypes, tt_river)

impasseDistance = 2.5

topSelectionThreshold = 0.02

startBufferTerrain = tt_plains

startBufferRadius = 2

placeStartBuffer = true

terrainLayoutResult = PlacePlayerStartsRing(teamMappingTable, minTeamDistance, minPlayerDistance, edgeBuffer, innerExclusion, cornerThreshold, impasseTypes, impasseDistance, topSelectionThreshold, playerStartTerrain, startBufferTerrain, startBufferRadius, placeStartBuffer, terrainLayoutResult)
```

In the first part we get players information from the lobby settings like: **Team Lists and Players per Team**. After this we create a detailed list of the teams for this lobby
with players information.
```lua
teamsList, playersPerTeam = SetUpTeams()

teamMappingTable = CreateTeamMappingTable()
```

The minimum space between players:
```lua
minPlayerDistance = 3.5
```

Minimum space between teams:
```lua
minTeamDistance = 8.5
```

Tiles between **the Edge of the Map** and the player:
```lua
edgeBuffer = 1
```

(In Percentage!) Defining in what area the players can **not spawn** away from the center tile -> 0.4 means 40% from from center of the map -> this results in
a 20% in left, right, up. down direction where no players are allowed to spawn.
```lua
innerExclusion = 0.4
```

Tiles between **the Corner of the Map** and the player:
```lua
cornerThreshold = 2
```

Tiles on where players spawn and information about their starting resources:
```lua
playerStartTerrain = tt_player_start_classic_plains
```

Impasse types are tiles where players cannot spawn on, additional to the previous settings. All tiles we insert prevent the generator from spawning a player on this 
terrain type. Like for example oceans or rivers:
```lua
impasseTypes = {}
table.insert(impasseTypes, tt_impasse_mountains)
table.insert(impasseTypes, tt_mountains)
table.insert(impasseTypes, tt_plateau_med)
table.insert(impasseTypes, tt_ocean)
table.insert(impasseTypes, tt_river)
```

The distance from the player to the defined Impasse Types is set here:
```lua
impasseDistance = 2.5
```

**topSelectionThreshold** controls how small the "best spawn area" should be.
The system sorts all spawn locations by distance to the allies, then it only keeps a small percentage of the closest ones.

Example:
A value of 0.02 means only the closest 2% of all spawn points are allowed.
If the map has 500 possible spawn locations, 2% of 500 = 10.
So only the 10 closest positions will be used for spawning.

<div class="info-box warning">
    Smaller value = allies spawn very close together. 
	Larger value = more spawn options, allies can be farther apart.
</div>

```lua
topSelectionThreshold = 0.02
```

Start Buffer Terrain:

This buffer terrain, ensure that around the players start location is enough space or building... Its optional but recommended. 
The **startBufferTerrain** tells the type of terrain(Make sure it fits your created map tiles, otherwise you may encounter **Evalutaion differencies**).
The **startBufferRadius** it the tile radius around the player spawn, on which the **startBufferTerrain** will be override your set up terrain.
**placeStartBuffer** and here we can choose if we want to use the Buffer Terrain **true** or if we do not want **false**.

```lua
startBufferTerrain = tt_plains

startBufferRadius = 2

placeStartBuffer = true
```

Finally: How should the game spawn our players? In a ring? In a line? We will do that here:
```lua
-- Places players in a ring formation
terrainLayoutResult = PlacePlayerStartsRing(teamMappingTable, minTeamDistance, minPlayerDistance, edgeBuffer, innerExclusion, cornerThreshold, impasseTypes, impasseDistance, topSelectionThreshold, playerStartTerrain, startBufferTerrain, startBufferRadius, placeStartBuffer, terrainLayoutResult)
```

<div class="info-box warning">
    <strong>Note:</strong>The other spawn formations can be found here: NaN
</div>

## Next steps:
- Create a [Basic Mountain pass]({{ site.baseurl }}/docs/basic-moutain-pass)

## Related

- Browse the [API reference]({{ site.baseurl }}/docs/api)
- [Debug your Mod]({{ site.baseurl }}/docs/debug-your-mod)
