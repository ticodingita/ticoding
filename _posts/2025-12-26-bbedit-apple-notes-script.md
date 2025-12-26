---
layout: post
title: "BBEdit: copiare il testo in Apple Notes con uno script"
date: 2025-12-26
categories: strumenti
---

![BBEdit]({{ site.baseurl }}/img/BBEdit.png)

In questo articolo presento un piccolo script pensato per **BBEdit**, software storico sviluppato da Bare Bones Software, noto per la sua solidità e per le numerose funzionalità disponibili anche nella versione gratuita.

Lo script nasce dall’esigenza di archiviare rapidamente appunti, testi o porzioni di codice direttamente in **Apple Notes**, senza interrompere il flusso di lavoro. L’idea è quella di sfruttare strumenti già presenti su macOS, mantenendo un approccio semplice e affidabile.

Il funzionamento è essenziale: partendo dal documento attivo in BBEdit, lo script crea una nuova nota in Apple Notes utilizzando **il nome del file come titolo** e **il contenuto del documento come corpo della nota**.

Lo script è stato testato su **BBEdit 15.5.4** e **macOS 26.1 (Tahoe)** ed è stato pubblicato il **26 dicembre 2025**.

---

## A cosa serve

Questo script risulta particolarmente utile quando BBEdit viene utilizzato come editor principale per scrivere testi, bozze o codice e si desidera conservare rapidamente appunti di lavoro in Apple Notes.

È pensato per chi preferisce un flusso di lavoro diretto, privo di passaggi intermedi o applicazioni aggiuntive, e vuole affidarsi esclusivamente a strumenti già integrati nel sistema operativo.

---

## Scaricare lo script

Lo script è disponibile per il download diretto dal sito:

👉 **[Scarica SendToAppleNotes.scpt]({{ site.baseurl }}/BBScripts/SendToAppleNotes.scpt)**

Una volta scaricato, il file deve essere copiato nella cartella **Scripts** di BBEdit.

---

## Dove va copiato lo script

Per rendere lo script disponibile nel menu di BBEdit è sufficiente aprire l’applicazione, accedere alla cartella **Scripts** dal menu **BBEdit → Folders → Scripts** e copiare al suo interno il file `SendToAppleNotes.scpt`.

Da questo momento lo script sarà richiamabile direttamente dal menu **Scripts** di BBEdit.

---

## Lo script AppleScript

Lo script è stato realizzato utilizzando **Script Editor**, uno strumento potente e integrato in macOS che consente di automatizzare operazioni e comunicazioni tra applicazioni diverse.

La scelta di AppleScript permette di mantenere lo script semplice, leggibile e facilmente modificabile, lasciando spazio a possibili estensioni future, come la selezione di una cartella specifica in Apple Notes o l’aggiunta di metadati al testo copiato.
