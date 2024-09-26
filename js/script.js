$(document).ready(function() {
    // Smooth scrolling to sections
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // Handle modals for the "Learn More" buttons
    $('.btn-primary').on('click', function() {
        const targetModal = $(this).data('target');
        $(targetModal).modal('show');
    });

    // Add scroll-based animations
    $(window).on('scroll', function() {
        $('.story-section').each(function() {
            var topOfWindow = $(window).scrollTop();
            var sectionOffset = $(this).offset().top - $(window).height() + 100; // Adjust value for better timing
            if (topOfWindow > sectionOffset) {
                // Add animation class to the section and its text elements
                $(this).addClass('animate');
                $(this).find('h2, p, button').addClass('text-animate'); // Animate heading, paragraphs, buttons
            }
        });
    });

    // Modal animations
    $('.modal').on('show.bs.modal', function() {
        $(this).find('.modal-content').css({
            transform: 'scale(0.7)',
            opacity: 0
        }).animate({
            transform: 'scale(1)',
            opacity: 1
        }, 300);
    });
});
// Get the modal elements
const modal = document.getElementById('videoModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const minimizeBtn = document.getElementById('minimizeBtn');

// Open modal
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Toggle minimize/maximize
minimizeBtn.addEventListener('click', () => {
    modal.classList.toggle('minimized');
});
