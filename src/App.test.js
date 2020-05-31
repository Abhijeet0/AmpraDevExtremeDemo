import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/create react app/i);
	expect(linkElement).toBeInTheDocument();
});

test("renders the app correctly", () => {
	const reactApp = render(<App />);
	expect(reactApp).toBeDefined();
});
