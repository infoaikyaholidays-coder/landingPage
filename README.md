# Aikya Holidays Website Project

This ZIP contains a responsive static website recreated using the publicly accessible content and destination/package structure from the Aikya Holidays Wix site:
https://infoaikyaholidays.wixsite.com/aikya-holidays

## Included files
- `index.html` — website sections and content
- `styles.css` — responsive styling for desktop, tablet and mobile
- `script.js` — mobile navigation and WhatsApp enquiry links
- `assets/` — folder reserved for your own local assets

## WhatsApp setup
The script currently uses `918464913143`, based on the phone number shown on the source website. Before publishing, confirm that this number is the correct WhatsApp number for enquiries. To change it, edit `WHATSAPP_NUMBER` at the top of `script.js`, using country code plus number with digits only.

## Preview
Open `index.html` in a browser. An internet connection is required to load the external Wix images and Google Fonts.

## Free hosting with Netlify
1. Visit https://www.netlify.com/ and sign in.
2. Use the manual deploy / drag-and-drop option in your Netlify dashboard.
3. Extract this ZIP and drag the project folder's contents into the deploy area.
4. Test the generated public URL on mobile and desktop.
5. Optionally connect a custom domain in your site's domain settings.

## Cloudflare Pages
You can also publish this static site using https://pages.cloudflare.com/. Use the root folder as the output directory; no build command is needed.

## Notes
- This is an editable recreation based on text and image URLs exposed by the public Wix page, not an export of Wix's original source code or a guaranteed pixel-perfect clone.
- Images are referenced from the original Wix site's public image CDN. If the original owner replaces/removes assets, image URLs could change. You can download/replace these with assets you have permission to use and update the URLs in `index.html` and `styles.css`.
- The source website describes a “secure portal” and 24/7 support in its process section. This static recreation avoids implying that a booking portal is implemented; real booking/payment features would require a separate integration.
