# Minimal Chatbot

A simple chatbot with a **React (Vite)** frontend and **Python (FastAPI)** backend that uses the **Azure OpenAI API** to answer questions.

## What’s included

- **Frontend**: Input box, Send button, response area, Clear button, and “Thinking...” loading state. Dark blue starfield background, light chat panel, and robot favicon.
- **Backend**: One `POST /query` endpoint that validates input, calls Azure OpenAI, and returns the reply.
- **Extras**: Empty-question check (“Please ask a question!”), Clear to erase history, loading message while the backend is working.

## Prerequisites

- **Node.js** (for the frontend)
- **Python 3.x** (for the backend)
- **Azure OpenAI** resource and a deployed model (e.g. gpt-4) in the Azure Portal

## Backend setup

1. Go to the backend folder and create a virtual environment (with `uv` or `venv`):

   ```bash
   cd backend
   uv venv
   source .venv/bin/activate   # Linux/macOS
   # or:  .venv\Scripts\activate   on Windows
   ```

2. Install dependencies:

   ```bash
   uv pip install -r requirements.txt
   # or:  pip install -r requirements.txt
   ```

3. Configure Azure OpenAI:

   - Copy the example env file: `cp .env.example .env`
   - Edit `.env` and set:
     - `AZURE_OPENAI_API_KEY` – from Azure Portal → your resource → Keys and Endpoint
     - `AZURE_OPENAI_ENDPOINT` – e.g. `https://your-resource.openai.azure.com/`
     - `AZURE_OPENAI_DEPLOYMENT_NAME` – your deployment name (e.g. `gpt-4`)
     - `AZURE_OPENAI_API_VERSION` – optional (default is set in `.env.example`)

4. Run the API:

   ```bash
   uvicorn main:app --reload --port 8000
   ```

   The backend will be at `http://localhost:8000`. Optional: open `http://localhost:8000/health` to confirm it’s running.

## Frontend setup

1. In a new terminal, go to the frontend folder and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

   The app will be at `http://localhost:5173`. The frontend is configured to call the backend at `http://localhost:8000` (see `API_BASE` in `src/App.jsx` if you need to change it).

## Testing the chatbot

1. Start the **backend** (port 8000) and **frontend** (port 5173) as above.
2. Open `http://localhost:5173` in your browser.
3. **Normal question**: Type a question (e.g. “What is the capital of France?”), click **Send**. You should see “Thinking...” then the assistant’s reply.
4. **Empty question**: Leave the input empty or only spaces, click **Send**. You should see “Please ask a question!” (from the backend).
5. **Clear**: Click **Clear** and confirm that the conversation history is erased.

## Snippets / videos

Demo screenshots are in `docs/screenshots/`:

- [demo-1440p.png](docs/screenshots/demo-1440p.png) – desktop view
- [demo-GalaxyS10.png](docs/screenshots/demo-GalaxyS10.png) – mobile view

Add more screenshots or a short screen recording to the same folder and link them here if you like.

## Code in a zip file

To bundle the project (source only, no `node_modules`, venv, or `.env`):

- **Option A**: Run the script from the project root:

  ```bash
  chmod +x script/create_zip.sh
  ./script/create_zip.sh
  ```

  This creates `code.zip` in the project root.

- **Option B**: Create the zip manually, excluding:
  - `node_modules/`
  - `.venv/`, `venv/`, `env/`
  - `.env`
  - `__pycache__/`, `*.pyc`
  - `.git/`
  - `code.zip` (if present)

## Project layout

```
├── backend/
│   ├── .env.example    # Template for environment variables
│   ├── requirements.txt
│   └── main.py         # FastAPI app and /query endpoint
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   │   └── favicon.png # Robot face favicon
│   └── src/
│       ├── main.jsx
│       ├── App.jsx     # Chat UI and state (useState, fetch)
│       ├── App.css
│       └── StarsBackground.jsx
├── docs/
│   └── screenshots/    # Demo screenshots
├── script/
│   └── create_zip.sh
└── README.md
```

## Summary

- **Backend**: FastAPI, `/query` (POST), empty-check and Azure OpenAI call; secrets via `.env`.
- **Frontend**: React with `useState` for input, messages, and loading; Send, Clear, and “Thinking...” as specified. UI uses a deep blue starfield background and a light chat panel (Minimal Chatbot / DEMO CHATBOT).
- **Instructions**: Follow “Backend setup” → “Frontend setup” → “Testing the chatbot” for setup and testing.
