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

**NOTE (1/1/25):** Due to inconsistent JS behavior in Anki, the above functionality has been temporarily deprecated in favor of a simplified HTML/CSS-only solution. While the solution above is preferable, Anki, for whatever reason, only runs the script on the first card reviewed in a batch. Any subsequent cards have their context sentences completely missing.

## JavaScript
A few JavaScript code blocks embedded in the HTML allow for several fields in my cards to be pulled in as strings, separated, then formatted and displayed back onto the card in tidy little boxes.

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
- Context
- Reading Hint

## Screenshots
![Vocab Card Back](https://github.com/user-attachments/assets/f7871c81-ea5a-46e5-856f-977cb4dcb2b9)

