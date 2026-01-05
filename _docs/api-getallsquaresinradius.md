---
layout: default
title: GetAllSquaresInRadius()
---

# GetAllSquaresInRadius
GetAllSquaresInRadius(int x, int y, int radius, table terrainLayoutResult)

## Description

Return all tile that are in range of the radius of a specified target tile.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| x | int | X coordinate of the target tile |
| y | int | Y coordinate of the target tile |
| radius | int | Radius from the target tile |
| terrainLayoutResult | table | The current terrain layout |

## Returns

| Type | Description |
|------|-------------|
| ipair(index, tile) | Neighbor tile and their index as pairs |

## Example usage

```lua
myNeighbors = GetAllSquaresInRadius(x, y, radius, terrainLayoutResult)

for myNeighborIndex, neighbor in ipairs(myNeighbors) do
							
	currentNeighborRow = neighbor.x 
	currentNeighborCol = neighbor.y 
	
	-- do something cool here
end
```