# GoFinance

GoFinance is a finance operations dashboard for lenders, MFIs, SACCOs, and fintech teams. It combines a React frontend with an Express API to provide portfolio monitoring, loan tracking, customer insights, collections, risk visibility, and savings analytics in one workspace.

## Features

- Overview dashboard with portfolio health metrics
- Loan management and approvals workflow
- Customer and member records
- Collections and repayment tracking
- Risk and exposure monitoring
- Savings and report views
- Demo authentication for quick testing

## Tech stack

- React + Vite
- Express API
- Local seeded data for demo purposes
- Render/Vercel-friendly config files

## Authentication setup

Credentials are not included in the repository. Configure the API host's `GOFINANCE_USERS` environment variable with a JSON array of users. For example:

```json
[
  {
    "email": "admin@example.com",
    "password": "replace-with-a-long-unique-password",
    "name": "Admin",
    "role": "Admin"
  }
]
```

Use unique, strong passwords and set this value through your hosting provider's environment settings. Do not commit real credentials.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the frontend and backend together:
   ```bash
   npm run dev:full
   ```
3. Open the app in your browser:
   ```text
   http://localhost:5173
   ```

If port 5173 is already in use, Vite will move to the next available port automatically.

## Common startup issue

If sign-in fails with a 502 error or a JSON parsing issue, the Express API is likely not running. Always start the app using:

```bash
npm run dev:full
```

This starts both the Vite frontend and the API server together.

## Production build

```bash
npm run build
```

## Deployment

This project includes deployment configuration for Render and Vercel-style hosting patterns. You can adapt the current configuration to your preferred hosting provider.

## Project structure

- `src/` – React frontend
- `server/index.js` – Express backend and seeded data
- `render.yaml` – Render deployment config
- `vercel.json` – Vercel deployment config
- `vite.config.js` – Vite dev server and proxy config
