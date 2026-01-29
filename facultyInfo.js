// ================= ENHANCED FACULTY DATABASE =================
const facultyDatabase = {
    // Computer Science Faculty
    "prince kumar": {
        name: "Mr. Prince Kumar",
        department: "Computer Science & Engineering",
        position: "Head of Department",
        qualification: "B.Tech (CSE), MBA (IT & Operation)",
        experience: "2+ Years",
        subjects: ["Java", "DBMS", "Web Technology", "Computer Networking", "Introduction to IT Systems"],
        email: "prince.kumar@gpsahajnwa.ac.in",
        code: "PK",
        branch: "cse"
    },
    "ankita yadav": {
        name: "Ms. Ankita Yadav",
        department: "Computer Science & Engineering",
        position: "Lecturer",
        qualification: "MCA",
        experience: "3+ Years",
        subjects: ["HTML", "DBMS", "Web Technology", "Computer Networking", "IT Lab"],
        email: "ankita.yadav@gpsahajnwa.ac.in",
        code: "AAY",
        branch: "cse"
    },
    "dinesh kumar": {
        name: "Mr. Dinesh Kumar",
        department: "Computer Science & Engineering",
        position: "Lab Instructor",
        qualification: "B.Tech (CSE)",
        experience: "3+ Years",
        subjects: ["IT Lab", "Computer Lab"],
        email: "dinesh.kumar@gpsahajnwa.ac.in",
        code: "DK",
        branch: "cse"
    },

    // Mechanical Faculty
    "abhimanyu yadav": {
        name: "Mr. Abhimanyu Yadav",
        department: "Mechanical Engineering",
        position: "Head of Department",
        qualification: "B.Tech (Mechanical)",
        experience: "8+ Years",
        subjects: ["Engineering Mechanics", "Workshop", "Engineering Graphics", "SOM", "TOM"],
        email: "abhimanyu.yadav@gpsahajnwa.ac.in",
        code: "AY",
        branch: "mechanical"
    },
    "narendra singh": {
        name: "Mr. Narendra Singh",
        department: "Mechanical Engineering",
        position: "Lecturer",
        qualification: "B.Tech (Mechanical)",
        experience: "3+ Years",
        subjects: ["Engineering Mechanics", "Engineering Graphics", "Workshop"],
        email: "narendra.singh@gpsahajnwa.ac.in",
        code: "NS",
        branch: "mechanical"
    },
    "shubham sharma": {
        name: "Mr. Shubham Sharma",
        department: "Mechanical Engineering",
        position: "Lab Instructor",
        qualification: "Diploma (Mechanical)",
        experience: "4+ Years",
        subjects: ["Workshop", "Engineering Mechanics Lab", "FEEE Lab"],
        email: "shubham.sharma@gpsahajnwa.ac.in",
        code: "SS",
        branch: "mechanical"
    },

    // Electrical Faculty
    "virendra singh": {
        name: "Mr. Virendra Singh",
        department: "Electrical Engineering",
        position: "Head of Department",
        qualification: "B.Tech (Electrical)",
        experience: "7+ Years",
        subjects: ["FEEE", "Power System", "Electrical Machines", "FEEE Lab"],
        email: "virendra.singh@gpsahajnwa.ac.in",
        code: "VS",
        branch: "electrical"
    },
    "abhishek singh": {
        name: "Mr. Abhishek Singh",
        department: "Electrical Engineering",
        position: "Lecturer",
        qualification: "B.Tech (Electrical)",
        experience: "1+ Year",
        subjects: ["FEEE", "Power System", "Electrical Machines", "FEEE Lab"],
        email: "abhishek.singh@gpsahajnwa.ac.in",
        code: "AS",
        branch: "electrical"
    },
    "prashant kumar pandey": {
        name: "Mr. Prashant Kumar Pandey",
        department: "Electrical Engineering",
        position: "Lab Instructor",
        qualification: "Diploma (Electrical)",
        experience: "4+ Years",
        subjects: ["FEEE Lab"],
        email: "prashant.pandey@gpsahajnwa.ac.in",
        code: "PP",
        branch: "electrical"
    },
    // Common Faculty
    "ankit kumar gupta": {
        name: "Mr. Ankit Kumar Gupta",
        department: "Applied Sciences",
        position: "Lecturer",
        qualification: "M.Sc (Physics)",
        experience: "5+ Years",
        subjects: ["Applied Physics", "Applied Physics Lab"],
        email: "ankit.gupta@gpsahajnwa.ac.in",
        code: "AKG",
        branch: "common"
    },
    "dr. ruman alam": {
        name: "Dr. Ruman Alam",
        department: "Chemistry",
        position: "Head of Department Applied Science",
        qualification: "PhD (Chemistry)",
        experience: "10+ Years",
        subjects: ["Environmental Sciences"],
        email: "ruman.alam@gpsahajnwa.ac.in",
        code: "RA",
        branch: "common"
    },
    "sandeep kumar": {
        name: "Mr. Sandeep Kumar",
        department: "Mathematics",
        position: "Lecturer",
        qualification: "M.Sc (Mathematics)",
        experience: "6+ Years",
        subjects: ["Mathematics-II"],
        email: "sandeep.math@gpsahajnwa.ac.in",
        code: "SK",
        branch: "common"
    },
    "shashiprabha ramji sharma": {
        name: "Ms. Shashiprabha Ramji Sharma",
        department: "Student Activities",
        position: "Coordinator",
        qualification: "M.Sc & MBA (Education)",
        experience: "7+ Years",
        subjects: ["Student Centered Activities"],
        email: "shashiprabha.sharma@gpsahajnwa.ac.in",
        code: "SPR",
        branch: "common"
    },

    // Administration Staff (NEWLY ADDED)
      
    "accountant": {
        name: "Mr. Aditya Nath Sharma",
        department: "Accounts Department",
        position: "Accountant",
        qualification: "B.Com, M.Com",
        experience: "2+ Years",
        subjects: ["Accounts Management", "Fee Collection", "Financial Records"],
        email: "aditya.sharma@gpsahajnwa.ac.in",
        code: "ANS",
        branch: "admin"
    },
    "office clerk": {
        name: "Mr. Balmukund Yadav",
        department: "Administration Office",
        position: "Clerk",
        qualification: "B.A.,ADCA ",
        experience: "2+ Years",
        subjects: ["Office Administration", "Document Processing", "Student Records"],
        email: "Balmukund.yadav@gpsahajnwa.ac.in",
        code: "BM",
        branch: "admin"
    }
};

// ================= SUBJECT TO FACULTY MAPPING =================
const subjectToFaculty = {
    // Mathematics
    "mathematics": ["sandeep kumar"],
    "math": ["sandeep kumar"],
    "mathematics-ii": ["sandeep kumar"],
    "maths": ["sandeep kumar"],
    
    // Physics
    "applied physics": ["ankit kumar gupta"],
    "physics": ["ankit kumar gupta"],
    "applied physics-ii": ["ankit kumar gupta"],
    "ap": ["ankit kumar gupta"],
    "ap-ii": ["ankit kumar gupta"],
    
    // Environmental Sciences
    "environmental sciences": ["dr. ruman alam"],
    "environmental": ["dr. ruman alam"],
    "es": ["dr. ruman alam"],
    "environment": ["dr. ruman alam"],
    
    // IT Subjects
    "introduction to it systems": ["prince kumar"],
    "it": ["prince kumar", "ankita yadav", "dinesh kumar"],
    "it systems": ["prince kumar"],
    "information technology": ["prince kumar", "ankita yadav"],
    
    // Electrical Subjects
    "feee": ["virendra singh", "abhishek singh", "prashant kumar pandey"],
    "electrical": ["virendra singh", "abhishek singh", "prashant kumar pandey"],
    "fundamentals of electrical": ["virendra singh", "abhishek singh"],
    "fundamentals of electrical & electronics engineering": ["virendra singh", "abhishek singh"],
    
    // Mechanical Subjects
    "engineering mechanics": ["abhimanyu yadav", "narendra singh", "shubham sharma"],
    "em": ["abhimanyu yadav", "narendra singh", "shubham sharma"],
    "mechanics": ["abhimanyu yadav", "narendra singh", "shubham sharma"],
    
    // Workshop
    "workshop": ["abhimanyu yadav", "shubham sharma", "narendra singh",],
    
    // Computer Science Subjects
    "java": ["prince kumar"],
    "dbms": ["prince kumar", "ankita yadav"],
    "database": ["prince kumar", "ankita yadav"],
    "web technology": ["prince kumar", "ankita yadav"],
    "web": ["prince kumar", "ankita yadav"],
    "computer networking": ["prince kumar", "ankita yadav"],
    "networking": ["prince kumar", "ankita yadav"],
    
    // HTML
    "html": ["ankita yadav"],
    
    // Labs
    "it lab": ["prince kumar", "dinesh kumar", "ankita yadav"],
    "computer lab": ["dinesh kumar"],
    "physics lab": ["ankit kumar gupta"],
    "applied physics lab": ["ankit kumar gupta"],
    "feee lab": ["virendra singh", "abhishek singh", "prashant kumar pandey", "shubham sharma"],
    "engineering mechanics lab": ["abhimanyu yadav", "shubham sharma", "narendra singh"],
    
    // Electrical Power
    "power system": ["virendra singh", "abhishek singh"],
    "electrical machines": ["virendra singh", "abhishek singh"],
    "machines": ["virendra singh", "abhishek singh"],
    
    // Mechanical Theory
    "som": ["abhimanyu yadav"],
    "tom": ["abhimanyu yadav"],
    "engineering graphics": ["abhimanyu yadav", "narendra singh"],
    "graphics": ["abhimanyu yadav", "narendra singh"],
    
    // Student Activities
    "student activities": ["shashiprabha ramji sharma"],
    "sca": ["shashiprabha ramji sharma"],
    "student centered activities": ["shashiprabha ramji sharma"],
    
    // Accounts & Administration
    "accounts": ["aditya nath sharma"],
    "accountant": ["aditya nath sharma"],
    "administration": ["balmukund yadav"],
    "office administration": ["balmukund yadav"],
    "admin staff": ["aditya nath sharma", "balmukund yadav"],
    "administrative staff": ["aditya nath sharma", "balmukund yadav"],
    "clerk": ["balmukund yadav"],
    "office clerk": ["balmukund yadav"]
};

// ================= ENHANCED FACULTY FUNCTIONS =================
function recommendFacultyForSubject(subjectQuery) {
    const lowerQuery = subjectQuery.toLowerCase().trim();
    let matchedFaculty = [];
    
    if (!lowerQuery) return matchedFaculty;
    
    // Clean the query
    const cleanedQuery = lowerQuery.replace(/subject|class|me|my|the|a|an|who|teaches|teacher|professor|faculty|for|take|takes|about|teach|which/gi, '').trim();
    
    if (!cleanedQuery) return matchedFaculty;
    
    // 1. Search in subjectToFaculty mapping (exact or partial match)
    for (const [subject, facultyNames] of Object.entries(subjectToFaculty)) {
        if (cleanedQuery === subject || 
            subject.includes(cleanedQuery) || 
            cleanedQuery.includes(subject)) {
            facultyNames.forEach(facultyName => {
                if (facultyDatabase[facultyName] && !matchedFaculty.find(f => f.name === facultyDatabase[facultyName].name)) {
                    matchedFaculty.push(facultyDatabase[facultyName]);
                }
            });
        }
    }
    
    // 2. If no match found, search in faculty subjects
    if (matchedFaculty.length === 0) {
        for (const facultyName in facultyDatabase) {
            const faculty = facultyDatabase[facultyName];
            if (faculty.subjects.some(subject => {
                const lowerSubject = subject.toLowerCase();
                return lowerSubject === cleanedQuery || 
                       lowerSubject.includes(cleanedQuery) || 
                       cleanedQuery.includes(lowerSubject);
            })) {
                if (!matchedFaculty.find(f => f.name === faculty.name)) {
                    matchedFaculty.push(faculty);
                }
            }
        }
    }
    
    return matchedFaculty;
}

function searchFacultyByName(nameQuery) {
    const lowerQuery = nameQuery.toLowerCase().trim();
    let foundFaculty = [];
    
    if (!lowerQuery) return foundFaculty;
    
    for (const facultyName in facultyDatabase) {
        const faculty = facultyDatabase[facultyName];
        
        // Exact name match
        if (facultyName === lowerQuery || 
            faculty.name.toLowerCase() === lowerQuery) {
            if (!foundFaculty.find(f => f.name === faculty.name)) {
                foundFaculty.push(faculty);
            }
        }
        // Partial name match
        else if (facultyName.includes(lowerQuery) || 
                 faculty.name.toLowerCase().includes(lowerQuery)) {
            if (!foundFaculty.find(f => f.name === faculty.name)) {
                foundFaculty.push(faculty);
            }
        }
        // First name only match (like "prince", "dinesh")
        else if (facultyName.split(' ')[0] === lowerQuery || 
                 faculty.name.toLowerCase().split(' ')[1] === lowerQuery) {
            if (!foundFaculty.find(f => f.name === faculty.name)) {
                foundFaculty.push(faculty);
            }
        }
        // Code match (exact)
        else if (faculty.code.toLowerCase() === lowerQuery) {
            if (!foundFaculty.find(f => f.name === faculty.name)) {
                foundFaculty.push(faculty);
            }
        }
    }
    
    return foundFaculty;
}

// ================= MAIN RESPONSE FUNCTION =================
function getFacultyRecommendationResponse(userMessage) {
    const lowerMsg = userMessage.toLowerCase().trim();
    
    // 1. ADMIN STAFF QUERY - FIXED
    if (lowerMsg.includes('admin') || 
        lowerMsg.includes('administrative') || 
        lowerMsg.includes('aditya sir') || 
        lowerMsg.includes('accountant') || 
        lowerMsg.includes('clerk') ||
        lowerMsg.includes('office staff')) {
        
        let message = `<strong>👨‍💼 Administration Staff:</strong><br><br>`;
        
        // Add all admin staff
        let adminCount = 0;
        
        for (const facultyName in facultyDatabase) {
            const faculty = facultyDatabase[facultyName];
            if (faculty.branch === 'admin') {
                adminCount++;
                message += `
<strong>${adminCount}. ${faculty.name} (${faculty.code})</strong><br>
• Department: ${faculty.department}<br>
• Position: ${faculty.position}<br>
• Qualification: ${faculty.qualification}<br>
• Experience: ${faculty.experience}<br>
• Responsibilities: ${faculty.subjects.join(', ')}<br>
${faculty.email ? `• Email: <a href="mailto:${faculty.email}" style="color: #3498db;">${faculty.email}</a><br>` : ''}
                `;
            }
        }
        
        if (adminCount > 0) {
            return {
                title: "👨‍💼 Administration Staff",
                message: message,
                quickActions: ['faculty codes', 'computer faculty', 'all faculty']
            };
        }
    }
    
    // 2. WHO TEACHES [SUBJECT]?
    if (lowerMsg.includes('teach') || 
        lowerMsg.includes('teacher') || 
        lowerMsg.includes('faculty') ||
        lowerMsg.includes('professor') ||
        (lowerMsg.includes('who') && lowerMsg.includes('subject'))) {
        
        let subjectQuery = lowerMsg;
        
        // Extract subject from query
        if (subjectQuery.includes('who teaches')) {
            subjectQuery = subjectQuery.split('who teaches')[1] || subjectQuery;
        } else if (subjectQuery.includes('teacher for')) {
            subjectQuery = subjectQuery.split('teacher for')[1] || subjectQuery;
        } else if (subjectQuery.includes('faculty for')) {
            subjectQuery = subjectQuery.split('faculty for')[1] || subjectQuery;
        } else if (subjectQuery.includes('professor for')) {
            subjectQuery = subjectQuery.split('professor for')[1] || subjectQuery;
        }
        
        // Clean the query
        subjectQuery = subjectQuery.replace(/who|teaches|teacher|faculty|professor|for|the|subject|of|class/gi, '').trim();
        
        if (subjectQuery) {
            const recommendedFaculty = recommendFacultyForSubject(subjectQuery);
            
            if (recommendedFaculty.length > 0) {
                let message = `<strong>👨‍🏫 Faculty for "${subjectQuery}":</strong><br><br>`;
                
                recommendedFaculty.forEach((faculty, index) => {
                    message += `
<strong>${index + 1}. ${faculty.name} (${faculty.code})</strong><br>
• Department: ${faculty.department}<br>
• Position: ${faculty.position}<br>
• Subjects: ${faculty.subjects.join(', ')}<br>
• Qualification: ${faculty.qualification}<br>
• Experience: ${faculty.experience}<br>
${faculty.email ? `• Email: ${faculty.email}<br>` : ''}
                    `;
                });
                
                return {
                    title: "👨‍🏫 Faculty Information",
                    message: message,
                    quickActions: ['faculty codes', 'computer faculty', 'mechanical faculty', 'electrical faculty']
                };
            }
        }
    }
    
    // 3. WHO IS [NAME] or ABOUT [NAME]
    if (lowerMsg.includes('who is') || 
        lowerMsg.includes('about') || 
        lowerMsg.includes('info')) {
        
        let nameQuery = lowerMsg;
        
        if (nameQuery.includes('who is')) {
            nameQuery = nameQuery.split('who is')[1] || nameQuery;
        } else if (nameQuery.includes('about')) {
            nameQuery = nameQuery.split('about')[1] || nameQuery;
        } else if (nameQuery.includes('info')) {
            nameQuery = nameQuery.split('info')[1] || nameQuery;
        }
        
        nameQuery = nameQuery.replace(/mr|ms|dr|professor|teacher|faculty/gi, '').trim();
        
        if (nameQuery) {
            const foundFaculty = searchFacultyByName(nameQuery);
            
            if (foundFaculty.length > 0) {
                const faculty = foundFaculty[0];
                let message = `
<strong>👨‍🏫 ${faculty.name} (${faculty.code})</strong><br><br>
• Department: ${faculty.department}<br>
• Position: ${faculty.position}<br>
• Qualification: ${faculty.qualification}<br>
• Experience: ${faculty.experience}<br>
• Subjects: ${faculty.subjects.join(', ')}<br>
${faculty.email ? `• Email: <a href="mailto:${faculty.email}" style="color: #3498db;">${faculty.email}</a><br>` : ''}
                `;
                
                return {
                    title: "👨‍🏫 Faculty Details",
                    message: message,
                    quickActions: ['faculty codes', faculty.branch + ' faculty']
                };
            }
        }
    }
    
    // 4. FACULTY CODES
    if (lowerMsg.includes('faculty code') || 
        lowerMsg.includes('all code') || 
        lowerMsg.includes('code list')) {
        
        let message = `<strong>📋 Faculty Codes:</strong><br><br>`;
        
        const departments = {};
        for (const facultyName in facultyDatabase) {
            const faculty = facultyDatabase[facultyName];
            if (!departments[faculty.department]) {
                departments[faculty.department] = [];
            }
            departments[faculty.department].push(faculty);
        }
        
        for (const dept in departments) {
            message += `<strong>${dept}:</strong><br>`;
            departments[dept].forEach(faculty => {
                message += `• ${faculty.code} - ${faculty.name}<br>`;
            });
            message += `<br>`;
        }
        
        return {
            title: "📋 Faculty Codes",
            message: message,
            quickActions: ['computer faculty', 'mechanical faculty', 'electrical faculty', 'admin staff']
        };
    }
    
    // 5. BRANCH FACULTY
    if (lowerMsg.includes('cse faculty') || lowerMsg.includes('computer faculty')) {
        return getBranchFacultyResponse('cse');
    } else if (lowerMsg.includes('mechanical faculty') ||lowerMsg.includes('me faculty')|| lowerMsg.includes('mech faculty')) {
        return getBranchFacultyResponse('mechanical');
    } else if (lowerMsg.includes('electrical faculty') || lowerMsg.includes('ee faculty')) {
        return getBranchFacultyResponse('electrical');
    } else if (lowerMsg.includes('all faculty')) {
        return getAllFacultyResponse();
    }
    
    // 6. DIRECT CODE SEARCH (like "akg", "pk", "dk")
    const directCode = lowerMsg.replace(/[^a-z]/gi, '');
    if (directCode.length >= 2 && directCode.length <= 4) {
        for (const facultyName in facultyDatabase) {
            const faculty = facultyDatabase[facultyName];
            if (faculty.code.toLowerCase() === directCode) {
                let message = `
<strong>👨‍🏫 ${faculty.name} (${faculty.code})</strong><br><br>
• Department: ${faculty.department}<br>
• Position: ${faculty.position}<br>
• Subjects: ${faculty.subjects.join(', ')}<br>
• Qualification: ${faculty.qualification}<br>
• Experience: ${faculty.experience}<br>
${faculty.email ? `• Email: <a href="mailto:${faculty.email}" style="color: #3498db;">${faculty.email}</a><br>` : ''}
                `;
                
                return {
                    title: "👨‍🏫 Faculty Information",
                    message: message,
                    quickActions: ['faculty codes', faculty.branch + ' faculty']
                };
            }
        }
    }
    
    // 7. SEARCH FACULTY
    if (lowerMsg.includes('search') && 
        (lowerMsg.includes('faculty') || 
         lowerMsg.includes('teacher') || 
         lowerMsg.includes('professor'))) {
        
        const searchTerm = lowerMsg.replace(/search|faculty|teacher|professor|for/gi, '').trim();
        
        if (searchTerm) {
            const foundFaculty = searchFacultyByName(searchTerm);
            
            if (foundFaculty.length > 0) {
                let message = `<strong>🔍 Search Results for "${searchTerm}":</strong><br><br>`;
                
                foundFaculty.forEach((faculty, index) => {
                    message += `
<strong>${index + 1}. ${faculty.name} (${faculty.code})</strong><br>
• Department: ${faculty.department}<br>
• Position: ${faculty.position}<br>
• Subjects: ${faculty.subjects.join(', ')}<br>
                    `;
                });
                
                return {
                    title: "🔍 Faculty Search",
                    message: message,
                    quickActions: ['faculty codes', 'computer faculty', 'all faculty']
                };
            } else {
                return {
                    title: "🔍 No Results Found",
                    message: `No faculty found for "${searchTerm}".<br><br>
<strong>Try searching by:</strong><br>
• Name: "Prince", "Dinesh", "Shubham"<br>
• Code: "PK", "AKG", "DK", "SS"<br>
• Subject: "Java", "Physics", "Workshop"<br>
• Department: "Computer", "Mechanical", "Electrical"`,
                    quickActions: ['faculty codes', 'computer faculty', 'all faculty']
                };
            }
        }
    }
    
    return null; // No match found
}

// Helper functions
function getBranchFacultyResponse(branch) {
    const branchMap = {
        'cse': 'Computer Science & Engineering',
        'mechanical': 'Mechanical Engineering',
        'electrical': 'Electrical Engineering'
    };
    
    const deptName = branchMap[branch] || branch;
    let foundFaculty = [];
    
    for (const facultyName in facultyDatabase) {
        const faculty = facultyDatabase[facultyName];
        if (faculty.department.includes(deptName) || faculty.branch === branch) {
            foundFaculty.push(faculty);
        }
    }
    
    if (foundFaculty.length > 0) {
        let message = `<strong>👨‍🏫 ${deptName} Faculty:</strong><br><br>`;
        
        foundFaculty.forEach((faculty, index) => {
            message += `
<strong>${index + 1}. ${faculty.name} (${faculty.code})</strong><br>
• Position: ${faculty.position}<br>
• Subjects: ${faculty.subjects.join(', ')}<br>
• Qualification: ${faculty.qualification}<br>
• Experience: ${faculty.experience}<br>
            `;
        });
        
        return {
            title: `👨‍🏫 ${deptName} Faculty`,
            message: message,
            quickActions: [`${branch} timetable`, 'faculty codes', 'all faculty']
        };
    }
    
    return null;
}

function getAllFacultyResponse() {
    let message = `<strong>👨‍🏫 All Faculty Members:</strong><br><br>`;
    let count = 0;
    
    const departments = {};
    for (const facultyName in facultyDatabase) {
        const faculty = facultyDatabase[facultyName];
        if (!departments[faculty.department]) {
            departments[faculty.department] = [];
        }
        departments[faculty.department].push(faculty);
    }
    
    for (const dept in departments) {
        message += `<strong>${dept}:</strong><br>`;
        departments[dept].forEach(faculty => {
            count++;
            message += `${count}. ${faculty.name} (${faculty.code}) - ${faculty.position}<br>`;
        });
        message += `<br>`;
    }
    
    return {
        title: "👨‍🏫 All Faculty",
        message: message,
        quickActions: ['faculty codes', 'computer faculty', 'mechanical faculty', 'electrical faculty']
    };
}

// Export the main function
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getFacultyRecommendationResponse };
}