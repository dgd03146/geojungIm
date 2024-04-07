import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("body", {
	padding: 0,
	margin: 0,
	boxSizing: "border-box",
});

globalStyle("a", {
	textDecoration: "none",
});

export const base = style({
	margin: 0,
	padding: 0,
	border: 0,
	minWidth: 0,
	boxSizing: "border-box",
	fontSize: "100%",
	font: "inherit",
	verticalAlign: "baseline",
});

const block = style({
	display: "block",
});

const ul = style({
	padding: "0",
	margin: "0",
});

const list = style({
	listStyle: "none",
});

const button = style({
	// cursor: "pointer",
	outline: "none",
	boxSizing: "border-box",
});

const quote = style({
	quotes: "none",
	selectors: {
		"&:before, &:after": {
			content: "''",
		},
	},
});

const table = style({
	borderCollapse: "collapse",
	borderSpacing: 0,
});

// Custom reset rules
const mark = style({
	backgroundColor: "transparent",
	color: "inherit",
});

const select = style({
	appearance: "none",
	selectors: {
		"&::-ms-expand": {
			display: "none",
		},
	},
});

const a = style({
	textDecoration: "none",
});

export const element = {
	article: block,
	aside: block,
	button,
	a,
	details: block,
	figcaption: block,
	figure: block,
	footer: block,
	header: block,
	hgroup: block,
	menu: block,
	nav: block,
	section: block,
	textarea: block,
	li: list,
	ul,
	ol: list,
	blockquote: quote,
	q: quote,
	table,
	mark,
	select,
};
