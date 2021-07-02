import React, { useState } from 'react';
import CompaniesContext from './CompaniesContext';
import partners from '../../data/sponsors/partners';

export default function PartnerCompaniesProvider(props) {
  const [companiesList] = useState([...partners]);
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
