const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.calculateAverageRating = functions.https.onRequest(async (_, res) => {
    try {
        const db = admin.database();
        const snapshot = await db.ref('/').once('value');

        let totalRating = 0;
        let userCount = 0;

        if (!snapshot.exists()) {
            return res.status(404).json({ error: 'No users found' });
        }

        const users = snapshot.val();
        for (const userId in users) {
            if (users[userId] && users[userId].rating !== undefined) {
                totalRating += users[userId].rating;
                userCount += 1;
            }
        }

        if (userCount === 0) {
            return res.status(404).json({ error: 'No ratings found' });
        }

        const averageRating = totalRating / userCount;

        return res.status(200).json({ averageRating });

    } catch (error) {
        console.error('Error calculating average rating:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

exports.getTopRecipes = functions.https.onRequest(async (req, res) => {
    try {
        const { cuisine, dietary, mealType } = req.query;

        if (!cuisine || !dietary || !mealType) {
            return res.status(400).json({ error: 'Please provide cuisine, dietary, and mealType' });
        }

        const db = admin.database();
        const recipesRef = db.ref('recipes');

        const snapshot = await recipesRef.once('value');
        const recipes = snapshot.val();

        const matchedRecipes = [];

        for (const recipeId in recipes) {
            const recipe = recipes[recipeId];
            if (recipe.cuisine === cuisine && recipe.diet_type === dietary && recipe.meal === mealType) {
                matchedRecipes.push({ id: recipeId, ...recipe });
            }
        }

        if (matchedRecipes.length === 0) {
            return res.status(404).json({ error: 'No matching recipes found' });
        }

        const top3Recipes = matchedRecipes.slice(0, 3);

        return res.status(200).json({ recipes: top3Recipes });

    } catch (error) {
        console.error('Error getting recipes:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
