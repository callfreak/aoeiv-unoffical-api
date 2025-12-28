---
layout: default
title: API Reference
---

# API Reference

Complete reference documentation for the Age of Empires IV Content Editor API.

<div class="tab-container">
    <div class="tab-nav">
        <button class="tab-btn active" onclick="switchTab('text', event)">Text API</button>
        <button class="tab-btn" onclick="switchTab('image', event)">Image API</button>
        <button class="tab-btn" onclick="switchTab('auth', event)">Authentication</button>
    </div>
    
    <div id="tab-text" class="tab-content active">
        <h2>Text API Endpoints</h2>
        
        <h3>Endpoints Summary</h3>
        
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>GET</td>
                    <td>/text/entries</td>
                    <td>List all text entries</td>
                </tr>
                <tr>
                    <td>GET</td>
                    <td>/text/entries/:id</td>
                    <td>Get a specific text entry</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/text/entries</td>
                    <td>Create a new text entry</td>
                </tr>
                <tr>
                    <td>PUT</td>
                    <td>/text/entries/:id</td>
                    <td>Update a text entry</td>
                </tr>
                <tr>
                    <td>DELETE</td>
                    <td>/text/entries/:id</td>
                    <td>Delete a text entry</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/text/batch</td>
                    <td>Bulk create text entries</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/text/entries/:id/translations</td>
                    <td>Add a translation</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/text/export</td>
                    <td>Export text entries</td>
                </tr>
            </tbody>
        </table>
        
        <h3>Common Parameters</h3>
        
        <h4>Text Entry Object</h4>
        <pre><code>{
    "id": "string",
    "key": "string",
    "value": "string",
    "locale": "string",
    "category": "string",
    "metadata": {
        "max_length": "integer",
        "context": "string"
    },
    "created_at": "datetime",
    "updated_at": "datetime"
}</code></pre>
        
        <h4>Supported Locales</h4>
        <ul>
            <li>en-US - English (United States)</li>
            <li>en-GB - English (United Kingdom)</li>
            <li>de-DE - German (Germany)</li>
            <li>fr-FR - French (France)</li>
            <li>es-ES - Spanish (Spain)</li>
            <li>it-IT - Italian (Italy)</li>
            <li>ja-JP - Japanese (Japan)</li>
            <li>ko-KR - Korean (Korea)</li>
            <li>zh-CN - Chinese (Simplified)</li>
            <li>zh-TW - Chinese (Traditional)</li>
            <li>ru-RU - Russian (Russia)</li>
            <li>pt-BR - Portuguese (Brazil)</li>
        </ul>
        
        <h4>Text Categories</h4>
        <ul>
            <li><code>ui</code> - User interface text</li>
            <li><code>gameplay</code> - Gameplay messages</li>
            <li><code>tutorial</code> - Tutorial text</li>
            <li><code>story</code> - Story/campaign text</li>
            <li><code>mod</code> - Mod-specific text</li>
            <li><code>error</code> - Error messages</li>
        </ul>
    </div>
    
    <div id="tab-image" class="tab-content">
        <h2>Image API Endpoints</h2>
        
        <h3>Endpoints Summary</h3>
        
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>POST</td>
                    <td>/images/upload</td>
                    <td>Upload a single image</td>
                </tr>
                <tr>
                    <td>GET</td>
                    <td>/images</td>
                    <td>List all images</td>
                </tr>
                <tr>
                    <td>GET</td>
                    <td>/images/:id</td>
                    <td>Get image details</td>
                </tr>
                <tr>
                    <td>PATCH</td>
                    <td>/images/:id</td>
                    <td>Update image metadata</td>
                </tr>
                <tr>
                    <td>DELETE</td>
                    <td>/images/:id</td>
                    <td>Delete an image</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/images/:id/convert</td>
                    <td>Convert image format</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/images/:id/resize</td>
                    <td>Resize an image</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/images/:id/optimize</td>
                    <td>Optimize an image</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/images/batch/upload</td>
                    <td>Bulk upload images</td>
                </tr>
            </tbody>
        </table>
        
        <h3>Common Parameters</h3>
        
        <h4>Image Object</h4>
        <pre><code>{
    "id": "string",
    "name": "string",
    "format": "string",
    "size": "integer",
    "dimensions": {
        "width": "integer",
        "height": "integer"
    },
    "category": "string",
    "tags": ["string"],
    "url": "string",
    "thumbnail_url": "string",
    "created_at": "datetime",
    "updated_at": "datetime"
}</code></pre>
        
        <h4>Supported Formats</h4>
        <table>
            <thead>
                <tr>
                    <th>Format</th>
                    <th>Extension</th>
                    <th>Best For</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>PNG</td>
                    <td>.png</td>
                    <td>UI elements with transparency</td>
                </tr>
                <tr>
                    <td>JPEG</td>
                    <td>.jpg, .jpeg</td>
                    <td>Photographs and backgrounds</td>
                </tr>
                <tr>
                    <td>DDS</td>
                    <td>.dds</td>
                    <td>Game textures with mipmaps</td>
                </tr>
                <tr>
                    <td>TGA</td>
                    <td>.tga</td>
                    <td>High-quality assets</td>
                </tr>
                <tr>
                    <td>BMP</td>
                    <td>.bmp</td>
                    <td>Uncompressed images</td>
                </tr>
            </tbody>
        </table>
        
        <h4>DDS Compression Options</h4>
        <ul>
            <li><code>DXT1</code> - RGB compression, no alpha</li>
            <li><code>DXT3</code> - RGB + explicit alpha</li>
            <li><code>DXT5</code> - RGB + interpolated alpha (recommended)</li>
            <li><code>BC7</code> - High-quality compression</li>
        </ul>
        
        <h4>Image Categories</h4>
        <ul>
            <li><code>ui</code> - User interface elements</li>
            <li><code>texture</code> - Game textures</li>
            <li><code>icon</code> - Icons and small graphics</li>
            <li><code>background</code> - Background images</li>
            <li><code>character</code> - Character portraits</li>
            <li><code>building</code> - Building textures</li>
            <li><code>unit</code> - Unit sprites</li>
        </ul>
        
        <h4>Size Limits</h4>
        <table>
            <thead>
                <tr>
                    <th>Limit Type</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Maximum file size</td>
                    <td>50 MB</td>
                </tr>
                <tr>
                    <td>Maximum dimensions</td>
                    <td>8192 x 8192 pixels</td>
                </tr>
                <tr>
                    <td>Minimum dimensions</td>
                    <td>16 x 16 pixels</td>
                </tr>
                <tr>
                    <td>Batch upload limit</td>
                    <td>50 files per request</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div id="tab-auth" class="tab-content">
        <h2>Authentication</h2>
        
        <h3>API Keys</h3>
        
        <p>All API requests require authentication using an API key. Include the API key in the Authorization header:</p>
        
        <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
        
        <h3>Obtaining an API Key</h3>
        
        <ol>
            <li>Register for a developer account at the developer portal</li>
            <li>Create a new application</li>
            <li>Generate an API key for your application</li>
            <li>Store the API key securely</li>
        </ol>
        
        <div class="info-box warning">
            <strong>Security Warning:</strong> Never commit API keys to version control or share them publicly.
        </div>
        
        <h3>Rate Limiting</h3>
        
        <p>The API implements rate limiting based on your subscription tier:</p>
        
        <table>
            <thead>
                <tr>
                    <th>Tier</th>
                    <th>Requests/Minute</th>
                    <th>Requests/Day</th>
                    <th>Burst Limit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Free</td>
                    <td>60</td>
                    <td>5,000</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Pro</td>
                    <td>300</td>
                    <td>50,000</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>Enterprise</td>
                    <td>1,000</td>
                    <td>Unlimited</td>
                    <td>2,000</td>
                </tr>
            </tbody>
        </table>
        
        <h4>Rate Limit Headers</h4>
        
        <p>Each API response includes rate limit information in the headers:</p>
        
        <pre><code>X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1704038400</code></pre>
        
        <h3>Error Responses</h3>
        
        <h4>Standard Error Format</h4>
        
        <pre><code>{
    "error": {
        "code": "error_code",
        "message": "Human-readable error message",
        "details": {
            "field": "Additional error details"
        }
    }
}</code></pre>
        
        <h4>Common Error Codes</h4>
        
        <table>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Status</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>invalid_request</td>
                    <td>400</td>
                    <td>Request body is invalid or missing required fields</td>
                </tr>
                <tr>
                    <td>unauthorized</td>
                    <td>401</td>
                    <td>API key is missing or invalid</td>
                </tr>
                <tr>
                    <td>forbidden</td>
                    <td>403</td>
                    <td>API key doesn't have permission for this operation</td>
                </tr>
                <tr>
                    <td>not_found</td>
                    <td>404</td>
                    <td>Requested resource doesn't exist</td>
                </tr>
                <tr>
                    <td>rate_limit_exceeded</td>
                    <td>429</td>
                    <td>Too many requests, please slow down</td>
                </tr>
                <tr>
                    <td>server_error</td>
                    <td>500</td>
                    <td>Internal server error, try again later</td>
                </tr>
            </tbody>
        </table>
        
        <h3>Webhooks</h3>
        
        <p>Configure webhooks to receive real-time notifications about events:</p>
        
        <h4>Available Events</h4>
        
        <ul>
            <li><code>text.created</code> - New text entry created</li>
            <li><code>text.updated</code> - Text entry updated</li>
            <li><code>text.deleted</code> - Text entry deleted</li>
            <li><code>image.uploaded</code> - New image uploaded</li>
            <li><code>image.processed</code> - Image processing completed</li>
            <li><code>image.deleted</code> - Image deleted</li>
        </ul>
        
        <h4>Webhook Payload</h4>
        
        <pre><code>{
    "event": "text.created",
    "timestamp": "2025-12-28T12:00:00Z",
    "data": {
        "id": "text_001",
        "key": "ui.menu.start",
        "value": "Start Game"
    }
}</code></pre>
    </div>
</div>

<script>
function switchTab(tabName, event) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById('tab-' + tabName).classList.add('active');
    
    // Add active class to clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }
}
</script>

## API Versioning

The API uses versioning in the URL path. The current version is `v1`:

```
https://api.aoe4-content.example.com/v1
```

Breaking changes will result in a new API version. Non-breaking changes and additions are made to the current version.

## Support

For API support:

- GitHub Issues: [Report bugs and request features](https://github.com/callfreak/aoeiv-unoffical-api/issues)
- Documentation: [Full documentation]({{ site.baseurl }}/)
- Examples: [Code examples]({{ site.baseurl }}/docs/examples)

## Related Documentation

- [Overview]({{ site.baseurl }}/docs/overview)
- [Text API]({{ site.baseurl }}/docs/text-api)
- [Image API]({{ site.baseurl }}/docs/image-api)
- [Code Examples]({{ site.baseurl }}/docs/examples)
