import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [category, setcategory] = useState([]);
    // const [loading, setloading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/allcategory/')
    //         .then(res => res.json())
    //         .then(data => {
    //             setcategory(data);
    //             setloading(false);
    //         })
    // }, [])


    const { data: category = [], refetch, isError, error } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const res = await axiosPublic.get('/allcategory');
            return res.data;
        }
    })
    if (isError) {
        console.error("Error fetching categories:", error.message);
    }
    return [category, refetch];
}

export default useMenu;