// 1. Event Handling
document.getElementById('click-btn').addEventListener('click', () => {
    console.log('Button clicked!');
    alert('Button was clicked!');
});

document.getElementById('hover-area').addEventListener('mouseover', () => {
    console.log('Hover detected!');
    document.getElementById('hover-area').style.backgroundColor = '#f0f0f0';
});

document.getElementById('hover-area').addEventListener('mouseout', () => {
    document.getElementById('hover-area').style.backgroundColor = '';
});

document.getElementById('keypress-input').addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// 2. Interactive Elements
// Fixed color-changing button
document.getElementById('color-btn').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
    this.textContent = `Color: ${randomColor}`;
});

// Simple slideshow
let currentSlide = 1;
const slideshowInterval = setInterval(() => {
    currentSlide = (currentSlide % 3) + 1;
    document.querySelector('.slide').src = `https://picsum.photos/200/300?${currentSlide}`;
}, 2000);

// 3. Form Validation
document.getElementById('signup-form').addEventListener('submit', (e) => {
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    
    // Basic email validation
    if (!email.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address');
        return;
    }
    
    // Password length check
    if (password.length < 8) {
        e.preventDefault();
        alert('Password must be at least 8 characters');
    }
});

// Real-time password feedback (basic implementation)
document.getElementById('password').addEventListener('input', function() {
    const feedback = this.value.length >= 8 ? '✓' : 'Password must be at least 8 characters';
    console.log(feedback); // In a real implementation, you'd display this to the user
});