import React from 'react';
import data1 from '../FichierRecepies/normalVf';
import data2 from '../FichierRecepies/LactoseFreevf';
import data3 from '../FichierRecepies/DietFriendly';
import maincourse from '../images/categimage/maincourse.jpg';
import app from '../images/categimage/app.jpg';
import dessert from '../images/categimage/dessert.jpg';
import soup from '../images/categimage/soupe.jpg';
import salad from '../images/categimage/salade.jpg';
import snack from '../images/categimage/snack.jpg';
import carrot from '../images/categimage/R.jpg';

function Popularcat() {
    const allData = [...data1, ...data2, ...data3];

    const uniqueCategories = [...new Set(allData.map(elt => elt.category))];

    const categoryImages = {
        'Main Course': maincourse,
        'Appetizer': app,
        'Dessert': dessert,
        'Salad': salad,
        'Soup': soup,
        'Side Dish': carrot,
        'Snack': snack
    };

    return (
        <div style={{
            margin:"80px"
}}>            <h1 style={{fontFamily:'serif',margin:'10px'}} >Popular Categories</h1>
            <div style={{ display: 'flex',marginTop:"20px", justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {uniqueCategories.map((category, index) => (
                    <div key={index} style={{ textAlign: 'center', margin: '30px' }}>
                        <img 
                            src={categoryImages[category]} 
                            alt={category} 
                            style={{ width: '120px', height: '120px', borderRadius: '50%' }} 
                        />
                        <h2 style={{fontFamily:'initial'}}>{category}</h2>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Popularcat;
