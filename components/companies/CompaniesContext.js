import { createContext } from 'react';

const CompaniesContext = createContext({
  companiesList: [],
  selectedCompanyDescription: '',
  setSelectedCompanyDescription: () => {},
});

export default CompaniesContext;
