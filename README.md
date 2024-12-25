# Healthcare Revenue Cycle Management (HRCM) Frontend

This is the frontend for the Healthcare Revenue Cycle Management (HRCM) application. It provides an interactive dashboard for tracking claims, payments, and denials, and visualizing key analytics using charts.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16.x or later)
- npm or yarn (npm is used in this project)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd hrcm-frontend
```

### 2. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory of the project and add the following:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

- **`NEXT_PUBLIC_API_BASE_URL`**: The base URL of the backend API. Update this to point to your backend server's URL.

### 4. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### 5. Build for Production

To create a production build, run:

```bash
npm run build
```

Serve the production build locally for testing:

```bash
npm run start
```

### 6. Test the Application

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Use the interactive dashboards to view analytics for claims, denials, and payments.

