import { Production, StyledList, StyledItem } from './ProductionCompanies.styles';

export const ProductionCompanies = ({ productionCompanies }) => {
  const companies = productionCompanies.map((company) => {
    return <StyledItem key={company.id}>{company.name}</StyledItem>;
  });

  return (
    <Production>
      <h2>Production:</h2>
      <StyledList>{companies}</StyledList>
    </Production>
  );
};
