---
layout: default
title: Overview
---

# API Overview

The Age of Empires IV Content Editor API provides a comprehensive interface for managing game content programmatically. This unofficial API documentation covers the essential operations for working with text and image assets in the Content Editor.

## Architecture

The Content Editor API is built around a modular architecture that separates concerns between different content types:

- **Text Module**: Handles all text-based content including localization strings
- **Image Module**: Manages image assets, compression, and optimization
- **Validation Module**: Ensures content integrity and format compliance
- **Export Module**: Handles content packaging and deployment

## Core Concepts

### Content Types

The API supports two primary content types:

1. **Text Content**: Localization strings, UI text, in-game messages
2. **Image Content**: Textures, icons, UI elements, promotional materials

### API Design

The API follows RESTful principles and provides:

- Consistent endpoint structure
- JSON request/response format
- Comprehensive error handling
- Rate limiting and authentication
- Batch operation support

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
