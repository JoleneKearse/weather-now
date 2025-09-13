# 🌞Weather Now

Welcome to my entry to [**Frontend Mentor's 30-Day Hackathon**](https://www.frontendmentor.io/articles/introducing-the-frontend-mentor-30-day-hackathon) challenge - the Weather App!

## 🟡 Running the Application

This application uses **pnpm** for performance, so first install globally:
`npm install -g pnpm`

Install dependencies:
`pnpm install`

Start the dev server:
`pnpm run dev`

Build for production:
`pnpm build`

## ✔️ Project Requirements

Here's (hopefully at least 🤞 a checklist) of what's done so far.

Users should be able to:

- [ ] Search for weather information by entering a location in the search bar
- [ ] View current weather conditions including temperature, weather icon, and location details
- [ ] See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- [ ] Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- [ ] View an hourly forecast showing temperature changes throughout the day
- [ ] Switch between different days of the week using the day selector in the hourly forecast section
- [ ] Toggle between Imperial and Metric measurement units via the units dropdown
- [ ] Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- [ ] View the optimal layout for the interface depending on their device's screen size
- [ ] See hover and focus states for all interactive elements on the page

And what I decided to add:

- [ ] Add geolocation detection to automatically show weather for the user's current location on first visit
- [ ] Implement a favorites/saved locations system where users can bookmark frequently checked locations
- [ ] Implement a "Compare Locations" feature to view weather side-by-side for multiple locations
- [ ] Add sunrise/sunset times with visual indicators
- [ ] Add animated weather backgrounds that change based on current conditions
- [ ] Create dark/light mode themes that adapt to the time of day
- [ ] Implement voice search functionality
- [ ] Add progressive web app (PWA) capabilities for mobile installation

## 🌇 My Day to Day Process

Since it's a 30-day challenge, and I, H-E-double hockey sticks don't have time each day to code on this project alone, I'm gonna itemize the stuff I complete each day.

### 1️⃣ Day 1

Read project requirements and start README.

Scaffold project with **Vite** and **React** with **Tailwind v4** for styling.

I customized my **Tailwind** theme, downloaded the logo and converted to `.ico`, downloaded hero images, then dived into the data.

I tried wrangling the weather icons first, but pinpointed that I'd need to check out the returned data first. I had considered using `react-icons`, which are monocoloured, but I wanted them to reflect to design more. I decided to, for now, use **[Flaticons](https://www.flaticon.com/search?word=weather&type=animated-icon&k=1757212878624&log-in=google)** because I want to make it a full experience. Of course, I'll have fall-back icons for `prefers-reduced-motion`.

## :two: Day 2 (September 13th)

I thought about the project structure, because I wanted to make build this project like the professional I am.

I went with **feature-based**. I want to show I can expand the app later on, so I placed everything in a `features` directory and all the _weather-stuff_ of this **weather app** in a `weather` directory.

So, why? Why add all this extra complexity?

Not only could I expand this app with other features in the future - as would likely happen at a company - but I wanted to really work with **Test Driven Development** here. It's easy to add test files directly next to the logic.
