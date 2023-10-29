import React, { useEffect, useState } from 'react';

const Github = () => {
    const [data, setData] = useState({ followers: 0, avatar_url: '' });

    useEffect(() => {
        fetch('https://api.github.com/users/suhaib33.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Github Image" width={300} />
        </div>
    );
};

export default Github;
