# My Bloodline Website - Easy Editing Guide

This website is designed to be easy to edit, even if you're not a developer. All content is stored in simple JavaScript arrays in the `data.js` file.

## File Structure
```
my-bloodline-website/
├── index.html          # Main HTML file
├── style.css           # All styling (dark theme with blood-red accents)
├── data.js             # ALL CONTENT IS HERE - easy to edit!
├── app.js              # JavaScript that loads content and makes it work
└── images/             # Folder for all your images
    ├── about/          # Images for About Bluu section
    ├── characters/     # Images for character profiles
    ├── gallery/        # Images for gallery/grid
    └── episodes/       # Thumbnails for videos and episodes
```

## How to Add Content (Step-by-Step)

### 1. Adding a New Character
**Step 1:** Place your character image in `images/characters/` folder (e.g., `newcharacter.jpg`)

**Step 2:** Open `data.js` and find the `charactersData` array

**Step 3:** Copy this block:
```javascript
{
    id: 4, // Make sure this number is unique (next number after last character)
    image: "newcharacter.jpg", // Your image filename
    name: "New Character Name",
    description: "Describe the character's role in the story."
}
```

**Step 4:** Paste it at the END of the `charactersData` array (before the closing `];`)

**Step 5:** Save `data.js` and refresh your website!

### 2. Adding a New Gallery Photo
**Step 1:** Place your image in `images/gallery/` folder (e.g., `newart.jpg`)

**Step 2:** Open `data.js` and find the `galleryData` array

**Step 3:** Copy this block:
```javascript
{
    id: 5, // Make sure this number is unique
    image: "newart.jpg", // Your image filename
    caption: "Describe what this image shows"
}
```

**Step 4:** Paste it at the END of the `galleryData` array

**Step 5:** Save `data.js` and refresh your website!

### 3. Adding a New Episode
**Step 1:** Place your episode thumbnail in `images/episodes/` folder (e.g., `episode4-thumb.jpg`)

**Step 2:** Open `data.js` and find the `episodesData` array

**Step 3:** Copy this block:
```javascript
{
    id: 4, // Unique ID number
    thumbnail: "episode4-thumb.jpg", // Your thumbnail filename
    title: "Episode Title",
    episodeNumber: 4, // Episode number
    description: "What happens in this episode?",
    youtubeLink: "https://youtube.com/watch?v=yourvideoID" // Full YouTube URL
}
```

**Step 4:** Paste it at the END of the `episodesData` array

**Step 5:** Save `data.js` and refresh your website!

### 4. Adding a New Video
**Step 1:** Place your video thumbnail in `images/episodes/` folder (same as episodes)

**Step 2:** Open `data.js` and find the `videosData` array

**Step 3:** Copy this block:
```javascript
{
    id: 4, // Unique ID number
    thumbnail: "episode4-thumb.jpg", // Your thumbnail filename
    title: "Video Title",
    youtubeId: "yourYouTubeID", // Just the ID part (e.g., "dQw4w9WgXcQ" from youtube.com/watch?v=dQw4w9WgXcQ)
    description: "What happens in this video?"
}
```

**Step 4:** Paste it at the END of the `videosData` array

**Step 5:** Save `data.js` and refresh your website!

### 5. Updating About Bluu Section
**Step 1:** Place your photo in `images/about/` folder (e.g., `bluu.jpg`)

**Step 2:** Open `data.js` and find the `aboutData` object

**Step 3:** Edit the values:
- `image`: Your photo filename
- `name`: Your name
- `title`: Your title/description
- `bio`: Your biography
- `story`: Your story about creating the series

**Step 4:** Save `data.js` and refresh your website!

### 6. Adding Social Media Links
**Step 1:** Open `data.js` and find the `socialsData` array

**Step 2:** Copy this block:
```javascript
{
    id: 4, // Unique ID number
    platform: "Platform Name", // e.g., "Twitter", "Facebook"
    icon: "platform-icon", // This uses simple text icons for now
    url: "https://your-social-media-link.com"
}
```

**Step 3:** Paste it at the END of the `socialsData` array

**Step 4:** Save `data.js` and refresh your website!

## Important Tips
- **Always use unique ID numbers** - each new item needs a new number that hasn't been used before
- **Image filenames must match exactly** - if your file is `myart.jpg`, reference it as `"myart.jpg"` in data.js
- **YouTube IDs for videos** - just take the part after `v=` in the YouTube URL
- **Test after each change** - save the file and refresh your browser to see your changes
- **Keep backups** - consider copying your `data.js` file occasionally as a backup

## Troubleshooting
- If images don't show: Double-check the filename spelling and that it's in the correct folder
- If nothing changes after editing: Make sure you saved the file and hard-refresh the browser (Ctrl+F5 or Cmd+Shift+R)
- If the layout looks weird: Check that you didn't accidentally delete any commas or brackets in data.js

That's it! You can now easily add characters, episodes, gallery photos, videos, and more by just editing simple JavaScript objects in one file.