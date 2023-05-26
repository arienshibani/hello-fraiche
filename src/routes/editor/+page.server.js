import { serializeNonPOJOs } from "$lib/util/serializeNonPOJOs";
import getDatabase from "$db/mongo";
// @ts-ignore

export const load = async function({params}) {
    try {
        const db = await getDatabase();
        const mealPlansData = await db.collection('mealplans').find({}, {projection: {mealPlanId: 1, name: 1}}).toArray()

        // Make data available to +page.svelte
        return {
            mealPlans: serializeNonPOJOs(mealPlansData)
        };
        
      } catch (error) {
        console.error('Error accessing the database:', error);
      }
}
