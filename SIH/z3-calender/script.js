// Further expanded plant data with 18 plants per season
const plantData = {
    spring: [
        { name: "Aloe Vera", sow: "March", harvest: "June", cultivate: "April" },
        { name: "Peppermint", sow: "April", harvest: "July", cultivate: "May" },
        { name: "Dandelion", sow: "March", harvest: "May", cultivate: "April" },
        { name: "Echinacea", sow: "April", harvest: "August", cultivate: "May" },
        { name: "Lavender", sow: "March", harvest: "July", cultivate: "April" },
        { name: "Chamomile", sow: "April", harvest: "July", cultivate: "May" },
        { name: "Lemon Balm", sow: "March", harvest: "July", cultivate: "April" },
        { name: "Sage", sow: "April", harvest: "July", cultivate: "May" },
        { name: "Yarrow", sow: "April", harvest: "August", cultivate: "May" },
        { name: "Chives", sow: "March", harvest: "June", cultivate: "April" },
        { name: "Thyme", sow: "April", harvest: "August", cultivate: "May" },
        { name: "Oregano", sow: "April", harvest: "July", cultivate: "May" },
        { name: "Fennel", sow: "April", harvest: "August", cultivate: "May" },
        { name: "Coriander", sow: "March", harvest: "July", cultivate: "April" },
        { name: "Basil", sow: "April", harvest: "July", cultivate: "May" },
        { name: "Catnip", sow: "April", harvest: "July", cultivate: "May" },
        { name: "Horseradish", sow: "March", harvest: "June", cultivate: "April" },
        { name: "Marjoram", sow: "April", harvest: "August", cultivate: "May" }
    ],
    summer: [
        { name: "Basil", sow: "June", harvest: "September", cultivate: "July" },
        { name: "Lemongrass", sow: "July", harvest: "October", cultivate: "August" },
        { name: "Calendula", sow: "June", harvest: "September", cultivate: "July" },
        { name: "Holy Basil (Tulsi)", sow: "June", harvest: "October", cultivate: "July" },
        { name: "Oregano", sow: "July", harvest: "October", cultivate: "August" },
        { name: "Marjoram", sow: "June", harvest: "September", cultivate: "July" },
        { name: "Mint", sow: "July", harvest: "October", cultivate: "August" },
        { name: "Catnip", sow: "June", harvest: "September", cultivate: "July" },
        { name: "Rosemary", sow: "July", harvest: "October", cultivate: "August" },
        { name: "Bay Laurel", sow: "July", harvest: "October", cultivate: "August" },
        { name: "Tarragon", sow: "June", harvest: "September", cultivate: "July" },
        { name: "Dill", sow: "June", harvest: "September", cultivate: "July" },
        { name: "Parsley", sow: "June", harvest: "October", cultivate: "July" },
        { name: "Borage", sow: "June", harvest: "September", cultivate: "July" },
        { name: "Chervil", sow: "June", harvest: "September", cultivate: "July" },
        { name: "Anise", sow: "July", harvest: "October", cultivate: "August" },
        { name: "Cilantro", sow: "June", harvest: "September", cultivate: "July" },
        { name: "Epazote", sow: "July", harvest: "October", cultivate: "August" }
    ],
    autumn: [
        { name: "Thyme", sow: "September", harvest: "November", cultivate: "October" },
        { name: "Fennel", sow: "August", harvest: "November", cultivate: "September" },
        { name: "Sage", sow: "September", harvest: "December", cultivate: "October" },
        { name: "Rosemary", sow: "October", harvest: "December", cultivate: "November" },
        { name: "Parsley", sow: "August", harvest: "November", cultivate: "September" },
        { name: "Cilantro (Coriander)", sow: "September", harvest: "November", cultivate: "October" },
        { name: "Horseradish", sow: "August", harvest: "November", cultivate: "September" },
        { name: "Dill", sow: "September", harvest: "November", cultivate: "October" },
        { name: "Chervil", sow: "August", harvest: "November", cultivate: "September" },
        { name: "Caraway", sow: "September", harvest: "November", cultivate: "October" },
        { name: "Marjoram", sow: "August", harvest: "November", cultivate: "September" },
        { name: "Lovage", sow: "September", harvest: "November", cultivate: "October" },
        { name: "Mugwort", sow: "September", harvest: "November", cultivate: "October" },
        { name: "Yarrow", sow: "August", harvest: "November", cultivate: "September" },
        { name: "Artemisia", sow: "September", harvest: "November", cultivate: "October" },
        { name: "Sorrel", sow: "September", harvest: "November", cultivate: "October" },
        { name: "Angelica", sow: "August", harvest: "November", cultivate: "September" }
    ],
    winter: [
        { name: "Garlic", sow: "November", harvest: "February", cultivate: "December" },
        { name: "Chamomile", sow: "December", harvest: "March", cultivate: "January" },
        { name: "Ginger", sow: "November", harvest: "February", cultivate: "December" },
        { name: "Turmeric", sow: "November", harvest: "February", cultivate: "January" },
        { name: "Wintergreen", sow: "December", harvest: "March", cultivate: "January" },
        { name: "Saffron", sow: "November", harvest: "February", cultivate: "December" },
        { name: "Onion", sow: "December", harvest: "March", cultivate: "January" },
        { name: "Chives", sow: "November", harvest: "March", cultivate: "December" },
        { name: "Valerian", sow: "December", harvest: "March", cultivate: "January" },
        { name: "Angelica", sow: "November", harvest: "February", cultivate: "December" },
        { name: "Elderberry", sow: "December", harvest: "March", cultivate: "January" },
        { name: "Hawthorn", sow: "December", harvest: "March", cultivate: "January" },
        { name: "Dandelion", sow: "November", harvest: "March", cultivate: "December" },
        { name: "Lemon Balm", sow: "December", harvest: "March", cultivate: "January" },
        { name: "Winter Savory", sow: "November", harvest: "February", cultivate: "December" },
        { name: "Raspberry Leaf", sow: "November", harvest: "February", cultivate: "December" },
        { name: "Juniper", sow: "December", harvest: "March", cultivate: "January" }
    ]
};

// Function to update the calendar based on the selected season
function updateCalendar() {
    const season = document.getElementById("season-select").value;
    const calendarContainer = document.getElementById("plant-calendar");
    calendarContainer.innerHTML = ""; // Clear previous content

    // Populate the calendar with plant data
    plantData[season].forEach(plant => {
        const plantCard = document.createElement("div");
        plantCard.className = "plant-card";
        plantCard.innerHTML = `
        <h3>${plant.name}</h3>
            <p><strong>Sow:</strong> ${plant.sow}</p>
            <p><strong>Cultivate:</strong> ${plant.cultivate}</p>
            <p><strong>Harvest:</strong> ${plant.harvest}</p>
        `;
        calendarContainer.appendChild(plantCard);
    });
}

// Initial calendar update on page load
window.onload = updateCalendar;