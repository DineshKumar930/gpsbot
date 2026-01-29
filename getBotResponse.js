function getBotResponse(userMessage) {
    const lowerMsg = userMessage.toLowerCase();

    // ================= EVENT RESPONSES FIRST =================
    // Check for event queries BEFORE anything else
    const eventKeywords = [
        'event', 'events', 'fest', 'workshop', 'seminar', 
        'competition', 'sports', 'placement', 'camp', 
        'celebration', 'program', 'activity', 'function',
        'upcoming', 'schedule', 'calendar', 'meet', 'celebration'
    ];
    
    // Quick check for event queries
    const hasEventKeyword = eventKeywords.some(keyword => 
        lowerMsg.includes(keyword)
    );
    
    if (hasEventKeyword) {
        const eventResponse = getEventResponse(userMessage);
        if (eventResponse) {
            return eventResponse;
        }
    }
    
    // ================= DIRECT EVENT BUTTONS =================
    if (lowerMsg === 'upcoming events') {
        const eventResponse = getEventResponse('upcoming events');
        return eventResponse || {
            title: "📅 Upcoming Events",
            message: "No upcoming events found at the moment.",
            quickActions: ['all events', 'workshops', 'sports events']
        };
    }
    
    if (lowerMsg === 'all events') {
        const eventResponse = getEventResponse('all events');
        return eventResponse || {
            title: "📅 All Events",
            message: "No events found in the database.",
            quickActions: ['upcoming events', 'workshops', 'technical fest']
        };
    }
    
    if (lowerMsg === 'workshops') {
        const eventResponse = getEventResponse('workshops');
        return eventResponse || {
            title: "🔧 Workshops",
            message: "No workshops scheduled at the moment.",
            quickActions: ['upcoming events', 'technical fest', 'all events']
        };
    }
    
    if (lowerMsg === 'technical fest' || lowerMsg === 'tech fest') {
        const eventResponse = getEventResponse('technical fest');
        return eventResponse || {
            title: "🎪 Technical Fest",
            message: "Technical fest information coming soon!",
            quickActions: ['workshops', 'sports events', 'all events']
        };
    }
    
    if (lowerMsg === 'sports events' || lowerMsg === 'sports') {
        const eventResponse = getEventResponse('sports events');
        return eventResponse || {
            title: "⚽ Sports Events",
            message: "No sports events scheduled at the moment.",
            quickActions: ['upcoming events', 'all events', 'workshops']
        };
    }
    
    // ================= FACULTY RESPONSES =================
    // Check faculty recommendation (should come before specific faculty queries)
    const facultyResponse = getFacultyRecommendationResponse(userMessage);
    if (facultyResponse) {
        return facultyResponse;
    }

    // Helper function to detect branch
 function detectBranch(message = '') {
    const msg = message.toLowerCase();

    if (/\b(electrical|ee)\b/.test(msg)) return 'electrical';
    if (/\b(mechanical|mech)\b/.test(msg)) return 'mechanical';
    if (/\b(cse|computer)\b/.test(msg)) return 'cse';

    // ✅ DEFAULT BRANCH (VERY IMPORTANT)
    return 'cse';
}




    // Detect faculty name from message
function detectFaculty(message) {
    const faculties = [
        "dinesh kumar", "prince kumar", "ankit kumar gupta", 
        "sandeep kumar", "virendra singh", "abhimanyu yadav",
        "shubham sharma", "narendra singh", "ankita yadav", 
        "ruman alam", "shashiprabha ramji sharma","aditya sharma","balmukund yadav",
        "pradumn kumar pandey"
    ];
    const lower = message.toLowerCase();
    return faculties.find(f => lower.includes(f.split(' ')[0])) || null; // matches first name
}

// Detect day from message
function detectDay(message) {
    const days = ["monday","tuesday","wednesday","thursday","friday","saturday"];
    const lower = message.toLowerCase();

    for (let day of days) if (lower.includes(day)) return day;

    if (lower.includes("today")) return new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    if (lower.includes("tomorrow")) {
        const d = new Date();
        const tomorrowIndex = (d.getDay() + 1) % 7;
        const weekDays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
        return weekDays[tomorrowIndex];
    }
    return null;
}

// Get all classes for a faculty across branches on a day
function getFacultyTimeTable(message, timeTable) {
    const faculty = detectFaculty(message);
    const day = detectDay(message);

    if (!faculty) return "❌ Could not detect faculty name. Please use the first name or full name.";
    if (!day) return "❌ Could not detect day. Use 'today', 'tomorrow', or a weekday.";

    let allClasses = [];

    for (const branch in timeTable) {
        const classes = timeTable[branch][day];
        if (!classes) continue;

        const facultyClasses = classes.filter(c => c.toLowerCase().includes(faculty));
        if (facultyClasses.length > 0) {
            allClasses.push({ branch, classes: facultyClasses });
        }
    }

    if (allClasses.length === 0) return `📭 No classes for ${faculty.toUpperCase()} on ${day.toUpperCase()}.`;

    // Format the response
    let response = `📚 ${faculty.toUpperCase()}'s Classes on ${day.toUpperCase()}:<br><br>`;

for (const entry of allClasses) {
    response += `🏫 ${entry.branch.toUpperCase()} Branch:<br>`;
    entry.classes.forEach(c => {
        const lastIndex = c.lastIndexOf(':'); // split at last colon
        const time = c.substring(0, lastIndex).trim(); 
        const subject = c.substring(lastIndex + 1).trim(); 
        response += `⏰ ${time}<br>📘 ${subject}<br>`;
    });
    response += `<br>`; // extra space between branches
}


    return response;
}


// Faculty-wise query (today/tomorrow/class request)
if ((lowerMsg.includes('today') || lowerMsg.includes("tomorrow") || lowerMsg.includes('class')) && detectFaculty(lowerMsg)) {
    return {
        title: "📅 Faculty Classes",
        message: getFacultyTimeTable(lowerMsg, timeTable),
        quickActions: ['next class', 'current class', 'upcoming events']
    };
}


    // ================= GREETINGS =================
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        return {
            ...botKnowledge.welcome,
            title: "👋 Hello there!",
            quickActions: ['upcoming events', 'cse timetable', 'faculty codes', 'admission']  // Added events to quick actions
        };
    }

    // ================= FACULTY CODES =================
    if (lowerMsg.includes('faculty code') || lowerMsg.includes('teacher code') || 
        lowerMsg.includes('(ra)') || lowerMsg.includes('(akg)') || lowerMsg.includes('short name')) {
        return {
            ...botKnowledge.facultyCodes,
            quickActions: ['upcoming events', 'computer faculty', 'mechanical faculty', 'electrical faculty']
        };
    }

    // ================= SUBJECT CODES =================
    if (lowerMsg.includes('subject code') || lowerMsg.includes('abbreviation') || 
        lowerMsg.includes('(ap)') || lowerMsg.includes('(it)') || lowerMsg.includes('(feee)')) {
        return {
            ...botKnowledge.subjectCodes,
            quickActions: ['upcoming events', 'faculty codes', 'cse timetable']
        };
    }

    // ================= BRANCH TIMETABLE SELECTION =================
    if (lowerMsg.includes('cse timetable') || lowerMsg.includes('computer timetable') || 
        lowerMsg.includes('cse schedule')) {
        return {
            title: "💻 CSE Time Table",
            message: "Select a day to view CSE schedule:",
            quickActions: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'upcoming events']
        };
    }

    if (lowerMsg.includes('mechanical timetable') || lowerMsg.includes('mech timetable') || 
        lowerMsg.includes('me schedule')) {
        return {
            title: "⚙️ Mechanical Time Table",
            message: "Select a day to view Mechanical schedule:",
            quickActions: ['mech monday', 'mech tuesday', 'mech wednesday', 'mech thursday', 'mech friday', 'mech saturday', 'upcoming events']
        };
    }

    if (lowerMsg.includes('electrical timetable') || lowerMsg.includes('ee timetable') || 
        lowerMsg.includes('electrical schedule')) {
        return {
            title: "🔌 Electrical Time Table",
            message: "Select a day to view Electrical schedule:",
            quickActions: ['ee monday', 'ee tuesday', 'ee wednesday', 'ee thursday', 'ee friday', 'ee saturday', 'upcoming events']
        };
    }

    // ================= MECHANICAL DAYS =================
    if (lowerMsg.includes('mech monday') || lowerMsg.includes('mechanical monday')) {
        return {
            title: "📅 Monday - Mechanical",
            message: timeTable.mechanical.monday.join('<br>'),
            quickActions: ['mech tuesday', 'cse timetable', 'electrical timetable', 'upcoming events']
        };
    }

    if (lowerMsg.includes('mech tuesday') || lowerMsg.includes('mechanical tuesday')) {
        return {
            title: "📅 Tuesday - Mechanical",
            message: timeTable.mechanical.tuesday.join('<br>'),
            quickActions: ['mech monday', 'mech wednesday', 'cse timetable', 'upcoming events']
        };
    }

    if (lowerMsg.includes('mech wednesday') || lowerMsg.includes('mechanical wednesday')) {
        return {
            title: "📅 Wednesday - Mechanical",
            message: timeTable.mechanical.wednesday.join('<br>'),
            quickActions: ['mech tuesday', 'mech thursday', 'cse timetable', 'upcoming events']
        };
    }

    if (lowerMsg.includes('mech thursday') || lowerMsg.includes('mechanical thursday')) {
        return {
            title: "📅 Thursday - Mechanical",
            message: timeTable.mechanical.thursday.join('<br>'),
            quickActions: ['mech wednesday', 'mech friday', 'cse timetable', 'upcoming events']
        };
    }

    if (lowerMsg.includes('mech friday') || lowerMsg.includes('mechanical friday')) {
        return {
            title: "📅 Friday - Mechanical",
            message: timeTable.mechanical.friday.join('<br>'),
            quickActions: ['mech thursday', 'mech saturday', 'cse timetable', 'upcoming events']
        };
    }

    if (lowerMsg.includes('mech saturday') || lowerMsg.includes('mechanical saturday')) {
        return {
            title: "📅 Saturday - Mechanical",
            message: timeTable.mechanical.saturday.join('<br>'),
            quickActions: ['mech friday', 'cse timetable', 'electrical timetable', 'upcoming events']
        };
    }

    // ================= ELECTRICAL DAYS =================
    if (lowerMsg.includes('ee monday') || lowerMsg.includes('electrical monday')) {
        return {
            title: "📅 Monday - Electrical",
            message: timeTable.electrical.monday.join('<br>'),
            quickActions: ['ee tuesday', 'cse timetable', 'mechanical timetable', 'upcoming events']
        };
    }

    if (lowerMsg.includes('ee tuesday') || lowerMsg.includes('electrical tuesday')) {
        return {
            title: "📅 Tuesday - Electrical",
            message: timeTable.electrical.tuesday.join('<br>'),
            quickActions: ['ee monday', 'ee wednesday', 'cse timetable', 'upcoming events']
        };
    }

    if (lowerMsg.includes('ee wednesday') || lowerMsg.includes('electrical wednesday')) {
        return {
            title: "📅 Wednesday - Electrical",
            message: timeTable.electrical.wednesday.join('<br>'),
            quickActions: ['ee tuesday', 'ee thursday', 'cse timetable', 'upcoming events']
        };
    }

    if (lowerMsg.includes('ee thursday') || lowerMsg.includes('electrical thursday')) {
        return {
            title: "📅 Thursday - Electrical",
            message: timeTable.electrical.thursday.join('<br>'),
            quickActions: ['ee wednesday', 'ee friday', 'cse timetable', 'upcoming events']
        };
    }

    if (lowerMsg.includes('ee friday') || lowerMsg.includes('electrical friday')) {
        return {
            title: "📅 Friday - Electrical",
            message: timeTable.electrical.friday.join('<br>'),
            quickActions: ['ee thursday', 'ee saturday', 'cse timetable', 'upcoming events']
        };
    }

    if (lowerMsg.includes('ee saturday') || lowerMsg.includes('electrical saturday')) {
        return {
            title: "📅 Saturday - Electrical",
            message: timeTable.electrical.saturday.join('<br>'),
            quickActions: ['ee friday', 'cse timetable', 'mechanical timetable', 'upcoming events']
        };
    }

    // ================= DIRECT FACULTY INFO =================
   
    if (lowerMsg.includes('principal')||lowerMsg.includes('who principal')) {
        return {
            ...botKnowledge.principal,
            quickActions: ['upcoming events', 'contact', 'admission']
        };
    }

    const branch = detectBranch(lowerMsg);




    // ================= SPECIFIC DAYS WITH BRANCH DETECTION =================
    if ((lowerMsg.includes('monday') || lowerMsg.includes('mon')) && !lowerMsg.includes('timetable')) {
        const branch = detectBranch(lowerMsg);
        if (branch !== 'cse') {
            return {
                title: `📅 Monday - ${branch.toUpperCase()}`,
                message: timeTable[branch].monday.join('<br>'),
                quickActions: [`${branch} tuesday`, `${branch} wednesday`, 'cse timetable', 'upcoming events']
            };
        }
        return {
            title: "📅 Monday - CSE Time Table",
            message: timeTable.cse.monday.join('<br>'),
            quickActions: ['tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'upcoming events']
        };
    }

    if ((lowerMsg.includes('tuesday') || lowerMsg.includes('tue')) && !lowerMsg.includes('timetable')) {
        const branch = detectBranch(lowerMsg);
        if (branch !== 'cse') {
            return {
                title: `📅 Tuesday - ${branch.toUpperCase()}`,
                message: timeTable[branch].tuesday.join('<br>'),
                quickActions: [`${branch} monday`, `${branch} wednesday`, 'cse timetable', 'upcoming events']
            };
        }
        return {
            title: "📅 Tuesday - CSE Time Table",
            message: timeTable.cse.tuesday.join('<br>'),
            quickActions: ['monday', 'wednesday', 'thursday', 'friday', 'saturday', 'upcoming events']
        };
    }

    if ((lowerMsg.includes('wednesday') || lowerMsg.includes('wed')) && !lowerMsg.includes('timetable')) {
        const branch = detectBranch(lowerMsg);
        if (branch !== 'cse') {
            return {
                title: `📅 Wednesday - ${branch.toUpperCase()}`,
                message: timeTable[branch].wednesday.join('<br>'),
                quickActions: [`${branch} tuesday`, `${branch} thursday`, 'cse timetable', 'upcoming events']
            };
        }
        return {
            title: "📅 Wednesday - CSE Time Table",
            message: timeTable.cse.wednesday.join('<br>'),
            quickActions: ['monday', 'tuesday', 'thursday', 'friday', 'saturday', 'upcoming events']
        };
    }

    if ((lowerMsg.includes('thursday') || lowerMsg.includes('thu')) && !lowerMsg.includes('timetable')) {
        const branch = detectBranch(lowerMsg);
        if (branch !== 'cse') {
            return {
                title: `📅 Thursday - ${branch.toUpperCase()}`,
                message: timeTable[branch].thursday.join('<br>'),
                quickActions: [`${branch} wednesday`, `${branch} friday`, 'cse timetable', 'upcoming events']
            };
        }
        return {
            title: "📅 Thursday - CSE Time Table",
            message: timeTable.cse.thursday.join('<br>'),
            quickActions: ['monday', 'tuesday', 'wednesday', 'friday', 'saturday', 'upcoming events']
        };
    }

    if ((lowerMsg.includes('friday') || lowerMsg.includes('fri')) && !lowerMsg.includes('timetable')) {
        const branch = detectBranch(lowerMsg);
        if (branch !== 'cse') {
            return {
                title: `📅 Friday - ${branch.toUpperCase()}`,
                message: timeTable[branch].friday.join('<br>'),
                quickActions: [`${branch} thursday`, `${branch} saturday`, 'cse timetable', 'upcoming events']
            };
        }
        return {
            title: "📅 Friday - CSE Time Table",
            message: timeTable.cse.friday.join('<br>'),
            quickActions: ['monday', 'tuesday', 'wednesday', 'thursday', 'saturday', 'upcoming events']
        };
    }

    if ((lowerMsg.includes('saturday') || lowerMsg.includes('sat')) && !lowerMsg.includes('timetable')) {
        const branch = detectBranch(lowerMsg);
        if (branch !== 'cse') {
            return {
                title: `📅 Saturday - ${branch.toUpperCase()}`,
                message: timeTable[branch].saturday.join('<br>'),
                quickActions: [`${branch} friday`, 'cse timetable', 'upcoming events']
            };
        }
        return {
            title: "📅 Saturday - CSE Time Table",
            message: timeTable.cse.saturday.join('<br>'),
            quickActions: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'upcoming events']
        };
    }

    // ================= TODAY/TOMORROW WITH BRANCH DETECTION =================
    if (lowerMsg.includes('today') || lowerMsg.includes("today's")) {
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        const currentBranch = detectBranch(lowerMsg);
        
        return {
            title: `📅 Today's (${today.charAt(0).toUpperCase() + today.slice(1)}) - ${currentBranch.toUpperCase()} Time Table`,
            message: timeTable[currentBranch][today] 
                ? timeTable[currentBranch][today].join('<br>')
                : "🎉 No classes today! It's a holiday.",
            quickActions: [`${currentBranch} timetable`, 'tomorrow', 'next class', 'upcoming events']
        };
    }

    if (lowerMsg.includes('tomorrow') || lowerMsg.includes("tomorrow's")) {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const todayIndex = new Date().getDay();
        const tomorrowIndex = (todayIndex + 1) % 7;
        const tomorrow = days[tomorrowIndex];
        const currentBranch = detectBranch(lowerMsg);
        
        return {
            title: `📅 Tomorrow's (${tomorrow.charAt(0).toUpperCase() + tomorrow.slice(1)}) - ${currentBranch.toUpperCase()} Time Table`,
            message: timeTable[currentBranch][tomorrow] 
                ? timeTable[currentBranch][tomorrow].join('<br>')
                : "🎉 No classes tomorrow! It's a holiday.",
            quickActions: [`${currentBranch} timetable`, 'today', 'current class', 'upcoming events']
        };
    }

    // ================= CURRENT CLASS WITH BRANCH DETECTION =================
    if (lowerMsg.includes('current class') || lowerMsg.includes('ongoing class') || 
        lowerMsg.includes('right now') || lowerMsg.includes('now')) {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTime = currentHour * 100 + currentMinute;
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const today = days[now.getDay()];
        const currentBranch = detectBranch(lowerMsg);
        
        if (timeTable[currentBranch][today]) {
            let currentClass = null;
            
            for (let classSlot of timeTable[currentBranch][today]) {
                const timeMatch = classSlot.match(/(\d{2}):(\d{2})–(\d{2}):(\d{2})/);
                if (timeMatch) {
                    const startHour = parseInt(timeMatch[1]);
                    const startMin = parseInt(timeMatch[2]);
                    const endHour = parseInt(timeMatch[3]);
                    const endMin = parseInt(timeMatch[4]);
                    const startTime = startHour * 100 + startMin;
                    const endTime = endHour * 100 + endMin;
                    
                    if (currentTime >= startTime && currentTime <= endTime) {
                        currentClass = classSlot;
                        break;
                    }
                }
            }
            
            if (currentClass) {
                return {
                    title: `⏳ Ongoing Class - ${currentBranch.toUpperCase()}`,
                    message: currentClass,
                    quickActions: ['next class', 'today', `${currentBranch} timetable`, 'upcoming events']
                };
            } else {
                return {
                    title: `⏳ Current Status - ${currentBranch.toUpperCase()}`,
                    message: "No class is currently ongoing. It might be a break or free period.",
                    quickActions: ['next class', 'today', `${currentBranch} timetable`, 'upcoming events']
                };
            }
        }
        
        return {
            title: `⏳ Current Class - ${currentBranch.toUpperCase()}`,
            message: "No classes scheduled for today.",
            quickActions: [`${currentBranch} timetable`, 'tomorrow', 'upcoming events']
        };
    }

    // ================= NEXT CLASS WITH BRANCH DETECTION =================
    if (lowerMsg.includes('next class') || lowerMsg.includes('next period')) {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTime = currentHour * 100 + currentMinute;
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const today = days[now.getDay()];
        const currentBranch = detectBranch(lowerMsg);
        
        if (timeTable[currentBranch][today]) {
            let nextClass = null;
            
            for (let classSlot of timeTable[currentBranch][today]) {
                const timeMatch = classSlot.match(/(\d{2}):(\d{2})–(\d{2}):(\d{2})/);
                if (timeMatch) {
                    const startHour = parseInt(timeMatch[1]);
                    const startMin = parseInt(timeMatch[2]);
                    const startTime = startHour * 100 + startMin;
                    
                    if (startTime > currentTime) {
                        nextClass = classSlot;
                        break;
                    }
                }
            }
            
            if (nextClass) {
                return {
                    title: `⏳ Next Class Today - ${currentBranch.toUpperCase()}`,
                    message: nextClass,
                    quickActions: ['current class', 'today', `${currentBranch} timetable`, 'upcoming events']
                };
            } else {
                return {
                    title: `⏳ Next Class - ${currentBranch.toUpperCase()}`,
                    message: "No more classes today! 🎉",
                    quickActions: [`${currentBranch} timetable`, 'tomorrow', 'upcoming events']
                };
            }
        }
        
        return {
            title: `⏳ Next Class - ${currentBranch.toUpperCase()}`,
            message: "No classes scheduled for today.",
            quickActions: [`${currentBranch} timetable`, 'tomorrow', 'upcoming events']
        };
    }

    // ================= TIME-SPECIFIC QUERY WITH BRANCH DETECTION =================
    if (lowerMsg.match(/\d{1,2}:\d{2}\s*(am|pm)?/) || lowerMsg.match(/\d{1,2}\s*(am|pm)/)) {
        let timeMatch = lowerMsg.match(/(\d{1,2}):?(\d{2})?\s*(am|pm)?/);
        if (timeMatch) {
            let hour = parseInt(timeMatch[1]);
            let minute = timeMatch[2] ? parseInt(timeMatch[2]) : 0;
            const period = timeMatch[3];
            
            if (period === 'pm' && hour < 12) hour += 12;
            if (period === 'am' && hour === 12) hour = 0;
            
            const searchTime = hour * 100 + minute;
            const currentBranch = detectBranch(lowerMsg);
            const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            const now = new Date();
            const today = days[now.getDay()];
            
            let foundClasses = [];
            
            if (timeTable[currentBranch][today]) {
                for (let classSlot of timeTable[currentBranch][today]) {
                    const classTimeMatch = classSlot.match(/(\d{2}):(\d{2})–(\d{2}):(\d{2})/);
                    if (classTimeMatch) {
                        const startHour = parseInt(classTimeMatch[1]);
                        const startMin = parseInt(classTimeMatch[2]);
                        const endHour = parseInt(classTimeMatch[3]);
                        const endMin = parseInt(classTimeMatch[4]);
                        const startTime = startHour * 100 + startMin;
                        const endTime = endHour * 100 + endMin;
                        
                        if (searchTime >= startTime && searchTime <= endTime) {
                            foundClasses.push(classSlot);
                        }
                    }
                }
            }
            
            if (foundClasses.length === 0) {
                for (const day in timeTable[currentBranch]) {
                    for (let classSlot of timeTable[currentBranch][day]) {
                        const classTimeMatch = classSlot.match(/(\d{2}):(\d{2})–(\d{2}):(\d{2})/);
                        if (classTimeMatch) {
                            const startHour = parseInt(classTimeMatch[1]);
                            const startMin = parseInt(classTimeMatch[2]);
                            const endHour = parseInt(classTimeMatch[3]);
                            const endMin = parseInt(classTimeMatch[4]);
                            const startTime = startHour * 100 + startMin;
                            const endTime = endHour * 100 + endMin;
                            
                            if (searchTime >= startTime && searchTime <= endTime) {
                                foundClasses.push(`${day.charAt(0).toUpperCase() + day.slice(1)}: ${classSlot}`);
                            }
                        }
                    }
                }
            }
            
            if (foundClasses.length > 0) {
                return {
                    title: `🕐 ${currentBranch.toUpperCase()} Classes at ${hour}:${minute.toString().padStart(2, '0')}`,
                    message: foundClasses.join('<br>'),
                    quickActions: ['current class', 'next class', `${currentBranch} timetable`, 'upcoming events']
                };
            } else {
                return {
                    title: `🕐 No ${currentBranch.toUpperCase()} classes at ${hour}:${minute.toString().padStart(2, '0')}`,
                    message: "There's no scheduled class at this time. It might be a break or free period.",
                    quickActions: ['current class', 'next class', `${currentBranch} timetable`, 'upcoming events']
                };
            }
        }
    }

    // ================= OTHER GENERAL RESPONSES =================
    if (lowerMsg.includes('admission') || lowerMsg.includes('govt') || lowerMsg.includes('enroll')) {
        return {
            ...botKnowledge.admission,
            quickActions: ['courses', 'fees', 'contact', 'upcoming events']
        };
    }
    if (lowerMsg.includes('private') || lowerMsg.includes('apply') || lowerMsg.includes('management')) {
        return {
            ...botKnowledge.admissionPrivate,
            quickActions: ['courses', 'fees', 'contact', 'upcoming events']
        };
    }
if (lowerMsg.includes('Government Polytechnic Sahajnwa') || lowerMsg.includes('Government Polytechnic Sahajnwa')) {
        return {
            ...botKnowledge.aboutGPSShort,
            quickActions: ['location', 'courses', 'admission']
        };
    }
    if (lowerMsg.includes('about gps') || lowerMsg.includes('short info')) {
        return {
            ...botKnowledge.aboutGPSShort,
            quickActions: ['location', 'courses', 'admission']
        };
    }
    if (lowerMsg==='gps' || lowerMsg==='full info' || lowerMsg.includes('full')) {
        return {
            ...botKnowledge.aboutGPSFull,
            quickActions: ['location', 'courses', 'admission']
        };
    }


if (lowerMsg.includes('dinesh')) {
        return {
            ...botKnowledge.dinesh,
            quickActions: ['faculty codes', 'computer faculty', 'upcoming events']
        };
    }
    if (lowerMsg.includes('abhimanyu')) {
        return {
            ...botKnowledge.abhimanyu,
            quickActions: ['faculty codes', 'computer faculty', 'upcoming events']
        };
    }
    if (lowerMsg.includes('virendra')) {
        return {
            ...botKnowledge.virendra,
            quickActions: ['faculty codes', 'computer faculty', 'upcoming events']
        };
    }
    if (lowerMsg.includes('pradumn')) {
        return {
            ...botKnowledge.pradumn,
            quickActions: ['faculty codes', 'computer faculty', 'upcoming events']
        };
    }
    if (lowerMsg.includes('abhishek')) {
        return {
            ...botKnowledge.abhishek,
            quickActions: ['faculty codes', 'computer faculty', 'upcoming events']
        };
    }
    if (lowerMsg.includes('prince') || lowerMsg.includes('prince kumar')) {
        return {
            ...botKnowledge.prince,
            quickActions: ['faculty codes', 'computer faculty', 'upcoming events']
        };
    }
    if (lowerMsg.includes('math')) {
        return {
            ...botKnowledge.mathematics,
            quickActions: ['faculty codes', 'computer faculty', 'upcoming events']
        };
    }
    if (lowerMsg.includes('aditya')) {
        return {
            ...botKnowledge.aditya,
            quickActions: ['faculty codes', 'computer faculty', 'upcoming events']
        };
    }

    if (lowerMsg.includes('course') || lowerMsg.includes('branch') || lowerMsg.includes('program')) {
        return {
            ...botKnowledge.courses,
            quickActions: ['admission', 'fees', 'placement', 'upcoming events']
        };
    }

    if (lowerMsg.includes('website') || lowerMsg.includes('website') || lowerMsg.includes('gpswebsite')|| lowerMsg.includes('webportal')|| lowerMsg.includes('official website')) {
        return {
            ...botKnowledge.website,
        };
    }



    if (lowerMsg.includes('fee') || lowerMsg.includes('cost') || lowerMsg.includes('tuition')) {
        return {
            ...botKnowledge.fees,
            quickActions: ['admission', 'courses', 'contact', 'upcoming events']
        };
    }

    if (lowerMsg.includes('location') || lowerMsg.includes('address') || lowerMsg.includes('where')) {
        return {
            ...botKnowledge.location,
            quickActions: ['contact', 'hostel', 'admission', 'upcoming events']
        };
    }

    if (lowerMsg.includes('contact') || lowerMsg.includes('phone') || lowerMsg.includes('email')) {
        return {
            ...botKnowledge.contact,
            quickActions: ['admission', 'location', 'principal', 'upcoming events']
        };
    }

    if (lowerMsg.includes('hostel') || lowerMsg.includes('room') || lowerMsg.includes('stay')) {
        return {
            ...botKnowledge.hostel,
            quickActions: ['location', 'fees', 'contact', 'upcoming events']
        };
    }

    if (lowerMsg.includes('placement') || lowerMsg.includes('job') || lowerMsg.includes('career')) {
        return {
            ...botKnowledge.placements,
            quickActions: ['courses', 'admission', 'faculty', 'upcoming events']
        };
    }

    if (lowerMsg.includes('faculty') || lowerMsg.includes('teacher')) {
        return {
            ...botKnowledge.faculty,
            quickActions: ['faculty codes', 'computer faculty', 'mechanical faculty', 'electrical faculty', 'upcoming events']
        };
    }


    

    // ================= GENERAL TIMETABLE =================
    if (lowerMsg.includes('timetable') || lowerMsg.includes('schedule') || lowerMsg.includes('time table')) {
        return {
            ...botKnowledge.timetable,
            quickActions: ['cse timetable', 'mechanical timetable', 'electrical timetable', 'upcoming events']
        };
    }

    // ================= DEFAULT RESPONSE =================
    return {
    title: "🤔 I'm here to help!",
    message:
        "I can provide info about:<br><br>" +
        "📅 Events: Workshops, Tech Fest, Sports<br>" +
        "👨‍🏫 Faculty: Teachers info, codes, subjects<br>" +
        "⏰ Timetable: CSE, Mechanical, Electrical schedules<br>" +
        "🎓 Admissions: Process, courses, fees<br>" +
        "📍 Campus: Location, hostel, facilities" +
        "<br><br><span class='bot-footer'>Please ask a specific question!</span>",
    quickActions: [
        'upcoming events',
        'admission',
        'courses',
        'cse timetable',
        'faculty codes',
        'location'
    ]
};

}

