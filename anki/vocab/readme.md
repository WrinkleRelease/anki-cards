# Vocab Card Templates for Japanese

This folder contains the HTML for the card `front`, card `back`, and the CSS `styles` section. 

## Front Features
The `front` contains an input field that asks for the `Reading` of the words, not the meaning. Only one input field per side is supported by Anki. 

The `front` also contains a clickable field with a hint.

## Back Features
An external JavaScript file named `_script.js` is called from the `collection.media` folder to handle parsing and formatting of the `Context` section. It presents Japanese language and English translation sentence pairs nested in an HTML `<details>` tag to hide the translation until needed. 

<details>
<summary>この川はアマゾン川です。</summary>
This river is the Amazon River.
</details>

> [!IMPORTANT]
> Due to inconsistent JS behavior in Anki, the above  functionality has been temporarily deprecated in favor of a simplified HTML/CSS-only solution (shown in the screenshot below). While the solution above is preferable, Anki, for whatever reason, only runs the script on the first card reviewed in a batch. Any subsequent cards have their context sentences completely missing. 

## JavaScript
A few JavaScript code blocks embedded in in `back.html` allow for several fields in my cards to be pulled in as strings, separated, then formatted and displayed back onto the card in tidy little boxes. These include the `tags`, `components`, `word type`, `reading` and `patterns of use`.

## Card Fields
The Vocab note-type contains the following fields
- Word
- Meaning
- Word Type
- Components
- Meaning Notes
- Reading
- Reading Type
- Reading Notes
- Patterns of Use
- Context Sentences
- Reading Hint

## Screenshot
![vocab_back](https://github.com/user-attachments/assets/c2d16eec-651f-4a89-9214-e6d8caa83eb7)
