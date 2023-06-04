// @ts-ignore
import getDatabase from "$db/mongo";

const serializeNonPOJOs = (value) => {
    return structuredClone(value)
};

export const load = async function() {
    try {
      const db = await getDatabase();
      // Use the `db` object to perform database operations
      // For example:
      const data = await db.collection('recipes').find({}).toArray();
      return { recipes: serializeNonPOJOs(data) }
    } catch (error) {
      console.error('Error accessing the database:', error);
    }
}
  
