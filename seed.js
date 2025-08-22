const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Deal = require("./models/Deal");
const Client = require("./models/Client");

dotenv.config();

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dealsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    const clients = [
      { name: "Chandan Kalita", initials: "CK" },
      { name: "Michael Speed", initials: "MS" },
      { name: "Sarah Johnson", initials: "SJ" },
      { name: "Robert Chen", initials: "RC" },
      { name: "Emma Wilson", initials: "EW" },
    ];

    const deals = [
      {
        clientName: "Chandan Kalita",
        clientInitials: "CK",
        dealName: "Chandan Deal",
        budget: 5000,
        status: "Negotiating",
        assignee: "MS Michael Speed",
        assigneeInitials: "MS",
        createdDate: "2024-08-20",
        priority: "High",
      },
      {
        clientName: "Michael Speed",
        clientInitials: "MS",
        dealName: "Some Deal 4",
        budget: 7000,
        status: "Negotiating",
        assignee: "MS Michael Speed",
        assigneeInitials: "MS",
        createdDate: "2024-08-19",
        priority: "Medium",
      },
      {
        clientName: "Sarah Johnson",
        clientInitials: "SJ",
        dealName: "Enterprise Solution",
        budget: 15000,
        status: "Kickedback",
        assignee: "JD John Doe",
        assigneeInitials: "JD",
        createdDate: "2024-08-18",
        priority: "High",
      },
      {
        clientName: "Robert Chen",
        clientInitials: "RC",
        dealName: "Digital Transformation",
        budget: 25000,
        status: "Active",
        assignee: "AM Alice Miller",
        assigneeInitials: "AM",
        createdDate: "2024-08-17",
        priority: "High",
      },
      {
        clientName: "Emma Wilson",
        clientInitials: "EW",
        dealName: "Marketing Campaign",
        budget: 8500,
        status: "Closed Won",
        assignee: "MS Michael Speed",
        assigneeInitials: "MS",
        createdDate: "2024-08-16",
        priority: "Low",
      },
    ];

    await Deal.deleteMany();
    await Client.deleteMany();

    await Client.insertMany(clients);
    await Deal.insertMany(deals);

    console.log("Dummy data inserted successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
