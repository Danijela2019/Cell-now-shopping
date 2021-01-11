import styled from '@emotion/styled'
/** @jsxImportSource @emotion/react */

export const NavbarContainer = styled('nav')`
  height: 10vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 30px;
  box-sizing: border-box;
  color: #272643;
  border-bottom: 1px solid #DCDCDC;
  box-shadow: .5px 2.5px 2.5px .5px #DCDCDC;
  @media (max-width: 767px) {
    flex-direction: column;
    height:auto;
    padding: 0.5rem;
  }`;
 
export const NavbarWrapper = styled('div')`  
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.5rem;
  }
  `
export const NavbarLogo = styled('div')`
display: block;
height: 100%;
@media (max-width: 767px) {
  display: none;
}`
export const NavbarToggle = styled('div')`
display: none;
@media (max-width: 767px) {
  display: flex;
}`

export const Link = styled('li')`
margin:0 1rem;
@media (max-width: 767px) {
  margin: 1rem 0;
}`





/*export const NavListWrapper = styled('ul')`
display: flex;
align-self :flex-end;
list-style-type: none;
align-items: center;
@media (max-width: 767px) {
  display: none;
}
`*/
export const NavListWrapper = styled('ul')`  
display: flex;
align-self :flex-end;
list-style-type: none;
align-items: center;
justify-content: flex-start;
@media (max-width: 767px) {
  display: none;
 
}
`

export const Open = styled(NavListWrapper)`
display: flex;
justify-content: flex-start;
`

/*.navbar_links {
  display: none;
  flex-direction: column;
} */