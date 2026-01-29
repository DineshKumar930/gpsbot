// ================= CONFIGURATION =================
const CONFIG = {
    typingSpeed: 20,
    aiResponseDelay: 600
};

// ================= GLOBAL VARIABLES =================
let isVoiceActive = false;
let notificationTimer = null;
let typingIntervals = [];
let isProcessing = false;
let lastActionTime = 0;
const ACTION_COOLDOWN = 500;

let currentSettings = {
    typingIndicator: true,
    soundEffects: true,
    autoScroll: true,
    suggestions: true,
    quickActions: true
};

// ================= DOM ELEMENTS =================
const elements = {
    desktop: {
        chatBody: document.getElementById('desktopChatBody'),
        input: document.getElementById('desktopInput'),
        sendBtn: document.getElementById('desktopSendBtn'),
        suggestions: document.getElementById('desktopSuggestions'),
        typingStatus: document.getElementById('desktopTypingStatus'),
        voiceIndicator: document.getElementById('desktopVoiceIndicator'),
        voiceStop: document.getElementById('desktopVoiceStop'),
        micIcon: document.getElementById('desktopMicIcon'),
        clearBtn: document.getElementById('clearDesktopChat'),
        voiceBtn: document.getElementById('desktopVoiceBtn')
    },
    mobile: {
        chatBody: document.getElementById('mobileChatBody'),
        input: document.getElementById('mobileInput'),
        sendBtn: document.getElementById('mobileSendBtn'),
        suggestions: document.getElementById('mobileSuggestions'),
        typingStatus: document.getElementById('mobileTypingStatus'),
        voiceIndicator: document.getElementById('mobileVoiceIndicator'),
        voiceStop: document.getElementById('mobileVoiceStop'),
        micIcon: document.getElementById('mobileMicIcon'),
        clearBtn: document.getElementById('mobileClearBtn'),
        voiceBtn: document.getElementById('mobileVoiceBtn'),
        menuBtn: document.getElementById('mobileMenuBtn'),
        menuClose: document.getElementById('mobileMenuClose'),
        menu: document.getElementById('mobileMenu')
    }
};

// ================= ACTION MAP =================
const actionMap = {
    'admission': "Tell me about the admission process",
    'courses': "What courses are offered?",
    'fees': "What is the fee structure?",
    'location': "Where is the college located?",
    'contact': "What are the contact details?",
    'hostel': "Tell me about hostel facilities",
    'placements': "What are placement opportunities?",
    'scholarships': "What scholarships are available?",
    'facilities': "What campus facilities are there?",
    'timetable': "Show me timetable options",

    'cse timetable': "Show CSE timetable",
    'mechanical timetable': "Show mechanical timetable",
    'electrical timetable': "Show electrical timetable",

    'faculty codes': "Show faculty name codes",
    'cse faculty': "Show CSE faculty details",
    'mechanical faculty': "Show mechanical faculty details",
    'electrical faculty': "Show electrical faculty details",

    'upcoming events': "upcoming events",
    'all events': "all events",
    'workshops': "workshops",
    'technical fest': "technical fest",
    'sports events': "sports events"
};


// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadSettings();
});

function initializeApp() {
    // Setup responsive detection
    detectAndSetVersion();
    
    // Show welcome messages
    showWelcomeMessage('desktop');
    showWelcomeMessage('mobile');
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize particles
    initParticles();
    
    // Show welcome notification
    showNotification("Welcome to GPS-Bot Assistant! Ask me anything about the college.");
    
    // Add resize listener for responsiveness
    window.addEventListener('resize', handleResize);
}

function detectAndSetVersion() {
    const isMobile = window.innerWidth <= 992;
    document.querySelector('.desktop-container').style.display = isMobile ? 'none' : 'flex';
    document.querySelector('.mobile-container').style.display = isMobile ? 'flex' : 'none';
}

function handleResize() {
    detectAndSetVersion();
}

function showWelcomeMessage(version) {
    if (typeof botKnowledge === 'undefined') {
        console.error('botKnowledge is not defined. Make sure botKnowledge.js is loaded before script.js');
        return;
    }
    
    const welcome = botKnowledge.welcome;
    const chatBody = elements[version].chatBody;
    
    const welcomeHTML = `
        <div class="message bot-message animate__animated animate__fadeIn">
            <div class="welcome-icon">
                <i class="fas fa-robot"></i>
            </div>
            <strong>${welcome.title}</strong><br><br>
            ${welcome.message}
            <div class="quick-actions" id="${version}QuickActions">
                ${welcome.quickActions.map(action => `
                    <button class="quick-btn" data-action="${action}" data-version="${version}">
                        ${getActionIcon(action)} ${getActionText(action)}
                    </button>
                `).join('')}
            </div>
            <div class="message-time">${getCurrentTime()}</div>
        </div>
    `;
    
    chatBody.innerHTML = welcomeHTML;
    
    // Add event listeners to quick buttons
    setTimeout(() => {
        setupQuickActionListeners(version);
    }, 100);
    
    scrollToBottom(version);
}

function setupEventListeners() {
    // Desktop events
    if (elements.desktop.sendBtn) {
        elements.desktop.sendBtn.addEventListener('click', () => sendMessage('desktop'));
    }
    
    if (elements.desktop.input) {
        elements.desktop.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage('desktop');
        });
    }
    
    if (elements.desktop.clearBtn) {
        elements.desktop.clearBtn.addEventListener('click', () => clearChat('desktop'));
    }
    
    if (elements.desktop.voiceBtn) {
        elements.desktop.voiceBtn.addEventListener('click', () => toggleVoiceInput('desktop'));
    }
    
    if (elements.desktop.voiceStop) {
        elements.desktop.voiceStop.addEventListener('click', () => stopVoiceInput('desktop'));
    }
    
    // Mobile events
    if (elements.mobile.sendBtn) {
        elements.mobile.sendBtn.addEventListener('click', () => sendMessage('mobile'));
    }
    
    if (elements.mobile.input) {
        elements.mobile.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage('mobile');
        });
    }
    
    if (elements.mobile.clearBtn) {
        elements.mobile.clearBtn.addEventListener('click', () => clearChat('mobile'));
    }
    
    if (elements.mobile.voiceBtn) {
        elements.mobile.voiceBtn.addEventListener('click', () => toggleVoiceInput('mobile'));
    }
    
    if (elements.mobile.voiceStop) {
        elements.mobile.voiceStop.addEventListener('click', () => stopVoiceInput('mobile'));
    }
    
    // Mobile menu events
    if (elements.mobile.menuBtn) {
        elements.mobile.menuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (elements.mobile.menuClose) {
        elements.mobile.menuClose.addEventListener('click', toggleMobileMenu);
    }
    
    // Info cards
    document.querySelectorAll('.info-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            const action = this.dataset.action;
            if (action) {
                quickAction(action, 'desktop');
            }
        });
    });
    
    // Menu items
    document.querySelectorAll('.menu-item[data-action]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const action = this.dataset.action;
            if (action) {
                quickAction(action, 'mobile');
                toggleMobileMenu(); // Close menu after selection
            }
        });
    });
    
    // Clear chat from menu
    const mobileMenuClear = document.getElementById('mobileMenuClear');
    if (mobileMenuClear) {
        mobileMenuClear.addEventListener('click', function(e) {
            e.stopPropagation();
            clearChat('mobile');
            toggleMobileMenu();
        });
    }
    
    // Settings from menu
    const mobileMenuSettings = document.getElementById('mobileMenuSettings');
    if (mobileMenuSettings) {
        mobileMenuSettings.addEventListener('click', function(e) {
            e.stopPropagation();
            openSettings();
            toggleMobileMenu();
        });
    }
    
    // Setup suggestion chips listeners
    setupSuggestionChipListeners();
    
    // Settings modal events
    const settingsModal = document.getElementById('settingsModal');
    const openSettingsBtn = document.getElementById('openDesktopSettings');
    const closeSettingsBtn = document.getElementById('closeSettings');
    const cancelSettingsBtn = document.getElementById('cancelSettings');
    const saveSettingsBtn = document.getElementById('saveSettings');
    
    if (openSettingsBtn) {
        openSettingsBtn.addEventListener('click', openSettings);
    }
    
    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', closeSettings);
    }
    
    if (cancelSettingsBtn) {
        cancelSettingsBtn.addEventListener('click', closeSettings);
    }
    
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', saveSettings);
    }
    
    // Close modal when clicking outside
    if (settingsModal) {
        settingsModal.addEventListener('click', function(e) {
            if (e.target === settingsModal) {
                closeSettings();
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const menu = elements.mobile.menu;
        const menuBtn = elements.mobile.menuBtn;
        
        if (menu && menu.style.left === '0px' && 
            !menu.contains(e.target) && 
            e.target !== menuBtn && 
            !menuBtn.contains(e.target)) {
            toggleMobileMenu();
        }
    });
}

function setupSuggestionChipListeners() {
    document.querySelectorAll('.suggestion-chip').forEach(chip => {
        chip.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            const action = this.getAttribute('data-action');
            const version = this.closest('.desktop-container') ? 'desktop' : 'mobile';
            
            if (action) {
                quickAction(action, version);
            }
        });
    });
}

function setupQuickActionListeners(version) {
    const quickActionsContainer = document.getElementById(`${version}QuickActions`);
    if (!quickActionsContainer) return;
    
    quickActionsContainer.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            const action = this.getAttribute('data-action');
            const btnVersion = this.getAttribute('data-version') || version;
            
            if (action) {
                quickAction(action, btnVersion);
            }
        });
    });
}

// ================= MESSAGE FUNCTIONS =================
function sendMessage(version) {
    if (isProcessing) {
        console.log("Already processing, please wait...");
        return;
    }
    
    const input = elements[version].input;
    const message = input.value.trim();
    
    if (!message) return;
    
    isProcessing = true;
    
    // Add user message
    addUserMessage(message, version);
    input.value = '';
    
    // Hide suggestions based on settings
    if (currentSettings.suggestions) {
        hideSuggestions(version);
    }
    
    // Show typing indicator based on settings
    if (currentSettings.typingIndicator) {
        showTypingIndicator(version);
    }
    
    // Process after delay
    setTimeout(() => {
        if (currentSettings.typingIndicator) {
            hideTypingIndicator(version);
        }
        
        // Check if getBotResponse is available
        if (typeof getBotResponse === 'function') {
            const response = getBotResponse(message);
            addBotMessage(response, version);
        } else {
            console.error('getBotResponse function not found.');
            addBotMessage({
                title: "Error",
                message: "Bot response system is not available.",
                quickActions: []
            }, version);
        }
        
        if (currentSettings.suggestions) {
            setTimeout(() => showSuggestions(version), 1000);
        }
        
        // Reset processing flag
        setTimeout(() => {
            isProcessing = false;
        }, 500);
    }, CONFIG.aiResponseDelay);
}

function addUserMessage(text, version) {
    const chatBody = elements[version].chatBody;
    const time = getCurrentTime();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message animate__animated animate__fadeInUp';
    messageDiv.innerHTML = `
        ${escapeHtml(text)}
        <div class="message-time">${time}</div>
    `;
    
    chatBody.appendChild(messageDiv);
    
    if (currentSettings.autoScroll) {
        scrollToBottom(version);
    }
    
    if (currentSettings.soundEffects) {
        playSound('send');
    }
}

function addBotMessage(response, version) {
    const chatBody = elements[version].chatBody;
    const lastBotMessage = chatBody.querySelector('.bot-message:last-child');
    
    if (lastBotMessage) {
        const lastContent = lastBotMessage.textContent;
        const currentContent = response.message || '';
        
        if (lastContent.includes(currentContent.substring(0, 100))) {
            console.log("Duplicate response detected, skipping...");
            isProcessing = false;
            return;
        }
    }
    
    const time = getCurrentTime();

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message animate__animated animate__fadeInUp';

    const safeTitle = escapeHtml(response.title || 'GPS Assistant');
    
    messageDiv.innerHTML = `
        <strong>${safeTitle}</strong><br><br>
        <span class="typing-text"></span>
        <div class="message-time">${time}</div>
    `;

    chatBody.appendChild(messageDiv);
    
    if (currentSettings.autoScroll) {
        scrollToBottom(version);
    }
    
    if (currentSettings.soundEffects) {
        playSound('receive');
    }

    const typingSpan = messageDiv.querySelector('.typing-text');

    typeTextWithHTML(typingSpan, response.message || 'No response available.', () => {
        // Add quick actions after typing completes
        if (currentSettings.quickActions && response.quickActions && response.quickActions.length > 0) {
            addQuickActions(response.quickActions, version, messageDiv);
        }
        
        // Setup listeners for the new quick actions
        setTimeout(() => {
            setupQuickActionListeners(version);
        }, 100);
        
        isProcessing = false;
    }, version);
}

function addQuickActions(actions, version, messageDiv) {
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'quick-actions';
    actionsDiv.id = `${version}QuickActions_${Date.now()}`;

    const safeActions = actions.map(action => {
        const safeAction = escapeHtml(action);
        const safeIcon = escapeHtml(getActionIcon(action));
        const safeText = escapeHtml(getActionText(action));
        return `
            <button class="quick-btn" data-action="${safeAction}" data-version="${version}">
                ${safeIcon} ${safeText}
            </button>
        `;
    }).join('');

    actionsDiv.innerHTML = safeActions;
    messageDiv.insertBefore(actionsDiv, messageDiv.querySelector('.message-time'));
    
    if (currentSettings.autoScroll) {
        scrollToBottom(version);
    }
}

function typeTextWithHTML(element, html, callback, version) {
    let i = 0;
    
    if (currentSettings.typingIndicator) {
        showTypingIndicator(version);
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const text = tempDiv.innerHTML;

    const interval = setInterval(() => {
        element.innerHTML = text.slice(0, i);
        i++;
        
        if (currentSettings.autoScroll) {
            scrollToBottom(version);
        }

        if (i > text.length) {
            clearInterval(interval);
            const index = typingIntervals.indexOf(interval);
            if (index > -1) typingIntervals.splice(index, 1);
            
            if (currentSettings.typingIndicator) {
                hideTypingIndicator(version);
            }
            if (callback) callback();
        }
    }, CONFIG.typingSpeed);
    
    typingIntervals.push(interval);
}

// ================= QUICK ACTIONS =================
function quickAction(action, version = 'desktop') {
    const now = Date.now();
    if (now - lastActionTime < ACTION_COOLDOWN) {
        console.log("Action too soon, please wait...");
        return;
    }
    
    lastActionTime = now;
    
    const normalizedAction = action.toLowerCase().trim();
let query = actionMap[normalizedAction];

    
    if (!query) {
        query = action;
    }
    
    elements[version].input.value = query;
    sendMessage(version);
}

// ================= VOICE INPUT =================
function startVoiceInput(version) {
    if (isVoiceActive) return;
    
    isVoiceActive = true;
    const indicator = elements[version].voiceIndicator;
    const micIcon = elements[version].micIcon;
    
    if (indicator) {
        indicator.style.display = 'flex';
    }
    
    if (micIcon) {
        micIcon.classList.add('fa-beat');
        micIcon.style.color = 'var(--danger)';
    }
    
    setTimeout(() => {
        const phrases = [
            "Tell me about admission process",
            "What courses are offered?",
            "Fee structure details",
            "Campus location information"
        ];
        
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        elements[version].input.value = randomPhrase;
        stopVoiceInput(version);
        sendMessage(version);
    }, 2000);
}

function stopVoiceInput(version) {
    isVoiceActive = false;
    const indicator = elements[version].voiceIndicator;
    const micIcon = elements[version].micIcon;
    
    if (indicator) {
        indicator.style.display = 'none';
    }
    
    if (micIcon) {
        micIcon.classList.remove('fa-beat');
        micIcon.style.color = '';
    }
}

function toggleVoiceInput(version) {
    if (!isVoiceActive) {
        startVoiceInput(version);
    } else {
        stopVoiceInput(version);
    }
}

// ================= UI HELPER FUNCTIONS =================
function showTypingIndicator(version) {
    const status = elements[version].typingStatus;
    if (status) {
        status.textContent = 'Typing...';
        status.style.color = 'var(--warning)';
    }
}

function hideTypingIndicator(version) {
    const status = elements[version].typingStatus;
    if (status) {
        status.textContent = 'Online • Ready to help';
        status.style.color = 'var(--success)';
    }
}

function showSuggestions(version) {
    if (!currentSettings.suggestions) return;
    
    const suggestions = elements[version].suggestions;
    if (suggestions) {
        suggestions.style.display = 'block';
    }
}

function hideSuggestions(version) {
    const suggestions = elements[version].suggestions;
    if (suggestions) {
        suggestions.style.display = 'none';
    }
}

function scrollToBottom(version) {
    if (!currentSettings.autoScroll) return;
    
    const chatBody = elements[version].chatBody;
    if (chatBody) {
        requestAnimationFrame(() => {
            chatBody.scrollTop = chatBody.scrollHeight;
        });
    }
}

function clearChat(version = 'desktop') {
    if (confirm('Are you sure you want to clear the chat?')) {
        typingIntervals.forEach(interval => clearInterval(interval));
        typingIntervals = [];
        
        elements[version].chatBody.innerHTML = '';
        showWelcomeMessage(version);
        showNotification('Chat cleared successfully!');
    }
}

function toggleMobileMenu() {
    const menu = elements.mobile.menu;
    if (menu) {
        if (menu.style.left === '0px' || menu.classList.contains('open')) {
            menu.style.left = '-300px';
            menu.classList.remove('open');
        } else {
            menu.style.left = '0px';
            menu.classList.add('open');
        }
    }
}

// ================= UTILITY FUNCTIONS =================
function getCurrentTime() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

function getActionIcon(action) {
    const icons = {
        'admission': '🎓',
        'courses': '📚',
        'fees': '💰',
        'location': '📍',
        'contact': '📞',
        'hostel': '🏠',
        'placements': '💼',
        'scholarships': '🏆',
        'facilities': '🏫',
        'timetable': '📅',
        'cse timetable': '💻',
        'mechanical timetable': '⚙️',
        'electrical timetable': '🔌',
        'faculty codes': '👨‍🏫',
        'computer': '💻',
        'mechanical': '⚙️',
        'electrical': '🔌',
        'upcoming events': '📅',
        'all events': '📆',
        'workshops': '🔧',
        'technical fest': '🎪',
        'sports events': '⚽'
    };
    return icons[action] || '🔍';
}

function getActionText(action) {
    const texts = {
        'admission': 'Admission',
        'courses': 'Courses',
        'fees': 'Fees',
        'location': 'Location',
        'contact': 'Contact',
        'hostel': 'Hostel',
        'placements': 'Placements',
        'scholarships': 'Scholarships',
        'facilities': 'Facilities',
        'timetable': 'Timetable',
        'cse timetable': 'CSE Timetable',
        'mechanical timetable': 'Mech Timetable',
        'electrical timetable': 'EE Timetable',
        'faculty codes': 'Faculty Codes',
        'computer': 'CS Faculty',
        'mechanical': 'Mech Faculty',
        'electrical': 'EE Faculty',
        'upcoming events': 'Upcoming Events',
        'all events': 'All Events',
        'workshops': 'Workshops',
        'technical fest': 'Tech Fest',
        'sports events': 'Sports Events'
    };
    return texts[action] || action.replace(/([A-Z])/g, ' $1').trim();
}

function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function playSound(type) {
    if (!currentSettings.soundEffects) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = type === 'send' ? 800 : 600;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log('Audio not supported:', e.message);
    }
}


function showNotification(message) {
    const toast = document.getElementById("notification");
    if (!toast) return;

    toast.querySelector("span").textContent = message;
    toast.classList.add("show");

    clearTimeout(notificationTimer);
    notificationTimer = setTimeout(hideNotification, 4000);
}

function hideNotification() {
    const toast = document.getElementById("notification");
    if (toast) toast.classList.remove("show");
}

// ================= PARTICLE EFFECTS =================
function initParticles() {
    if (window.particlesJS) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#4361ee" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 2, random: true },
                line_linked: {
                    enable: true,
                    distance: 100,
                    color: "#4cc9f0",
                    opacity: 0.2,
                    width: 1
                },
                move: { enable: true, speed: 1 }
            }
        });
    }
}

// ================= SETTINGS FUNCTIONS =================
function openSettings() {
    document.getElementById('settingsModal').style.display = 'flex';
    document.getElementById('typingIndicator').checked = currentSettings.typingIndicator;
    document.getElementById('soundEffects').checked = currentSettings.soundEffects;
    document.getElementById('autoScroll').checked = currentSettings.autoScroll;
    document.getElementById('suggestions').checked = currentSettings.suggestions;
    document.getElementById('quickActions').checked = currentSettings.quickActions;
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

function saveSettings() {
    currentSettings = {
        typingIndicator: document.getElementById('typingIndicator').checked,
        soundEffects: document.getElementById('soundEffects').checked,
        autoScroll: document.getElementById('autoScroll').checked,
        suggestions: document.getElementById('suggestions').checked,
        quickActions: document.getElementById('quickActions').checked
    };
    
    localStorage.setItem('gpsBotSettings', JSON.stringify(currentSettings));
    
    applySettings();
    
    showNotification('Settings saved successfully!');
    closeSettings();
}

function loadSettings() {
    const savedSettings = localStorage.getItem('gpsBotSettings');
    if (savedSettings) {
        currentSettings = JSON.parse(savedSettings);
    }
    
    applySettings();
}

function applySettings() {
    ['desktop', 'mobile'].forEach(version => {
        if (currentSettings.suggestions) {
            showSuggestions(version);
        } else {
            hideSuggestions(version);
        }
    });
    
    if (!currentSettings.quickActions) {
        ['desktop', 'mobile'].forEach(version => {
            const chatBody = elements[version].chatBody;
            const existingActions = chatBody.querySelectorAll('.quick-actions');
            existingActions.forEach(actionDiv => {
                actionDiv.style.display = 'none';
            });
        });
    }
}

// ================= PUBLIC FUNCTIONS =================
// ================= UPCOMING FEATURES =================
function attachFile(version) {
    showNotification('📎 File upload coming soon!');
    console.log('Attach file feature clicked:', version);
}

function shareChat(version) {
    showNotification('🔗 Share chat feature coming soon!');
    console.log('Share chat feature clicked:', version);
}

function showEmojiPicker(version) {
    showNotification('😄 Emoji picker coming soon!');
    console.log('Emoji picker feature clicked:', version);
}

function openAIHelp(version) {
    const suggestions = [
        "💡 Try asking about admission process",
        "💡 Ask 'What courses are available?'",
        "💡 Try 'Show me CSE timetable'",
        "💡 Ask 'Who teaches mathematics?'",
        "💡 Try 'What are hostel facilities?'"
    ];
    
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    showNotification(randomSuggestion);
    console.log('AI Help Tip shown:', randomSuggestion);
}

// ================= CLEANUP =================
function cleanup() {
    typingIntervals.forEach(interval => clearInterval(interval));
    typingIntervals = [];
    
    if (notificationTimer) {
        clearTimeout(notificationTimer);
        notificationTimer = null;
    }
    
    // Remove event listeners
    window.removeEventListener('resize', handleResize);
}

let recognition;  // SpeechRecognition instance
let isRecognizing = false;

function startVoiceInput(version) {
    const inputField = elements[version].input;
    const micIcon = elements[version].micIcon;
    const indicator = elements[version].voiceIndicator;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        showNotification("🎤 Voice input not supported in this browser.", "error");
        return;
    }

    // Initialize recognition if not already
    if (!recognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = true;         // keeps listening
        recognition.interimResults = true;     // live words
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            inputField.value = transcript;  // update input live
        };

        recognition.onerror = (event) => {
            console.error("Voice recognition error:", event.error);
            showNotification("🎤 Voice error: " + event.error, "error");
            stopVoiceInput(version);
        };

        recognition.onend = () => {
            isRecognizing = false;
            micIcon.classList.remove('fa-beat', 'active-mic');
            if (indicator) indicator.style.display = 'none';
        };
    }

    if (!isRecognizing) {
        recognition.start();
        isRecognizing = true;
        if (indicator) indicator.style.display = 'flex';
        micIcon.classList.add('fa-beat', 'active-mic');
        showNotification("🎤 Listening...");
    } else {
        stopVoiceInput(version);
    }
}

function stopVoiceInput(version) {
    if (recognition && isRecognizing) {
        recognition.stop();
    }

    isRecognizing = false;

    const micIcon = elements[version].micIcon;
    const indicator = elements[version].voiceIndicator;

    if (micIcon) micIcon.classList.remove('fa-beat', 'active-mic');
    if (indicator) indicator.style.display = 'none';

    // Automatically send message when voice ends
    const inputField = elements[version].input;
    const text = inputField.value.trim();
    if (text) {
        sendMessage(version);
    }
}

function toggleVoiceInput(version) {
    if (!isRecognizing) {
        startVoiceInput(version);
    } else {
        stopVoiceInput(version);
    }
}



window.addEventListener('beforeunload', cleanup);