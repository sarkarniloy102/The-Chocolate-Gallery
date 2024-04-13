

const MenuItems = ({ item }) => {

    const { image, name, price, details } = item;
    return (
        <div className="flex space-x-4 text-black">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-----------</h3>
                <p>{details}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItems;