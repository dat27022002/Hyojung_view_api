import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../components/Input';
import WrapperAuth from '../components/WrapperAuth';
import Button from '../components//Button';
import config from '~/config';

function Home() {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(config.routes.ABOUT);
    };

    return (
        <Fragment>
            <WrapperAuth title={'LOGIN'}>
                <form>
                    <Input name={'username'} placeholder={'username'} autoComplete={'username'} />
                    <Input
                        name={'password'}
                        placeholder={'password'}
                        type={'password'}
                        autoComplete={'current-password'}
                    />
                    <Button primary rounded onClick={(e) => onSubmit(e)}>
                        {'LOGIN'}
                    </Button>
                </form>
            </WrapperAuth>
        </Fragment>
    );
}

export default Home;
