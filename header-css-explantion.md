Responsive Header with Hamburger Menu & Animated Links

📌 General Alignment:

Apply Flexbox to the Header

Use display: flex; to align items in a row.

Apply justify-content: space-between; to distribute children evenly.

Use align-items: center; to align elements vertically.

Hide the Hamburger Menu by Default

The hamburger menu is not visible on larger screens.

Adjust Layout for Smaller Screens (@media Query)

Hide the Navigation (ul) initially.

Change ul's flex direction to column.

Apply position: absolute; so it can be positioned freely without affecting the normal document flow (ndf).

Create an .active class:

Toggles ul's display from none to flex, making it visible.

Make the hamburger menu visible on smaller screens.

🎨 Header Links Animation:

Make Links position: relative;

This allows us to position an underline absolutely within the links.

Use ::after to Create an Underline

Create an empty content: ""; element.

Set position: absolute; and adjust top and left values.

Apply a transition for a smooth effect.

Reveal the Underline on Hover

Using :hover::after, make the underline expand smoothly.
