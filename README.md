# B2B Management Platform

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

