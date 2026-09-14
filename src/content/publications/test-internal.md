---
title: "Test Publication: Internal Article"
deck: "A temporary internal publication used to validate the new writing architecture, card model, routing, and article template before the first real original piece is added."
area: "Financial Planning"
type: "original"
datePublished: 2026-09-14
venue: "Sergey Kyunttsel"
status: "published"
---

## Why this page exists

This temporary publication validates the full internal-writing path: structured metadata, automatic card generation, static routing, article rendering, and Cloudflare deployment.

## What the template should support

A production article can use ordinary Markdown for headings, paragraphs, lists, links, blockquotes, and tables. The content file remains the persistent source of truth in Git, while Astro generates the final page at build time.

> This entry is intentionally temporary and will be removed before the Writing section is moved into production.

## Example table

| Element | Source | Output |
| --- | --- | --- |
| Title and deck | Frontmatter | Card and article header |
| Article body | Markdown | Static HTML |
| Routing | File ID | Stable writing URL |
