import React from 'react';
import { useState } from 'react';
import {db} from '../Services/firebase.config';
import {collection, addDoc} from 'firebase/firestore';

function AssetCard() {
    const [AssetTitle, setAssetTitle] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if ( AssetTitle !== "" ) {
            await addDoc(collection(db, "pawm"), {
                AssetTitle,
                completed: false,
            });
            setAssetTitle("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input  type="text"
                        placeholder='Put the title of your asset here'
                        value={AssetTitle}
                        onChange={(e) => setAssetTitle(e.target.value)}            
                />
            </div>
        </form>
    );
}

export default AssetCard;