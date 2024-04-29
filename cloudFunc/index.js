const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();

// Cloud function to calculate the average rating
exports.calculateAverageRating = functions.https.onRequest(async (_, res) => {
    try {
        // Get a reference to the database
        const db = admin.database();

        // Fetch all users from the root node
        const snapshot = await db.ref('/').once('value');

        let totalRating = 0;
        let userCount = 0;

        // Check if there are any users
        if (!snapshot.exists()) {
            return res.status(404).json({ error: 'No users found' });
        }

        // Iterate through each user and calculate the average rating
        const users = snapshot.val();
        for (const userId in users) {
            if (users[userId] && users[userId].rating !== undefined) {
                totalRating += users[userId].rating; // Assuming rating is a number
                userCount += 1;
            }
        }

        // If no users with a rating field were found
        if (userCount === 0) {
            return res.status(404).json({ error: 'No ratings found' });
        }

        // Calculate the average rating
        const averageRating = totalRating / userCount;

        // Return the average rating
        return res.status(200).json({ averageRating });

    } catch (error) {
        console.error('Error calculating average rating:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});



