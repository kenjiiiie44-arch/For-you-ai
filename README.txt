FOR YOU — AI BACKEND

This connects the For You app to the OpenAI Responses API.

1. Install Node.js on a computer/server.
2. Open this folder in a terminal.
3. Run:
   npm install
4. Create a file named .env and put your API key in it:
   OPENAI_API_KEY=YOUR_KEY
   OPENAI_MODEL=gpt-5.6-luna
5. For production, use a proper secret/environment manager; never put the API key inside the HTML.
6. Run:
   npm start
7. Open:
   http://localhost:3000

IMPORTANT:
The API key is a secret. Do not paste it into the public HTML or share it.

The current HTML can be placed in public/index.html and its Answer button should POST to /api/ask.
