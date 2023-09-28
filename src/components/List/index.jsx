import PropTypes from 'prop-types';
import styles from "./List.module.css"
const List = ({image, text}) => {
  return (
    <div className={`${styles?.list} mb-2`}>
        <img className={styles.listIcon} src={image} alt="check"/>
        <p className='text'>
            {text}
        </p>
    </div>
  )
}

export default List

List.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};