import { useEffect, useState } from 'react';
import { getUserData } from '../services/api.js';

export const useFetchActivity = (userId) => {
    const [activity, setActivity] = useState(null);

    useEffect(() => { 
        const fetchActivity = async () => {
            try{
                const response = await getUserData("USER_ACTIVITY", userId);
                const transformedActivity = response.data.sessions.map(session => ({
                    ...session,
                    day: new Date(session.day).getDate()
                }));
                setActivity(transformedActivity);
            } catch (error) {
                console.error("Failed to fetch user activity", error);
            }
        };
        fetchActivity();
    }, [userId]);

    return activity;
};