import React, { useEffect, useState } from 'react';
import Card from './Card';
import styles from './Home.module.css'
function Home() {
    const ApiUrl = 'https://xcountries-backend.azurewebsites.net/all';
    const [info, setInfo] = useState([]);
    const getData = async () => {
        try {
            const response = await fetch(ApiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setInfo(data);
        } catch (error) {
            console.error('Error fetching data:', error);
           
        }
        
    }

    useEffect(()=>{
        getData();
    },[]);

  return (

    <div className={styles.cardGrid}>
    {info==null ? (
        <div> No data found KINDLY try later</div>
    ) : (
                info.map((item, index) => {
                    console.log(item);
                    return(
                    
                    <div key={index} className={styles.cardContainer}>
                        <Card data={item} />
                    </div>
                )})
    )}
      
    </div>
  )
}

export default Home
