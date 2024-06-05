import {useState, useEffect} from 'react'

const useContactProfile = () => {
    const [dev, setDev] = useState({name: "", url: "", location: ""})

    const fetchData = async () => {
        const data = await fetch(`https://catfact.ninja/fact`)
        const json = await data.json()
        return json
    }

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData()
            setDev(data)
        }
        getData();
    }, [])
    console.log(dev)
    return dev;
}
export default useContactProfile