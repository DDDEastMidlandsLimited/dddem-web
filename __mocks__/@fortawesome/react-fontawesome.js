import React from 'react';

export const FontAwesomeIcon = React.forwardRef(({props}, ref) => (
  <i ref={ref} className={`fa fa-test-icon`} />
));
