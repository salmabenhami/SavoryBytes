import React, { useState, useEffect } from 'react';
import data1 from './normalRecipies';

function TopRecipes() {
    const sortedRecipes = [...data1].sort((a, b) => b.rating - a.rating);
    const topRecipes = sortedRecipes.slice(0, 5);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const nextRecipe = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === topRecipes.length - 1) {
                setIsTransitioning(false);
                return 0;
            }
            setIsTransitioning(true);
            return prevIndex + 1;
            });
            };

            const prevRecipe = () => {
                setCurrentIndex((prevIndex) => {
                    if (prevIndex === 0) {
                        setIsTransitioning(false);
                        return topRecipes.length - 1;
                    }
                    setIsTransitioning(true);
                    return prevIndex - 1;
                });
            };

            useEffect(() => {
                const interval = setInterval(nextRecipe, 3000);
                return () => clearInterval(interval);
            }, []);

            useEffect(() => {
                if (!isTransitioning) {
                    const timeout = setTimeout(() => setIsTransitioning(true), 50);
                    return () => clearTimeout(timeout);
                }
            }, [isTransitioning]);

    return (
        <div style={{ width: '80%', margin: 'auto', position: 'relative' }}>
            
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative' 
            }}>
                <div style={{
                    display: 'flex',
                    transition: isTransitioning ? 'transform 1s ease-in' : 'none', 
                    transform: `translateX(-${currentIndex * 100}%)`
                }}>
                    {topRecipes.map((item, index) => (
                <div 
                    key={index} 
                    style={{ 
                        flex: '0 0 100%', 
                        textAlign: 'center', 
                        position: 'relative',
                    }}
                >
                <br /><br />
                <img 
                    src={item.picture} 
                    alt={item.recipeTitle} 
                    style={{
                        width: '100%',
                        height: '700px',
                        borderRadius: '10px',
                        objectFit: 'cover', 
                    }}
                />
                <div>
                    <h3 style={{ fontSize: '3rem', position: 'absolute', 
                        top: '60%',          
                        left: '25%',         
                        transform: 'translate(-50%, -50%)', 
                        color: '#fff', 
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', 
                        textAlign: 'center', }}>{item.recipeTitle}</h3>
                </div>
                </div>
                ))}

                                </div>

                                <button 
                                    onClick={prevRecipe} 
                                    style={{
                                        position: 'absolute', 
                                        left: '10px', 
                                        top: '50%', 
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        color: 'white', 
                                        padding: '10px', 
                                        border: 'none',
                                        borderRadius: '50%',
                                        cursor: 'pointer'
                                    }}>
                                    &#8592;
                                </button>
                                <button 
                                    onClick={nextRecipe} 
                                    style={{
                                        position: 'absolute', 
                                        right: '10px', 
                                        top: '50%', 
                                        transform: 'translateY(-50%)',
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        color: 'white', 
                                        padding: '10px', 
                                        border: 'none',
                                        borderRadius: '50%',
                                        cursor: 'pointer'
                                    }}>
                                    &#8594;
                                </button>
                            </div>
                </div>
            );
}

export default TopRecipes;