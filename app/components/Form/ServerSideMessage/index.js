import PropTypes from 'prop-types';
import { StyledServerSideMessage, ServerSideMessageIcon } from './ServerSideMessage.styles';

const ServerSideMessage = ({ children, errorType, ...props }) => {
  return (
    <StyledServerSideMessage errorType={errorType} {...props}>
      <ServerSideMessageIcon type={errorType ? 'x-mark' : 'check-mark'} />
      {children}
    </StyledServerSideMessage>
  );
};

ServerSideMessage.propTypes = {
  errorType: PropTypes.bool,
};

export default ServerSideMessage;
