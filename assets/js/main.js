// Tab switching functionality
function switchTab(tabName, event) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab content
    const targetContent = document.getElementById('tab-' + tabName);
    if (targetContent) {
        targetContent.classList.add('active');
    }
    
    // Add active class to clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Sidebar navigation expand/collapse
function toggleNavItem(button) {
    const navItem = button.closest('.nav-item-expandable');
    if (navItem) {
        navItem.classList.toggle('expanded');
        
        // Save state to localStorage
        const navLink = navItem.querySelector('.nav-link');
        if (navLink) {
            const href = navLink.getAttribute('href');
            const isExpanded = navItem.classList.contains('expanded');
            localStorage.setItem('nav-expanded-' + href, isExpanded);
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Highlight current page in navigation
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Set up toggle buttons for expandable nav items
    document.querySelectorAll('.nav-toggle').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleNavItem(this);
        });
    });
    
    // Restore expanded state from localStorage
    document.querySelectorAll('.nav-item-expandable').forEach(navItem => {
        const navLink = navItem.querySelector('.nav-link');
        if (navLink) {
            const href = navLink.getAttribute('href');
            const savedState = localStorage.getItem('nav-expanded-' + href);
            
            // If there's a saved state, use it; otherwise keep the default state from HTML
            if (savedState !== null) {
                if (savedState === 'true') {
                    navItem.classList.add('expanded');
                } else {
                    navItem.classList.remove('expanded');
                }
            }
        }
    });
    
    // Highlight active sublinks based on current hash
    const currentHash = window.location.hash;
    if (currentHash) {
        document.querySelectorAll('.nav-sublink').forEach(sublink => {
            const sublinkHref = sublink.getAttribute('href');
            if (sublinkHref && sublinkHref.includes('#')) {
                // Extract the hash portion from the href
                const sublinkHash = sublinkHref.split('#')[1];
                const currentHashValue = currentHash.substring(1); // Remove the # prefix
                
                if (sublinkHash && sublinkHash === currentHashValue) {
                    sublink.classList.add('active');
                }
            }
        });
    }
});
