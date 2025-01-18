# Mastering HTML

## Introduction to HTML

### 1. What do you mean by `<!DOCTYPE html>` ?
### Explanation :- 
* This declaration defines the document type and version of HTML. 
* It tells the browser that the document is an HTML5 document, which helps ensure that the page is rendered correctly.

### 2. What is lang=en in `<html lang="en">` ?
### Explanation :- 
* The lang attribute specifies the primary language of the document. 
* lang="en" indicates that the document’s language is English. 
* This is important for accessibility and search engines.

### 3. What is charset=UTF-8 in `<meta charset="UTF-8">` ?
### Explanation :- 
* This meta tag sets the character encoding for the HTML document to UTF-8, which includes almost all characters from all written languages. 
* This ensures proper display of characters.

### 4. What is name and content in `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ?
### Explanation :- 
* The name attribute specifies the name of the metadata. 
* In this case, viewport controls the page’s dimensions and scaling. 
* The content attribute contains instructions for the browser on how to control the page’s dimensions and scaling, ensuring a responsive design.

### 5. What does HTML tag contains ?
### Explanation :- 
* The `<html>` tag is the root element of an HTML document. 
* It contains all the other elements, such as `<head>` and `<body>`, which make up the structure of the webpage.

### 6. What does HEAD tag contains ?
### Explanation :- 
* The `<head>` tag contains meta-information about the HTML document, such as its title, character set, stylesheets, and scripts. 
* It does not contain content that is directly displayed on the webpage.

### 7. What does meta tag contains ?
### Explanation :- 
* The `<meta>` tag provides metadata about the HTML document, like the character set, description, keywords, author, and viewport * settings. 
* These tags help search engines understand the content and improve accessibility.

### 8. What does BODY tag contains ?
### Explanation :- 
* The `<body>` tag contains all the content that is displayed on the webpage, including text, images, videos, links, forms, and * other HTML elements.

### 9. What does TITLE tag contains ?
### Explanation :- 
* The `<title>` tag sets the title of the HTML document, which is displayed on the browser’s title bar or tab. 
* It is placed within the `<head>` tag.

### 10. What is HTML , Is it a Language or What ?
### Explanation :- 
* HTML (HyperText Markup Language) is the standard language used to create and structure web pages. 
* It is a markup language, not a programming language, used to annotate text and elements within a document.

### 11. What is HTML Formating ?
### Explanation :- 
* HTML formatting refers to the use of HTML tags to define the structure and appearance of text and elements on a webpage. 
* This includes headings, paragraphs, lists, links, and emphasis tags (like `<b>`, `<i>`, `<u>`, etc.).

## Block and Inline Elements

### 1. What are Elements in HTML ?
### Explanation :- 
* HTML elements are the building blocks of HTML pages. 
* An element typically consists of a start tag, content, and an end tag (e.g., `<p>content</p>`). 
* Elements define the structure and content of a webpage.

### 2. What are Attributes in HTML ?
### Explanation :- 
* Attributes provide additional information about HTML elements. 
* They are always included in the opening tag and usually come in name/value pairs like name="value" (e.g., `<a href="url">link</a>`).

### 3. What are Block Level Elements in HTML ?
### Explanation :- 
* Block-level elements start on a new line and take up the full width available. 
* Common examples include `<div>`, `<p>`, `<h1>` to `<h6>`, and `<ul>`. 
* They often contain other block or inline elements.

### 4. What are Inline Level Elements in HTML ?
### Explanation :- 
* Inline elements do not start on a new line and only take up as much width as necessary. 
* Common examples include `<span>`, `<a>`, `<img>`, and `<strong>`. 
* They can be nested inside block-level elements.

### 5. What is Class Attribute in HTML ?
### Explanation :- 
* The class attribute is used to specify one or more class names for an HTML element. 
* Classes are mostly used for styling and can be selected in CSS and JavaScript (e.g., `<div class="container">`).

### 6. What is Id Attribute in HTML ?
### Explanation :- 
* The id attribute is used to specify a unique id for an HTML element. 
* The id must be unique within the HTML document and is used for styling, scripting, and linking (e.g., `<div id="header">`).

### 7. What is iFrames in HTML ?
### Explanation :-
* An `<iframe>` (Inline Frame) is used to embed another HTML document within the current document. 
* It can display a web page within a web page (e.g., `<iframe src="url"></iframe>`).

### 8. What is File Paths in HTML ?
### Explanation :- 
* File paths specify the location of files (like images, scripts, and stylesheets) linked in an HTML document. 
* They can be absolute (full URL) or relative (relative to the current document’s location).

### 9. What do you mean by Layout in HTML ?
### Explanation :- 
* Layout in HTML refers to the arrangement of elements on a webpage. 
* It can be controlled using HTML elements and attributes, along with CSS for styling and positioning (e.g., using `<div>`, `<header>`, `<footer>`).

### 10. What are some Style Guides for writting HTML ?
### Explanation :- 
* Style guides for writing HTML include using semantic tags, consistent indentation, lowercase tag names, double quotes for attributes, and keeping HTML and CSS separate. 
* They help maintain clean and readable code.

### 11. What is the difference between Div and Span ?
### Explanation :- 
* `<div>` is a block-level element used for grouping and styling sections of content, while `<span>` is an inline element used for styling a small portion of text or elements within a block.

### 12. What are HTML Headings ?
### Explanation :- 
### * HTML headings are defined with `<h1>` to `<h6>` tags, with `<h1>` being the highest (or most important) level and `<h6>` the lowest.
### * They are used to define headings and subheadings on a webpage.

### 13. What are HTML Paragraphs ?
### Explanation :-
* HTML paragraphs are defined with the `<p>` tag. 
* They are used to define blocks of text and ensure proper spacing and alignment in the document.

### 14. What are HTML Links ?
### Explanation :- 
* HTML links are created using the `<a>` tag with the href attribute. 
* They are used to link to other web pages, files, locations within the same page, email addresses, and more (e.g., `<a href="url">link text</a>`).

### 15. What are HTML Images ?
### Explanation :- 
* HTML images are embedded using the `<img>` tag with attributes like src (source), alt (alternative text), width, and height. 
* Images are used to enhance the visual content of a webpage (e.g., `<img src="image.jpg" alt="description">`).

### 16. What are HTML Lists ?
### Explanation :- 
* HTML lists are used to group related items. 
* There are three types: ordered lists (`<ol>`), unordered lists (`<ul>`), and description lists (`<dl>`). 
* List items are defined using the `<li>` tag.

### 17. What are HTML Containers ?
### Explanation :- 
* HTML containers are elements used to group other elements. 
* Common containers include `<div>` for block-level content and `<span>` for inline content. 
* They help in organizing and styling the page.

## HTML Forms and Inputs

### 1. What is Form Element in HTML ?
### Explanation :- 
* The `<form>` element is used to create an HTML form for user input. 
* It can contain various input elements like text fields, checkboxes, radio buttons, submit buttons, etc. 
* Forms are used to collect and send data to a server.

### 2. What are some most important Elements used in HTML Forms ?
### Explanation :-
* `<input>`  - Used to create various input controls (text, password, checkbox, radio, submit, etc.).
* `<textarea>`  - Defines a multi-line text input.
* `<select>`  - Creates a drop-down list.
* `<button>`  - Defines a clickable button.
* `<label>`  - Defines a label for an `<input>` element.

### 3. What are some most important Attributes used in HTML Form Elements ?
### Explanation :-
* **action** - Specifies where to send the form data when the form is submitted.
* **method** - Specifies the HTTP method to use when sending form data (e.g., GET or POST).
* **name** - Assigns a name to the form or input element.
* **value** - Specifies the initial value for an input element.
* **placeholder** - Provides a hint to the user of what can be entered in the input field.
* **required** - Makes an input field mandatory.

### 4. What are some most important Input Attributes used in HTML Forms ?
### Explanation :-
* **type** - Specifies the type of <input> element (e.g., text, password, email, submit, etc.).
* **name** - Identifies the form data after submission.
* **value** - Sets the initial value of the input.
* **placeholder** - Provides a hint for what the input should be.
* **required** - Indicates that the input must be filled out before submitting the form.
* **readonly** - Specifies that the input field is read-only.
* **disabled** - Disables the input field.

### 5. What are some most important Input Form Attributes in HTML Forms ?
### Explanation :-
* **min and max** - Define the minimum and maximum values for numerical input.
* **maxlength** - Specifies the maximum number of characters allowed in an input field.
* **pattern** - Specifies a regular expression that the input’s value must match.
* **step**- Defines the legal number intervals for an input field.
* **autofocus** - Specifies that an input field should automatically get focus when the page loads.

### What are some list of input types ?
### Explanation :-
1. `text`
	- **Purpose** -
        - Single-line text input.
    - **Important Attributes** -
	    - **placeholder** - Adds a hint (e.g., “Enter your name”).
	    - **maxlength** - Limits the number of characters.
	    - **required** - Ensures the field must be filled.
	    - **value** - Sets a default value.

2. `password`
	* **Purpose** - 
        * Input for sensitive data (masks characters).
	* **Important Attributes** -
	    * **maxlength** - Sets maximum allowed characters.
	    * **pattern** - Defines a regex for validation.
	    * **required** - Makes the field mandatory.

3. `email`
	* **Purpose** - 
        * Input for email addresses.
	* **Important Attributes** -
	    * **pattern** - Custom email format validation.
	    * **required** - Ensures the field is not empty.
	    * **multiple** - Allows entering multiple email addresses separated by commas.

4. `number`
	* **Purpose** - 
        * Input for numeric values.
	* **Important Attributes** -
	    * **min** - Sets the minimum value.
	    * **max** - Sets the maximum value.
	    * **step** - Defines the increment/decrement step.
	    * **value** - Default numeric value.

5. `tel`
	* **Purpose** -
        * Input for telephone numbers.
	* **Important Attributes** -
	    * **pattern** - Custom regex for phone number validation.
	    * **placeholder** - Adds a hint (e.g., “+91-XXXXXX”).

6. `url`
	* **Purpose** - 
        * Input for URLs.
	* **Important Attributes** -
	    * **pattern** - Define a custom URL format.
	    * **required** - Ensures the field must have a value.

7. `date`
	* **Purpose** - 
        * Input for selecting dates.
	* **Important Attributes** -
	    * **min** - Minimum selectable date.
	    * **max** - Maximum selectable date.
	    * **value** - Default selected date.

8. `datetime-local`
	* **Purpose** - 
        * Input for date and time (local time zone).
	* **Important Attributes** -
	    * **min** - Minimum datetime value.
	    * **max** - Maximum datetime value.

9. `time`
	* **Purpose** - 
        * Input for time.
	* **Important Attributes** -
	    * **step** - Defines time increments (e.g., 60 for 1 minute).
	    * **value** - Default selected time.

10. `month`
	* **Purpose** - Input for selecting a month and year.
	* **Important Attributes** -
	    * **min** - Minimum month/year value.
	    * **max** - Maximum month/year value.

11. `week`
	* **Purpose** - 
        * Input for selecting a specific week.
	* **Important Attributes** -
	    * **min** - Minimum week.
	    * **max** - Maximum week.

12. `color`
	* **Purpose** - 
        * Input for selecting a color (color picker).
	* **Important Attributes** -
	    * **value** - Default color in HEX format (e.g., #ff0000).

13. `file`
	* **Purpose** - 
        * Input for file uploads.
	* **Important Attributes** -
	    * **accept** - Specifies the file types (e.g., image/*, .pdf).
	    * **multiple** - Allows selecting multiple files.
	    * **required** - Ensures file upload is mandatory.

14. `checkbox`
	* **Purpose** - 
        * Toggle options on/off.
	* **Important Attributes** -
	    * **checked** - Sets the checkbox as selected by default.
	    * **value** - Specifies the value sent when checked.
	    * **name** - Groups checkboxes with the same name.

15. `radio`
	* **Purpose** - 
        * Single selection from multiple options.
	* **Important Attributes** -
	    * **name** - Groups related radio buttons.
	    * **checked** - Preselects the radio button.
	    * **value** - Specifies the value sent when selected.

16. `range`
	* **Purpose** - 
        * Input for a numeric range (slider).
	* **Important Attributes** -
	    * **min** - Minimum range value.
	    * **max** - Maximum range value.
	    * **step** - Incremental steps.
	    * **value** - Default slider value.

17. `submit`
	* **Purpose** - Submits the form.
	* **Important Attributes** -
	    * **value** - Label for the button (default is “Submit”).

18. `reset`
	* **Purpose** - Resets the form to its initial values.
	* **Important Attributes** -
	    * **value** - Label for the button (default is “Reset”).

19. `button`
	* **Purpose** - General button for custom actions (e.g., JavaScript).
	* **Important Attributes** -
	    * **type** - button, submit, or reset.

20. `hidden`
	* **Purpose** - Stores hidden data (not visible to users).
	* **Important Attributes** -
	    * **value** - Default hidden value.

21. `image`
	* **Purpose** - Submit button in the form of an image.
	* **Important Attributes** -
	    * **src** - Image source URL.
	    * **alt** - Alternative text for the image.
	    * **width/height** - Dimensions of the image.

22. `search`
	* **Purpose** - Input optimized for search queries.
	* **Important Attributes** -
	    * **placeholder** - Hint for the user.
	    * **maxlength** - Maximum input length.

23. `hidden`
	* **Purpose** - Hidden fields to store metadata or pre-filled values.
	* **Important Attributes** -
	    * **value** - Stores hidden data.

## HTML Multimedia

### 1. Which Element is used to play an audio on a WebPage ?
### Explanation :- 
* The `<audio>` element is used to embed sound content in a document. 
* It supports multiple sources and can include controls for play, pause, volume, etc.
* **Example** -
    `
        <audio controls>
            <source src="audiofile.mp3" type="audio/mpeg">
        </audio>
    `

### 2. Which Element is used to play video on a WebPage ?
### Explanation :- 
* The `<video>` element is used to embed video content. 
* It supports multiple sources and can include controls for play, pause, volume, fullscreen, etc.
* **Example** -
    `
        <video controls>
            <source src="videofile.mp4" type="video/mp4">
        </video>
    `

### 3. Which Element is used to play a Youtube Video on a WebPage ?
### Explanation :- 
* The `<iframe>` element is commonly used to embed YouTube videos. 
* It allows you to embed an entire web page within another page.
* **Example** -
    `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoID" frameborder="0" allowfullscreen></iframe>
    `

### 4. What are Plug-ins in HTML ?
### Explanation :- 
* Plug-ins are external software components that add specific capabilities to a larger software application. 
* In the context of HTML, plug-ins were historically used to play multimedia content (e.g., Flash). 
* However, modern HTML5 has largely replaced the need for many plug-ins with built-in elements like `<audio>` and `<video>`.

### 5. What are some Media Methods in HTML ?
### Explanation :- 
* Media methods are JavaScript methods used to control audio and video elements. 
* Some common methods include -
    * **play()** - Starts playing the media.
    * **pause()** - Pauses the media.
    * **load()** - Reloads the media element.
    * **canPlayType()** - Checks if the browser can play the specified media type.

## HTML APIs

### 1. What is Geolocation API in HTML ?
### Explanation :- 
* The Geolocation API allows web applications to obtain the geographical location of a user. 
* It can provide latitude, longitude, and accuracy, among other details. 
* It is commonly used in mapping services and location-based applications.

### 2. What is Drag/Drop API in HTML ?
### Explanation :- 
* The Drag and Drop API allows users to drag and drop elements within a web page. 
* This can enhance user interaction by enabling features like drag-and-drop file uploads or rearranging items.

### 3. What is Web Storage API in HTML ?
### Explanation :- 
* The Web Storage API provides mechanisms for storing key-value pairs locally within the user’s browser. 
* It includes localStorage (persistent storage) and sessionStorage (temporary storage for a session).

### 4. What is Web Workers API in HTML ?
### Explanation :- 
* The Web Workers API allows background threads to be run in web applications. 
* This helps perform tasks without blocking the main thread, improving the performance and responsiveness of the application.

### 5. What is SSE(Server-Sent Events) API in HTML ?
### Explanation :- 
* The Server-Sent Events API allows web pages to receive updates from a server via a persistent HTTP connection. 
* It is commonly used for real-time notifications and updates.

## HTML Graphics

### 1. What is Canvas in HTML ?
### Explanation :- 
* The `<canvas>` element is used to draw graphics on a web page using JavaScript. 
* It can be used for rendering graphs, game graphics, or other visual images dynamically.

### 2. What is SVG in HTML ?
### Explanation :- 
* SVG (Scalable Vector Graphics) is a language for describing 2D graphics in XML. 
* SVG images are scalable and can be modified with CSS and JavaScript.

## HTML Table

### 1. What are parts of HTML Tables ?
### Explanation :- 
* HTML tables are divided into several parts:
    * `<table>` - The container for the entire table.
    * `<tr>` (Table Row) - Defines a row in the table.
    * `<th>` (Table Header) - Defines a header cell in the table.
    * `<td>` (Table Data) - Defines a standard cell in the table.
    * `<caption>` - Defines a title or caption for the table.
    * `<thead>` - Groups the header content in a table.
    * `<tbody>` - Groups the body content in a table.
    * `<tfoot>` - Groups the footer content in a table.

### 2. What are some most important Elements used in HTML Tables ?
### Explanation :-
* `<table>` - The container element for a table.
* `<tr>` - Defines a row in the table.
* `<th>` - Defines a header cell, usually bold and centered.
* `<td>` - Defines a regular cell in the table.
* `<caption>` - Adds a caption to the table, often used to describe the table.

### 3. What are some most important Attributes used in HTML Table Elements ?
### Explanation :- 
* **border** - Specifies the border width of the table.
* **cellpadding** - Defines the space between the cell content and its borders.
* **cellspacing** - Defines the space between cells.
* **colspan** - Specifies the number of columns a cell should span.
* **rowspan** - Specifies the number of rows a cell should span.
* **width and height** - Set the width and height of the table or cells.

## HTML Symantic Elements

### 1. What are some most important Semantics Elements in HTML ?
### Explanation :- 
* Semantic elements clearly describe their meaning in a human- and machine-readable way. 
* They provide better structure and accessibility to the web page content.
    * `<header>` - 
        * Represents introductory content or a set of navigational links. 
        * Typically contains headings, logo, search forms, etc.
    * `<nav>` - 
        * Represents a section of the page that links to other pages or parts within the page. 
        * It’s used for primary navigation.
    * `<section>` - 
        * Represents a standalone section of the document, which typically includes a thematic grouping of content, with a heading.
    * `<article>` - 
        * Represents a self-contained piece of content that could be distributed independently, such as a blog post, article, or news item.
    * `<aside>` - 
        * Represents content that is tangentially related to the main content. 
        * Often used for sidebars, call-outs, or advertisements.
    * `<footer>` - 
        * Represents the footer for its nearest sectioning content or the entire page. 
        * Typically contains information about the author, copyright, links to related documents, etc.
    * `<main>` - 
        * Represents the dominant content of the `<body>` of a document. 
        * There should only be one `<main>` element per document.
    * `<figure>` - 
        * Represents self-contained content, like illustrations, diagrams, photos, code listings, etc. 
        * It is usually accompanied by a `<figcaption>` element.
    * `<figcaption>` - 
        * Provides a caption for the `<figure>` element.
    * `<mark>` - 
        * Represents text that is marked or highlighted for reference or notation purposes.
