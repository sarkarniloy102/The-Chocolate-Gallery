
const Pagination = ({ totalCards, cardPerPage, setcurrentPage, currentPage }) => {

    let pages = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
        pages.push(i);
    }
    console.log(totalCards, cardPerPage, pages.length);
    return (
        <div className="flex justify-center items-center gap-4 my-5" >

            {
                pages.map((page, idx) => {


                    return <div key={idx}
                        onClick={() => {
                            setcurrentPage(page);
                        }}
                    >
                        <button
                            className={`btn bg-white text-blue-800 hover:bg-slate-300
                        ${page == currentPage ? 'focus:bg-orange-400' : ''}`}>{page}</button>
                    </div>
                })
            }
        </div>
    );
};

export default Pagination;