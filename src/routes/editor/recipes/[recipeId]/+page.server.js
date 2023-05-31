import { serializeNonPOJOs } from "$lib/util/serializeNonPOJOs";
import getDatabase from "$db/mongo";
// @ts-ignore

export const load = async function({params}) {
    try {
        const URLparameter = params.recipeId
        const db = await getDatabase();
        const ingredientsData = await db.collection('ingredients').find({}).toArray()

        const recipeData = await db.collection('recipes').findOne({ "recipeId": URLparameter});

        // Query meal plans DB
        const query = { "mealPlanId": recipeData.mealPlanId }
        const projection = { "projection": { recipes: 1} } // Exclude everything but the recipes
        const mealPlanData = await db.collection('mealplans').findOne(query, projection)

        return {
            recipe: serializeNonPOJOs(recipeData),
            mealPlan: serializeNonPOJOs(mealPlanData),
           ingredients: serializeNonPOJOs(ingredientsData)
        };

        // Make data available to +page.svelte
        return {
        
        };
        
      } catch (error) {
        console.error('Error accessing the database:', error);
      }
}
