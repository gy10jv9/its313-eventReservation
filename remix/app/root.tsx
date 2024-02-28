import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [{ rel: "stylesheet", href: stylesheet }]),
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<div className="h-screen relative">
					<img className="h-1/2 w-screen object-cover opacity-40" src="/images/background.jpg"></img>

					<div className="absolute h-full w-screen z-[1] top-0 left-0 flex justify-center items-center">
						<div className="nav-container"> navigations </div>
					</div>

					<Outlet />
				</div>

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
