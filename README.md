## Getting Started

This repo uses `"next": "14.3.0-canary.57"` to reproduce an issue.

The issue is a noticeable content flickering (or CLS) caused by having multiple levels of dynamic imports along with React.ContextAPI.

*Note: App uses only "use client" components in order to avoid any composition issues with RSC and to simplify the code.*

## Prerequisites

- Install the dependencies `npm i`
- Build the app `npm run build`
- Run the production server `npm run start`
- Open [http://localhost:3000](http://localhost:3000)
- Open devtools on Network tab, Disable cache and set Fast 3G network speed to better see the issue.

## To reproduce

### First issue: redirect

With opened devtools and disabled cache click the only link `<Link /> navigation` on [http://localhost:3000](http://localhost:3000). JS chunks will load consequently, causing noticable CLS.

### First issue: direct open / refresh

Open/refresh [http://localhost:3000/page2](http://localhost:3000/page2) with opened devtools and disabled cache. CLS is visible.
