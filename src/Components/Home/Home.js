import React from 'react';
import { logo } from '../../Assets/assets';
import Form from './Form';
import { HomeContainer, HomeSection } from './HomeStyle';

const Home = () => {
    return (
        <div>
            <HomeSection>
                <img src={logo} alt="" />
                <HomeContainer>
                    <Form />
                </HomeContainer>
            </HomeSection>

        </div>
    );
};

export default Home;