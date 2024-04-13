import { useEffect, useState } from "react";

const useMenu = () => {
    const [category, setcategory] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setcategory(data);
                setloading(false);
            })
    }, [])
    return [category, loading];
}

export default useMenu;