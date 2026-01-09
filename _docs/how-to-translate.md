---
layout: default
title: How to - Translate
---

# Intro
Mod support should be in english, but it could help people that doesn't speak english... in case you support their language.
Age of Empires IV supports following languages:

| Language | Internal Name |
|----------|---------------|
| English | en |
| Chinese (Simplified) | zh-Hans |
| Chinese (Traditional) | zh-Hant |
| French | fr |
| German | de |
| Italian | it |
| Japanese | ja |
| Korean | ko |
| Malay | ms |
| Portuguese (Brazil) | pt-BR |
| Russian | ru |
| Spanish (Latin America) | es-419 |
| Spanish (Spain) | es |
| Turkish | tr |
| Vietnamese | vi |

## Setup Inline Editing
Inline editing becomes very handy when working with the transaltion string. Let us make sure we have them enabled:

1. Open the settings under: Tools->Settings...
2. Navigate to: **Localization Settings**
3. Under **Translations** enable the **Edit Translations** setting and press Close.

## Activate supported languages
To setup multiple languages we need to open the: yourModName.locdb file, that you can find in the Asset Explorer under **locdb**.
On the left side inside the locdb-view we find a tab called: **Locales** that is currently the 3rd Tab you can click on.

Inside the **Locales** we see that most likely your first mod-language appeared, for me it would be english. By double-click on the 
**Display Name** we can choose 1 of the suggested languages, but we need to choose one of the recommened language from above -> only
these are supported from the engine of Age of Empires IV.

After adding your language you may have notived that another CSV file appeared inside the locdb-Folder with the Interal-Name of your
choosen language. When we go back on the 1st Tab **LocStrings** we do not see a difference right now. 

**Right-Click on the Table-Headers** and in the context menu you can now find the language you have choosen from -> click on it to view them.
Now you have another language added, repeat this for more languages.

<div class="info-box warning">
    <strong>Note:</strong> If your language does not show up, consider restarting the Content Editor.
</div>
