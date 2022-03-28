import PropTypes from 'prop-types';
import { StyledServerSideMessage, ServerSideMessageIcon } from './ServerSideMessage.styles';

const ServerSideMessage = ({ children, hasError, ...props }) => {
  return (
    <StyledServerSideMessage hasError={hasError} {...props}>
      <ServerSideMessageIcon hasError={hasError} />
      {children}
    </StyledServerSideMessage>
  );
};

ServerSideMessage.propTypes = {
  errorType: PropTypes.bool,
};

export default ServerSideMessage;
