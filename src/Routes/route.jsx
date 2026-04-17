import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import TimelinePage from "../Pages/TimelinePage/TimelinePage";
import StatsPage from "../Pages/Stats/StatsPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { Suspense } from "react";
import FriendDetails from "../Components/FriendDetails/FriendDetails";





// const friends= fetch('friendsData.json').then(res => res.json());


const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    hydrateFallbackElement: (
      <span className="loading loading-spinner loading-2xl"></span>
    ),
    children: [
        {
            index: true,
            loader: () => fetch('/friendsData.json'),
            Component: HomePage
        },
        {
            path: 'friend/:id',
            loader: () => fetch('/friendsData.json'),
            Component: FriendDetails
        },
        {
            path: 'time-line',
            Component: TimelinePage
        },
        {
            path: 'stats',
            Component: StatsPage
        },
    ],
    errorElement: <ErrorPage /> 
  },
])


export default router;