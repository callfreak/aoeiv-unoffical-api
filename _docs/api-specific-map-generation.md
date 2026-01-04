---
layout: default
title: Map Generation
---

# Specific Map Generation

Complete reference documentation for the Age of Empires IV Content Editor API.

<div class="tab-container">
 <div class="tab-nav">
    <button class="tab-btn active" onclick="switchTab('text', event)">Tools</button>
    <button class="tab-btn" onclick="switchTab('image', event)">Player Spawn</button>
    <!-- <button class="tab-btn" onclick="switchTab('auth', event)">Authentication</button> -->
</div>
    
<div id="tab-text" class="tab-content active">

<h2>Tools</h2>
        
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
        <td><a href="{{ site.baseurl }}/docs/generate-maps" class="code-link">GET</a></td>
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
}
</code></pre>
        
<h4>Supported Locales</h4>
<ul>
    <li>en-US - English (United States)</li>
    <li>en-GB - English (United Kingdom)</li>
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
<h2>Player Spawn</h2>
        
<h3>Endpoints Summary</h3>
</div>
    
<!-- <div id="tab-auth" class="tab-content">

<h2>Authentication</h2>
        
<h3>API Keys</h3>
        
<p>All API requests require authentication using an API key. Include the API key in the Authorization header:</p>

</div> -->

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