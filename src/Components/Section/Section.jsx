import styles from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return(
        <section className={styles.section}>
            <h2>{title}</h2>
            {children}
        </section>
    )
};

Section.popTypes ={
    title: PropTypes.string
}