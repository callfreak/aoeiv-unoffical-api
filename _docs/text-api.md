---
layout: default
title: Text API
---

# Text API Documentation

The Text API allows you to manage all text-based content in the Age of Empires IV Content Editor. This includes localization strings, UI text, in-game messages, and more.

## Endpoints

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

### Get Text Entry

Retrieve a specific text entry by ID.

<div class="api-method">
<h4>GET /text/entries/:id</h4>

<div class="method-signature">
GET /text/entries/text_001
</div>

**Response:**

```json
{
    "id": "text_001",
    "key": "ui.menu.start_game",
    "value": "Start Game",
    "locale": "en-US",
    "category": "ui",
    "metadata": {
        "max_length": 50,
        "context": "Main menu button"
    },
    "translations": [
        {
            "locale": "de-DE",
            "value": "Spiel starten"
        },
        {
            "locale": "fr-FR",
            "value": "Commencer le jeu"
        }
    ]
}
```
</div>

### Create Text Entry

Create a new text entry.

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

### Update Text Entry

Update an existing text entry.

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

### Delete Text Entry

Delete a text entry.

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

## Batch Operations

### Bulk Create Text Entries

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

## Localization

### Add Translation

Add a translation to an existing text entry.

<div class="api-method">
<h4>POST /text/entries/:id/translations</h4>

<div class="method-signature">
POST /text/entries/text_001/translations
</div>

**Request Body:**

```json
{
    "locale": "es-ES",
    "value": "Iniciar Juego"
}
```

**Response:**

```json
{
    "id": "text_001",
    "translations_count": 4,
    "latest_translation": {
        "locale": "es-ES",
        "value": "Iniciar Juego",
        "created_at": "2025-12-28T12:45:00Z"
    }
}
```
</div>

## Text Validation

The API automatically validates text entries for:

- **Length limits**: Ensures text doesn't exceed specified maximum length
- **Special characters**: Validates allowed character sets
- **Placeholders**: Checks for valid placeholder syntax (e.g., `{player_name}`)
- **Duplicate keys**: Prevents duplicate key creation within the same locale

<div class="info-box warning">
<strong>Note:</strong> Text entries with placeholders must maintain the same placeholders across all translations.
</div>

## Export Text

Export text entries for use in the game.

<div class="api-method">
<h4>POST /text/export</h4>

<div class="method-signature">
POST /text/export
</div>

**Request Body:**

```json
{
    "locale": "en-US",
    "format": "json",
    "category": "ui"
}
```

**Response:**

Returns a downloadable file in the specified format (JSON, XML, or CSV).
</div>

## Best Practices

1. **Use meaningful keys**: Structure keys hierarchically (e.g., `ui.menu.start_game`)
2. **Maintain context**: Always provide context in metadata for translators
3. **Batch operations**: Use bulk endpoints for creating/updating multiple entries
4. **Version control**: Keep track of text changes using the API's versioning
5. **Test translations**: Verify translated text fits within UI constraints

## Related

- [Image API Documentation]({{ site.baseurl }}/docs/image-api)
- [Code Examples]({{ site.baseurl }}/docs/examples)
- [API Reference]({{ site.baseurl }}/docs/reference)
