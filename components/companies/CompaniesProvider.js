import React, { useState } from 'react';
import CompaniesContext from './CompaniesContext';
import gold from '../../data/sponsors/gold';
import silver from '../../data/sponsors/silver';
import partners from '../../data/sponsors/partners';

export default function CompaniesProvider(props) {
  const [companiesList] = useState([
    ...gold,
    ...silver,
    ...partners,
    //...standard,
  ]);
  const [
    selectedCompanyDescription,
    setSelectedCompanyDescription,
  ] = useState('');

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
