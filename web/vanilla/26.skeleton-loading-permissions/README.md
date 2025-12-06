# Skeleton Loading with Permissions

A modern web page demonstrating skeleton loading animation with permission request dialogs.

## Features

- **Skeleton Loading Screen**: Shows animated skeleton placeholders while content is loading (3 seconds)
- **Smooth Transitions**: Fade-in/fade-out animations for seamless user experience
- **Permission Modal**: Requests user permissions after content loads
  - Notifications permission
  - Location permission (optional)
  - Camera permission (optional)
- **Interactive UI**: Clean, modern design with gradient cards
- **Responsive Design**: Works on all screen sizes
- **Dark Mode Support**: Includes dark mode styling
- **Toast Notifications**: Shows success/info messages after permission actions

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Vanilla JS for interactivity
- **CSS Animations**: Custom keyframe animations

## How It Works

1. **Page Load**: Shows skeleton loading screen for 3 seconds
2. **Content Display**: Fades out skeleton and displays actual content
3. **Permission Request**: After 0.5s delay, shows permission modal
4. **User Action**: User can either allow or deny permissions
5. **Browser Permissions**: If allowed, requests actual browser notifications permission
6. **Feedback**: Shows toast notification confirming the action

## Usage

Simply open `index.html` in a web browser. No build process or dependencies required.

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Serve with Python
python3 -m http.server 8080
# Then visit http://localhost:8080/index.html
```

## Customization

### Adjust Loading Duration

Edit the `LOADING_DURATION` constant in the JavaScript:

```javascript
const LOADING_DURATION = 3000; // Change to desired milliseconds
```

### Modify Permissions

Edit the permission list in the HTML modal section to add/remove permissions.

### Change Theme Colors

The page uses Tailwind CSS utilities. Modify the color classes to change the theme:
- Purple gradient: `from-purple-500 to-indigo-600`
- Pink gradient: `from-pink-500 to-rose-600`
- Blue gradient: `from-blue-500 to-cyan-600`

## Browser Compatibility

- Modern browsers with ES6+ support
- Notification API support for browser notifications
- CSS animations and transitions support

## License

Part of the Life of Code repository - open for learning and contributions.
