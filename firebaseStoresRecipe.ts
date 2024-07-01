import { FIRESTORE_DB } from './FirebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const saveFavoriteRecipe = async (recipeId, recipeData) => {
  try {
    const user = getAuth().currentUser;
    if (user) {
      const userRef = doc(FIRESTORE_DB, 'users', user.uid);
      const favoriteRef = doc(collection(userRef, 'favorites'), recipeId);
      await setDoc(favoriteRef, recipeData);
      console.log('Recipe saved as favorite!');
    } else {
      console.log('No user is logged in');
    }
  } catch (error) {
    console.error('Error saving favorite recipe: ', error);
  }
};
