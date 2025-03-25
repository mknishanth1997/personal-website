# Landing Page Development Notes

## **1. Layout Structure**

- Used `display: flex` on `.landing-page-container` to arrange image and text side by side.
- Applied `justify-content: space-between;` to distribute space evenly.
- Used `gap: 20px;` to maintain spacing between elements.

## **2. Image Styling**

- `max-width: 100%;` ensures the image scales within its container.
- `height: max-content;` prevents distortion.
- `object-fit: contain;` ensures the image maintains aspect ratio without cropping.
- Used `display: block;` to remove unwanted spacing.

## **3. Left Text Container**

- `flex: 1;` ensures equal width distribution.
- `max-width: 50%;` to prevent excessive stretching.
- Applied `padding-right: 20px;` to maintain spacing.

## **4. Right Image Container**

- `flex: 1;` ensures equal width as the text container.
- `min-width: 300px;` prevents excessive shrinking.
- `max-width: 50%;` to maintain layout balance.

## **5. Responsive Design (Media Query)**

### **For screen widths ≤ 768px:**

- Used `flex-direction: column;` to stack elements.
- Set `align-items: center;` for better mobile alignment.
- Changed `max-width: 90%;` to let elements take more space.
- Used `order: -1;` to place the image above text.
- Adjusted `font-size` using `clamp()` for better responsiveness.
- Reduced button size for a more compact UI.

## **6. Button Styling**

- `padding: 20px 60px;` for mobile-friendly interaction.
- `font-size: 1.2em;` for better readability.

## **7. Key Takeaways**

- **Flexbox** was essential for layout control.
- **Media queries** adjusted layout for mobile screens.
- **Proper image handling** prevented unwanted whitespace issues.
- **Text scaling** using `clamp()` improved responsiveness.
