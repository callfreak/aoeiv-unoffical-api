---
layout: default
title: Programming for beginners
---

# Introduction

The Age of Empires IV Content Editor is free to use for everyone who bought the official game Age of Empires IV, however 
the Editor is not well documented neither the internet has many guidlines to it... espcially closed discord lobbies makes
it hard for the common "gamer" with a little of programming knowledge to gain important information and demotivates a lot.
In the end with a well document guide, I think more and even more quality Mods would be created if everyone has the same
starting point or "go-to" source when they want to start getting into modding for AoE IV.

## What do I need?

To use the Content Editor and start making mods, you need:

- **Windows Operating System(OS)**: Mods can only be create with the Content Editor and as for now its only available on Windows machines
- **An original copy of AoE IV**: Buy it on the Microsoft Store or on Steam(recommend) to get started
- **Little programming knowledge**: Things like: IF..ELSE / FOR-Loops should be known before we get a hand on making mods
- **Motivation**: Making basic Mods isn't difficult, but nothing works on the 1st try! Give urself time and dont rush.

## Getting things together

### Buying Age of Empires IV

Following stores offer an original copy of your favorite game:

1. **Windows Store**: [Buy it on the Windows Store →](https://www.xbox.com/games/store/age-of-empires-iv-anniversary-edition/9n94ncgm1q2n)
2. **Steam**: [Buy it on the Steam →](https://store.steampowered.com/app/1466860/Age_of_Empires_IV_Anniversary_Edition/)

### Programming knowldege

For those who haven't started with programming yet, you can either:

- Watch some simple YouTube tutorials with keywords like: "if else statements" or "for loops"
- Jump to my little [Programming for beginners]({{ site.baseurl }}/docs/programming-for-beginners)

## Getting Started

To begin using the Content Editor API, you'll need:

1. **API Key**: Obtain from the developer portal
2. **Content Editor Installation**: Version 2.0 or higher
3. **Basic Understanding**: Familiarity with REST APIs and JSON

### Authentication

All API requests require authentication using an API key:

```javascript
const headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
};
```

### Base URL

All API endpoints are relative to the base URL:

```
https://api.aoe4-content.example.com/v1
```

## API Categories

### Text API

The Text API provides endpoints for:

- Creating and updating localization strings
- Managing text collections
- Batch text operations
- Text validation and verification

[Learn more about the Text API →]({{ site.baseurl }}/docs/text-api)

### Image API

The Image API provides endpoints for:

- Uploading and managing image assets
- Image format conversion
- Compression and optimization
- Batch image processing

[Learn more about the Image API →]({{ site.baseurl }}/docs/image-api)

## Rate Limits

The API enforces the following rate limits:

| Tier | Requests per minute | Requests per day |
|------|---------------------|------------------|
| Free | 60 | 5,000 |
| Pro | 300 | 50,000 |
| Enterprise | 1,000 | Unlimited |

## Status Codes

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

## Next Steps

- Explore the [Text API documentation]({{ site.baseurl }}/docs/text-api)
- Check out the [Image API documentation]({{ site.baseurl }}/docs/image-api)
- View [code examples]({{ site.baseurl }}/docs/examples)
- Browse the [API reference]({{ site.baseurl }}/docs/reference)
