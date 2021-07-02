import React, { useState } from 'react';
import CompaniesContext from './CompaniesContext';
import platinum from '../../data/sponsors/platinum';
import gold from '../../data/sponsors/gold';
import silver from '../../data/sponsors/silver';

export default function CompaniesProvider(props) {
  const [companiesList] = useState([...platinum, ...gold, ...silver]);
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
