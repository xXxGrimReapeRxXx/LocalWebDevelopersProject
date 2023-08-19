const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT environment variable or default to 3000

// Serve static files (HTML, CSS, JS) from the "public" directory
app.use(express.static('public')); // where will the server use the static ( HTML; CSS; JS)

// Define routes for different HTML pages

app.get('/form_bg', (req, res) => {
    res.sendFile(__dirname + '/public/form_bg.html'); // Change the file path as needed
});
app.get('/form_en', (req, res) => {
    res.sendFile(__dirname + '/public/form_en.html'); // Change the file path as needed
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/main_bg.html'); // Change the file path as needed
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/main_en.html'); // Change the file path as needed
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





/*
const express = require("express")
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname + "public")))// we specify from where it will server static content we use the path module so it can find the folder otherwise we must start
// the server only on the working directory and not other path because we will need to change the path to the public/static content
app.listen(3000, () => {
    console.log("App listening on port 3000");
})
*/