import App from "./App.tsx";
import Irregular from "./pages/Menu/Irregular.tsx";
import Home from "./pages/Menu/Home.tsx";
import Plural from "./pages/Menu/Plural.tsx";
import Palindromes from "./pages/Menu/Palindromes.tsx";
import Numerals from "./pages/Menu/Numerals.tsx";
import WordSelection from "./pages/Menu/WordSelection.tsx";
import BulkTranslation from "./pages/Menu/BulkTranslation.tsx";
import FrequencyList from "./pages/Menu/FrequencyList.tsx";
import Reviews from "./pages/Menu/Reviews.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import List from "./pages/List.tsx";
import WordDetail from "./pages/WordDetail.tsx";
import IntervalRepitition from "./pages/Menu/IntervalRepitition.tsx";
import Login from "./pages/Login.tsx";
import BookMarks from "./pages/BookMarks.tsx";
import Settings from "./pages/Settings.tsx";
import Exercises from "./pages/Exercises.tsx";
import Express from "./pages/Tests/Express.tsx";
import EngUzb from "./pages/Tests/EngUzb.tsx";
import Logout from "./pages/Logout.tsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "irregular",
        element: <Irregular />,
      },
      {
        path: "plural",
        element: <Plural />,
      },
      {
        path: "palindromes",
        element: <Palindromes />,
      },
      {
        path: "numerals",
        element: <Numerals />,
      },
      {
        path: "wordle",
        element: <WordSelection />,
      },
      {
        path: "bulk-translation",
        element: <BulkTranslation />,
      },
      {
        path: "frequency-list",
        element: <FrequencyList />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "interval-repetition",
        element: <IntervalRepitition />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "list/:letter",
        element: <List />,
      },
      {
        path: "en/:word",
        element: <WordDetail />,
      },
      {
        path: "bookmarks",
        element: <BookMarks />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "exercises",
        element: <Exercises />
      },
      {
        path: "express",
        element: <Express />
      },
      {
        path: "eng-uzb",
        element: <EngUzb />
      },
      {
        path: "logout",
        element: <Logout />
      }

    ],
  },
];

export default routes;
