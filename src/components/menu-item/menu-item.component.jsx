import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, TitleContainer, SubtitleContainer} from './menu-item.styles';
//import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<MenuItemContainer  imageUrl={imageUrl} size={size} className={`${size} menu-item`} onClick= {() => history.push(`${match.url}${linkUrl}`)}>
		<BackgroundImageContainer className='background-image' 
			 style={{
				backgroundImage: `url(${imageUrl})`
			 }}
		/>
		<ContentContainer className='content'>
			<TitleContainer className='title'>{title.toUpperCase()}</TitleContainer>
			<SubtitleContainer className='subtitle'>SHOP NOW</SubtitleContainer>
		</ContentContainer>
	</MenuItemContainer>



	// <div  className={`${size} menu-item`} onClick= {() => history.push(`${match.url}${linkUrl}`)}>
	// 	<div className='background-image' 
	// 		 style={{
	// 			backgroundImage: `url(${imageUrl})`
	// 		 }}
	// 	/>
	// 	<div className='content'>
	// 		<h1 className='title'>{title.toUpperCase()}</h1>
	// 		<span className='subtitle'>SHOP NOW</span>
	// 	</div>
	// </div>
);

export default withRouter(MenuItem);