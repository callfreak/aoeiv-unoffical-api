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
        
<h3>Endpoints</h3>
        
<table>
<thead>
    <tr>
        <th>Method</th>
        <th>Category</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><a href="{{ site.baseurl }}/docs/api-worldgetrandom" class="code-link">worldGetRandom()</a></td>
        <td>Math</td>
        <td>Get a random number(Multiplayer valid)</td>
    </tr>
    <tr>
        <td><a href="{{ site.baseurl }}/docs/api-getrandominrange" class="code-link">GetRandomInRange()</a></td>
        <td>Math</td>
        <td>Get a random number in a specified range</td>
    </tr>
    <tr>
        <td><a href="{{ site.baseurl }}/docs/api-geteightneighbors" class="code-link">Get8Neighbors()</a></td>
        <td>Terrain layout</td>
        <td>Get all 8 neighbors of a tile</td>
    </tr>
    <tr>
        <td><a href="{{ site.baseurl }}/docs/api-getneighbors" class="code-link">GetNeighbors()</a></td>
        <td>Terrain layout</td>
        <td>Get all 4 direct neighbors of a tile</td>
    </tr>
    <tr>
        <td><a href="{{ site.baseurl }}/docs/api-getallsquaresinradius" class="code-link">GetAllSquaresInRadius()</a></td>
        <td>Terrain layout</td>
        <td>Get all tiles in a specified radius from a tile</td>
    </tr>
</tbody>
</table>
        
<!-- <h3>Common Parameters</h3>
        
<h4>Text Entry Object</h4> -->

<!-- <pre><code>{
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
</code></pre> -->
        
<!-- <h4>Supported Locales</h4> -->
<!-- <ul>
    <li>en-US - English (United States)</li>
    <li>en-GB - English (United Kingdom)</li>
</ul> -->
        
<!-- <h4>Text Categories</h4> -->
<!-- <ul>
    <li><code>ui</code> - User interface text</li>
    <li><code>gameplay</code> - Gameplay messages</li>
    <li><code>tutorial</code> - Tutorial text</li>
    <li><code>story</code> - Story/campaign text</li>
    <li><code>mod</code> - Mod-specific text</li>
    <li><code>error</code> - Error messages</li>
</ul> -->
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