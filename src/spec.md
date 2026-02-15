# Specification

## Summary
**Goal:** Add a protected in-website Admin page that lets authorized users log in with Internet Identity and edit selected site text content stored in the backend.

**Planned changes:**
- Create a new protected frontend route `/admin` that prompts for Internet Identity login when logged out and shows a basic editing panel when logged in.
- Add backend support in `backend/main.mo` for a site content model with a public read method and an admin-restricted update method, including a way to establish/maintain at least one admin principal.
- Wire public pages to read editable text fields from the backend with sensible fallback defaults matching current hardcoded copy (at minimum: Home hero headline/subheadline; Admissions/Contact address, phone, email used on the Admissions page and site footer).
- Add an Admin navigation link that only appears when the user is authenticated (optionally only when authorized), without breaking existing desktop/mobile navigation.

**User-visible outcome:** Visitors can browse the site normally without login; authenticated admins can go to `/admin`, edit key homepage and contact details, save changes, and see updates reflected on the public pages after refresh.
