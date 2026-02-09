🚀 AI Managed Web App Project Instructions
Project Goal

Build and maintain a small AI assisted web application where:

Telegram bot receives my requests (feature changes, fixes, enhancements)

Bot sends instructions to the AI developer

AI updates the GitHub repo automatically

App auto deploys to Vercel

New deployment URL is shared back to me

I should NOT manually code.
All implementation must be done by the AI agent.

Tech Stack (fixed)

Use only these unless I explicitly change:

Frontend

Next.js (latest)

TypeScript

TailwindCSS

Backend

Next.js API routes OR server actions

Deployment

Vercel

Bot

Telegram Bot (Node.js)

Repo

GitHub

Required Architecture

Create this structure:

/app              -> Next.js app router
/components       -> reusable UI
/lib              -> helpers/services
/pages/api        -> API endpoints
/bot              -> telegram bot server
/public

Features to Implement First
1. Basic Website

Home page

Simple modern UI

Header + content section

Status text: "App running"

2. Telegram Bot Control

Create Telegram bot service that:

Commands:

/status
→ returns deployment URL + app status

/deploy
→ triggers new deployment

/logs
→ returns latest logs

/update <message>
→ treat message as feature request
→ AI updates repo
→ push changes
→ redeploy automatically

3. Auto Deployment

Setup:

Connect repo to Vercel

Every push to main → auto deploy

After deploy:

get deployment URL

send URL to Telegram

4. AI Developer Workflow

When I send:

/update Add login page with Google auth

You must:

Interpret request

Modify code

Commit with clear message

Push to GitHub

Wait for Vercel deploy

Send new URL in Telegram

Coding Rules

Always:

Write clean code

Use TypeScript

Modular structure

No hardcoding secrets

Use .env

Add comments

Keep minimal dependencies

Environment Variables

Create:

TELEGRAM_BOT_TOKEN=
VERCEL_TOKEN=
GITHUB_TOKEN=
APP_URL=

Git Rules

Every change:

Commit message format:

feat: <feature>
fix: <bug>
refactor: <cleanup>


Push automatically.

Bot Behavior Rules

Bot must:

respond fast

confirm actions

send deployment link

send errors if build fails

Example:

✅ Deployed successfully
URL: https://xyz.vercel.app

Future Features (optional later)

You may add when requested:

Auth

Database

Chat UI

AI assistant

Dashboard

File uploads

Logs viewer

Only build when asked.

AI Responsibilities

You are responsible for:

Writing code

Fixing bugs

Deploying

Maintaining structure

Keeping project working

I only describe requirements in plain English.

Never ask me to code manually.

First Task

After reading this file:

Scaffold Next.js app

Setup Tailwind

Create Telegram bot

Connect GitHub

Setup Vercel auto deploy

Send me the first working deployment URL