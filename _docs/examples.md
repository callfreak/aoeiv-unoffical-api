---
layout: default
title: Code Examples
---

# Code Examples

This page provides practical examples of using the Content Editor API to work with text and images.

## JavaScript Examples

### Text API Examples

#### Create a Simple Text Entry

```javascript
async function createTextEntry() {
    const response = await fetch('https://api.aoe4-content.example.com/v1/text/entries', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key: 'ui.menu.multiplayer',
            value: 'Multiplayer',
            locale: 'en-US',
            category: 'ui',
            metadata: {
                context: 'Main menu button'
            }
        })
    });
    
    const data = await response.json();
    console.log('Created text entry:', data);
    return data;
}
```

#### Batch Create Text Entries

```javascript
async function createMultipleTexts() {
    const entries = [
        {
            key: 'ui.menu.campaign',
            value: 'Campaign',
            locale: 'en-US',
            category: 'ui'
        },
        {
            key: 'ui.menu.skirmish',
            value: 'Skirmish',
            locale: 'en-US',
            category: 'ui'
        },
        {
            key: 'ui.menu.map_editor',
            value: 'Map Editor',
            locale: 'en-US',
            category: 'ui'
        }
    ];
    
    const response = await fetch('https://api.aoe4-content.example.com/v1/text/batch', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ entries })
    });
    
    const result = await response.json();
    console.log(`Created ${result.created} text entries`);
    return result;
}
```

#### Add Translations

```javascript
async function addTranslations(textId) {
    const translations = [
        { locale: 'de-DE', value: 'Mehrspieler' },
        { locale: 'fr-FR', value: 'Multijoueur' },
        { locale: 'es-ES', value: 'Multijugador' }
    ];
    
    const results = [];
    
    for (const translation of translations) {
        const response = await fetch(
            `https://api.aoe4-content.example.com/v1/text/entries/${textId}/translations`,
            {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer YOUR_API_KEY',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(translation)
            }
        );
        
        const data = await response.json();
        results.push(data);
    }
    
    console.log('Added translations:', results);
    return results;
}
```

### Image API Examples

#### Upload an Image

```javascript
async function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name.replace(/\.[^/.]+$/, '')); // Remove extension
    formData.append('category', 'ui');
    formData.append('tags', JSON.stringify(['custom', 'mod']));
    
    const response = await fetch('https://api.aoe4-content.example.com/v1/images/upload', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: formData
    });
    
    const data = await response.json();
    console.log('Uploaded image:', data);
    return data;
}

// Usage
const fileInput = document.getElementById('imageFile');
fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    const result = await uploadImage(file);
    console.log('Image URL:', result.url);
});
```

#### Batch Upload Images

```javascript
async function batchUploadImages(files) {
    const formData = new FormData();
    
    files.forEach(file => {
        formData.append('files', file);
    });
    
    formData.append('category', 'icons');
    
    const response = await fetch(
        'https://api.aoe4-content.example.com/v1/images/batch/upload',
        {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: formData
        }
    );
    
    const result = await response.json();
    console.log(`Uploaded ${result.uploaded} images`);
    return result;
}
```

#### Convert and Optimize Image

```javascript
async function processImage(imageId) {
    // Convert to DDS format
    const convertResponse = await fetch(
        `https://api.aoe4-content.example.com/v1/images/${imageId}/convert`,
        {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                target_format: 'dds',
                options: {
                    compression: 'DXT5',
                    mipmap: true
                }
            })
        }
    );
    
    const convertedImage = await convertResponse.json();
    console.log('Converted image:', convertedImage);
    
    // Optimize the image
    const optimizeResponse = await fetch(
        `https://api.aoe4-content.example.com/v1/images/${convertedImage.id}/optimize`,
        {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                level: 'balanced',
                preserve_alpha: true
            })
        }
    );
    
    const optimizedImage = await optimizeResponse.json();
    console.log('Optimized image:', optimizedImage);
    
    return {
        original: imageId,
        converted: convertedImage,
        optimized: optimizedImage
    };
}
```

## Python Examples

### Text API with Python

```python
import requests
import json

API_KEY = 'YOUR_API_KEY'
BASE_URL = 'https://api.aoe4-content.example.com/v1'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

def create_text_entry(key, value, locale='en-US', category='ui'):
    """Create a new text entry"""
    data = {
        'key': key,
        'value': value,
        'locale': locale,
        'category': category
    }
    
    response = requests.post(
        f'{BASE_URL}/text/entries',
        headers=headers,
        json=data
    )
    
    return response.json()

def get_all_text_entries(locale='en-US'):
    """Retrieve all text entries for a locale"""
    params = {'locale': locale, 'limit': 100}
    response = requests.get(
        f'{BASE_URL}/text/entries',
        headers=headers,
        params=params
    )
    
    return response.json()

def export_text(locale='en-US', format='json'):
    """Export text entries"""
    data = {
        'locale': locale,
        'format': format
    }
    
    response = requests.post(
        f'{BASE_URL}/text/export',
        headers=headers,
        json=data
    )
    
    with open(f'exported_text_{locale}.{format}', 'wb') as f:
        f.write(response.content)
    
    print(f'Exported text to exported_text_{locale}.{format}')

# Usage
result = create_text_entry('game.victory', 'Victory!', 'en-US', 'gameplay')
print(f"Created entry: {result['id']}")
```

### Image API with Python

```python
import requests

API_KEY = 'YOUR_API_KEY'
BASE_URL = 'https://api.aoe4-content.example.com/v1'

def upload_image(file_path, name, category='ui'):
    """Upload an image file"""
    headers = {
        'Authorization': f'Bearer {API_KEY}'
    }
    
    with open(file_path, 'rb') as f:
        files = {'file': f}
        data = {
            'name': name,
            'category': category
        }
        
        response = requests.post(
            f'{BASE_URL}/images/upload',
            headers=headers,
            files=files,
            data=data
        )
    
    return response.json()

def resize_image(image_id, width, height):
    """Resize an image"""
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }
    
    data = {
        'width': width,
        'height': height,
        'maintain_aspect': True,
        'quality': 90
    }
    
    response = requests.post(
        f'{BASE_URL}/images/{image_id}/resize',
        headers=headers,
        json=data
    )
    
    return response.json()

# Usage
uploaded = upload_image('menu_bg.png', 'menu_background', 'ui')
print(f"Uploaded image: {uploaded['id']}")

resized = resize_image(uploaded['id'], 1280, 720)
print(f"Resized image URL: {resized['url']}")
```

## Complete Workflow Example

### Creating a Complete Mod Content Package

```javascript
class ContentEditorAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.aoe4-content.example.com/v1';
    }
    
    async createModContent(modName, textEntries, imageFiles) {
        console.log(`Creating content for mod: ${modName}`);
        
        // 1. Create text entries
        const textResult = await this.createTexts(textEntries);
        console.log(`Created ${textResult.created} text entries`);
        
        // 2. Upload images
        const imageResult = await this.uploadImages(imageFiles);
        console.log(`Uploaded ${imageResult.uploaded} images`);
        
        // 3. Export content
        const exported = await this.exportContent(modName);
        console.log('Content exported successfully');
        
        return {
            texts: textResult,
            images: imageResult,
            exported: exported
        };
    }
    
    async createTexts(entries) {
        const response = await fetch(`${this.baseUrl}/text/batch`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ entries })
        });
        
        return response.json();
    }
    
    async uploadImages(files) {
        const formData = new FormData();
        
        files.forEach(file => {
            formData.append('files', file);
        });
        
        const response = await fetch(`${this.baseUrl}/images/batch/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: formData
        });
        
        return response.json();
    }
    
    async exportContent(modName) {
        // Export texts
        const textExport = await fetch(`${this.baseUrl}/text/export`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                locale: 'en-US',
                format: 'json'
            })
        });
        
        return {
            texts: await textExport.json()
        };
    }
}

// Usage
const api = new ContentEditorAPI('YOUR_API_KEY');

const textEntries = [
    { key: 'mod.name', value: 'My Awesome Mod', locale: 'en-US', category: 'mod' },
    { key: 'mod.description', value: 'A great mod for AoE4', locale: 'en-US', category: 'mod' }
];

const imageFiles = []; // Array of File objects

api.createModContent('my-awesome-mod', textEntries, imageFiles)
    .then(result => console.log('Mod content created:', result))
    .catch(error => console.error('Error:', error));
```

## Error Handling

### Handling API Errors

```javascript
async function safeApiCall(url, options) {
    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(`API Error ${response.status}: ${error.message}`);
        }
        
        return await response.json();
    } catch (error) {
        if (error.message.includes('429')) {
            console.error('Rate limit exceeded. Please wait and try again.');
        } else if (error.message.includes('401')) {
            console.error('Authentication failed. Check your API key.');
        } else {
            console.error('API call failed:', error.message);
        }
        
        throw error;
    }
}

// Usage
try {
    const result = await safeApiCall(
        'https://api.aoe4-content.example.com/v1/text/entries',
        {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY'
            }
        }
    );
    
    console.log('Success:', result);
} catch (error) {
    // Handle error appropriately
}
```

## Next Steps

- Review the [Text API documentation]({{ site.baseurl }}/docs/text-api)
- Explore the [Image API documentation]({{ site.baseurl }}/docs/image-api)
- Check the [API Reference]({{ site.baseurl }}/docs/reference) for complete details
