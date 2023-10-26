## @Videolity: Carlos Reinoso - Junior/Mid Frontend Developer

### Intention

This repo is to showcase my initiative and attempt to resolve some percieved issues with https://www.videolity.com namely the iFrame scrollbar

Inspecting the website, I noticed:

- wix was being used
- iFrame embeded a nextjs app e.g https://videolity-demo.web.app/mobile/netflix/demo
- video js library was being used https://videojs.com/guides/layout/
- the API to get product list
- basic style and use of map to display data

### Fix

- I attempt to fix the righthand scrollbar next to the video when viewing from the wix site. This is done by adding styles to the nextjs app iFrame and making it responsive. Also elongating the section in wix so all content from the iFrame can be seen.
- style the scrollbar to improve aesthetic

### Deployed

Vercel deployment of iFrame https://videolity-dev-test.vercel.app/wix

wix deployment of iFrame within it https://jrpcarlos.wixsite.com/videolity-test
Install it and run:

```bash
gh repo clone CarlosReinoso/videolity-dev-test

pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
