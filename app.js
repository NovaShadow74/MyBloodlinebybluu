/*
=====================================================================
MY BLOODLINE WEBSITE - APPLICATION LOGIC
=====================================================================
This file handles loading data from data.js and dynamically populating the website.
=====================================================================
*/

document.addEventListener('DOMContentLoaded', function() {
    // Populate all sections
    populateAboutSection();
    populateCharactersSection();
    populateGallerySection();
    populateVideosSection();
    populateEpisodesSection();
    populateSocialsSection();

    // Initialize lightbox functionality
    initLightbox();

    // Initialize navigation highlighting
    initNavHighlighting();

    // Initialize smooth scrolling
    initSmoothScrolling();
});

/*
=====================================================================
ABOUT SECTION
=====================================================================
*/
function populateAboutSection() {
    const aboutContent = document.querySelector('#about .about-content');
    if (!aboutContent) return;

    aboutContent.innerHTML = `
        <img src="images/about/${aboutData.image}" alt="${aboutData.name}">
        <h3>${aboutData.name}</h3>
        <p class="title">${aboutData.title}</p>
        <p class="bio">${aboutData.bio}</p>
        <p class="story">${aboutData.story}</p>
    `;
}

/*
=====================================================================
CHARACTERS SECTION
=====================================================================
*/
function populateCharactersSection() {
    const charactersGrid = document.getElementById('characters-grid');
    if (!charactersGrid) return;

    charactersGrid.innerHTML = charactersData.map(character => `
        <div class="character-card">
            <img src="images/characters/${character.image}" alt="${character.name}">
            <div class="character-info">
                <h3>${character.name}</h3>
                <p>${character.description}</p>
            </div>
        </div>
    `).join('');
}

/*
=====================================================================
GALLERY SECTION
=====================================================================
*/
function populateGallerySection() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryData.map(item => `
        <div class="gallery-item" data-image="images/gallery/${item.image}" data-caption="${item.caption}">
            <img src="images/gallery/${item.image}" alt="${item.caption}">
        </div>
    `).join('');
}

/*
=====================================================================
VIDEOS SECTION
=====================================================================
*/
function populateVideosSection() {
    const videosGrid = document.getElementById('videos-grid');
    if (!videosGrid) return;

    videosGrid.innerHTML = videosData.map(video => `
        <div class="video-card">
            <div class="video-thumbnail">
                <img src="images/episodes/${video.thumbnail}" alt="${video.title}">
                <div class="video-play-icon">▶</div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </div>
        </div>
    `).join('');
}

/*
=====================================================================
EPISODES SECTION
=====================================================================
*/
function populateEpisodesSection() {
    const episodesGrid = document.getElementById('episodes-grid');
    if (!episodesGrid) return;

    episodesGrid.innerHTML = episodesData.map(episode => `
        <div class="episode-card">
            <img src="images/episodes/${episode.thumbnail}" alt="${episode.title}">
            <div class="episode-info">
                <h3>${episode.title}</h3>
                <div class="episode-meta">
                    <span>Episode ${episode.episodeNumber}</span>
                    <span>•</span>
                    <span>YouTube</span>
                </div>
                <p class="episode-description">${episode.description}</p>
                <a href="${episode.youtubeLink}" target="_blank" class="episode-link">Watch Episode</a>
            </div>
        </div>
    `).join('');
}

/*
=====================================================================
SOCIALS SECTION
=====================================================================
*/
function populateSocialsSection() {
    const socialsGrid = document.getElementById('socials-grid');
    if (!socialsGrid) return;

    socialsGrid.innerHTML = socialsData.map(social => `
        <div class="social-link" onclick="window.open('${social.url}', '_blank')">
            <!-- In a real implementation, you would use actual icon images or font icons -->
            <div style="width: 40px; height: 40px; background-color: var(--bg-tertiary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem;">
                ${getSocialIcon(social.platform)}
            </div>
            <span>${social.platform}</span>
        </div>
    `).join('');
}

/*
=====================================================================
HELPER FUNCTIONS
=====================================================================
*/
function getSocialIcon(platform) {
    // Simple text-based icons - in a real implementation, you'd use actual SVG or font icons
    const icons = {
        'YouTube': '▶',
        'Instagram': '📷',
        'TikTok': '🎵'
    };
    return icons[platform] || '🔗';
}

/*
=====================================================================
LIGHTBOX FUNCTIONALITY
=====================================================================
*/
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Open lightbox when gallery item is clicked
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const imageSrc = item.getAttribute('data-image');
            const caption = item.getAttribute('data-caption');

            lightboxImg.src = imageSrc;
            lightboxCaption.textContent = caption;
            lightbox.style.display = 'flex';
        });
    });

    // Close lightbox
    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
        }
    });
}

/*
=====================================================================
NAVIGATION HIGHLIGHTING
=====================================================================
*/
function initNavHighlighting() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/*
=====================================================================
SMOOTH SCROLLING
=====================================================================
*/
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Account for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
}