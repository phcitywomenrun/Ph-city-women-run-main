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
            content="Experience the world with our trusted "
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
          <title>The Powerhouse of Travel Consolidation</title>
          <meta
            name="description"
            content="Unlock top travel deals, net rates, and cutting-edge technology to boost your bookings and commissions. Leverage our expert consolidator services for unmatched support and industry expertise."
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
          <title>Conference - Travel Consolidation</title>
          <meta
            name="description"
            content="Join our conference and discover how to unlock top travel deals, net rates, and cutting-edge technology to boost your bookings and commissions."
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
          <title>Latest News - Travel Industry</title>
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
            content="Join our community events and stay connected with travel enthusiasts, professionals, and consolidators."
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
          <title>Post Detail - Travel Information</title>
          <meta
            name="description"
            content="Read detailed posts on travel topics, news, and event recaps from industry leaders."
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
            content="Get the latest updates on upcoming travel events, conferences, and workshops hosted by industry experts."
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
          <title>Travel Gallery</title>
          <meta
            name="description"
            content="Explore our travel gallery and see captivating photos from destinations around the world."
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
          <title>photos Rankings</title>
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
          <title>Travel Gallery</title>
          <meta
            name="description"
            content="Explore our travel gallery and see captivating photos from destinations around the world."
          />
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
          <meta
            name="description"
            content="Explore our travel gallery and see captivating photos from destinations around the world."
          />
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
          <title>Schedule</title>
          <meta
            name="description"
            content="Explore our travel gallery and see captivating photos from destinations around the world."
          />
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
          <title>Schedule</title>
          <meta
            name="description"
            content="Explore our travel gallery and see captivating photos from destinations around the world."
          />
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
          <meta
            name="description"
            content="Explore our travel gallery and see captivating photos from destinations around the world."
          />
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
          <meta
            name="description"
            content="Explore our travel gallery and see captivating photos from destinations around the world."
          />
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
          <title>Contact us & get aload of our products</title>
          <meta
            name="description"
            content="Get in touch with our team for inquiries about travel consolidation services and partnerships."
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
          <meta
            name="description"
            content="Get in touch with our team for inquiries about travel consolidation services and partnerships."
          />
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
