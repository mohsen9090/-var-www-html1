// components/MyComponent.js
import { useEffect, useState } from 'react'; 
const MyComponent = () => {
    const [data, setData] = useState(null); 
    useEffect(() => {
        fetch('http://code2024.net/api/data') // 
        آدرس API
            .then(response => response.json()) 
            .then(data => setData(data));
    }, []);
    return ( <div> {data ? ( 
                <pre>{JSON.stringify(data, null, 
                2)}</pre>
            ) : ( <p>Loading...</p> )} </div> );
};
export default MyComponent;
