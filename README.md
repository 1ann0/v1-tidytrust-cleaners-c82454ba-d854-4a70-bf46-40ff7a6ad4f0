# TidyTrust Cleaners

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/1ann0/tidytrustcleaners)

TidyTrust Cleaners is a modern, professional, and trustworthy web application for a premier cleaning service. The platform is designed with a clean, bright, and reassuring aesthetic to optimize customer conversion. The core of the application is a visually stunning landing page that builds trust through clear value propositions, social proof, and a streamlined user journey. It features sections for services, a step-by-step process guide, client testimonials, and an FAQ. The primary call-to-action guides users towards an intuitive, multi-step booking modal. The entire experience is enhanced with subtle, professional animations to create a polished and delightful user interface.

## ✨ Key Features

-   **Stunning Landing Page:** A visually impressive and responsive landing page designed for high conversion.
-   **Services Showcase:** Clean grid layout to display available cleaning services.
-   **Trust-Building Elements:** Includes a trust bar, client testimonials, and an FAQ section.
-   **Intuitive "How It Works" Section:** A simple 3-step guide to the booking process.
-   **Smart Booking Flow:** A multi-step modal for a seamless booking experience.
-   **Modern Authentication:** Simple login/signup with social login options.
-   **Professional Animations:** Subtle and smooth animations powered by Framer Motion.

## 🚀 Technology Stack

-   **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Shadcn/UI](https://ui.shadcn.com/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Deployment:** [Cloudflare Pages & Workers](https://workers.cloudflare.com/)

## 🏁 Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/tidytrust-cleaners.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd tidytrust-cleaners
    ```
3.  Install the dependencies:
    ```bash
    bun install
    ```

## 🛠️ Development

To run the development server, execute the following command. This will start the Vite development server, typically on `http://localhost:3000`.

```bash
bun run dev
```

## scripts

-   `bun run dev`: Starts the local development server.
-   `bun run build`: Builds the application for production.
-   `bun run lint`: Lints the codebase using ESLint.
-   `bun run deploy`: Builds and deploys the application to Cloudflare.

## ☁️ Deployment

This project is configured for seamless deployment to Cloudflare Pages.

To deploy your application, simply run the deploy script:

```bash
bun run deploy
```

This command will build the Vite frontend and deploy both the static assets and the server-side worker functions to your Cloudflare account.

Alternatively, you can deploy directly from your GitHub repository with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/1ann0/tidytrustcleaners)