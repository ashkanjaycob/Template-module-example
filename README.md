# 📁 Sample Project Structure

Project Tree 
Sample Project
├── eslint.config.js
├── index.html
├── layouts
│   ├── breadcrumb.html
│   ├── cart
│   │   ├── checkout.html
│   │   ├── index.html
│   │   ├── minicart.html
│   │   ├── partials
│   │   │   ├── cart-details.html
│   │   │   ├── cart-loading.html
│   │   │   ├── item-quantity.html
│   │   │   └── logo.html
│   │   └── payment.html
│   ├── compare.html
│   ├── contact.html
│   ├── footer.html
│   ├── header.html
│   ├── navigations
│   │   ├── navbar.html
│   │   └── offcanvas.html
│   ├── pager.html
│   ├── pages
│   │   ├── blog
│   │   │   ├── full.html
│   │   │   ├── index.html
│   │   │   ├── masonry.html
│   │   │   └── partials
│   │   │       └── sidebar.html
│   │   ├── form
│   │   │   ├── asidecontent.html
│   │   │   ├── cover.html
│   │   │   ├── horizontal.html
│   │   │   ├── index.html
│   │   │   ├── partials
│   │   │   │   └── fields.html
│   │   │   └── vertical.html
│   │   ├── gallery
│   │   │   ├── catalog.html
│   │   │   ├── index.html
│   │   │   ├── large.html
│   │   │   ├── medium.html
│   │   │   ├── slider.html
│   │   │   └── small.html
│   │   ├── store
│   │   │   ├── categories.html
│   │   │   ├── compact.html
│   │   │   ├── full.html
│   │   │   ├── index.html
│   │   │   ├── list.html
│   │   │   ├── partials
│   │   │   │   ├── filters.html
│   │   │   │   ├── sidebar.html
│   │   │   │   └── topbar.html
│   │   │   └── simple.html
│   │   └── text
│   │       ├── cover.html
│   │       ├── group.html
│   │       ├── index.html
│   │       └── plain.html
│   ├── password.html
│   ├── post
│   │   ├── cover.html
│   │   ├── full.html
│   │   ├── index.html
│   │   ├── partials
│   │   │   ├── commenting.html
│   │   │   └── comments.html
│   │   └── plain.html
│   ├── product
│   │   ├── index.html
│   │   └── partials
│   │       ├── addtocart.html
│   │       ├── comments.html
│   │       └── inquiry.html
│   ├── search.html
│   ├── subscription.html
│   ├── templates
│   │   ├── models
│   │   │   ├── product.html
│   │   │   └── story.html
│   │   ├── partials
│   │   │   ├── bottom-navigation.html
│   │   │   ├── footer
│   │   │   │   ├── footer-contact.html
│   │   │   │   └── footer-menu.html
│   │   │   ├── navbar
│   │   │   │   └── user-menu-items.html
│   │   │   └── search-field.html
│   │   ├── validation-inline.html
│   │   └── widgets
│   │       ├── home-slider.html
│   │       ├── product-carousel.html
│   │       └── product-list.html
│   ├── user
│   │   ├── authentication.html
│   │   └── recoverypass.html
│   └── validation.html
├── package.json
├── project-tree.txt
├── src
│   ├── css
│   │   ├── accordion.css
│   │   ├── alert.css
│   │   ├── app.css
│   │   ├── badge.css
│   │   ├── base.css
│   │   ├── button.css
│   │   ├── drawer.css
│   │   ├── dropdown.css
│   │   ├── fonts.css
│   │   ├── form.css
│   │   ├── home.css
│   │   ├── icons
│   │   │   └── style.css
│   │   ├── modal.css
│   │   ├── navbar.css
│   │   ├── products.css
│   │   ├── swiper.css
│   │   ├── tailwind.css
│   │   ├── tooltip.css
│   │   └── variables.css
│   ├── fonts
│   │   └── Sample.woff
│   ├── images
│   │   ├── sample.png
│   │   └── sample.svg
│   ├── js
│   │   ├── accordion.js
│   │   ├── base.js
│   │   ├── drawer.js
│   │   ├── dropdown.js
│   │   ├── jquery.config.js
│   │   ├── modal.js
│   │   ├── navbar.js
│   │   ├── stories.js
│   │   ├── swiper.js
│   │   ├── tabs.js
│   │   ├── theme.js
│   │   ├── tooltip.js
│   │   └── utils.js
│   └── main.js
├── static
│   ├── app.js
│   ├── css
│   │   └── cedarmaps.css
│   ├── images
│   │   └── colors
│   │       ├── آبی-آسمانی.png
│   │       └── آبی-اقیانوسی.png
│   └── js
│       ├── app.js
│       ├── cedarmaps.js
│       └── jquery.min.js
├── sync-sample.json
├── tailwind.config.js
└── vite.config.js




---
-- Separate explanation of each part
---

## 📂 Root Directory

```
Sample Project
├── eslint.config.js       # ESLint configuration for code linting and standards
├── index.html             # Main HTML entry point of the application
├── package.json           # Project metadata, scripts, and dependencies (npm)
├── project-tree.txt       # Plain text representation of project structure
├── tailwind.config.js     # Configuration for Tailwind CSS
├── vite.config.js         # Vite bundler configuration for development and production builds
```

---

## 📂 Layouts
Reusable HTML templates and structural components.

```
├── layouts/
│   ├── header.html             # Top section of the site (logo, menu, etc.)
│   ├── footer.html             # Footer section with links and contact info
│   ├── breadcrumb.html         # Navigation path component
│   ├── pager.html              # Pagination layout
│   ├── password.html           # Password-protected page layout
│   ├── search.html             # Search results layout
│   ├── subscription.html       # Newsletter or subscription section
│   ├── validation.html         # Form validation feedback layout
│   ├── navigations/            # Navigation menus (navbar, off-canvas, etc.)
│   │   ├── navbar.html
│   │   └── offcanvas.html
```

---

## 🛒 Cart System
Modular components and views related to the shopping cart.

```
│   ├── cart/
│   │   ├── checkout.html       # Checkout process
│   │   ├── index.html          # Main cart page
│   │   ├── minicart.html       # Mini cart popup or dropdown
│   │   ├── payment.html        # Payment method selection
│   │   └── partials/           # Subcomponents of the cart
│   │       ├── cart-details.html
│   │       ├── cart-loading.html
│   │       ├── item-quantity.html
│   │       └── logo.html
```

---

## 📄 Pages
Structured views grouped by content type (blogs, forms, galleries, etc.)

```
│   ├── pages/
│   │   ├── blog/               # Blog layouts (grid, masonry, full)
│   │   ├── form/               # Various form layouts (horizontal, vertical)
│   │   ├── gallery/            # Media gallery types (slider, small, large)
│   │   ├── store/              # Store views (categories, lists, compact)
│   │   └── text/               # Plain content pages (cover, group)
```

---

## 🧩 Templates and Components
Reusable interface elements and modular blocks.

```
│   ├── templates/
│   │   ├── models/             # Data-driven models (product, story)
│   │   ├── partials/           # UI components (footer, navbar items, search field)
│   │   ├── widgets/            # Dynamic widgets (sliders, carousels)
│   │   └── validation-inline.html  # Inline form validation messages
```

---

## 🧍‍♂️ User Management

```
│   ├── user/
│   │   ├── authentication.html # Login/Signup page
│   │   └── recoverypass.html   # Password recovery form
```

---

## 🛍 Product Pages

```
│   ├── product/
│   │   ├── index.html          # Product detail page
│   │   └── partials/           # Product-specific subcomponents
│   │       ├── addtocart.html
│   │       ├── comments.html
│   │       └── inquiry.html
```

---

## 🗂 Static Assets
Final, production-ready files served publicly.

```
├── static/
│   ├── app.js
│   ├── css/
│   │   └── cedarmaps.css
│   ├── js/
│   │   ├── app.js
│   │   ├── cedarmaps.js
│   │   └── jquery.min.js
│   └── images/
│       └── colors/             # UI image assets (color swatches)
```

---

## 💾 Source Code
Main development resources (raw code, not compiled).

```
├── src/
│   ├── css/                    # Tailwind + custom stylesheets (modular)
│   ├── fonts/                  # Font files
│   ├── images/                 # Project images and graphics
│   ├── js/                     # JavaScript modules and utilities
│   │   └── utils.js            # Common utility functions
│   └── main.js                 # Main JS entry point
```

---

## 🧩 Config & Data

```
├── sync-sample.json           # Sample sync/config file for deployment or data settings
```

---

> ✅ **This structure helps break the UI and logic into isolated, reusable units. It’s optimized for scalability, collaboration, and ease of maintenance.**

Feel free to clone and customize it as a starting point for your frontend projects!
