// create your App component here
import React, {useState, useEffect} from "react";

const App = () => {

    const [dogs, setDogs] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
                .then((data) => {
                    setDogs(data.message)
                    setStatus(true)
                });
    }, [])
    if (!status) return <p>Loading...</p>

    
        return (
        <>
         <img src = {dogs} alt="A Random Dog"  />
        </>
        )
};

export default App;