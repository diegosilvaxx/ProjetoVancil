import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Tab = props => {
  const { className, label, isActive, onClick } = props;

  const cssTabClass = cx('tabs__tab', className);

  const activeLinkClass = cx('tabs__tab-link', {
    ['tabs__tab-link--active']: isActive,
  });

  return (
    <li className={cssTabClass}>
      <a className={activeLinkClass} onClick={onClick}>
        {label}
      </a>
    </li>
  );
};

Tab.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Tab;
