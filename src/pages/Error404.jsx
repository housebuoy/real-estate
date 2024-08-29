import { Link } from 'react-router-dom';
import error from '../assets/404-error.png'

const Error404 = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-nav-secondary">
            <img src={error} className="h-28"/>
            <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
            <p className="text-xl text-gray-600 mb-8">We can&apos;t seem to find the page you&apos;re looking for.</p>
            <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg">
                Go Back Home
            </Link>
        </div>
    );
};

export default Error404;
