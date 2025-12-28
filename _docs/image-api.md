---
layout: default
title: Image API
---

# Image API Documentation

The Image API enables you to manage image assets in the Age of Empires IV Content Editor. This includes uploading, processing, optimizing, and organizing image files for use in mods and custom content.

## Supported Formats

The API supports the following image formats:

- **PNG**: Best for UI elements and images with transparency
- **JPEG**: Ideal for photographs and textured backgrounds
- **DDS**: Native DirectDraw Surface format for game textures
- **TGA**: Targa format for high-quality assets
- **BMP**: Windows Bitmap format

## Endpoints

### Upload Image

Upload a new image asset to the Content Editor.

<div class="api-method">
<h4>POST /images/upload</h4>

<div class="method-signature">
POST /images/upload
Content-Type: multipart/form-data
</div>

**Form Data Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| file | file | Yes | The image file to upload |
| name | string | Yes | Name for the image asset |
| category | string | No | Category (ui, texture, icon, etc.) |
| tags | array | No | Array of tags for organization |

**Example Request:**

```javascript
const formData = new FormData();
formData.append('file', imageFile);
formData.append('name', 'menu_background');
formData.append('category', 'ui');
formData.append('tags', JSON.stringify(['menu', 'background']));

fetch('https://api.aoe4-content.example.com/v1/images/upload', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: formData
});
```

**Response:**

```json
{
    "id": "img_001",
    "name": "menu_background",
    "format": "png",
    "size": 2048576,
    "dimensions": {
        "width": 1920,
        "height": 1080
    },
    "category": "ui",
    "url": "https://cdn.aoe4-content.example.com/images/img_001.png",
    "thumbnail_url": "https://cdn.aoe4-content.example.com/thumbs/img_001_thumb.png",
    "created_at": "2025-12-28T12:00:00Z"
}
```
</div>

### List Images

Retrieve a list of all image assets.

<div class="api-method">
<h4>GET /images</h4>

<div class="method-signature">
GET /images?page=1&limit=50&category=ui&format=png
</div>

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| page | integer | No | Page number (default: 1) |
| limit | integer | No | Results per page (default: 50, max: 100) |
| category | string | No | Filter by category |
| format | string | No | Filter by format (png, jpg, dds, etc.) |
| tags | string | No | Comma-separated list of tags |

**Response:**

```json
{
    "data": [
        {
            "id": "img_001",
            "name": "menu_background",
            "format": "png",
            "size": 2048576,
            "dimensions": {
                "width": 1920,
                "height": 1080
            },
            "category": "ui",
            "url": "https://cdn.aoe4-content.example.com/images/img_001.png",
            "thumbnail_url": "https://cdn.aoe4-content.example.com/thumbs/img_001_thumb.png"
        }
    ],
    "pagination": {
        "current_page": 1,
        "total_pages": 5,
        "total_items": 243
    }
}
```
</div>

### Get Image Details

Retrieve detailed information about a specific image.

<div class="api-method">
<h4>GET /images/:id</h4>

<div class="method-signature">
GET /images/img_001
</div>

**Response:**

```json
{
    "id": "img_001",
    "name": "menu_background",
    "format": "png",
    "size": 2048576,
    "dimensions": {
        "width": 1920,
        "height": 1080
    },
    "category": "ui",
    "tags": ["menu", "background"],
    "metadata": {
        "color_space": "sRGB",
        "has_alpha": true,
        "bit_depth": 32,
        "compression": "none"
    },
    "urls": {
        "original": "https://cdn.aoe4-content.example.com/images/img_001.png",
        "thumbnail": "https://cdn.aoe4-content.example.com/thumbs/img_001_thumb.png",
        "medium": "https://cdn.aoe4-content.example.com/medium/img_001_medium.png"
    },
    "created_at": "2025-12-28T12:00:00Z",
    "updated_at": "2025-12-28T12:00:00Z"
}
```
</div>

### Update Image Metadata

Update metadata for an existing image.

<div class="api-method">
<h4>PATCH /images/:id</h4>

<div class="method-signature">
PATCH /images/img_001
</div>

**Request Body:**

```json
{
    "name": "main_menu_background",
    "category": "ui",
    "tags": ["menu", "background", "main"]
}
```

**Response:**

```json
{
    "id": "img_001",
    "name": "main_menu_background",
    "category": "ui",
    "tags": ["menu", "background", "main"],
    "updated_at": "2025-12-28T13:00:00Z"
}
```
</div>

### Delete Image

Delete an image asset.

<div class="api-method">
<h4>DELETE /images/:id</h4>

<div class="method-signature">
DELETE /images/img_001
</div>

**Response:**

```json
{
    "message": "Image deleted successfully",
    "id": "img_001"
}
```
</div>

## Image Processing

### Convert Image Format

Convert an image to a different format.

<div class="api-method">
<h4>POST /images/:id/convert</h4>

<div class="method-signature">
POST /images/img_001/convert
</div>

**Request Body:**

```json
{
    "target_format": "dds",
    "options": {
        "compression": "DXT5",
        "mipmap": true
    }
}
```

**Response:**

```json
{
    "id": "img_002",
    "original_id": "img_001",
    "name": "menu_background",
    "format": "dds",
    "size": 1536000,
    "url": "https://cdn.aoe4-content.example.com/images/img_002.dds",
    "created_at": "2025-12-28T13:15:00Z"
}
```
</div>

### Resize Image

Create a resized version of an image.

<div class="api-method">
<h4>POST /images/:id/resize</h4>

<div class="method-signature">
POST /images/img_001/resize
</div>

**Request Body:**

```json
{
    "width": 1280,
    "height": 720,
    "maintain_aspect": true,
    "quality": 90
}
```

**Response:**

```json
{
    "id": "img_003",
    "original_id": "img_001",
    "name": "menu_background_1280x720",
    "format": "png",
    "dimensions": {
        "width": 1280,
        "height": 720
    },
    "url": "https://cdn.aoe4-content.example.com/images/img_003.png",
    "created_at": "2025-12-28T13:20:00Z"
}
```
</div>

### Optimize Image

Optimize an image for better performance without significant quality loss.

<div class="api-method">
<h4>POST /images/:id/optimize</h4>

<div class="method-signature">
POST /images/img_001/optimize
</div>

**Request Body:**

```json
{
    "level": "aggressive",
    "preserve_alpha": true,
    "target_size_kb": 500
}
```

**Optimization Levels:**

- `minimal`: Light optimization, preserves maximum quality
- `balanced`: Good balance between size and quality
- `aggressive`: Maximum compression, some quality loss

**Response:**

```json
{
    "id": "img_004",
    "original_id": "img_001",
    "name": "menu_background_optimized",
    "original_size": 2048576,
    "optimized_size": 512000,
    "size_reduction": "75%",
    "url": "https://cdn.aoe4-content.example.com/images/img_004.png",
    "created_at": "2025-12-28T13:25:00Z"
}
```
</div>

## Batch Operations

### Bulk Upload Images

Upload multiple images in a single request.

<div class="api-method">
<h4>POST /images/batch/upload</h4>

<div class="method-signature">
POST /images/batch/upload
Content-Type: multipart/form-data
</div>

**Form Data:**

```javascript
const formData = new FormData();
formData.append('files', file1);
formData.append('files', file2);
formData.append('files', file3);
formData.append('category', 'icons');
```

**Response:**

```json
{
    "uploaded": 3,
    "failed": 0,
    "images": [
        {"id": "img_101", "name": "icon_01.png"},
        {"id": "img_102", "name": "icon_02.png"},
        {"id": "img_103", "name": "icon_03.png"}
    ]
}
```
</div>

## Image Validation

The API validates images for:

- **Format compatibility**: Ensures the format is supported
- **File size limits**: Maximum file size is 50MB per image
- **Dimension limits**: Maximum dimensions are 8192x8192 pixels
- **Color space**: Validates color space compatibility
- **Corruption**: Checks for file corruption

<div class="info-box warning">
<strong>File Size Limit:</strong> Individual images cannot exceed 50MB. For larger files, consider optimizing before upload.
</div>

## Best Practices

1. **Use appropriate formats**: DDS for textures, PNG for UI with transparency
2. **Optimize before upload**: Compress images to reduce file sizes
3. **Organize with tags**: Use consistent tagging for easy retrieval
4. **Generate mipmaps**: Enable mipmaps for textures to improve performance
5. **Batch operations**: Upload multiple images at once for efficiency
6. **Use thumbnails**: Reference thumbnail URLs for preview purposes

## Image Categories

Common image categories:

- `ui`: User interface elements
- `texture`: Game textures and materials
- `icon`: Icons and small graphics
- `background`: Background images
- `character`: Character portraits and sprites
- `building`: Building textures and icons
- `unit`: Unit sprites and icons

## Related

- [Text API Documentation]({{ site.baseurl }}/docs/text-api)
- [Code Examples]({{ site.baseurl }}/docs/examples)
- [API Reference]({{ site.baseurl }}/docs/reference)
