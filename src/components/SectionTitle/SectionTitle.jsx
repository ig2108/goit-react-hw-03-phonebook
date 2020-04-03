import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title, children }) => (
  <section className={styles.sectionTitle}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
