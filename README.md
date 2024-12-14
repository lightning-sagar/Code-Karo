# Online Coding SaaS Platform(Code-Karo-Rose)

Welcome to the Online Coding SaaS Platform built with **Next.js**! This platform allows users to write, run, and share code snippets seamlessly. Collaborate with others by sharing your snippets and receive replies from fellow developers.

![image](https://github.com/user-attachments/assets/c35de2cf-fc86-4079-bc6c-e713709aa550)

## Key Features

1. **Write and Run Code:**
   - Free support for JavaScript.
   - Paid support for other programming languages ($39 subscription required).

2. **Share Snippets:**
   - Share your code snippets with others in the community.
   - Receive replies and collaborate on your code.

3. **User-Friendly Interface:**
   - Built using modern technologies with a focus on performance and user experience.

---

## File Structure

This project is based on the GitHub repository: [Code-Karo](https://github.com/lightning-sagar/Code-Karo).

Below is the structure of the project:

```
Code-Karo/
├── components/
│   ├── Editor.js            # Code editor component.
│   ├── Navbar.js            # Navigation bar.
│   ├── Footer.js            # Footer component.
│   └── SnippetCard.js       # Snippet display component.
├── pages/
│   ├── index.js             # Home page.
│   ├── snippets/[id].js     # Snippet details page.
│   ├── api/
│   │   ├── snippets.js      # API for handling snippet data.
│   │   └── run-code.js      # API for executing code.
├── public/
│   ├── logo.png             # Platform logo.
│   └── styles.css           # Additional global styles.
├── styles/
│   ├── globals.css          # Global CSS styles.
│   ├── Editor.module.css    # Editor-specific styles.
├── utils/
│   └── apiClient.js         # Helper functions for API calls.
├── .env                     # Environment variables.
├── package.json             # Project dependencies and scripts.
├── README.md                # Project documentation.
└── next.config.js           # Next.js configuration.
```

---

## Installation and Setup

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/lightning-sagar/Code-Karo.git
   cd Code-Karo
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the required variables (e.g., API keys, database URIs).

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Access the application at `http://localhost:3000`.

---

## Pricing

- **Free Plan:** Run JavaScript code at no cost.
- **Premium Plan:** $39 subscription to unlock support for additional languages.

---

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push to your fork.
4. Submit a pull request.

---

## Contact

For any queries or support, feel free to reach out:
- Email: lightningsagar0@gmail.com
- GitHub: [Code-Karo](https://github.com/lightning-sagar/Code-Karo)

---

Enjoy coding with the Online Coding SaaS Platform!
