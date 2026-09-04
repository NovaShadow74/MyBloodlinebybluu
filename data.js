/*
=====================================================================
MY BLOODLINE WEBSITE - DATA FILE
=====================================================================
This file contains all editable content for the website.
To add/edit content, simply modify the arrays below following the examples.
=====================================================================

HOW TO USE THIS FILE:
1. Each section has its own array of objects
2. To add a new item, copy one of the example objects and paste it in the array
3. Change the values to match your new content
4. For images: place your image files in the appropriate folder under /images/
5. Reference images by filename only (e.g., "character1.jpg")
6. Save the file and refresh the website to see changes

FOLDER STRUCTURE FOR IMAGES:
/images/
├── characters/
│   ├── character1.jpg
│   └── character2.jpg
├── gallery/
│   ├── gallery1.jpg
│   └── gallery2.jpg
├── episodes/
│   ├── episode1-thumb.jpg
│   └── episode2-thumb.jpg
└── about/
    └── bluu.jpg

=====================================================================
*/

// =====================================================================
// ABOUT BLUU SECTION
// =====================================================================
// Edit this object to change the About Bluu section content
const aboutData = {
    image: "bluu.jpeg", // Place this image in /images/about/bluu.jpeg
    name: "Bluu",
    title: "Creator of My Bloodline",
    bio: "Bluu is the visionary creator behind My Bloodline, a gripping YouTube series that explores mystery, family secrets, and supernatural forces. With a passion for storytelling and a keen eye for atmospheric visuals, Bluu brings dark narratives to life that keep viewers on the edge of their seats.",
    story: "My Bloodline began as a late-night idea born from fascination with family legacies and hidden truths. What started as a passion project has grown into a dedicated community of viewers who tune in weekly to uncover the mysteries alongside the characters. Each episode is crafted with care, blending horror, drama, and intricate storytelling to create an unforgettable viewing experience."
};

// =====================================================================
// CHARACTERS SECTION
// =====================================================================
// To add a new character: Copy one of the objects below, paste it in the array, and edit the values
const charactersData = [
    {
        // ===== EXAMPLE CHARACTER - COPY THIS BLOCK FOR NEW CHARACTERS =====
        id: 1,
        image: "gabriel1.jpeg", // Place in /images/characters/gabriel1.jpeg
        name: "Gabriel",
        description: "Brief description of the character's role in the story. What makes them important to the plot?",
        // ===== END EXAMPLE CHARACTER =====
    },
    {
        id: 2,
        image: "bluu1.jpeg",
        name: "Bluu of the Ashar Cadra",
        description: "The protagonist who discovers her family's dark secrets and must confront the supernatural forces that have haunted her bloodline for generations."
    },
    {
        id: 3,
        image: "Valir1.jpeg",
        name: "Valir Of House Ashar Cadra",
        description: "The mysterious antagonist whose true motives remain unclear. Is he a villain, or does he have a hidden connection to the protagonist's past?"
    },
    {
        id: 4,
        image: "varmidous1.jpeg",
        name: "Varmidous Of House Sunweaver",
        description: "Racist.", 
    },
    




];

// =====================================================================
// GALLERY SECTION
// =====================================================================
// To add a new gallery image: Copy one of the objects below, paste it in the array, and edit the values
const galleryData = [
    {
        // ===== EXAMPLE GALLERY IMAGE - COPY THIS BLOCK FOR NEW IMAGES =====
        id: 1,
        image: "gallery1.jpg", // Place in /images/gallery/gallery1.jpg
        caption: "Series artwork or screenshot description"
        // ===== END EXAMPLE GALLERY IMAGE =====
    },
    {
        id: 2,
        image: "gallery2.jpg",
        caption: "Atmospheric scene from Episode 3"
    },
    {
        id: 3,
        image: "gallery3.jpg",
        caption: "Character concept art"
    },
    {
        id: 4,
        image: "gallery4.jpg",
        caption: "Behind-the-scenes photo"
    },
    // Add more gallery images by copying the example block above and pasting it here
];

// =====================================================================
// VIDEOS SECTION
// =====================================================================
// To add a new video: Copy one of the objects below, paste it in the array, and edit the values
const videosData = [
    {
        // ===== EXAMPLE VIDEO - COPY THIS BLOCK FOR NEW VIDEOS =====
        id: 1,
        thumbnail: "episode1-thumb.jpg", // Place in /images/episodes/episode1-thumb.jpg
        title: "Nasty Ambush- Episode 1",
        youtubeId: "58bGZ8ERdtc", // YouTube video ID (the part after v= in the URL)
        description: "Short description of what happens in this video"
        // ===== END EXAMPLE VIDEO =====
    },
    {
        id: 2,
        thumbnail: "episode2-thumb.jpg",
        title: "My Bloodline - Episode 1: The Awakening",
        youtubeId: "v=58bGZ8ERdtc",
        description: "The series begins as our protagonist discovers a mysterious family heirloom."
    },
    {
        id: 3,
        thumbnail: "episode3-thumb.jpg",
        title: "My Bloodline - Episode 2: Shadows of the Past",
        youtubeId: "example2",
        description: "Secrets from the past begin to surface, threatening everything the protagonist holds dear."
    }
    // Add more videos by copying the example block above and pasting it here
];

// =====================================================================
// EPISODES SECTION
// =====================================================================
// To add a new episode: Copy one of the objects below, paste it in the array, and edit the values
const episodesData = [
    {
        // ===== EXAMPLE EPISODE - COPY THIS BLOCK FOR NEW EPISODES =====
        id: 1,
        thumbnail: "episode1.jpg", // Place in /images/episodes/episode1-thumb.jpg
        title: "Nasty Ambush",
        episodeNumber: 1,
        description: "Some stories begin with love. Theirs began with blood.",
        youtubeLink: "https://www.youtube.com/watch?v=58bGZ8ERdtc" // Full YouTube URL
        // ===== END EXAMPLE EPISODE =====
    },
    {
        id: 1,
        thumbnail: "episode2.jpg",
        title: "The Road To Ashar Kadra",
        episodeNumber: 2,
        description: "The journey to Ashar Kadra begins.",
        youtubeLink: "https://youtu.be/ZQdR3YFXHmg"
    },
    {
        id: 2,
        thumbnail: "episode3.jpg",
        title: "Let The Hunt Begin",
        episodeNumber: 3,
        description: "Suspicion and fear surround him from every side, yet Bluu refuses to let them see him as a threat, defending the man who saved her life.",
        youtubeLink: "https://www.youtube.com/watch?v=8K4eHhhZrKc"
    },
    {
        id: 3,
        thumbnail: "episode4.jpg",
        title: "Under The City's Gaze",
        episodeNumber: 4,
        description: "The closer Gabriel grows to Jonah and Bluu, the more uneasy Varmidous becomes.",
        youtubeLink: "https://www.youtube.com/watch?v=oL6INW7DjzU"
    }
    // Add more episodes by copying the example block above and pasting it here
];

// =====================================================================
// SOCIALS SECTION
// =====================================================================
// To add a new social link: Copy one of the objects below, paste it in the array, and edit the values
const socialsData = [
    {
        // ===== EXAMPLE SOCIAL LINK - COPY THIS BLOCK FOR NEW SOCIALS =====
        id: 1,
        platform: "YouTube",
        icon: "youtube", // This will be used to display the icon (you may need to add icon support)
        url: "https://youtube.com/@yourchannel"
        // ===== END EXAMPLE SOCIAL LINK =====
    },
    {
        id: 1,
        platform: "YouTube",
        icon: "youtube",
        url: "https://youtube.com/@mybloodlineseries"
    },
    {
        id: 2,
        platform: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/mybloodlineseries"
    },
    {
        id: 3,
        platform: "TikTok",
        icon: "tiktok",
        url: "https://tiktok.com/@mybloodlineseries"
    }
    // Add more social links by copying the example block above and pasting it here
];

// Export data for use in app.js (if using modules)
// In a simple script tag setup, these variables are globally accessible
