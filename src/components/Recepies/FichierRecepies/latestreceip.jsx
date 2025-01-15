import React, { useState } from 'react';
import data1 from './normalRecipies';

function Latest() {
    const [visibleCount, setVisibleCount] = useState(12);
    const latestData1 = data1.slice(0, visibleCount);

    const loadMore = () => {
        setVisibleCount( visibleCount + 20); 
    };

    return (
        
        <div style={{
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center', 
            margin:'100px'
        }}>
            <h1 style={{ fontFamily: 'serif' }}>Latest Recipes</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',  
                justifyItems: 'center', 
            }}>
                {latestData1.map((item, index) => (
                    <div key={index} style={{ margin:'20px', animation: 'fadeIn 0.5s ease-in-out' }}>
                        <img 
                            src={item.picture} 
                            alt={item.recipeTitle} 
                            style={{ width: '200px', height: '200px', borderRadius: '10px' }} 
                        />
                        <h2 style={{ fontFamily: 'initial' }}>{item.recipeTitle}</h2>
                    </div>
                ))}
            </div>
            {visibleCount < data1.length && (
                <button 
                    onClick={loadMore} 
                    style={{ display: 'block', margin: '20px auto', padding: '10px 20px', fontSize: '16px',width:"200px", backgroundColor:"white" }}
                >
                    Load More
                </button>
            )}
        </div>
    );
}

export default Latest;
