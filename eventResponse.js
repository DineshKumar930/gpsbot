function getEventResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    // EVENT COUNT
    if (msg.includes("how many") && msg.includes("event")) {
        const stats = getEventStats();
        return {
            title: "📊 Campus Event Summary",
            message: `
<strong>Total Events:</strong> ${stats.total}<br>
<strong>✅ Completed Events:</strong> ${stats.completed}<br>
<strong>⏳ Upcoming Events:</strong> ${stats.upcoming}
            `,
            quickActions: ["recent events", "upcoming events"]
        };
    }

    // RECENT EVENTS
    if (msg.includes("recent") && msg.includes("event")) {
        const events = getRecentCompletedEvents();
        let message = "<strong>🕒 Recent Campus Events:</strong><br><br>";

        events.forEach((e, i) => {
            message += `
<strong>${i + 1}. ${e.title}</strong><br>
• Date: ${e.date}<br>
• Type: ${e.type}<br>
<hr>
            `;
        });

        return {
            title: "🕒 Recent Events",
            message,
            quickActions: ["upcoming events", "all events"]
        };
    }

    // UPCOMING EVENTS
    if (msg.includes("upcoming")) {
        const events = getUpcomingEvents();
        let message = "";

        events.forEach((e, i) => {
            message += `
<strong>${i + 1}. ${e.title}</strong><br>
• Date: ${e.date}<br>
• Venue: ${e.venue}<br>
<hr>
            `;
        });

        return {
            title: "📅 Upcoming Events",
            message,
            quickActions: ["recent events", "event summary"]
        };
    }

// GENERAL EVENT QUERY (fallback)
if (
    msg === "event" ||
    msg === "events" ||
    msg.includes("about event") ||
    msg.includes("about events") ||
    msg.includes("college event") ||
    msg.includes("campus event")
) {
    const stats = getEventStats();

    return {
        title: "📅 Campus Events",
        message: `
Our campus regularly organizes academic, cultural, national, and social events.<br><br>

<strong>📊 Current Status:</strong><br>
• Total Events: ${stats.total}<br>
• ✅ Completed Events: ${stats.completed}<br>
• ⏳ Upcoming Events: ${stats.upcoming}<br><br>

You can ask me for:
• Recent events<br>
• Upcoming events<br>
• Event summary<br>
• Specific event details
        `,
        quickActions: [
            "recent events",
            "upcoming events",
            "how many events",
            "all events"
        ]
    };
}



    return null;
}

// Export
if (typeof module !== "undefined" && module.exports) {
    module.exports = { getEventResponse };
}
