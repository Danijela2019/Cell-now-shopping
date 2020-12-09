/** @jsxImportSource @emotion/react */
import React from 'react'

import {FooterColumn, FooterContainer, Anchor, FooterRow,FooterLine} from './ComponentStyles'
import Icon from './Icon'
import {footerAnchors,followUsData } from '../data/anchor_data'
import {IFooterColumnData, IPropFooterColumnData, IFollowUsData, IPropFollowUsData} from '../types'

const FooterColumnList = ({data} :IPropFooterColumnData) => (
        <FooterColumn>
            <h3>{data.category}</h3>
            <Anchor href='#' target="_blank" rel="noopener">{data.links[0].text}</Anchor>
            <Anchor href='#' target="_blank" rel="noopener">{data.links[1].text}</Anchor>
            <Anchor href='#' target="_blank" rel="noopener">{data.links[2].text}</Anchor>
        </FooterColumn>
    )

const footerColumnData = footerAnchors.map((data:IFooterColumnData) => (
    <FooterColumnList data={data} key={data.id}></FooterColumnList>
    )
)

const FollowUs = ({data}:IPropFollowUsData) => (
    <Anchor href='#' target="_blank" rel="noopener">
        <div css={{ marginLeft: '.5rem' }}>{data.text}</div>
         <Icon size='20px' color='white'>
            {data.link}
        </Icon>
    </Anchor>
)

const followUsRow = followUsData.map((data:IFollowUsData) => (
        <FollowUs key={data.id} data={data}></FollowUs>
    )
)

const  Footer = () => {
    return (
        <FooterContainer>
            <div>
                <FooterRow>
                  {footerColumnData}
                </FooterRow>
            </div>
            <hr />
            <FooterLine>
                <p css={{margin:'0 .5rem'}}> Follow us:</p>
                   {followUsRow}
            </FooterLine>
        </FooterContainer>
    );
}

export default Footer;

