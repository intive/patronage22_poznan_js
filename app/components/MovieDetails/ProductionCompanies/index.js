import { Production, StyledList, StyledItem } from './ProductionCompanies.styles';

export const ProductionCompanies = ({ productionCompanies }) => {
  const companies = productionCompanies.map((companie) => {
    return <StyledItem key={companie.id}>{companie.name}</StyledItem>;
  });

  return (
    <Production>
      <h2>Production:</h2>
      <StyledList>{companies}</StyledList>
    </Production>
  );
};
