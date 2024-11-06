// components/MyComponent.js
import { useEffect, useState } from 'react'; 
const MyComponent = () => {
    const [data, setData] = useState([]); 
    useEffect(() => {
        fetch('/api/data') // استفاده 
        از API داخلی
            .then(response => response.json()) 
            .then(data => setData(data));
    }, []);
    return ( <div> <h2>Accounting Data</h2> <ul> 
                {data.map(item => (
                    <li 
                    key={item.id}>{JSON.stringify(item)}</li> 
                    // نمایش 
                    داده‌ها ))} </ul> 
        </div>
    );
};
export default MyComponent;
