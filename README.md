# The Benderz Website

A high-performance, content-driven marketing site and booking platform for The Benderz—a high-energy, Top 40 cover band based in Philadelphia. Built with modern web tools like **Astro**, **Sanity CMS**, and **GraphQL**, this project showcases frontend precision, CMS integration, performance optimization, and a focus on developer experience and maintainability.

## 🌐 Live Site

[thebenderz.com](https://thebenderz.com)

---

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [Sanity CMS](https://www.sanity.io)
- [GraphQL](https://graphql.org)
- [Relume](https://relume.io)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Astro Image Optimization](https://docs.astro.build/en/guides/images/)

---

## 🎯 Project Goals

- Improve the band's online presence with a fast, SEO-friendly, and mobile-first website.
- Streamline content updates using a headless CMS.
- Create a scalable, component-based codebase with reusable UI and efficient data pipelines.
- Focus on user-specific experiences for fans, venue owners, and event clients.

---

## ✨ Key Features & Highlights

### ⚙️ Astro Conversion for Performance

- Started with a draft from **Relume.io** and **exported React components**.
- Rewrote **90% of the copy** to better match the band’s tone and branding.
- Converted most components into **Astro components** to:
  - Leverage Astro’s **partial hydration** model.
  - Dramatically improve load time and **Core Web Vitals**.
  - Enable server-side rendering only where needed.

### 🧠 Headless CMS with Sanity

- Integrated **Sanity CMS** to manage venue and event data.
- Built custom schemas for venues and events.
- Hosted **Sanity Studio at `/admin`** to allow the band to update content without needing to access the codebase.
- The team uses Google Calendar, but Sanity was a better long-term fit due to query flexibility and structured content.

### 🔎 GraphQL & Dynamic Routing

- Used **Sanity’s GraphQL API** in combination with **Astro’s dynamic routes** to:
  - Fetch and render dynamic pages for **events** and **venues**.
  - Keep data fresh without needing constant rebuilds.
- Implemented a **dynamically generated sitemap** route to ensure SEO stays up-to-date with new content.

### 📅 Events + Schedule System

- Schedule page is grouped by **month** for clarity.
- Each **venue page** includes upcoming shows at that venue.
- The homepage features the **next 5 upcoming events** to drive fan engagement and conversions.
- Past events can be statically generated, while future events remain dynamic for easier updates.

### 📸 Media + Assets

- All photos for the **"Photos"** page are stored **locally** to take advantage of Astro’s `<Image />` optimization for speed and responsive delivery.
- Used [Haikei](https://haikei.app/generators/) to generate branded background assets that match the band’s **green palette** and energetic personality.

### 🧠 Brand, Copy, and UX

- Collaborated with **ChatGPT** to define the brand’s tone: *fun, cool, and high-energy*.
- Created **reusable GPT prompts** to efficiently generate on-brand venue and event descriptions.
- Fonts:
  - **Bebas Neue** used for punchy, modern headlines.
  - Supporting type system from **Google Fonts** to ensure hierarchy and clarity.
- Collected media assets from Instagram and the band’s legacy website to minimize client lift and maximize output.

---

## 📈 Results

- The website is already **bringing in new wedding, private party, and venue bookings**.
- Optimized pages score in the **high 90s on Lighthouse**, ensuring SEO, performance, and accessibility are top-notch.
- The CMS workflow allows the band to stay **hands-off**, focusing on playing shows while the site works in the background.

---

## 🧪 Future Enhancements

- Add OpenGraph image generation per event and venue.
- Add LD-JSON for event and venue pages

---

## 🤝 Acknowledgments

- [Relume.io](https://relume.io) – for initial wireframing and component selection.
- [Sanity.io](https://www.sanity.io) – for their excellent developer-first CMS.
- [Astro](https://astro.build) – for making it fun to build super-performant web apps.
- [OpenAI](https://openai.com) – for helping write clear, on-brand copy in record time.

---

## 📬 Contact

Built by [Noah Spott](https://www.noahspott.com)  
[LinkedIn](https://linkedin.com/in/noahspott) • [GitHub](https://github.com/noahspott) • [Portfolio](https://noahspott.com)
