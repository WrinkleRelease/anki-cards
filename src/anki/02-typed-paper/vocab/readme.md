# Vocab Card Template
Style: `Typed Paper`
<br> Individual Files: `front.html`, `back.html`, `styles.css` 
<br> Shared Files: `_----.jpg`, `_typedpaper-shared-styles.css`

## Features
The `front` contains an input field that asks for the `Reading` of the words, not the meaning. Only one input field per side is supported by Anki. 

The `front` also contains a clickable field with a hint.

Deprecated Features[^1]
[^1]: An external JavaScript file named `_script.js` is called from the `collection.media` folder to handle parsing and formatting of the `Context` section. It presents Japanese language and English translation sentence pairs nested in an HTML `<details>` tag to hide the translation until needed.

## JavaScript
A few JavaScript code blocks embedded in `back.html` allow for several fields[^2] in my cards to be pulled in as strings, separated, then formatted and displayed back onto the card in tidy little boxes. 
[^2]:`tags`, `components`, `word type`, and `patterns of use` fields.

## Background Images
This card calls, and tiles, a small background `.jpg`. Drop it in your /collections.media folder and it should sync fine with mobile versions of Anki.

## Shared Style Sheet
The three note types in this style pull from a file called `_shared-styles.css`. This files 

## Card Fields
The Vocab `Note Type` contains the following fields
- Vocabulary
- Meaning
- Word Type
- Components
- Meaning Notes
- Reading
- Reading Type
- Reading Notes
- Patterns of Use
- Context
- Reading Hint
