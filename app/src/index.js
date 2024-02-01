import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/about";
import Gallery from "./pages/gallery";
import Services from "./pages/services";
import Reviews from "./pages/reviews";
import Contact from "./pages/contact";

const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/about", element: <About /> },
	{ path: "/reviews", element: <Reviews /> },
	{ path: "/services", element: <Services /> },
	{ path: "/contact", element: <Contact /> },
	{ path: "/gallery", element: <Gallery /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
