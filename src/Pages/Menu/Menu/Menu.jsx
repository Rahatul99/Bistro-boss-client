import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const deserts = menu.filter(item => item.category === 'desert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu" />
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="today's offer"/>
            {/* offered menu items */}
            <MenuCategory items={offered}/>
            {/* dessert menu items */}
            <MenuCategory img={desertImg} items={deserts} title="desert"/>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}/>
            <MenuCategory items={salad} title="salad" img={saladImg}/>
            <MenuCategory items={soup} title="soup" img={soupImg}/>
            
        </div>
    );
};

export default Menu;