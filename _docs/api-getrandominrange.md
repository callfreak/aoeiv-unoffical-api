---
layout: default
title: GetRandomInRange()
---

# GetRandomInRange
GetRandomInRange(float min, float max)

## Description

This function returns a value **between a specified range**. It is **required for multiplayer matches** to ensure,
that all players recieve the **same random number**. Whithout using this function the game would crash.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| min | float | The minimum value of the range |
| max | float | The maximum value of the range |

## Returns

| Type | Description |
|------|-------------|
| Float | Random number between a specified range |