# 🚀 Salesforce DevOps Hub

> A centralized hub for Salesforce DevOps tools, workflows, and automation patterns.

🌐 Live Site: https://sfdcai.github.io/salesforce-devops-hub/

---

## 📌 Overview

Salesforce DevOps Hub is an open-source initiative to simplify and standardize **Salesforce DevOps practices** across teams.

It provides:
- 🔧 DevOps tools and integrations
- ⚙️ CI/CD pipeline examples
- 📦 Metadata management strategies
- 🤖 Automation scripts and workflows
- 📊 Best practices for scalable Salesforce delivery

Salesforce DevOps enables teams to manage change, automate deployments, and improve collaboration across environments using modern ALM practices. 

---

## 🎯 Goals

- Create a **single source of truth** for Salesforce DevOps
- Reduce dependency on manual deployments (change sets ❌)
- Enable **source-driven development**
- Provide **plug-and-play DevOps templates**
- Integrate with tools like GitHub, Azure DevOps, and MuleSoft

---

## 🏗️ Architecture (High Level)

```text
Developer → Git → CI/CD Pipeline → Salesforce Org
                      ↓
       Automated Validation & Deployment
```


---

## 🚀 Key Features

- **Multi-Org Release Tracking**: Real-time visibility into scratch orgs, sandboxes, and production release branches.
- **Automated Validation Engine**: Triggers SFDX metadata validations (`sf project deploy validate`) with automated rollback gates.
- **Visual Metadata Diffing**: Side-by-side component inspection for Apex classes, Custom Objects, Flows, and Lightning Web Components.
- **Strict Quality Gates**: Enforces minimum Apex unit test coverage and static analysis thresholds prior to merge.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | React 18 + Vite |
| **Component Library** | Radix UI / Shadcn UI |
| **Styling** | Tailwind CSS + Tailwind Animate |
| **Animation** | Framer Motion |
| **State & Forms** | TanStack Query, React Hook Form, Zod |
| **Testing** | Vitest + Playwright |

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm
- [Salesforce CLI (`sf`)](https://developer.salesforce.com/tools/salesforcecli)

### Installation
```bash
# Clone the repository
git clone https://github.com/sfdcai/salesforce-devops-hub.git
cd salesforce-devops-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

### Running Tests
```bash
# Unit test suite with Vitest
npm run test

# Watch mode
npm run test:watch
```

### Production Build
```bash
npm run build
```

---

## 📄 License

This project is licensed under the MIT License.
