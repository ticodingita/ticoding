---
layout: post
title: "Pandoc: scrivere testi in Markdown"
date: 2026-01-01
categories: [Software, Markdown, Pandoc]
image: /img/pandoc.png
image_alt: "Pandoc"
---


L’obiettivo della scrittura in Markdown non è fare prima, ma avere controllo totale sul contenuto e sul risultato finale.


<!--more-->

![PANDOC]({{ site.baseurl }}/img/pandoc.png)

Questo articolo è scritto in **[Markdown](https://it.wikipedia.org/wiki/Markdown)**, ossia un “linguaggio” di scrittura testuale (tecnicamente un linguaggio di markup) progettato per essere semplice, leggibile e facilmente convertibile in altri formati.  
Non sto utilizzando alcun editor **WYSIWYG** (*What You See Is What You Get*), quelli in stile Word per capirci.

Sto utilizzando semplicemente **BBEdit**, un editor di testo per macOS. Nulla vieta di usare **Notepad++** su Windows o **GEdit** su Linux; in realtà andrebbero benissimo anche **nano**, **emacs** o **vi**, i classici editor da riga di comando.

**Ha senso tutto questo nell’era dell’intelligenza artificiale?**

Cominciamo col dire che l’intelligenza artificiale è un ottimo **supporto**: consente di risparmiare molto tempo. Su questo non ci sono dubbi. Anche l’avvio di questo sito, ad esempio, è stato molto più rapido grazie all’aiuto di un bot, che mi ha evitato di leggere pagine e pagine di documentazione. L’IA è molto utile anche per revisionare il testo, ovviamente.

Il punto però non è questo.  
Il punto è **avere il totale controllo del lavoro finale**: aperto, immediatamente disponibile, a costo zero oggi e, con ogni probabilità, anche tra trent’anni.

Con il Markdown ci si concentra solo sul contenuto e solo alla fine si decide **come** pubblicarlo. Lo stesso testo può diventare `epub`, `docx`, `odt`, `pdf`.  
Magari nel 2028 uscirà un nuovo fantastico formato: partendo dal testo, sarà possibile pubblicare anche in quello.

Forse la curva di apprendimento iniziale è un po’ più ripida, ed è richiesta una fase di *setting* non alla portata di tutti. Ma una volta preparati gli script necessari, si riesce a lavorare in modo molto più veloce, ordinato e coerente.

L’articolo che sto scrivendo andrà bene per il sito **TICoding**, ma anche per un futuro ebook in cui raccogliere tutto quello che ho scritto.  
Il tempo necessario per farlo? **Due minuti**.

---

## Da Markdown a ePub con Pandoc

Come convertire questo testo in un ePub?  
È semplice: si può utilizzare il software open source **[Pandoc](https://pandoc.org/)**. Ed è proprio qui che l’intelligenza artificiale può tornare utile, ad esempio per spiegare come installare Pandoc o come scrivere lo script giusto per usarlo.

Il comando minimale è questo:

<div class="term-box">
<pre><code>
# Conversione diretta da Markdown a ePub
pandoc articolo.md -o articolo.epub
</code></pre>
</div>
