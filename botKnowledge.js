const botKnowledge = {
    welcome: {
        title: "🤖 Welcome to GPS-Bot Assistant!",
        message: "Hello! I'm your AI assistant for Government Polytechnic Sahajnwa. I can help you with admissions, courses, fees, campus life, timetable, and more. How can I assist you today?",
        quickActions: ['admission', 'courses', 'timetable', 'contact']
    },

    timetable: {
        title: "📅 Branch Time Tables",
        message: "Select your branch to view timetable:<br>• <strong>Computer Science & Engineering (CSE)</strong><br> • <strong>Mechanical Engineering (ME)</strong><br>• <strong>Electrical Engineering (EE)</strong>",
        quickActions: ['cse timetable', 'mechanical timetable', 'electrical timetable']
    },

    facultyCodes: {
        title: "👨‍🏫 Faculty Name Codes",
        message: `📝 <strong>Faculty Code Reference:</strong><br>
• Dr. Ruman Alam <strong>(RA)</strong><br>
• Ankit Kumar Gupta <strong>(AKG)</strong><br>
• Abhishek Singh <strong>(AS)</strong><br>
• Abhimanyu Yadav <strong>(AY)</strong><br>
• Shubham Sharma <strong>(SS)</strong><br>
• Prashant Kumar Pandey <strong>(PP)</strong><br>
• Virendra Singh <strong>(VS)</strong><br>
• Dinesh Kumar <strong>(DK)</strong><br>
• Shashiprabha Ramji Sharma <strong>(SPR)</strong><br>
• Ankita Yadav <strong>(AAY)</strong><br>
• Prince Kumar <strong>(PK)</strong><br>
• Narendra Singh <strong>(NS)</strong><br>
• Pradumn Kumar Pandey <strong>(PKP)</strong><br>
• Sandeep Kumar <strong>(SK)</strong>`,
        quickActions: ['cse timetable', 'mechanical timetable', 'electrical timetable']
    },

    subjectCodes: {
        title: "📚 Subject Abbreviations",
        message: `📖 <strong>Subject Code Reference:</strong><br>
• Applied Physics (AP)<br>
• Introduction to IT Systems (IT)<br>
• Fundamentals of Electrical & Electronics Engineering (FEEE)<br>
• Student Centered Activities (SCA)<br>
• Engineering Mechanics (EM)<br>
• Environmental Sciences (ES)<br>
• Mathematics-II (MATH-II)`,
        quickActions: ['faculty codes', 'timetable']
    },

    admission: {
        title: "🎓 Admission Process 2026-26",
        message: `Admissions are through <strong>JEECUP 2026</strong> entrance exam.

📅 <strong>Important Dates:</strong>
• Application Start: Jan 2026
• Last Date: April 2026
• Exam Date: May 2026
• Counseling: June 2026

📋 <strong>Eligibility:</strong>
• 10th Pass with 45% marks
• Science & Mathematics compulsory
• Age Limit: 14-40 years

🎯 <strong>Process:</strong>
1. Apply for JEECUP
2. Take entrance exam
3. Online counseling
4. Document verification
5. Seat allotment
6. Fee payment`,
        quickActions: ['courses', 'fees', 'contact']
    },


    admissionPrivate: {
        title: "🎓 Admission Process For Private Seat 2026-27",
        message: `For Private Seat admissions entrance is mandatory <strong>JEECUP 2026</strong> entrance exam.

📅 <strong>Important Dates:</strong>
• Application Start: Jan 2026
• Last Date: April 2026
• Exam Date: May 2026
• Counseling: June 2026

📋 <strong>Eligibility:</strong>
• 10th Pass with 45% marks
• Science & Mathematics compulsory
• Age Limit: 14-40 years

🎯 <strong>Process:</strong>
1. Apply for JEECUP
2. Take entrance exam
3. Online counseling
4. Document verification
5. Seat allotment
6. Fee payment`,
        quickActions: ['courses', 'fees', 'contact']
    },




    courses: {
        title: "📚 Diploma Programs (3 Years)",
        message: `We offer <strong>3 AICTE-approved diploma programs</strong>:

🎯 <strong>Computer Science & Engineering</strong>
• Duration: 3 Years (6 Semesters)
• Seats: 75
• Scope: Software Developer, Web Designer

⚙️ <strong>Mechanical Engineering</strong>
• Seats: 75
• Scope: Mechanical Designer, Production

🔌 <strong>Electrical Engineering</strong>
• Seats: 75
• Scope: Electrical Designer, Power Plants`,
        quickActions: ['admission', 'fees', 'placements']
    },

    fees: {
        title: "💰 Fee Structure & Scholarships",
        message: `📊 <strong>Annual Fees:</strong>

🎫 <strong>Tuition Fee:</strong>
• General/OBC: ₹10,500
• SC/ST: ₹10,500
• PH/EWS: ₹10,500

🎓 <strong>Scholarships:</strong>
• UP Government Scholarship
• Post-Matric Scholarship
• Merit-based Scholarships`,
        quickActions: ['admission', 'scholarships', 'payment']
    },

    location: {
        title: "📍 Campus Location",
        message: `🏛️ <strong>Government Polytechnic Sahajnwa</strong>
📌 Hardi, Hasanpur, Sahajnwa, Gorakhpur, Uttar Pradesh - 273209

🗺️ <strong>How to Reach:</strong>
• 40 km from Gorakhpur Railway Station
• 45 km from Gorakhpur Airport
• 3 km from Magahar, Kapil Chaura

🏫 <strong>Facilities:</strong>
• 2-acre green campus
• Digital Classrooms
• Advanced Labs
• Library & Sports`,
        quickActions: ['contact', 'hostel', 'facilities']
    },

aboutGPSFull: {
        title: "🏫 About Government Polytechnic Sahajnwa",
        message: `<strong>Government Polytechnic Sahajnwa</strong> is a premier technical institution located in Sahajnwa, Gorakhpur, Uttar Pradesh. The institute offers three-year diploma programs in Computer Science & Engineering (CSE), Mechanical Engineering (ME), and Electrical Engineering (EE).

<br>•The college is affiliated with the Uttar Pradesh Board of Technical Education (UPBTE) and is approved by the All India Council for Technical Education (AICTE), ensuring compliance with national academic standards.

<br>•The institution focuses on practical training and industry-oriented education, supported by well-equipped laboratories and modern infrastructure. The campus provides a safe and well-planned learning environment with facilities such as parking space, campus-wide Wi-Fi connectivity, CCTV surveillance, and separate hostel facilities for boys and girls.

<br>•The institute is supported by experienced and dedicated faculty members who emphasize hands-on learning and professional skill development<br>• Government Polytechnic Sahajnwa is led by <strong>Dr. Ravi Kant Ranjan</strong>, Principal, who holds B.Tech, M.Tech, and Ph.D. degrees in Mechanical Engineering and is committed to academic excellence and the overall development of students.`,
        quickActions: ['location', 'courses', 'admission']
    },

    aboutGPSShort: {
        title: "🏫 About Government Polytechnic Sahajnwa",
        message: `<strong>Government Polytechnic Sahajnwa</strong> is a government technical institute <br>•Located in Sahajnwa, Gorakhpur, Uttar Pradesh <br>•It offers three-year diploma programs in CSE, ME, and EE and is affiliated with UPBTE and approved by AICTE<br>• The campus provides modern facilities, hostel accommodation, and practical-oriented education under the guidance of experienced faculty.`,
     quickActions: ['location', 'courses', 'admission']
    },



    contact: {
        title: "📞 Contact Information",
        message: `📱 <strong>Helpline:</strong>
• Admission: +91-9876543210
• Principal: +91-9876543211
• Support: +91-9876543212

📧 <strong>Email:</strong>
• admission@gpsahajnwa.ac.in
• principal@gpsahajnwa.ac.in

🌐 <strong>Website:</strong>
• www.gpsahajnwa.ac.in

🏢 <strong>Office Hours:</strong>
• Mon-Fri: 9:00 AM - 5:00 PM`,
        quickActions: ['location', 'admission', 'website']
    },

    hostel: {
        title: "🏠 Hostel Facilities",
        message: `🛏️ <strong>Features:</strong>
• Separate hostels for boys & girls
• 24/7 Security & CCTV
• Wi-Fi Enabled
• Study Rooms

🍽️ <strong>Mess:</strong>
• Hygienic vegetarian food
• Three-time meals

💰 <strong>Fees (Approx):</strong>
• Room: ₹7,200/year
• Mess: ₹48,000/year`,
        quickActions: ['fees', 'facilities', 'contact']
    },

    placements: {
        title: "💼 Placement & Training",
        message: `🎯 <strong>Statistics (2023):</strong>
• Placement Rate: 85%
• Highest Package: ₹6 LPA
• Average Package: ₹3 LPA

🏢 <strong>Top Recruiters:</strong>
• TCS, Wipro, L&T
• Infosys, Tech Mahindra
• Indian Railways

🛠️ <strong>Training:</strong>
• Soft Skills
• Technical Workshops
• Internships
• Mock Interviews`,
        quickActions: ['courses', 'admission', 'training']
    },

    // ============ FACULTY OBJECTS ============

    computer: {
        title: "👨‍🏫 CSE Faculty",
        message: `<strong>1. Mr. Prince Kumar (PK)</strong><br>• Position: Head of Department<br>• Subjects: Java, DBMS, Web Technology, Computer Networking, Introduction to IT Systems<br>• Qualification: B.Tech (CSE), MBA (IT & Operation)<br>• Experience: 2+ Years<br><br>
<strong>2. Ms. Ankita Yadav (AAY)</strong><br>• Position: Assistant Professor<br>• Subjects: HTML, DBMS, Web Technology, Computer Networking, IT Lab<br>• Qualification: MCA<br>• Experience: 3+ Years<br><br>
<strong>3. Mr. Dinesh Kumar (DK)</strong><br>• Position: Lab Instructor<br>• Subjects: IT Lab, Computer Lab, Workshop<br>• Qualification: B.Tech (CSE)<br>• Experience: 3+ Years`,
        quickActions: ['faculty codes', 'subject codes', 'courses']
    },

    mechanical: {
        title: "👨‍🏫 Mechanical Faculty",
        message: `<strong>1. Mr. Abhimanyu Yadav (AY)</strong><br>• Position: Head of Department<br>• Subjects: Engineering Mechanics, Workshop, Engineering Graphics, SOM, TOM<br>• Qualification: B.Tech (Mechanical)<br>• Experience: 8+ Years<br><br>
<strong>2. Mr. Narendra Singh (NS)</strong><br>• Position: Assistant Professor<br>• Subjects: Engineering Mechanics, Engineering Graphics, Workshop<br>• Qualification: B.Tech (Mechanical)<br>• Experience: 3+ Years<br><br>
<strong>3. Mr. Shubham Sharma (SS)</strong><br>• Position: Lab Instructor<br>• Subjects: Workshop, Engineering Mechanics Lab, FEEE Lab<br>• Qualification: Diploma (Mechanical)<br>• Experience: 4+ Years`,
        quickActions: ['faculty codes', 'subject codes', 'mechanical timetable']
    },

    electrical: {
        
        message: `<strong>1. Mr. Virendra Singh (VS)</strong><br>• Position: Head of Department<br>• Subjects: FEEE, Power System, Electrical Machines, FEEE Lab<br>• Qualification: B.Tech (Electrical)<br>• Experience: 7+ Years<br><br>
<strong>2. Mr. Abhishek Singh (AS)</strong><br>• Position: Assistant Professor<br>• Subjects: FEEE, Power System, Electrical Machines, FEEE Lab<br>• Qualification: B.Tech (Electrical)<br>• Experience: 1+ Year<br><br>
<strong>3. Mr. Prashant Kumar Pandey (PP)</strong><br>• Position: Lab Instructor<br>• Subjects: FEEE Lab<br>• Qualification: Diploma (Electrical)<br>• Experience: 2+ Years`,
        quickActions: ['faculty codes', 'subject codes', 'electrical timetable']
    },

    principal: {
    title: "👨‍🏫 Principal",
    message: `<strong>Dr. Ravi Kant Ranjan</strong><br>
• Position: Principal<br>
• Qualification: PhD, M.Tech, B.Tech<br>
• Experience: 7+ Years<br><br>
💬 Welcome to Government Polytechnic Sahajnwa! Dr. Ravi Kant Ranjan is dedicated to providing a supportive and innovative learning environment. 
If you have any academic or administrative queries, feel free to reach out to the principal's office. Your suggestions and feedback are always valued.<br><br>
📌 Note: For appointments or official matters, please contact the office via phone or email. 
Students and visitors are encouraged to follow the college timings and guidelines for visits.`,
    quickActions: ['contact', 'location', 'facilities', 'upcoming events']
},

    faculty: {
        title: "👨‍🏫 Faculty Information",
        message: "Our college has dedicated faculty across all branches:<br><br>• <strong>CSE Department:</strong> 3 faculty members<br>• <strong>Mechanical Department:</strong> 3 faculty members<br>• <strong>Electrical Department:</strong> 3 faculty members<br>• <strong>Applied Sciences:</strong> 2 faculty members<br>• <strong>Mathematics:</strong> 1 faculty member<br>• <strong>Student Activities:</strong> 1 faculty member<br>• <strong>Principal:</strong> 1<br><br><strong>Total:</strong> 14 faculty members",
        quickActions: ['computer', 'mechanical', 'electrical', 'principal']
    },

    dinesh: {
        title: "👨‍🏫 Mr. Dinesh Kumar",
        message: "• Department: Computer Science & Engineering<br>• Position: Lab Instructor<br>• Subjects: IT Lab, Computer Lab, Workshop<br>• Qualification: B.Tech (CSE)<br>• Experience: 3+ Years<br>• Email: dinesh.kumar@gpsahajnwa.ac.in",
        quickActions: ['computer', 'faculty codes', 'subject codes']
    },

    prince: {
        title: "👨‍🏫 Mr. Prince Kumar",
        message: "• Department: Computer Science & Engineering<br>• Position: Head of Department<br>• Subjects: Java, DBMS, Web Technology, Computer Networking, Introduction to IT Systems<br>• Qualification: B.Tech (CSE), MBA (IT & Operation)<br>• Experience: 2+ Years<br>• Email: prince.kumar@gpsahajnwa.ac.in",
        quickActions: ['computer', 'faculty codes', 'subject codes']
    },

    abhimanyu: {
        title: "👨‍🏫 Mr. Abhimanyu Yadav",
        message: "• Department: Mechanical Engineering<br>• Position: Head of Department<br>• Subjects: Engineering Mechanics, Workshop, Engineering Graphics, SOM, TOM<br>• Qualification: B.Tech (Mechanical)<br>• Experience: 8+ Years<br>• Email: abhimanyu.yadav@gpsahajnwa.ac.in",
        quickActions: ['mechanical', 'faculty codes', 'mechanical timetable']
    },

    virendra: {
        title: "👨‍🏫 Mr. Virendra Singh",
        message: "• Department: Electrical Engineering<br>• Position: Head of Department<br>• Subjects: FEEE, Power System, Electrical Machines, FEEE Lab<br>• Qualification: B.Tech (Electrical)<br>• Experience: 7+ Years<br>• Email: virendra.singh@gpsahajnwa.ac.in",
        quickActions: ['electrical', 'faculty codes', 'electrical timetable']
    },
    
    pradumn: {
            title: "👨‍🏫 Mr. Pradumn Kumar Pandey",
            message: "• Department: Library & Information Science<br>• Position: Librarian <br>• Subjects: Library Management, Information Retrieval<br>• Qualification: M.L.I.S,B.L.I.S (Library Science)<br>• Experience: 8+ Years<br>• Email: pradumn.library@gpsahajnwa.ac.in",
            quickActions: ['library', 'faculty codes', 'library timetable']
        },

        aditya: {
            title: "👨‍🏫 Mr. Aditya Nath Sharma",
            message: "• Department: Office Department <br>• Position: Accountant <br>• Qualification: M.Com, B.Com <br>• Experience: 2+ Years<br>• Email: pradumn.library@gpsahajnwa.ac.in",
            quickActions: ['admin', 'office staff', 'admission', 'accountant']
        },

        abhishek: {
            title: "👨‍🏫 Mr. Abhishek Singh",
            message: "• Department: Electrical Engineering <br>• Subjects: FEEE, Power System, Electrical Machines <br>• Position: Lecturer <br>• Qualification: B.Tech (Electronics and Communication Engineering) <br>• Experience: 0+ Years<br>• Email: abhisheksingh@gpsahajnwa.ac.in",
            quickActions: ['electrical', 'faculty codes', 'electrical timetable']
        },


    // ============ SUBJECT-SPECIFIC RESPONSES ============

    mathematics: {
        title: "📚 Mathematics Faculty",
        message: "<strong>Mr. Sandeep Kumar (S)</strong><br>• Department: Mathematics<br>• Position: Assistant Professor<br>• Subjects: Mathematics-II<br>• Qualification: M.Sc (Mathematics)<br>• Experience: 6+ Years<br>• Email: sandeep.math@gpsahajnwa.ac.in",
        quickActions: ['subject codes', 'faculty codes', 'courses']
    },



    physics: {
        title: "📚 Physics Faculty",
        message: "<strong>Mr. Ankit Kumar Gupta (AKG)</strong><br>• Department: Applied Sciences<br>• Position: Assistant Professor<br>• Subjects: Applied Physics, Applied Physics Lab<br>• Qualification: M.Sc (Physics)<br>• Experience: 5+ Years<br>• Email: ankit.gupta@gpsahajnwa.ac.in",
        quickActions: ['subject codes', 'faculty codes', 'courses']
    },

    environment: {
        title: "📚 Environmental Sciences Faculty",
        message: "<strong>Dr. Ruman Alam (RA)</strong><br>• Position: Dean,HOD (ES)<br>• Department: Applied Sciences<br>• Subjects: Environmental Sciences<br>• Qualification: PhD (Environmental Science)<br>• Experience: 10+ Years<br>• Email: ruman.alam@gpsahajnwa.ac.in",
        quickActions: ['principal', 'subject codes', 'faculty codes']
    },

    // ============ ADDITIONAL INFO ============

    facilities: {
        title: "🏫 Campus Facilities",
        message: `🎓 <strong>Academic Facilities:</strong>
• Digital Classrooms
• Computer Labs
• Mechanical Workshop
• Electrical Labs
• Library with 5000+ Books
• Seminar Hall

🎯 <strong>Infrastructure:</strong>
• 4-acre Green Campus
• Sports Ground
• Parking Area
• Row Water Supply
• Wi-Fi Campus

💡 <strong>Special Features:</strong>
• Smart Classes
• Industry Visits
• Guest Lectures
• Skill Development Programs`,
        quickActions: ['location', 'hostel', 'contact']
    },

    scholarships: {
        title: "🏆 Scholarships & Financial Aid",
        message: `💰 <strong>Available Scholarships:</strong>

🎯 <strong>Government Scholarships:</strong>
• UP Post-Matric Scholarship
• UP State Scholarship
• National Scholarship Portal

🎓 <strong>Merit-Based:</strong>
• Top 10 Rankers Fee Concession
• Sports Scholarship
• Cultural Scholarship

👨‍🎓 <strong>Special Categories:</strong>
• SC/ST Scholarship
• OBC Scholarship
• Minority Scholarship
• EWS Scholarship

📋 <strong>Application Process:</strong>
1. Submit scholarship form
2. Document verification
3. Bank account linking
4. Direct Benefit Transfer`,
        quickActions: ['fees', 'admission', 'contact']
    },

    website: {
        title: "🌐 College Website",
        message: "🌐 <strong>Official Website:</strong> www.gpsahajnwa.ac.in<br><br>📱 <strong>Social Media:</strong><br>• Facebook: facebook.com/gpsahajnwa<br>• Twitter: twitter.com/gpsahajnwa<br>• Instagram: instagram.com/gpsahajnwa<br><br>📧 <strong>For Updates:</strong> Subscribe to college newsletter on website.",
        quickActions: ['contact', 'location', 'admission']
    },

    training: {
        title: "🛠️ Training & Internships",
        message: `🎯 <strong>Training Programs:</strong>

💼 <strong>Industry Training:</strong>
• 6-month Industrial Training
• Summer Internships
• Workshop Training

🛠️ <strong>Skill Development:</strong>
• Soft Skills Training
• Communication Skills
• Interview Preparation
• Resume Building

🏭 <strong>Industry Partners:</strong>
• Local Industries
• IT Companies
• Manufacturing Units
• Power Plants`,
        quickActions: ['placements', 'courses', 'contact']
    }
    




    
};



