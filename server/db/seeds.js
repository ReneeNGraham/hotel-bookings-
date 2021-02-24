use guests;
db.dropDatabase();

db.bookings.insertMany([

    {
        name: "Gregor",
        email: "gregor@yahoo.com",
        checkedIn: "true"

    },
    {
        name: "Renee",
        email: "renee@yahoo.com",
        checkedIn: "false"

    },
    {
        name: "Susan",
        email: "susan@gmail.com",
        checkedIn: "true"
    }
]);


