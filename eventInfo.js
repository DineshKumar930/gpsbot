// ================= EVENT DATABASE =================
const eventDatabase = {

    // ===== COMPLETED EVENTS =====
    "orientation-2025": {
        id: "orientation-2025",
        title: "Orientation Program",
        type: "Academic",
        date: "01 August 2025",
        time: "10:00 AM",
        venue: "College Auditorium",
        description: "Orientation program for newly admitted students.",
        organizer: "College Administration",
        contact: "",
        highlights: ["Welcome Session", "Faculty Interaction"],
        registrationLink: "#",
        image: "",
        status: "completed"
    },

    "independence-day-2025": {
        id: "independence-day-2025",
        title: "Independence Day Celebration",
        type: "National Event",
        date: "15 August 2025",
        time: "08:00 AM",
        venue: "College Ground",
        description: "Flag hoisting and cultural program.",
        organizer: "College Administration",
        contact: "",
        highlights: ["Flag Hoisting", "Cultural Program"],
        registrationLink: "#",
        image: "",
        status: "completed"
    },

    "vishwakarma-pooja-2025": {
        id: "vishwakarma-pooja-2025",
        title: "Vishwakarma Pooja",
        type: "Cultural",
        date: "17 September 2025",
        time: "09:00 AM",
        venue: "Workshop Area",
        description: "Vishwakarma pooja celebration.",
        organizer: "College",
        contact: "",
        highlights: ["Pooja Ceremony"],
        registrationLink: "#",
        image: "",
        status: "completed"
    },

    "seminar-ai-ibm": {
        id: "seminar-ai-ibm",
        title: "Seminar on Generative AI by IBM",
        type: "Seminar",
        date: "17 January 2026",
        time: "11:00 AM",
        venue: "Seminar Hall",
        description: "Expert talk on Generative AI.",
        organizer: "IBM & College",
        contact: "",
        highlights: ["AI Trends", "Industry Exposure"],
        registrationLink: "#",
        image: "",
        status: "completed"
    },

    "saraswati-pooja-2026": {
        id: "saraswati-pooja-2026",
        title: "Saraswati Pooja Celebration",
        type: "Cultural",
        date: "23 January 2026",
        time: "09:00 AM",
        venue: "College Campus",
        description: "Saraswati pooja celebration.",
        organizer: "College",
        contact: "",
        highlights: ["Pooja", "Cultural Program"],
        registrationLink: "#",
        image: "",
        status: "completed"
    },

    "republic-day-2026": {
        id: "republic-day-2026",
        title: "Republic Day Celebration",
        type: "National Event",
        date: "26 January 2026",
        time: "08:00 AM",
        venue: "College Ground",
        description: "Republic Day celebration with flag hoisting.",
        organizer: "College Administration",
        contact: "",
        highlights: ["Flag Hoisting", "Speech", "Cultural Program"],
        registrationLink: "#",
        image: "",
        status: "completed"
    },

    // ===== UPCOMING EVENTS =====
    "health-checkup-2026": {
        id: "health-checkup-2026",
        title: "Health Checkup Camp",
        type: "Health",
        date: "31 January 2026",
        time: "09:00 AM - 02:00 PM",
        venue: "College Campus",
        description: "Free health checkup camp.",
        organizer: "Health Department",
        contact: "",
        highlights: ["Free Checkup", "Doctor Consultation"],
        registrationLink: "#",
        image: "",
        status: "upcoming"
    },

    "ambedkar-jayanti-2026": {
        id: "ambedkar-jayanti-2026",
        title: "Ambedkar Jayanti",
        type: "National Event",
        date: "14 April 2026",
        time: "10:00 AM",
        venue: "College Campus",
        description: "Birth anniversary celebration of Dr. B. R. Ambedkar.",
        organizer: "College",
        contact: "",
        highlights: ["Speech", "Floral Tribute"],
        registrationLink: "#",
        image: "",
        status: "upcoming"
    },

    "ptm-2026": {
        id: "ptm-2026",
        title: "Parent Teacher Meeting",
        type: "Academic",
        date: "February 2026 (3rd Week)",
        time: "11:00 AM",
        venue: "Departments",
        description: "Parent teacher interaction meeting.",
        organizer: "College",
        contact: "",
        highlights: ["Academic Review"],
        registrationLink: "#",
        image: "",
        status: "upcoming"
    },

    "industrial-visit-2026": {
        id: "industrial-visit-2026",
        title: "Industrial Visit",
        type: "Academic",
        date: "February 2026 (Last Week)",
        time: "Morning",
        venue: "Industry Location",
        description: "Industrial exposure visit for students.",
        organizer: "Departments",
        contact: "",
        highlights: ["Industry Exposure"],
        registrationLink: "#",
        image: "",
        status: "upcoming"
    }
};

// ================= EVENT FUNCTIONS =================
function getAllEvents() {
    return Object.values(eventDatabase);
}

function getUpcomingEvents() {
    return getAllEvents().filter(e => e.status === "upcoming");
}

function getCompletedEvents() {
    return getAllEvents().filter(e => e.status === "completed");
}

function getRecentCompletedEvents(limit = 5) {
    return getCompletedEvents().slice(-limit).reverse();
}

function getEventStats() {
    return {
        total: getAllEvents().length,
        completed: getCompletedEvents().length,
        upcoming: getUpcomingEvents().length
    };
}

function getEventById(id) {
    return eventDatabase[id];
}

// Export
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        getAllEvents,
        getUpcomingEvents,
        getCompletedEvents,
        getRecentCompletedEvents,
        getEventStats,
        getEventById
    };
}
