import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className="mb-12">
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem item={item} key={item._id} />)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-center">View full Menu</button>
        </section>
    );
};

export default PopularMenu;