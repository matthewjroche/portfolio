// ===================================
// Portfolio Website JavaScript
// Handles sidebar collapse and dark mode toggle
// ===================================

// Apply theme immediately to prevent flash
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check if user's system prefers dark mode
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
})();

// Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize dark mode
    initializeDarkMode();
    
    // Initialize sidebar
    initializeSidebar();
    
});

// ===================================
// Dark Mode Functions
// ===================================

function initializeDarkMode() {
    // Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    // Get current theme (already applied above)
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Update icon to match current theme
    if (currentTheme === 'dark') {
        updateThemeIcon('dark', themeIcon);
    } else {
        updateThemeIcon('light', themeIcon);
    }
    
    // Add click event listener to theme toggle button
    themeToggle.addEventListener('click', function() {
        toggleDarkMode(themeIcon);
    });
}

function toggleDarkMode(themeIcon) {
    // Get current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Determine new theme
    let newTheme;
    if (currentTheme === 'dark') {
        newTheme = 'light';
    } else {
        newTheme = 'dark';
    }
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    updateThemeIcon(newTheme, themeIcon);
}

function updateThemeIcon(theme, iconElement) {
    // Change icon based on theme
    if (theme === 'dark') {
        iconElement.textContent = '☀️'; // Sun icon for light mode option
    } else {
        iconElement.textContent = '🌙'; // Moon icon for dark mode option
    }
}

// ===================================
// Sidebar Functions
// ===================================

function initializeSidebar() {
    // Get sidebar and toggle button
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    
    // Check if user has a saved sidebar state
    const savedSidebarState = localStorage.getItem('sidebarCollapsed');
    
    // If sidebar should be collapsed, apply that state
    if (savedSidebarState === 'true') {
        sidebar.classList.add('collapsed');
    }
    
    // Add click event listener to sidebar toggle
    sidebarToggle.addEventListener('click', function() {
        toggleSidebar(sidebar);
    });
    
    // For mobile: close sidebar when clicking a nav link
    const navLinks = sidebar.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Only auto-close on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        handleSidebarResize(sidebar);
    });
}

function toggleSidebar(sidebar) {
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // On mobile, toggle 'open' class instead of 'collapsed'
        sidebar.classList.toggle('open');
    } else {
        // On desktop, toggle collapsed state
        sidebar.classList.toggle('collapsed');
        
        // Save state to localStorage
        const isCollapsed = sidebar.classList.contains('collapsed');
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    }
}

function handleSidebarResize(sidebar) {
    // Remove mobile-specific classes when resizing to desktop
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
    }
}

// ===================================
// Utility Functions
// ===================================

// Function to highlight current page in navigation
function highlightCurrentPage() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Loop through links and add 'active' class to current page
    navLinks.forEach(function(link) {
        // Get the href attribute
        const linkHref = link.getAttribute('href');
        
        // Check if this link matches current page
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', highlightCurrentPage);

// ===================================
// Optional: Smooth Scroll for Anchor Links
// ===================================

// Add smooth scrolling to all internal links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});