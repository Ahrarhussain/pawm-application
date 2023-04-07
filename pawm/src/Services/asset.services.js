import { db } from '../firebase.config';

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';

const assetCollectionRef = collection(db, "assets");
class AssetDataService {
    
    addAsset = (newAsset) => {
        return addDoc(assetCollectionRef, newAsset);
    };

    updateAsset = (id, updatedAsset) => {
        const assetDoc = doc(db, "aseets", id);
        return updateDoc(assetDoc, updatedAsset);
    };

    deleteAsset = (id) => {
        const assetDoc = doc(db, "assets", id);
        return deleteDoc(assetDoc);
    };

    getAllAssets = () => {
        return getDocs(assetCollectionRef);
    }

    getAsset = (id) => {
        const assetDoc = doc(db, "assets", id);
        return getDoc(assetDoc);
    }
}
