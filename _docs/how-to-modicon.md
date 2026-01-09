---
layout: default
title: How to - Mod Icon(Generated Maps)
---

# Intro
This is a how-to for **generated maps** mods and their icon in the map selection screen.
The general mod png-file is in the root folder of your project **mod.png** -> this applies to all mods.

## Icon Size

Your icon needs to have a size of the power of 2, like:
- 256
- 512(recommended)

Also it should be an **PNG**(recommended) or **TGA** file

## Folder structure
Inside your mod folder, under **assets** we need to add 2 folders:
- ui
  - icons

There you can put your icon image.

<div class="info-box warning">
    <strong>Example Path:</strong> C:\Users\YourName\Documents\ModName\assets\ui\icons\modname_icon.png
</div>

## Attribute
Open the **Attribute Editor** inside the Content Editor and navigate to:
- map_gen
  - map_gen_layout

In the **Tree View** open the folder with your mod name on it, inside is the layoutfile with the same name that you can open.
Navigate:
- ui
  - image_icon

Now you can **drag-and-drop** your icon from the **Asset Explorer** on the left to the **Path value** of the **image_icon** entry.

## Bonus: Characteristics
When selecting maps and filtering, the user can see different characteristics like: elevation, ocean, point-of-interests. We can set those up by:

map_gen\map_gen_layout\ui -> **characteristics** -> Right Click -> Add..

From there you have the list of all characteristics to choose from. You can add multiple entries if needed.