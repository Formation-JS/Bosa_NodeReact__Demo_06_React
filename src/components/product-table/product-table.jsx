import style from './product-table.module.css';
import clsx from 'clsx';

// Import d'un fichier json -> Donnée constante / Mockup d'une API
import productData from './product-data.json';

const ProductTableHeader = () => (
    <thead>
        <tr>
            <td>Nom</td>
            <td>Description</td>
            <td>Prix</td>
        </tr>
    </thead>
);

const ProductTableRow = ({name, description, price, onSale}) => (
    <tr className={clsx(onSale && style.onSale)}>
        <td>{name}</td>
        <td>{description ?? 'Aucune description.'}</td>
        <td>{price} {onSale && 'En solde !!!'}</td>
    </tr>
);


function ProductTable() {

    /*
    const productsJSX = productData.map(
        product => <ProductTableRow 
                        name={product.name}
                        description={product.description}
                        onSale={product.onSale}
                        price={product.price}
                        key={product.id}
                        />
    );
    */

    const productsJSX = productData.map(
        product => <ProductTableRow {...product} key={product.id} />
    );

    return (
        <table>
            <ProductTableHeader />
            <tbody>
                {productsJSX}
            </tbody>
        </table>
    );
};

export default ProductTable;
