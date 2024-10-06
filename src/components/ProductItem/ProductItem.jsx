import PropTypes from 'prop-types';
import { Button } from "../Button/Button";
import styles from "./ProductItem.module.scss";



export const ProductItem = ({ product, className, onAdd }) => {
    
     const onAddHandler = () => {
        onAdd(product);
    }

   return (
        <div className={styles.product + className}>
            <div className={styles.img}/>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.price}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={styles.addBtn} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    className: PropTypes.string,
    onAddHandler: PropTypes.func
};