# B2B Task Management Platform

A full-stack **B2B SaaS application** built with **FastAPI** and **Clerk** for managing **authentication, organizations, memberships, roles, permissions, and subscription-based billing**.

The platform is designed for multi-tenant businesses where each organization can securely manage users, control access, and unlock features based on their subscription plan.

---

## Key Features

### 🔐 Authentication
- Secure sign-up and sign-in powered by **Clerk**
- JWT-based authentication for backend APIs
- Protected routes and session handling

### 🏢 Organization Management
- Create and manage multiple organizations
- Invite and manage organization members
- Organization-scoped access to resources

### 👥 Roles & Permissions
- Role-based access control (`Owner`, `Admin`, `Member`)
- Permission checks enforced at the backend
- Fine-grained authorization for sensitive actions

### 💳 Subscriptions & Billing
- Organization-level subscriptions handled by **Clerk**
- Plan-based feature access (Free / Pro / Enterprise)
- Backend-enforced subscription restrictions

---

## Tech Stack

- **Backend:** FastAPI (Python)
- **Frontend:** React + Vite
- **Authentication & Billing:** Clerk
- **Authorization:** Roles & permissions
- **API Security:** JWT (Clerk tokens)

B2B project/
├── backend/
│ ├── app/
│ │ ├── api/ # API routes
│ │ ├── core/ # Auth, config, database
│ │ ├── models/ # Database models
│ │ ├── schemas/ # Pydantic schemas
│ │ └── main.py
│ ├── .env
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ ├── .env
│ └── package.json
│
└── README.md


---

## Backend Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt


Create backend/.env (do not commit):

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
FRONTEND_URL=http://localhost:5173


Run the backend:

uvicorn app.main:app --reload


Backend runs on:

http://localhost:8000

Frontend Setup
cd frontend
npm install
npm run dev


Create frontend/.env:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:8000


Frontend runs on:

http://localhost:5173

Authorization Flow

User authenticates via Clerk

Clerk issues a JWT with organization context

Frontend sends the token to FastAPI

FastAPI validates authentication, role, and permissions

Subscription plan is checked before granting access

Security

Environment variables are excluded via .gitignore

Secrets are never committed

All authorization rules are enforced server-side

License

MIT
