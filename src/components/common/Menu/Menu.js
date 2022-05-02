import React from "react";
import {Link} from "react-router-dom";
import PATH from '../../routes/constants'
import './style.scss';

const Menu = (props) => {
    const {categories} = props;

    return (
        <nav className='header_menu'>
            <ul className='header_root_menu'>
                <li className='logo'><Link to={PATH.INDEX_PAGE} className='fw-bold'>Ecommerce</Link></li>
                <li className='catalog_menu'>
                    <div>
                        <a>Shop</a>
                        <SubMenu categories={categories}/>
                    </div>
                </li>
                <li><Link to={PATH.ABOUT_PAGE}>About</Link></li>
            </ul>
        </nav>
    );

    function SubMenu(props) {
        const {categories} = props;

        return (
            <div className='complex-menu'>
                {renderByParent(categories, 0)}
            </div>
        );
    }

    function renderByParent(categories, parentId = 0, level = 0) {
        level++;
        const liItems = categories.reduce((result, category, index) => {
            const childCategories = categories.filter(({parent_id}) => parent_id === parentId);
            const withoutParents = categories.filter(({parent_id}) => parent_id !== parentId);
            const childItems = (childCategories.length > 0)
                ? renderByParent(withoutParents, category.id, level)
                : [];

            if (parentId === category.parent_id) {
                result.push(
                    <li key={index}>
                        <Link to={PATH.CATALOG_DETAIL.replace(':id', `category?id=${category.id}`)}>{category.name}</Link>
                        {childItems}
                    </li>
                );
            }

            return result;
        }, []);

        if (!liItems.length) {
            return null;
        }

        return (
            <ul key={parentId} className={`column_menu level-${level}`}>
                {liItems}
            </ul>
        )
    }
};

export default Menu;
