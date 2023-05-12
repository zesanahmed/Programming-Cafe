import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="lg:flex bg-sky-600 w-full px-8 py-4">
            <div className="flex-1">
                <a className="font-bold text-3xl">Programming Cafe</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><a>Menu</a></li>
                    <li><a>Login</a></li>
                    <li><a>About Us</a></li>
                    <img className="w-10 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1683700033~exp=1683700633~hmac=5772e1d18e6f830c7772175aa6e55b62ebcbb4684b33a1d169bc87771b110c27" />
                </ul>
            </div>
        </div>
    );
};

export default Header;