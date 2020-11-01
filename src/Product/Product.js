import React from 'react';
import { Link, Route,Redirect } from 'react-router-dom';
import Product from '../Product/Products';
import productDatas from '../Product/ProductData';




const Products = ({ match }) => {

    const productsData = [
        {
            id: 1,
            name: 'NIKE Liteforce Blue Sneakers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
            status: 'Available'

        },

    ]

    



    var linkList = productDatas.map((product) =>
        (
            <li>
                <Link to={`${match.url}/${product.id}`}> {product.name} </Link>
              
            </li>
        )

    )

    return (
        <div>
            <div>
                <div>
                    <h3> Products</h3>
                    <ul> {linkList} </ul>
                </div>
            </div>
        
            <Route path={`${match.url}/:productId`}
                render={(props) => <Product data={productDatas} {...props} />} />

            <Route exact path={match.url}

                render={() => (
                    <div>Please select a product.</div>
                )}
            />

        </div>
    )

}
export default Products;