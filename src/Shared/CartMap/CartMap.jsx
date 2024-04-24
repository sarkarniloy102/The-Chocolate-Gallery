import { useState } from "react";
import SingleCart from "../../Home/Card/SingleCart";
import Pagination from "../Pagination/Pagination";


const CartMap = ({ category }) => {
    const [currentPage, setcurrentPage] = useState(1);
    // const [cardPerPage, setcardPerPage] = useState(3);
    const cardPerPage = 3;

    const lastcardIndex = currentPage * cardPerPage;
    const firstcardIndex = lastcardIndex - cardPerPage;
    const currentCards = category.slice(firstcardIndex, lastcardIndex);



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    currentCards.map(item =>
                        <SingleCart
                            key={item._id}
                            item={item}
                        >
                        </SingleCart>

                    )
                }
                
            </div>
            <Pagination 
            totalCards={category.length} 
            cardPerPage={cardPerPage}
            setcurrentPage={setcurrentPage} 
            currentPage={currentPage}></Pagination>
            
        </div>
    );
};

export default CartMap;