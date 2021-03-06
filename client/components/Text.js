// @flow

import PropTypes from 'prop-types';
import styled from 'styled-components';

const fontSizes = ['12px'];

const Text = styled.span`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: ${props => fontSizes[props.size - 1 || 0]};
  font-style: ${props => (props.italic ? 'oblique' : 'normal')};
  display: ${props => (props.block ? 'block' : 'inline-block')};
  color: ${props => (props.light ? '#999' : '#333')};
  ${props => (props.contentTitle ? 'margin-bottom: 0.25rem;' : '')};
`;

Text.defaultProps = {
  size: 1,
};

Text.propTypes = {
  size: PropTypes.number,
  bold: PropTypes.bool,
  block: PropTypes.bool,
  contentTitle: PropTypes.bool,
  italic: PropTypes.bool,
  light: PropTypes.bool,
  children: PropTypes.node,
};

export default Text;
