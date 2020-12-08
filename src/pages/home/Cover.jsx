/** @jsxImportSource @emotion/react */
import {useHistory} from 'react-router-dom'

import Button from '../../components/Button'
import Logo from '../../components/navigation/Logo'
import {Background, LogoWrapper, CoverHeader, CoverParagraph} from './HomeComponents'




const Cover = () => {

    let history = useHistory();
    const redirectToPhones = () => {
        history.push('/phones')
      }  

    return (
        <Background>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <CoverHeader>
                Find your favorite phone
            </CoverHeader>
            <CoverParagraph>With us the sky is the limit</CoverParagraph>
            <Button
                bg="#2c698d"
                text="white"
                width="12rem"
                height="3rem"
                clicked ={redirectToPhones}>
                View all phones
            </Button>
        </Background>
    )
}

export default Cover;