# GoFinance Deployment Guide

## Architecture

- **Render**: Backend API + Static Frontend (Express + React build)
- **Vercel**: Frontend Only (with rewrites to Render API)

You can deploy to one or both platforms. A single Render deployment runs standalone.
Dual deployment lets you scale frontend (Vercel edge) and backend (Render) separately.

## Quick Start

### 1. Prepare Your GitHub Repository

This project is already at: https://github.com/gonytaidorgatdet-hub/Taitech.net

Ensure all changes are committed:
`ash
git add .
git commit -m "chore: add deployment configs"
git push origin master
`

### 2. Deploy to Render (Backend + Frontend)

1. Go to https://render.com and sign up/log in
2. Click **New** ? **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Name**: gofinance-api
   - **Branch**: master
   - **Build Command**: 
pm install && npm run build
   - **Start Command**: 
pm run start
   - **Environment**: Node
   - **Plan**: Free (or Starter for reliability)
5. Click **Create Web Service**

The service will deploy. Once live, you'll get a URL like:
`
https://gofinance-api-xxxx.onrender.com
`

**Notes:**
- Free tier auto-spins down after 15 mins of inactivity
- First request may take 30+ seconds to wake up
- Upgrade to "Starter" for production (/month, no spin-down)

### 3. Deploy to Vercel (Frontend Only, Optional)

1. Go to https://vercel.com and sign up/log in
2. Click **Add New** ? **Project**
3. Import from Git: Choose your repository
4. Configure:
   - **Framework**: Vite
   - **Build Command**: 
pm run build
   - **Output Directory**: dist
5. Add Environment Variables:
   - **VITE_API_URL**: (Use your Render URL, e.g., https://gofinance-api-xxxx.onrender.com)
6. Click **Deploy**

Once live, you'll get a URL like:
`
https://gofinance-vercel-xxxx.vercel.app
`

**Notes:**
- Faster edge delivery via Vercel CDN
- Keeps frontend and backend separate
- Can scale independently

## Testing Deployments

### Render Only
1. Open https://gofinance-api-xxxx.onrender.com
2. Login with:
   - Email: Taitechweb@gmail.com
   - Password: Taitech29@

### Vercel + Render
1. Open https://gofinance-vercel-xxxx.vercel.app
2. Same credentials

## Environment Variables

### Render
- NODE_ENV=production (set automatically)
- PORT (assigned dynamically)

### Vercel
- VITE_API_URL=https://your-render-app.onrender.com (required if using Render backend)

## Monitoring & Logs

**Render Dashboard**: https://dashboard.render.com
- View logs in real-time
- Restart service
- Monitor CPU, memory

**Vercel Dashboard**: https://vercel.com/dashboard
- View deployment logs
- Analytics and performance
- Redeploy on demand

## Common Issues

### "Cannot POST /api/login"
- Render service not running or spun down ? wait 30-60 seconds for restart
- API endpoint misconfigured ? check VITE_API_URL env var on Vercel
- CORS issues ? Express is configured correctly; check proxy in vite.config.js

### "Unexpected end of JSON input"
- Backend API crashed or not responding
- Check Render logs: https://dashboard.render.com ? gofinance-api ? Logs

### Vercel build fails
- Missing dependencies ? run 
pm install locally and commit package-lock.json
- Wrong build command ? should be 
pm run build (not 
pm run start)

## Database & Persistence

Currently, GoFinance uses **in-memory data**. All changes reset when the service restarts.

To add persistence:
1. Connect a **Postgres database** (Render offers free tier)
2. Update server.js to query the database instead of seedData
3. Implement migrations with 
pm install drizzle-orm

## Security

?? **Important**: The demo credentials are hardcoded in server.js:
- Taitechweb@gmail.com / Taitech29@
- gonygatdettaidor@gmail.com / Taitech29@

For production:
1. Move credentials to Render Env Vars
2. Implement proper authentication (JWT, OAuth, etc.)
3. Add HTTPS (both platforms provide free SSL)
4. Implement rate limiting on API endpoints
5. Validate and sanitize all inputs

## Next Steps

1. Push your code to GitHub
2. Deploy to Render first (full-stack in one service)
3. (Optional) Deploy to Vercel for better frontend CDN coverage
4. Test login and data operations
5. Share the live URL!

---

**Questions?** Check Render/Vercel documentation or reach out.
