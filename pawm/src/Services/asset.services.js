import { db } from '../firebase.config';

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';

const assetCollectionRef = collection(db, "pawm");
class AssetDataService {
    
    addAssets = (newAsset) => {
        return addDoc(assetCollectionRef, newAsset);
    };

    updateAsset = (id, updatedAsset) => {
        const assetDoc = doc(db, "pawm", id);
        return updateDoc(assetDoc, updatedAsset);
    };

    deleteAsset = (id) => {
        const assetDoc = doc(db, "pawm", id);
        return deleteDoc(assetDoc);
    };

    getAllAssets = () => {
        return getDocs(assetCollectionRef);
    }

    getBook = (id) => {
        const assetDoc = doc(db, "pawm", id);
        return getDocs(assetDoc);
    }
}