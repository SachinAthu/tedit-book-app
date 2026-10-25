---
title: 2.10 Character Encoding
---

In the previous section, we learned how a terminal emulator displays characters using fonts, glyphs, and a character grid.

However, another important question remains:

> **How does a computer know which character a particular byte represents?**

Suppose a program writes the character:

```text
A
```

The computer does not store the letter "A" directly.

Computers store numbers.

Somehow, the letter **A** must be assigned a numeric value so that every program interprets it in exactly the same way.

The system that defines this mapping between characters and numbers is called **character encoding**.

Without a standard encoding, one program might interpret a number as the letter "A," while another might interpret the same number as an entirely different character.

Character encoding provides a common language that allows software to exchange textual information reliably.

## ASCII: The First Widely Adopted Standard

One of the earliest and most influential character encodings was **ASCII**, short for the **American Standard Code for Information Interchange**.

ASCII assigns a unique number to each supported character.

For example, the capital letter **A** is assigned the number **65**.

Conceptually, the process looks like this:

```text
'A'

↓

65

↓

01000001
```

When a program stores or transmits the letter **A**, it is actually storing or transmitting the number **65**.

At the hardware level, that number is represented as binary digits.

The terminal emulator eventually receives those bits, interprets them according to the ASCII standard, and displays the corresponding character.

This process happens for every printable character.

For example:

| Character | Decimal Value |
| --------: | ------------: |
|         A |            65 |
|         B |            66 |
|         C |            67 |
|         a |            97 |
|         b |            98 |
|         0 |            48 |
|     Space |            32 |

Although users think in terms of letters and symbols, computers ultimately manipulate numbers.

## More Than Letters

ASCII includes much more than the English alphabet.

It defines representations for:

- uppercase letters,
- lowercase letters,
- digits,
- punctuation,
- and a collection of non-printable control characters.

For example:

- the newline character,
- the tab character,
- and the carriage return

all have assigned numeric values even though they are not displayed as visible symbols.

These control characters allow text to contain formatting instructions as well as printable content.

Earlier in this chapter, we encountered the newline character:

```c
printf("Hello\n");
```

The `\n` is not two separate characters.

It represents the newline character, which in ASCII is assigned the value 10 (hexadecimal 0x0A).

When interpreted by the terminal emulator, it causes the cursor to move to the beginning of the next line rather than displaying a visible symbol.

## Why ASCII Was Not Enough

ASCII was a tremendous success because it provided a common standard for representing text.

However, it had an important limitation.

It was designed primarily for **English**.

While ASCII handled English letters, digits, and common punctuation well, it provided little or no support for the thousands of characters used by other languages.

Consider a few examples.

```text
English

Hello

French

Français

Greek

Ελληνικά

Japanese

こんにちは

Arabic

مرحبا
```

The world contains hundreds of writing systems.

A character encoding intended for global communication must be capable of representing far more than the English alphabet.

As computers spread internationally, many incompatible encoding systems were developed to support different languages and regions.

Unfortunately, these systems often disagreed about which numbers represented which characters.

A document created on one computer might appear as unreadable symbols on another using a different encoding.

This lack of a universal standard made exchanging text increasingly difficult.

A better solution was needed.

## Unicode

To solve this problem, the computing industry developed **Unicode**.

Unicode is a universal character standard that assigns a unique identity to virtually every character used in modern writing systems.

Rather than focusing on a single language, Unicode aims to represent text from around the world within one unified system.

Its repertoire includes:

- Latin alphabets,
- Greek,
- Cyrillic,
- Arabic,
- Hebrew,
- Chinese,
- Japanese,
- Korean,
- mathematical symbols,
- currency symbols,
- and many thousands of additional characters.

Even emoji are part of Unicode.

The key idea is that every character has a unique identity, allowing software on different platforms and in different countries to exchange text consistently.

For modern software, Unicode is the foundation of international text processing.

## Unicode and Character Encoding

At first glance, Unicode may seem similar to ASCII.

Both assign identities to characters.

However, Unicode itself is **not** a method for storing bytes in memory.

Instead, Unicode defines **which characters exist** and gives each one a unique code point.

A separate encoding is then responsible for converting those code points into actual bytes that computers can store and transmit.

Several Unicode encodings exist.

The most widely used today is **UTF-8**.

## UTF-8

**UTF-8** is the dominant character encoding used on modern Unix-like systems and throughout the Internet.

Instead of assigning every character the same number of bytes, UTF-8 uses a **variable-length encoding**.

This means that different characters may occupy different numbers of bytes.

For example:

- common English characters use very little storage,
- while characters from other writing systems may require additional bytes.

This approach provides an excellent balance between efficiency and international support.

Perhaps the most important property of UTF-8 is its compatibility with ASCII.

Every valid ASCII character is represented in UTF-8 using exactly the same single-byte value.

For example, the letter **A** remains:

```text
'A'

↓

65

↓

01000001
```

As a result, text containing only ASCII characters is automatically valid UTF-8 text.

This backward compatibility allowed existing software to adopt UTF-8 gradually without breaking older documents or programs.

Today, UTF-8 has become the standard encoding used by:

- Linux,
- macOS,
- modern versions of Windows,
- web browsers,
- programming languages,
- databases,
- and most Internet protocols.

For this reason, our text editor will assume that text is encoded using UTF-8.

Although later chapters will discuss some practical implications of UTF-8 for cursor movement and text editing, we will continue to treat characters conceptually for now.

## Why This Matters for a Text Editor

A text editor does much more than display characters.

It must also:

- load text from files,
- save text to disk,
- move the cursor,
- insert characters,
- delete characters,
- and count positions within a document.

All of these operations depend on understanding how text is represented.

If an editor assumes that every character occupies exactly one byte, it may work perfectly for simple English text but fail when editing documents containing characters from other languages.

For this reason, professional text editors are designed with modern character encodings in mind.

We will return to this topic in greater depth when discussing text storage and cursor movement later in the book.

## Engineering Insight

One of UTF-8's greatest strengths is that it balanced innovation with compatibility.

Instead of replacing ASCII entirely, UTF-8 preserved every existing ASCII byte exactly as it was. This design allowed operating systems, programming languages, and applications to adopt Unicode support incrementally while continuing to work correctly with older software and documents.

This careful attention to backward compatibility is one reason UTF-8 became the dominant text encoding worldwide.

## Common Mistakes

**Assuming computers store characters directly**

Computers store numbers. Character encodings define how those numbers correspond to human-readable characters.

**Confusing Unicode with UTF-8**

Unicode defines a universal set of characters. UTF-8 is one encoding used to represent those characters as bytes.

**Thinking ASCII and UTF-8 are unrelated**

UTF-8 is backward compatible with ASCII. Every valid ASCII document is also valid UTF-8.

**Assuming every character occupies one byte**

While ASCII characters use a single byte in UTF-8, many other characters require multiple bytes. Modern software must account for this when processing text.

## Summary

Character encoding defines how textual information is represented inside a computer. ASCII provided the first widely adopted standard by assigning numbers to English letters, digits, punctuation, and control characters. As computing became global, ASCII proved insufficient because it could not represent the world's many writing systems.

Unicode addressed this limitation by defining a universal set of characters, while UTF-8 became the most widely used encoding for representing those characters as bytes. Its variable-length design and backward compatibility with ASCII have made it the modern standard across operating systems, programming languages, and the Internet.

With this section, we have completed the fundamental concepts needed to understand how text travels from a program to the screen and how that text is represented internally. In the next section, we will follow a single character through every stage of this journey—from the CPU and stdout through the kernel, PTY, terminal emulator, font, glyph, GPU, and finally to the monitor—to see how all of these components work together as a complete system.
