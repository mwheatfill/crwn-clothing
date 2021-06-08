import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  ImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <ImageContainer className="background-image" imageUrl={imageUrl} />
    <ContentContainer className="content">
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <SubtitleContainer>SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
