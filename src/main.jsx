import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Make sure to use HelmetProvider here
import ErrorPage from "./components/errorMessage/errorPage";
import "./index.css";
import App from "./App";
import AboutUs from "./components/page/aboutUs";
import News from "./components/page/news";
import PostEvents from "./components/page/postEvent";
import Conference from "./components/page/Conference";
import CommunityEvents from "./components/page/community";
import PostDetail from "./components/page/postDetail";
import LeaderBoard from "./components/page/leaderBoard";
import Gallery from "./components/page/gallery";
import Speaker from "./components/page/speaker";
import Schedule from "./components/page/schedule";
import Partners from "./components/page/partners";
import Volunteer from "./components/page/volunteer";
import PhotosDetails from "./components/page/galleryDetail";
import ContactUs from "./components/page/contactUs";
import TeamsAndCondition from "./components/page/teamAndCondition";
import VolunteerDepartment from "./components/page/volunteerDepartment";
import VolunteerDepartmentDetail from "./components/page/volunteerDepartmentDetail";
import ShopItems from "./components/page/shop";

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Helmet>
          <title>Ph Women Run</title>
          <meta
            name="description"
            content="The 2025 PH City Women Run invites you to be part of an incredible event to empower women and young girls from all walks of life."
          />
        </Helmet>
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: (
      <>
        <Helmet>
          <title>Run Connecting Women, Running Together </title>
          <meta
            name="description"
            content="An inclusive and empowering environment where women can connect, share experiences, and inspire one another."
          />
        </Helmet>
        <AboutUs />
      </>
    ),
  },
  {
    path: "conference",
    element: (
      <>
        <Helmet>
          <title>WOMEN RUN CONFERENCE </title>
          <meta
            name="description"
            content="Engage in stimulating discussions that promotes active, healthy lifestyle and fosters women’s confidence and awareness."
          />
        </Helmet>
        <Conference />
      </>
    ),
  },
  {
    path: "news",
    element: (
      <>
        <Helmet>
          <title>Latest News - On Sport Events</title>
          <meta
            name="description"
            content="Stay updated with the latest news in the travel industry. Learn about deals, trends, and innovations in travel consolidation."
          />
        </Helmet>
        <News />
      </>
    ),
  },
  {
    path: "community",
    element: (
      <>
        <Helmet>
          <title>Community Events</title>
          <meta
            name="description"
            content="Join our community events and stay connected ."
          />
        </Helmet>
        <CommunityEvents />
      </>
    ),
  },
  {
    path: "/posts/:slug",
    element: (
      <>
        <Helmet>
          <title>Post Detail - Ph-City-Women-Run</title>
          <meta
            name="description"
            content="Read detailed posts on Ph-City-Women-Run, news, and event recaps from industry leaders."
          />
        </Helmet>
        <PostDetail />
      </>
    ),
  },
  {
    path: "post-Events",
    element: (
      <>
        <Helmet>
          <title>Post Events - Travel</title>
          <meta
            name="description"
            content="Get the latest updates on upcoming events, conferences."
          />
        </Helmet>
        <PostEvents />
      </>
    ),
  },
  {
    path: "gallery",
    element: (
      <>
        <Helmet>
          <title> Gallery</title>
          <meta
            name="description"
            content="Explore our Run Gallery and see captivating photos ."
          />
        </Helmet>
        <Gallery />
      </>
    ),
  },
  {
    path: "/photos/:slug",
    element: (
      <>
        <Helmet>
          <title>photos </title>
          <meta name="description" content="Check ." />
        </Helmet>
        <PhotosDetails />
      </>
    ),
  },
  {
    path: "speaker",
    element: (
      <>
        <Helmet>
          <title>Our speakers</title>
          <meta name="description" content="." />
        </Helmet>
        <Speaker />
      </>
    ),
  },
  {
    path: "schedule",
    element: (
      <>
        <Helmet>
          <title>Schedule</title>
          <meta name="description" content="." />
        </Helmet>
        <Schedule />
      </>
    ),
  },
  {
    path: "partners",
    element: (
      <>
        <Helmet>
          <title>Our partners</title>
          <meta name="description" content="" />
        </Helmet>
        <Partners />
      </>
    ),
  },
  {
    path: "volunteer",
    element: (
      <>
        <Helmet>
          <title>Become a volunteer</title>
          <meta name="description" content="" />
        </Helmet>
        <Volunteer />
      </>
    ),
  },
  {
    path: "department",
    element: (
      <>
        <Helmet>
          <title>Volunteer Department</title>
          <meta name="description" content="." />
        </Helmet>
        <VolunteerDepartment />
      </>
    ),
  },
  {
    path: "/departments/:slug",
    element: (
      <>
        <Helmet>
          <title>Volunteer Department</title>
          <meta name="description" content="" />
        </Helmet>
        <VolunteerDepartmentDetail />
      </>
    ),
  },
  {
    path: "/leaderBoards/:slug",
    element: (
      <>
        <Helmet>
          <title>Leaderboard Rankings</title>
          <meta name="description" content="Check ." />
        </Helmet>
        <LeaderBoard />
      </>
    ),
  },
  {
    path: "/shop/:slug",
    element: (
      <>
        <Helmet>
          <title>purchase</title>
          <meta name="description" content="Check ." />
        </Helmet>
        <ShopItems />
      </>
    ),
  },
  {
    path: "contact",
    element: (
      <>
        <Helmet>
          <title>
            Contact us & get aload of our events, post and conference
          </title>
          <meta
            name="description"
            content="Get in touch with our team for inquiries about the run, to become volunteer and conference."
          />
        </Helmet>
        <ContactUs />
      </>
    ),
  },
  {
    path: "teamsAndCondition",
    element: (
      <>
        <Helmet>
          <title>Terms And Conditions</title>
          <meta name="description" content="" />
        </Helmet>
        <TeamsAndCondition />
      </>
    ),
  },
]);

// Render application with HelmetProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
