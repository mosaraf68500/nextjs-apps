import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-center items-center gap-20'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>About</li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;