import React, { useState } from 'react';
import CompaniesContext from './CompaniesContext';
import silver from '../../data/sponsors/silver';

export default function SilverCompaniesProvider(props) {
  const [companiesList] = useState([...silver]);
  const [selectedCompanyDescription, setSelectedCompanyDescription] =
    useState('');

  const values = React.useMemo(
    () => ({
      companiesList,
      selectedCompanyDescription,
      setSelectedCompanyDescription,
    }),
    [
      companiesList,
      selectedCompanyDescription,
      setSelectedCompanyDescription,
    ],
  );

  return (
    <CompaniesContext.Provider value={values}>
      {props.children}
    </CompaniesContext.Provider>
  );
}
