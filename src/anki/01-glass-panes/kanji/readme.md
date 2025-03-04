# Kanji Card Template
Style: `Glass Panes`
Individual Files: `front.html`, `back.html`, `styles.css` Shared Files: `_bg-bluepaper01.jpg`, `_shared-styles.css`

## Shared Files
All three note types (`vocab`, `kanji`, and `radicals`) depend on two shared files. These files are included 

## Front Features
The `front` contains an input field that asks for the `Reading` of the words, not the meaning. Only one input field per side is supported by Anki. 

The `front` also contains a clickable field with a hint.

## JavaScript
A few JavaScript code blocks embedded in `back.html` allow for several fields[^2] in my cards to be pulled in as strings, separated, then formatted and displayed back onto the card in tidy little boxes.
[^2]:`tags`, `components`, `onyomi-reading`, and `kunyomi-reading` fields.

## Background Images
This card calls, and tiles, a small background `.jpg`. Drop it in your /collections.media folder and it should sync fine with mobile versions of Anki.

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