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
![Vocab Card Back](https://github.com/user-attachments/assets/a7e7045f-3986-4d8d-a5e5-e3669e5e4703)
