
# Review My TWA

A lightweight JavaScript library that helps Trusted Web Activities (TWA) collect more Play Store reviews by showing a non-intrusive in-app review dialog. Ideal for PWA developers publishing to the Play Store using TWA.

## 📦 Installation

Include the minified version via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/review-my-twa@1.0.1/dist/review-my-pwa.min.js"></script>
```

> ⚠️ Paste it before closing body tag `</body>`. This script automatically checks if the app is running as a Trusted Web Activity (`isTWA`) and works only in that environment.

---

### 📦 1. Install via NPM

```bash
npm install review-my-twa
```

---

### 📂 2. Usage in Your JS/TS Project

Import and use it inside your JavaScript or TypeScript file:

```js
import ReviewMyTWA from "review-my-twa";

// Show the review dialog after 7 days from first open
ReviewMyTWA.showAfter(7);

// Set the theme (light, dark, or system)
ReviewMyTWA.setTheme("system");
```

> Make sure you're running this in a TWA environment — the dialog will **not show** otherwise.

---

### ⚙️ 3. Bundle Your Code

If you're using a bundler like **Vite**, **Webpack**, or **esbuild**, everything will work out of the box.

If you're shipping a standalone browser script via `<script>`, use the pre-built minified version instead (via CDN):

```html
<script src="https://cdn.jsdelivr.net/npm/review-my-twa@1.0.1/dist/review-my-pwa.min.js"></script>
```
---

## 🚀 Customize

```html
<script>
  // Example: Show review dialog 7 days after the user first opened your app
  ReviewMyTWA.showAfter(7);

  // Set theme mode (optional)
  // Options: "light", "dark", "system" (default is system if not specified)
  ReviewMyTWA.setTheme("system");
</script>
```

---

## 🧠 Features

* ✅ Detects if app is running as a TWA (`isTWA`)
* ✅ Shows a Play Store review prompt after a configurable number of days
* ✅ Simple, lightweight, and dependency-free
* ✅ Supports light, dark, and system themes
* ✅ Designed for real-world TWA deployment

---

## 🛠 API Reference

### `ReviewMyTWA.showAfter(days: number)`

Shows the in-app review dialog after a certain number of days since the first opening of the app.

```js
ReviewMyTWA.showAfter(5); // Show after 5 days. If not mentioned, default to 7. min 1 and max 90
```

### `ReviewMyTWA.setTheme(mode: "light" | "dark" | "system")`

Sets the theme of the review dialog.

```js
ReviewMyTWA.setTheme("dark"); // Force dark mode
```

If not called, it defaults to `"system"`.

---

## 🧪 TWA Detection

The script checks whether your app is running as a Trusted Web Activity. If not, the review dialog will never appear. You can use this to show different content for Web users and TWA users.

```js
if (ReviewMyTWA.isTWA) {
  // alert("Running inside TWA");
}
```

---

## 📁 CDN Links

| Version         | URL                                                                          |
| --------------- | ---------------------------------------------------------------------------- |
| Latest (v1.0.1) | `https://cdn.jsdelivr.net/npm/review-my-twa@1.0.1/dist/review-my-pwa.min.js` |

---

## 📄 License

MIT © \[Hirak Kalita]

---

## 🙌 Contribute

Pull requests are welcome! If you find bugs or want to request features, feel free to [open an issue](https://github.com/realhirak/review-my-twa/issues).
