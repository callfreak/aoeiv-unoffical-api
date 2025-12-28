---
layout: default
title: Overview
---

# Introduction

The Age of Empires IV Content Editor is free to use for everyone who bought the official game Age of Empires IV, however 
the Editor is not well documented neither the internet has many guidlines to it... especially closed discord lobbies makes
it hard for the common "gamer" with a little of programming knowledge to gain important information and it demotivates a lot.
In the end with a well document guide, I think more mods and even more quality mods would be created, if everyone has the same
starting point or "go-to" source when they want to start getting into modding for AoE IV.

## What do I need?

To use the Content Editor and start making mods, you need:

- **Windows Operating System(OS)**: Mods can only be create with the Content Editor and as for now its only available on Windows machines
- **An original copy of AoE IV**: Buy it on the Microsoft Store or on Steam to get started
- **Little programming knowledge**: Things like: IF..ELSE / FOR-Loops should be known before we get a hand on making mods
- **Motivation**: Making basic Mods isn't difficult, but nothing works on the 1st try! Give urself time and dont rush.

## Getting things together

### Buying Age of Empires IV

Following stores offer an original copy of your favorite game:

1. **Windows Store**: [Buy it on the Windows Store →](https://www.xbox.com/games/store/age-of-empires-iv-anniversary-edition/9n94ncgm1q2n)
2. **Steam**: [Buy it on the Steam →](https://store.steampowered.com/app/1466860/Age_of_Empires_IV_Anniversary_Edition/)

### Programming knowldege

For those who haven't started with programming yet, you can either:

- Watch some simple [YouTube](https://www.youtube.com/) tutorials with keywords like: "if else statements" or "for loops"
- Jump to my little [Programming for beginners]({{ site.baseurl }}/docs/programming-for-beginners) to get you started!

### Motivation

Beginner, advanced modders and programmers experience sometimes a lack of motivation... i know that too. But these are mostly
temporary and if you finish your project and it works -> Its the best feeling! 
Who knows maybe someday I can even learn new things about this Content Editor from you! By an Email or in your future Tutorial that
I will find online.

<!-- ### Authentication

All API requests require authentication using an API key:

```javascript
const headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
};
``` -->

<!-- ### Base URL

All API endpoints are relative to the base URL:

```
https://api.aoe4-content.example.com/v1
``` -->

<!-- ## Rate Limits

The API enforces the following rate limits:

| Tier | Requests per minute | Requests per day |
|------|---------------------|------------------|
| Free | 60 | 5,000 |
| Pro | 300 | 50,000 |
| Enterprise | 1,000 | Unlimited | -->

<!-- ## Status Codes

The API uses standard HTTP status codes:

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Rate Limit Exceeded |
| 500 | Internal Server Error | 

### List Text Entries

Retrieve a list of all text entries in your project.

<div class="api-method">
<h4>GET /text/entries</h4>

<div class="method-signature">
GET /text/entries?page=1&limit=50&locale=en-US
</div>

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | integer | No | Page number (default: 1) |
| limit | integer | No | Results per page (default: 50, max: 100) |
| locale | string | No | Filter by locale (e.g., en-US, de-DE) |
| category | string | No | Filter by category |

**Response:**

```json
{
    "data": [
        {
            "id": "text_001",
            "key": "ui.menu.start_game",
            "value": "Start Game",
            "locale": "en-US",
            "category": "ui",
            "created_at": "2025-01-15T10:30:00Z",
            "updated_at": "2025-01-15T10:30:00Z"
        }
    ],
    "pagination": {
        "current_page": 1,
        "total_pages": 10,
        "total_items": 487
    }
}
```
</div>

<div class="api-method">
<h4>POST /text/entries</h4>

<div class="method-signature">
POST /text/entries
</div>

**Request Body:**

```json
{
    "key": "ui.menu.new_button",
    "value": "New Game",
    "locale": "en-US",
    "category": "ui",
    "metadata": {
        "max_length": 50,
        "context": "Menu button for starting new game"
    }
}
```

**Response:**

```json
{
    "id": "text_123",
    "key": "ui.menu.new_button",
    "value": "New Game",
    "locale": "en-US",
    "category": "ui",
    "created_at": "2025-12-28T12:00:00Z"
}
```
</div>

<div class="api-method">
<h4>PUT /text/entries/:id</h4>

<div class="method-signature">
PUT /text/entries/text_001
</div>

**Request Body:**

```json
{
    "value": "Begin Game",
    "metadata": {
        "updated_reason": "User feedback"
    }
}
```

**Response:**

```json
{
    "id": "text_001",
    "key": "ui.menu.start_game",
    "value": "Begin Game",
    "locale": "en-US",
    "updated_at": "2025-12-28T12:30:00Z"
}
```
</div>

<div class="api-method">
<h4>DELETE /text/entries/:id</h4>

<div class="method-signature">
DELETE /text/entries/text_001
</div>

**Response:**

```json
{
    "message": "Text entry deleted successfully",
    "id": "text_001"
}
```
</div>

Create multiple text entries in a single request.

<div class="api-method">
<h4>POST /text/batch</h4>

<div class="method-signature">
POST /text/batch
</div>

**Request Body:**

```json
{
    "entries": [
        {
            "key": "ui.menu.settings",
            "value": "Settings",
            "locale": "en-US",
            "category": "ui"
        },
        {
            "key": "ui.menu.exit",
            "value": "Exit",
            "locale": "en-US",
            "category": "ui"
        }
    ]
}
```

**Response:**

```json
{
    "created": 2,
    "failed": 0,
    "entries": [
        {"id": "text_124", "key": "ui.menu.settings"},
        {"id": "text_125", "key": "ui.menu.exit"}
    ]
}
```
</div>
-->

## Next Steps

- Create your first [Generated Map]({{ site.baseurl }}/docs/generate-maps)
- [Debug your Mod]({{ site.baseurl }}/docs/debug-your-mod)
