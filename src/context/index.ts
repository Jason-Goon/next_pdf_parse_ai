import { useEffect, useState } from 'react';

export const useUser = () => {
    const [user, setUser] = useState(null);

    // Function to fetch user data
    const fetchUser = async () => {
        try {
            const response = await fetch('/api/user');
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    // Call the fetchUser function when the component mounts
    useEffect(() => {
        fetchUser();
    }, []);

    return user;
};
