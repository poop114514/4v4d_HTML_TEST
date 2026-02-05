# 4v4d.top Minecraft Server Website Blueprint

## Overview

This document outlines the plan for redesigning the webpage for the "4v4d.top" Minecraft server. The new design will use the ToonUI design system and incorporate a 3D element in the hero section to create a more engaging and visually appealing experience for players.

## Design & Style

The website will be restyled to adhere to the "ToonUI" design system, characterized by:

*   **Borders:** Thick, solid black borders (3px).
*   **Shadows:** Hard-edged, solid black shadows to create a "lifted" 2D effect.
*   **Colors:** A vibrant palette with a primary focus on Sky Blue (`#38BDF8`), Yellow (`#facc15`), and strong accent colors.
*   **Typography:** "Noto Sans SC" with bold, heavy weights.
*   **Components:** Reusing `toon-card`, `toon-btn`, and other components from the UI kit.

## New Features & Changes

1.  **3D Hero Element:**
    *   The main hero section will be replaced with a dynamic 3D scene using **Three.js**.
    *   The scene will feature a rotating, textured cube that resembles a Minecraft grass block, immediately connecting with the theme.

2.  **Component-Based Redesign:**
    *   The existing sections ("About," "Join," "Contact") will be rebuilt using `toon-card` components for a consistent and modern look.
    *   All buttons will be converted to `toon-btn` for a cohesive style.
    *   The navigation and footer will be updated to match the ToonUI aesthetic.

## Action Plan

1.  **Update `blueprint.md`:** Document the new project plan (this file).
2.  **Update `index.html`:**
    *   Add the **Three.js** library from a CDN.
    *   Create a `div` container in the hero section for the 3D canvas.
    *   Replace the old class names with the new `toon-` classes throughout the document.
    *   Restructure content into `toon-card`s where appropriate.
3.  **Update `style.css`:**
    *   Add styles for the 3D canvas container to ensure it blends seamlessly with the page design.
4.  **Update `main.js`:**
    *   Add the JavaScript code to initialize the Three.js scene.
    *   Create and texture the rotating Minecraft-style block.
    *   Set up the camera, renderer, and animation loop.
    *   Ensure all previous JavaScript functionality (like server status checks) remains intact.
5.  **Review and Refine:** Check the final page for any visual or functional issues and make adjustments as needed.
