# Specification

## Summary
**Goal:** Prominently display the institute’s phone number and physical address (in addition to email) in public-facing contact areas, and ensure default contact data exists on fresh deployments.

**Planned changes:**
- Update the Admissions & Contact page contact card to always show Address and Phone values from the existing editable contact content (pageId: "contact"), and render phone/email as clickable tel:/mailto: links when present.
- Update the global footer Contact section to display Phone and Address alongside Email, using the same values as the Admissions & Contact page.
- Initialize a default "contact" page in backend content storage so getPage("contact") returns non-null content with non-empty address (header), phone (body), and email (footer) values matching the current frontend defaults.

**User-visible outcome:** Visitors see address, phone, and email consistently on the Admissions & Contact page and in the footer, with phone and email clickable; fresh deployments show these contact details without requiring an admin to save first.
