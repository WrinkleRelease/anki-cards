# Anki Card Templates for Japanese

## What is this?
I've created templates for the Anki flashcard program to assist in my Japanese lessons. The available styles are listed below. 

| Style | Note Types | Actively Maintained |
|-------|------------|---------------------|
| Glass Panes | `Radicals`, `Kanji`, `Vocab` | Yes |
| WaniKani Theme | `Radicals`, `Kanji`, `Vocab` | No|
| Verb Conjugation | `Verbs` | Yes |



## What's available?
This repository contains the `HTML`, `CSS` and `JavaScript` needed to style the cards, but does not contain the card decks themselves. The content for the `radicals`, `kanji`, and `vocab` decks were compiled from a paid service and is not free use. The `verbs` deck is the exception, as I am compiling that myself. Once I complete the deck with all the verbs used in the JLPT exams, I would be happy to offer it here for download.

@[WaniKani](https://github.com/WaniKani), and its parent company, @[Tofugo](https://github.com/tofugu), also host their own GitHub repos for the community to use.

---

# Kanji Table Data

Created for my own use, I have uploaded a `.csv` compiled from various source. It contains all the kanji taught on WaniKani, tested for across the JLPT, and taught in school in Japan. Also provided are columns that allow sorting by frequency of use. 

I have not yet cross-referenced this with readings or meanings yet. If you'd like to do so, feel free to contribute. 

## Explanation of Tag Semantics
The `::` acts as a nested folder in Anki. For this reason, the tags for any given Kanji use this to nest them once imported into Anki. For example, `WaniKani::L02` becomes `WaniKani/L02`, etc. 

## About Frequency Counts
There are many methodologies employed to measure the frequency of a particular kanji and they all vary slightly. I pulled my frequency data from the sites listed below under `Sources`. 

## Sources

° [WK Stats](https://www.wkstats.com/)
<br>¤ [KanjiDatabase](https://www.kanjidatabase.com/index.php)
<br>† [Kanji Frequency](https://scriptin.github.io/kanji-frequency/)