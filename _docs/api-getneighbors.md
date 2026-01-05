---
layout: default
title: GetNeighbors()
---

# GetNeighbors
GetNeighbors(int x, int y, table terrainLayoutResult)

## Description

By settings the coordinate of the tile, it returns all 4 (up, down, left, right) neighbors of the tile.
Using with caution when setting the coordinate to an edge of the map.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| x | int | X coordinate of the target tile |
| y | int | Y coordinate of the target tile |
| terrainLayoutResult | table | The current terrain layout |

## Returns

| Type | Description |
|------|-------------|
| ipair(index, tile) | Neighbor tile and their index as pairs |

## Example usage

```lua
myNeighbors = GetNeighbors(x, y, terrainLayoutResult)

for myNeighborIndex, neighbor in ipairs(myNeighbors) do
							
	currentNeighborRow = neighbor.x 
	currentNeighborCol = neighbor.y 
	
	-- do something cool here
end
```