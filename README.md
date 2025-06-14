📦 Skip Bin Selector for Waste Management
Hey there! 👋

This is a little project I built to let users easily browse and select skip bins using a simple React app. It’s got a clean layout, some interactive cards, and a nice drawer that slides out to show details when you select a skip bin.

✨ Features
Browse different skip bins with size, price, and hire period info.

Click on a skip bin card to select it and open up more details in a drawer.

Click the same card again to deselect it (no double selections!).

Only one skip bin can be selected at a time — keeps it tidy.

Fully responsive with Tailwind CSS.

Smooth and accessible drawer using shadcn/ui.

🚀 Tech Stack
React for the main UI.

Tailwind CSS for styling.

shadcn/ui for the Drawer component (it makes it easy and accessible).

📚 A note on shadcn/ui
I used shadcn/ui mainly for the Drawer. It’s a headless UI library that pairs super nicely with Tailwind CSS. I like it because:

✅ It’s accessible right out of the box.
✅ It’s easy to customize with my existing styles.
✅ The Drawer looks clean and feels modern.

In the app, I use React state to control the Drawer — basically toggling it open or closed using open and onOpenChange. This keeps everything in sync when selecting a skip bin.

🛠️ Getting Started
Here’s how to get the project running on your machine:

Clone the repo:

bash
Copy
Edit
git clone https://github.com/vs-git-max/waste-management.git
cd skip-bin-selector
Install the dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Visit http://localhost:3000 (or whatever port it’s on) in your browser.

🖥️ How to Use
Browse the skip bins on the main screen.

Click one to open the Drawer and see more details.

Click the same card again to deselect and close the Drawer.

📂 Project Structure
cpp
Copy
Edit
src/
│
├── components/
│ ├── SelectSkip.js // Manages skip cards and drawer state
│ ├── SkipCard.js // Renders each skip card with select/deselect logic
│ └── DrawerComponent.js // Drawer UI using shadcn/ui
│
├── assets/
│ └── oPorto\_.jpg // Sample skip bin image
│
└── helpers/
└── index.js // Skip bin data
🤝 Contributing
If you’d like to contribute, that’s okay!

Fork the repo

Create a branch (git checkout -b feature/your-feature)

Make your changes

Commit and push

Open a pull request

📄 License
MIT — feel free to use and adapt!

📝 Submission Instructions
Here’s what I’ll do to submit:
✅ Push everything to a public GitHub repo.
✅ Include this README explaining how the app works and my approach (especially with shadcn/ui).
✅ Create a testable link using CodeSandbox (or similar).
✅ Submit it all via this form within 72 hours: Submit Here.
