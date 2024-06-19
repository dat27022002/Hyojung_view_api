import httpRequest from '~/utils/httpRequest';
import config from '~/config';

const getAccount = async () => {
    const res = await httpRequest.post(
        '',
        {
            userCode: 'string',
            userType: 'string',
            data: {},
        },
        {
            headers: {
                fun_c: 'getAccount',
                'content-type': 'text/json',
            },
        },
    );
    return res.data;
};

const getPay = async () => {
    const res = await httpRequest.post(
        '',
        {
            userCode: 'string',
            userType: 'string',
            data: {},
        },
        {
            headers: {
                fun_c: 'getPay',
                'content-type': 'text/json',
            },
        },
    );
    return res.data;
};

const getProduct = async () => {
    const res = await httpRequest.post(
        '',
        {
            userCode: 'string',
            userType: 'string',
            data: {},
        },
        {
            headers: {
                fun_c: 'getProduct',
                'content-type': 'text/json',
            },
        },
    );
    return res.data;
};

const getBillGreater = async (data) => {
    const res = await httpRequest.post(
        '',
        {
            userCode: 'string',
            userType: 'string',
            data: data,
        },
        {
            headers: {
                fun_c: 'getBillGreater',
                'content-type': 'text/json',
            },
        },
    );
    return res.data;
};

const getBillLesser = async (data) => {
    const res = await httpRequest.post(
        '',
        {
            userCode: 'string',
            userType: 'string',
            data: data,
        },
        {
            headers: {
                fun_c: 'getBillLesser',
                'content-type': 'text/json',
            },
        },
    );
    return res.data;
};

const getBill = async (data) => {
    const res = await httpRequest.post(
        '',
        {
            userCode: 'string',
            userType: 'string',
            data: data,
        },
        {
            headers: {
                fun_c: 'getBill',
                'content-type': 'text/json',
            },
        },
    );
    return res.data;
};

export { getAccount, getPay, getProduct, getBillGreater, getBillLesser, getBill };
