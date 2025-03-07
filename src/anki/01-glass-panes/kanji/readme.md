# Kanji Card Template
Style: `Glass Panes`
<br> Individual Files: `front.html`, `back.html`, `styles.css` 
<br> Shared Files: `_bg-bluepaper01.jpg`, `_glasspanes-shared-styles.css`

## Shared Files
All three note types (`vocab`, `kanji`, and `radicals`) depend on two shared files. These files are included 

## Front Features
The `front` contains an input field that asks for the `Reading` of the words, not the meaning. Only one input field per side is supported by Anki. 

The `front` also contains a clickable field with a hint.

## JavaScript
A few JavaScript code blocks embedded in `back.html` allow for several fields[^2] in my cards to be pulled in as strings, separated, then formatted and displayed back onto the card in tidy little boxes.
[^2]:`tags`, `components`, `onyomi-reading`, and `kunyomi-reading` fields.

## Shared Files
Place `_glasspanes-shared-styles.css` and `_bg-bluepaper01.jpg` in your `~/media.collections/` folder.

## Card Fields
The Vocab `Note Type` contains the following fields
- Kanji
- Meaning
- Components
- Meaning Notes
- Reading
- On'yomi Reading
- Kun'yomi Reading
- Reading Notes
- Stroke Order
- Reading Hint