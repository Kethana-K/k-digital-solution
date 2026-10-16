# K Digital Solutions — Premium Agency Portfolio

A responsive React + Vite portfolio website with service cards, a SpeakUp concept/demo showcase, project enquiry modal, and a floating K Digital Assistant chatbot.

## Run locally

1. Install Node.js LTS if it is not already installed: https://nodejs.org/
2. Extract this ZIP.
3. Open the `k-digital-solutions-portfolio` folder in VS Code.
4. Open Terminal in that folder and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
npm run preview
```

## Chatbot notes

- The floating **Chat with us** button opens the K Digital Assistant panel.
- It supports predefined responses and quick actions for services, project costs, process, portfolio, and contact.
- It is a local rule-based chatbot, not an AI model; AI answers require a secure backend/API integration.
- Chat messages are not saved to a database.

## Contact settings

Before publishing, verify the WhatsApp number, email, and Instagram URL at the top of `src/App.jsx`. The enquiry form prepares a WhatsApp/email message; the user must review and send it. It does not save submissions to a server.

## Portfolio integrity

SpeakUp is labelled as a concept/demo. Replace any sample or illustrative content with verified details before publishing. Do not publish invented testimonials, client logos, project outcomes, or pricing as real.

## Chatbot notes
The K Digital Assistant uses client-side rule-based intent matching for common questions about services, pricing, project process, portfolio, web/mobile development, AI chatbots, cloud/DevOps, design, analytics, security, maintenance, and contact. It is not an AI model and does not send messages to an AI provider. For open-ended AI answers, add a secure backend and AI API; never place a private API key in frontend code.
