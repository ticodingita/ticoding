---
layout: post
title: "BBEdit: copiare il testo in Apple Notes con uno script"
date: 2025-12-26
categories: strumenti
---

![BBEdit]({{ site.baseurl }}/img/BBEdit.png)

In questo articolo presento un piccolo script pensato per **BBEdit**, utile quando si lavora spesso con testi, appunti o codice e si vuole **archiviare rapidamente il contenuto in Apple Notes**.

L’idea è semplice:  
dal documento attivo in BBEdit viene creata **una nuova nota in Apple Notes**, usando **il nome del file come titolo** e **il testo come contenuto**.

---

## A cosa serve

Questo script è comodo quando:

- si vogliono salvare appunti di lavoro in Apple Notes
- si usa BBEdit per scrivere testi, bozze o codice
- si preferisce un flusso di lavoro semplice, senza strumenti esterni

Il tutto sfrutta solo strumenti già presenti su macOS.

---

## Scaricare lo script

Lo script è disponibile per il download diretto dal sito:

👉 **[Scarica SendToAppleNotes.scpt]({{ site.baseurl }}/BBScripts/SendToAppleNotes.scpt)**

Una volta scaricato, il file va copiato nella cartella **Scripts** di BBEdit.

---

## Dove va copiato lo script

Per rendere lo script disponibile nel menu di BBEdit:

1. Apri **BBEdit**
2. Vai nella cartella **Scripts** (menu Scripts di BBEdit)
3. Copia lì il file `SendToAppleNotes.scpt`

Da questo momento lo script sarà richiamabile direttamente da BBEdit.

---

## Lo script AppleScript

Lo script è stato creato con **Script Editor** ed è il seguente:

```applescript
-- 1) Prendi testo e nome file da BBEdit
tell application "BBEdit"
	if (count of text documents) is 0 then error "Nessun documento di testo aperto."
	
	set theDoc to front text document
	set theText to (text of theDoc) as text
	set noteTitle to name of theDoc
end tell

-- 2) Crea nota in Apple Notes con quel titolo
tell application "Notes"
	activate
	set theAccount to first account
	set theFolder to default folder of theAccount
	make new note at theFolder with properties {name:noteTitle, body:theText}
end tell
