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



<img width="1330" height="609" alt="Screenshot 2026-02-08 at 11 07 07 PM" src="https://github.com/user-attachments/assets/2372a6f7-23e2-4c3e-b5ae-2a1ac9dd4926" />
<img width="1291" height="602" alt="Screenshot 2026-02-08 at 11 07 45 PM" src="https://github.com/user-attachments/assets/7aff766e-3b1d-47e1-9603-8c06dce9ee7e" />


<img width="1385" height="602" alt="Screenshot 2026-02-08 at 11 08 19 PM" src="https://github.com/user-attachments/assets/bc49a8a2-aad8-4f45-b1ee-d6d6acd1db87" />


<img width="1378" height="608" alt="Screenshot 2026-02-08 at 11 10 48 PM" src="https://github.com/user-attachments/assets/870e7ab3-48a6-4a5a-9235-0da38aea2987" />



