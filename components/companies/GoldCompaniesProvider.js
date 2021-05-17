import React, { useState } from 'react';
import CompaniesContext from './CompaniesContext';
import gold from '../../data/sponsors/gold';

export default function GoldCompaniesProvider(props) {
  const [companiesList] = useState([...gold]);
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
