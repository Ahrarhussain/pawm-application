import React from 'react';
import { useState } from 'react';
import {db} from '../firebase.config';
import {collection, addDoc} from 'firebase/firestore';

function AssetCard() {
    return(
        <h1>THESE are the asset card components to be rendered</h1>
    );
}

export default AssetCard;