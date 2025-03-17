# Master CSS

## Introduction to CSS

### 1. What is CSS ?
### Explanation :-
* There is a default styling of HTML elements in each browser , basically **user agent stylesheet**.
* **Can we change the default values ?**
    * No
* **But Can we override it ?**
    * Yes (Upar se Niche Override Hota Hai)
* CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. 
* Cascading meaning : **Override**
* By writting CSS , we just Override the Defautl Style Sheets for each Browser.
* It controls the layout, colors, fonts, and overall visual appearance of web pages.

### 2. What is the Role of CSS ?
### Explanation :-
* CSS separates the content (HTML) from the presentation, allowing you to :
	* Enhance the look and feel of web pages.
	* Ensure consistency across multiple pages.
	* Make the website more accessible and easier to maintain.

### 3. Is it a Language or what ?
### Explanation :-
* CSS is a stylesheet language, not a programming language. 
* It doesn’t have logic structures like loops or conditionals but defines how HTML elements should be displayed.

### 4. What are Selectors in CSS ?
### Explanation :-
* Selectors are patterns used to select the elements you want to style. 
* Common selectors include :
	* **Element Selector** - p {} targets all `<p>` elements.
	* **Class Selector** - .classname {} targets elements with a specific class.
	* **ID Selector** - #idname {} targets an element with a specific ID.
	* **Attribute Selector** - `[type="text"]` {} targets elements with a specific attribute.

### 5. What is Inline , Internal and External CSS ?
### Explanation :-
* **Inline CSS** - Styles applied directly to an element using the style attribute.
    `<p style="color: blue;">This is a blue paragraph.</p>`
* **Internal CSS** - Styles defined within a `<style>` tag in the `<head>` section of an HTML document.
    ```
    <head>
        <style>
            p { color: blue; }
        </style>
    </head>
    ```
* **External CSS** - Styles defined in an external .css file linked to the HTML document.
    ```
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    ```

## CSS Colors

### 1. What are Color Names in CSS ?
### Explanation :-
* CSS supports 147 predefined color names. 
* Examples include red, blue, green, yellow, black, white, etc.

### 2. What are Hexa-Decimal Color Value ?
### Explanation :-
* Hexadecimal color values are a way of representing colors using a combination of six hexadecimal digits. 
* The format is #RRGGBB, where RR, GG, and BB represent the red, green, and blue components.

### 3. What are RGB and RGBA Color Value ?
### Explanation :-
* **RGB (Red, Green, Blue)** values define a color using the combination of red, green, and blue, each ranging from **0 to 255**.
* **RGBA (Red, Green, Blue, Alpha)** adds an alpha channel (opacity) to RGB. 
* The alpha value ranges from **0 (fully transparent) to 1 (fully opaque)**.

### 4. What are HSL and HSLA Color Value ?
### Explanation :-
* **HSL (Hue, Saturation, Lightness)** defines colors based on their **hue (0-360 degrees)**, **saturation (0-100%)**, and **lightness (0-100%)**.
* **HSLA (Hue, Saturation, Lightness, Alpha)** adds an alpha channel to HSL.

### 5. What is Opacity and Color ?
### Explanation :-
* Opacity is a property that defines the transparency level of an element. 
* It ranges from **0 (fully transparent) to 1 (fully opaque)**.
* Color with Opacity can also be set using RGBA or HSLA color values.

## CSS Background

### 1. What is Background Color ?
### Explanation :-
* The background-color property sets the background color of an element.

### 2. What is Background Image ?
### Explanation :-
* The background-image property sets an image as the background of an element.

### 3. What is Background Repeat ?
### Explanation :-
* The background-repeat property specifies if/how a background image should be repeated.
	* **repeat** - Repeats the image both horizontally and vertically (default).
	* **repeat-x** - Repeats the image only horizontally.
	* **repeat-y** - Repeats the image only vertically.
	* **no-repeat** - No repetition, only one instance of the background image.

### 4. What is Background Attachement ?
### Explanation :-
* The background-attachment property specifies whether the background image scrolls with the page or is fixed.
	* **scroll** - The background image scrolls with the page (default).
	* **fixed** - The background image is fixed in the viewport.
	* **local** - The background image scrolls with the element’s contents.

### 5. What is Background Shorthand ?
### Explanation :-
* The background shorthand property allows you to set multiple background properties in one declaration. 
* The order is - **background-color, background-image, background-repeat, background-attachment, background-position**.

## CSS Borders

### 1. What is Border Style ?
### Explanation :-
* The border-style property specifies the style of the border. 
* **Possible values include** :
	* **none**
	* **solid**
	* **dashed**
	* **dotted**
	* **double**
	* **groove**
	* **ridge**
	* **inset**
	* **outset**

### 2. What is Border Width ?
### Explanation :-
* The border-width property specifies the width of the border. 
* You can use units like `px`, `em`, `rem`, etc.

### 3. What is Border Color ?
### Explanation :-
* The border-color property specifies the color of the border.

### 4. What are Border Sides ?
### Explanation :-
* You can specify the border for each side individually using border-top, border-right, border-bottom, and border-left.

### 5. What is Border Shorthand ?
### Explanation :-
* The border shorthand property allows you to set the width, style, and color of the border in one declaration.

### 6. What is Border Radius ?
### Explanation :-
* The border-radius property is used to create rounded corners. 
* You can specify one value for all corners or individual values for each corner.

## CSS Text and Fonts

### 1. What is Text Color ?
### Explanation :-
* The color property sets the color of the text.

### 2. What is Text Allignment ?
### Explanation :-
* The text-align property specifies the horizontal alignment of text.
	* **left** - Aligns text to the left (default).
	* **right** - Aligns text to the right.
	* **center** - Centers the text.
	* **justify** - Stretches the text so that each line has equal width.

### 3. What is Text Decoration ?
### Explanation :-
* The text-decoration property adds decoration to text, such as underline, overline, line-through, or none.

### 4. What is Text Transform ?
### Explanation :-
* The text-transform property controls the capitalization of text.
	* **none** - Default value.
	* **capitalize** - Capitalizes the first letter of each word.
	* **uppercase** - Transforms text to uppercase.
	* **lowercase** - Transforms text to lowercase.

### 5. What is Font Style , Variant , Size , Weight , Family ?
### Explanation :-
* **Font Style** - The font-style property sets the style of the font (normal, italic, oblique).
* **Font Variant** - The font-variant property sets the variant of the font (normal, small-caps).
* **Font Size** - The font-size property sets the size of the font.
* **Font Weight** - The font-weight property sets the weight (thickness) of the font (normal, bold, bolder, lighter, 100-900).
* **Font Family** - The font-family property sets the font family of the text. You can specify multiple fonts as a fallback system.

## CSS Box Model

### 1. What is Content , Padding , Border , Margin ?
### Explanation :-
* **Content** - The actual content of the box, where text and images appear.
* **Padding** - The space between the content and the border.
* **Border** - The line surrounding the padding (if any) and content.
* **Margin** - The space outside the border, creating space between the element and others

### 2. What is Overflow ?
### Explanation :-
* The overflow property controls what happens to content that is too large to fit in an element’s box.
	* **visible** - Default. Content is not clipped and may overflow.
	* **hidden** - Content is clipped and hidden.
	* **scroll** - Content is clipped, but scrollbars are added.
	* **auto** - Scrollbars are added only when necessary.

### 3. What is Display Property ?
### Explanation :-
* The display property specifies the display behavior (layout) of an element.
	* **block** - The element is displayed as a block element.
	* **inline** - The element is displayed as an inline element.
	* **inline-block** - Combines block and inline properties.
	* **none** - The element is not displayed.

### 4. What is Width and Height Properties ?
### Explanation :-
* The width and height properties set the width and height of an element.

### 5. What is Box Sizing Property ?
### Explanation :-
* The box-sizing property defines how the width and height of an element are calculated.
    * **content-box** - Default. Width and height include only the content.
    * **border-box** - Width and height include content, padding, and border.

## CSS Positioning

### 1. What is Static Positioning ?
### Explanation :-
* Default positioning for HTML elements. 
* Elements are positioned according to the normal document flow.

### 2. What is Relative Positioning ?
### Explanation :-
* Positions the element relative to its normal position. 
* You can use top, right, bottom, and left to adjust its position.

### 3. What is Absolute Positioning ?
### Explanation :-
* Positions the element relative to the nearest positioned ancestor (not static). 
* If no such ancestor exists, it positions relative to the initial containing block (usually the `<html>` element).

### 4. What is Fixed Positioning ?
### Explanation :-
* Positions the element relative to the browser window. 
* It stays in the same place even when the page is scrolled.

### 5. What is Overlapping Elements(z-index) ?
### Explanation :-
* The z-index property specifies the stack order of positioned elements. 
* Higher values are in front of lower values. 
* It only works on positioned elements (relative, absolute, fixed, or sticky).

### 6. What is Floating Elements ?
### Explanation :-
* The float property is used to float elements to the left or right of their container, allowing text and inline elements to wrap around them.
	* **left** - Floats the element to the left.
	* **right** - Floats the element to the right.
	* **none** - Default. The element does not float.

## CSS Psuedo-Classes and Psuedo-Elements

### 1. What are Psuedo-Classes ?
### Explanation :-
* Pseudo-classes are used to define the special state of an element. 
* They are prefixed with a colon (:).
	* **:hover** - Applies when the user hovers over an element.
	* **:active** - Applies when an element is activated (e.g., button click).
	* **:visited** - Applies to visited links.
	* **:first-child** - Applies to the first child of a parent.

### 2. What are Psuedo-Elements ?
### Explanation :-
* Pseudo-elements are used to style specified parts of an element. They are prefixed with two colons (::).
	* **::before** - Inserts content before an element’s content.
	* **::after** - Inserts content after an element’s content.
	* **::first-line** - Applies to the first line of an element.
	* **::first-letter** - Applies to the first letter of an element.

### 3. What is Hover , Active and Visited Links ?
### Explanation :-
* **:hover** - Styles an element when the user hovers over it.
* **:active** - Styles an element when it is being activated.
* **:visited** - Styles links that have been visited.

### 4. What is First Line and First Letter Selectors ?
### Explanation :-
* **::first-line** - Applies styles to the first line of an element.
* **::first-letter** - Applies styles to the first letter of an element.

## CSS Transforms , Transistion and Animations

### 1. What is 2D Transforms ?
### Explanation :-
* 2D transforms allow you to rotate, scale, move, and skew elements in a two-dimensional space.
	* **translate(x, y)** - Moves an element from its current position.
	* **rotate(angle)** - Rotates an element.
	* **scale(x, y)** - Scales an element.
	* **skew(x-angle, y-angle)** - Skews an element.

### 2. What is 3D Transforms ?
### Explanation :-
* 3D transforms add depth and perspective to elements.
	* **rotateX(angle)** - Rotates an element around the X-axis.
	* **rotateY(angle)** - Rotates an element around the Y-axis.
	* **rotateZ(angle)** - Rotates an element around the Z-axis.
	* **perspective(value)** - Defines the perspective from which the viewer sees the 3D element.

### 3. What is Transistion ?
### Explanation :-
* Transitions provide a way to change property values smoothly (over a given duration).
	* **transition-property** - The property to be transitioned.
	* **transition-duration** - The duration of the transition.
	* **transition-timing-function** - The speed curve of the transition.
	* **transition-delay** - The delay before the transition starts.

### 4. What is Animations ?
### Explanation :-
* Animations allow you to animate changes to CSS properties over time using keyframes.
	* **@keyframes** - Defines the animation.
	* **animation-name** - The name of the animation.
	* **animation-duration** - The duration of the animation.
	* **animation-timing-function** - The speed curve of the animation.
	* **animation-delay** - The delay before the animation starts.
	* **animation-iteration-count** - The number of times the animation should be played.
	* **animation-direction** - The direction of the animation.

## CSS FlexBox

### 1. What are Flexbox Basics ?
### Explanation :-
* Flexbox is a layout module designed to help you build flexible and responsive layouts. 
* It allows items within a container to be aligned and distributed efficiently.
	* **Flex Container** - The element with display: flex or display: inline-flex.
	* **Flex Items** - The child elements within the flex container.

### 2. What is Main-axis and Cross-axis ?
### Explanation :-
* **Main-Axis** : 
    * The primary axis along which flex items are laid out. 
    * By default, it is horizontal (row direction), but it can be vertical (column direction).
* **Cross-Axis** : 
    * The axis perpendicular to the main axis. 
    * By default, it is vertical (column direction) for row direction, and horizontal for column direction.

### 3. What is Flex-Container ?
### Explanation :-
* The flex container is the parent element that has display: flex or display: inline-flex. 
* It establishes a flex formatting context for its children (flex items).

### 4. What are Flex-Items ?
### Explanation :-
* Flex items are the children of the flex container. 
* They can be manipulated and aligned using flex properties.

## CSS Grid

### 1. What are Grid Basics ?
### Explanation :-
* CSS Grid Layout is a two-dimensional layout system for the web, allowing you to create complex layouts with rows and columns.
	* **Grid Container** - The element with display: grid or display: inline-grid.
	* **Grid Items** - The child elements within the grid container.

### 2. What is Grid Container ?
### Explanation :-
* The grid container is the parent element with display: grid or display: inline-grid. 
* It establishes a grid formatting context for its children (grid items).

### 3. What are Grid Items ?
### Explanation :-
* Grid items are the children of the grid container. 
* They are positioned within the grid container’s defined grid areas.

### 4. What are Grid Lines , Tracks , Cells ?
### Explanation :-
* **Grid Lines** - The lines that form the boundaries of the grid columns and rows.
* **Grid Tracks** - The space between two adjacent grid lines, representing a column or row.
* **Grid Cells** - The individual areas within the grid formed by intersecting grid lines. Each cell can contain one grid item

## CSS Responsive Design

### 1. What is Viewport Meta tag ?
### Explanation :-
* The viewport meta tag controls the layout on mobile browsers. 
* It sets the width and scaling of the viewport.

### 2. What are Media Queries ?
### Explanation :-
* Media queries allow you to apply CSS styles based on the viewport’s size and other characteristics. 
* They are used to create responsive designs.

### 3. What are Responsive Images ?
### Explanation :-
* Responsive images adjust their size and resolution based on the viewport size and device resolution.

### 4. What is Mobile First Design ?
### Explanation :-
* Mobile-first design is a strategy where you design the layout for mobile devices first, then progressively enhance it for larger screens using media queries.

### 5. What are Flexible Layouts ?
### Explanation :-
* Flexible layouts adapt to different screen sizes and orientations using responsive units (like percentages, em, rem) and flexible containers.

## Advanced CSS Concepts

### 1. What are CSS Variables ?
### Explanation :-
* CSS variables, also known as custom properties, allow you to store and reuse values throughout your CSS. 
* They are defined using -- prefix and accessed using var().

### 2. What are Attribute Selectors ?
### Explanation :-
* Attribute selectors match elements based on their attributes and values.

### 3. What are Advanced Psuedo-Classes and Psuedo-Elements ?
### Explanation :-
* **Pseudo-Classes** :
	* **:nth-child(n)** - Matches elements based on their position in a parent.
	* **:nth-of-type(n)** - Matches elements of a specific type based on their position.
	* **:not(selector)** - Matches elements that do not match the given selector.
* **Pseudo-Elements** :
	* **::placeholder** - Styles the placeholder text in an input field.
	* **::selection** - Styles the portion of text that is selected by the user.

### 4. What is CSS Performance Optimization ?
### Explanation :-
* Optimizing CSS involves techniques to improve the rendering performance of stylesheets, such as minimizing file size, reducing the complexity of selectors, and eliminating unused CSS.
	* **Techniques** :
	    * Minify CSS files.
	    * Use shorthand properties.
	    * Avoid complex selectors.
	    * Remove unused CSS.

### 5. What are some best Practices in CSS Design ?
### Explanation :-
* Best practices help ensure maintainable, scalable, and efficient CSS.
* **Best Practices** :
	* Use a consistent naming convention (e.g., BEM).
	* Keep CSS files organized and modular.
	* Use comments to explain complex styles.
	* Test across different devices and browsers.
	* Avoid inline styles and !important.

### 6. What is Cascading ?
### Explanation :-
* Cascading determines how conflicting CSS rules are resolved. 
* Rules with higher specificity or those declared later in the stylesheet override earlier rules.
* **Specificity Order** :-
	1.	Inline styles
	2.	IDs
	3.	Classes, attributes, and pseudo-classes
	4.	Elements and pseudo-elements

### 7. What is Specificity ?
### Explanation :-
* Specificity determines which CSS rules are applied when multiple rules match the same element. 
* It is calculated based on the types of selectors used.
* **Specificity Calculation** :
	* Inline styles - 1000
	* IDs - 100
	* Classes, attributes, pseudo-classes - 10
	* Elements, pseudo-elements - 1
