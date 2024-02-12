import React from 'react';
import Navigation from "../../Compponents/navigation.jsx"
import Hero from "../../Compponents/hero.jsx"

export default function Home() {
    return (
        <div className="page-container">
            <header>
                <Navigation />
            </header>
            <main>
                <Hero />
                <h2>Home Page</h2>
            </main>
        </div>
    );
}
