# GitHub Users Searchbar [2025]

---

## Description

**GitHub Users Searchbar** is a web application built with React, TypeScript, and Styled Components. It enables users to search for GitHub users by their username, display basic information about them, and navigate through results using pagination.

---

## Deploy

**The project is deployed at url**:

- **https://github-users-searchbar.netlify.app/**

## Features

- **User Search**: Quickly search for GitHub users by their username.
- **Pagination**: Easily browse through the list of results with page navigation.
- **User Information**: Display user avatars, usernames, a dialog with detailed information about user.
- **Results Sort**: Sort results by repos Descending and Ascending.
- **Responsive Design**: Stylish and adaptable UI for all devices.

---

## Technologies

- [React](https://reactjs.org/) — A library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) — A strongly typed superset of JavaScript.
- [Styled Components](https://styled-components.com/) — A library for creating styled React components.
- [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) - A small, fast, and scalable state manager.
- [GitHub API](https://docs.github.com/en/rest) — API for fetching user data from GitHub.

---

## Installation and Setup

### Prerequisites

- Installed [Node.js](https://nodejs.org/) version 14.x or later.
- Installed [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

### Steps(only for web-developers)

1. Install dependencies:
   - npm i or npm install
2. Configure environment variables:
   - Create a .env file in the project root and add the GitHub API token:
   - VITE_GITHUB_TOKEN=your_github_api_token
   - To obtain a token, visit GitHub Developer Settings(https://github.com/settings/tokens).
3. Start the project:
   - npm run dev
4. Open the application in your browser at url:
   - http://localhost:5173.

#### Usage

1.  Type a GitHub username in the input field.
2.  Change the sorting results if necessary(it is set to Descending by default).
3.  Navigate between pages using the pagination controls.
4.  Click on a username to open a dialog with detailed user information and go to chosen user GitHub profile(if you need).

---
