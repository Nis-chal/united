Here is an enhanced version of the explanation, including the HTML examples and the expected output for each CSS selector:

### 1. **Universal Selector (`*`)**
   The universal selector applies styles to all elements on the page.

   ```html
   <html>
     <body>
       <h1>Heading</h1>
       <p>Paragraph text</p>
     </body>
   </html>
   ```

   ```css
   * {
     margin: 0;
     padding: 0;
   }
   ```

   **Output**: All elements on the page have no margin or padding.

---

### 2. **Element Selector (`element`)**
   Targets specific elements like paragraphs (`p`).

   ```html
   <html>
     <body>
       <p>This is a paragraph.</p>
       <p>This is another paragraph.</p>
     </body>
   </html>
   ```

   ```css
   p {
     color: red;
   }
   ```

   **Output**: Both paragraphs will have red text.

---

### 3. **Class Selector (`.classname`)**
   Selects all elements with a given class.

   ```html
   <html>
     <body>
       <div class="container">This is a container</div>
       <div class="container">Another container</div>
     </body>
   </html>
   ```

   ```css
   .container {
     width: 100%;
     background-color: lightblue;
   }
   ```

   **Output**: Both `div` elements will have a width of 100% and a light blue background.

---

### 4. **ID Selector (`#idname`)**
   Selects the element with a specific ID.

   ```html
   <html>
     <body>
       <div id="header">This is the header</div>
     </body>
   </html>
   ```

   ```css
   #header {
     background-color: black;
     color: white;
   }
   ```

   **Output**: The `div` with ID `header` will have a black background and white text.

---

### 5. **Attribute Selector**
   Targets elements based on their attributes.

   ```html
   <html>
     <body>
       <input type="text" placeholder="Enter your name">
       <input type="submit" value="Submit">
     </body>
   </html>
   ```

   ```css
   [type="text"] {
     border: 1px solid gray;
   }
   ```

   **Output**: The text input will have a gray border.

---

### 6. **Pseudo-class Selectors**

   - **`:hover`**: Applies styles when an element is hovered over.

     ```html
     <html>
       <body>
         <a href="#">Hover over me</a>
       </body>
     </html>
     ```

     ```css
     a:hover {
       color: green;
     }
     ```

     **Output**: The link will turn green when hovered over.

   - **`:nth-child(n)`**: Targets the nth child of its parent.

     ```html
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </ul>
     ```

     ```css
     li:nth-child(2) {
       background-color: yellow;
     }
     ```

     **Output**: The second `li` element will have a yellow background.

   - **`:first-child`**: Selects the first child element.

     ```html
     <div>
       <p>This is the first paragraph.</p>
       <p>This is the second paragraph.</p>
     </div>
     ```

     ```css
     p:first-child {
       font-weight: bold;
     }
     ```

     **Output**: The first paragraph will be bold.

---

### 7. **Descendant Selector (`ancestor descendant`)**
   Selects elements that are descendants of a specific element.

   ```html
   <div>
     <p>This is inside a div</p>
   </div>
   <p>This is outside the div</p>
   ```

   ```css
   div p {
     font-size: 16px;
   }
   ```

   **Output**: Only the `p` inside the `div` will have a font size of 16px.

---

### 8. **Adjacent Sibling Selector (`element1 + element2`)**
   Selects the next sibling of a given element.

   ```html
   <h1>This is a heading</h1>
   <p>This paragraph follows the heading</p>
   <p>This paragraph is ignored</p>
   ```

   ```css
   h1 + p {
     margin-top: 0;
   }
   ```

   **Output**: The paragraph immediately following the `h1` will have no margin at the top.

---

### 9. **General Sibling Selector (`element1 ~ element2`)**
   Selects all siblings after a specified element.

   ```html
   <h1>Main heading</h1>
   <p>This is the first paragraph.</p>
   <p>This is the second paragraph.</p>
   ```

   ```css
   h1 ~ p {
     color: gray;
   }
   ```

   **Output**: Both paragraphs following the `h1` will have gray text.

---

### 10. **Grouped Selector (`selector1, selector2`)**
   Applies the same style to multiple elements.

   ```html
   <h1>Heading 1</h1>
   <h2>Heading 2</h2>
   <h3>Heading 3</h3>
   ```

   ```css
   h1, h2, h3 {
     font-family: Arial, sans-serif;
   }
   ```

   **Output**: All the `h1`, `h2`, and `h3` headings will use the Arial font family.