# 🎬 React Movie Browser

A simple React application that fetches movies from [The Movie Database (TMDb)](https://www.themoviedb.org/) API. Users can view popular movies, search by title, and manage a list of favorite movies that persist using local storage.

## 📁 Features

- **Home Page**
  - Displays popular movies on load
  - Includes a search bar to look up movies by title
- **Favorites Page**
  - Allows users to save and remove favorite movies
  - Favorites persist even after refreshing the page using `localStorage`

## 🔧 Technologies Used

- React
- React Router
- Vite
- Fetch API
- LocalStorage API
- Plain CSS

## 🌐 API

This app uses [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). You need an API key to fetch data.

### Environment Variables

Create a `.env` file in the root of your project and add your TMDb API key:

```env
VITE_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://api.themoviedb.org/3
```

## 🚀 Getting Started

1. Clone the repository:

```shell
git clone https://github.com/yourusername/react-movie-browser.git
cd react-movie-browser
```

2. Install dependencies:

```shell
npm install
```

3. Create a .env file and add your TMDb API key

4. Start the development server:

```shell
npm run dev
```

5. Build and preview (optional):

```shell
npm run build && npm run preview
```

📂 Project Structure (Simplified)

```text
src/
├── api/                  # API calls to TMDb
├── components/           # Reusable components like MovieCard
├── contexts/             # React Context for favorites
├── pages/                # Home and Favorites pages
├── css/                  # CSS stylesheets
└── main.jsx              # Entry point
```
