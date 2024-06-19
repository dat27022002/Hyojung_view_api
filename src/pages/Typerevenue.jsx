import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';

import { getPay, getBill, getProduct } from '~/services/authServices';

const cx = classNames;

function Typerevenue() {
    const [pay, setPay] = useState([]);
    const [product, setProduct] = useState([]);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [Revenue, setRevenue] = useState([]);
    const [paySelected, setPaySelected] = useState('');

    useEffect(() => {
        get_pay();
        get_product();
    }, []);

    const get_pay = async () => {
        getPay().then((result) => {
            setPay(result);
        });
    };

    const get_product = async () => {
        getProduct().then((result) => {
            setProduct(result);
        });
    };

    const get_bill = async () => {
        const data = {};
        if (startTime === '') {
            data.startTime = '1900-1-1 00:00:00';
        } else {
            data.startTime = startTime + ' 00:00:00';
        }
        if (endTime === '') {
            data.endTime = '9999-1-1 00:00:00';
        } else {
            data.endTime = endTime + ' 00:00:00';
        }
        getBill(data).then((result) => {
            const Revenue = result.map((item) => ({
                id: item.id,
                nameProduct: product.filter((value) => value.id === item.idproduct)[0].nameproduct,
                cost: product.filter((value) => value.id === item.idproduct)[0].cost,
                quantity: item.number,
                total: product.filter((value) => value.id === item.idproduct)[0].cost * item.number,
                type: pay.filter((value) => value.id === item.type)[0].namepay,
            }));

            setRevenue(Revenue);
        });
    };

    return (
        <div className={cx('h-full flex flex-col items-center')}>
            <div className={cx('flex justify-center items-center')}>
                <div className={cx('text-base font-semibold')}>Choose a payment method</div>
                <div className={cx('flex justify-center')}>
                    {pay.map((value, index) => (
                        <div class="flex items-center mb- px-5" key={index}>
                            <input
                                id="default-radio-1"
                                type="radio"
                                value={value.namepay}
                                checked={paySelected === value.namepay}
                                onChange={(e) => setPaySelected(e.target.value)}
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                for="default-radio-1"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                {value.namepay}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="px-10">
                    <div date-rangepicker class="flex items-center">
                        <div className={cx('relative')}>
                            <div
                                className={cx('absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none')}
                            >
                                <svg
                                    className={cx('w-4 h-4 text-gray-500 dark:text-gray-400')}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input
                                name="start"
                                type="date"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className={cx(
                                    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg',
                                    ' focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 ',
                                    ' dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400',
                                    ' dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                                )}
                                placeholder="Select date start"
                            />
                        </div>
                        <span className={cx('mx-4 text-gray-500')}>to</span>
                        <div className={cx('relative')}>
                            <div
                                className={cx('absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none')}
                            >
                                <svg
                                    className={cx('w-4 h-4 text-gray-500 dark:text-gray-400')}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input
                                name="end"
                                type="date"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                className={cx(
                                    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                                )}
                                placeholder="Select date end"
                            />
                        </div>
                    </div>
                </div>
                <Button primary className={'px-4'} onClick={() => get_bill()}>
                    Search
                </Button>
            </div>
            <div class="container mx-auto p-4">
                <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                ID
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                Name
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                Cost
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                Quantity
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                Total
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                Type
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Revenue.map((item, index) => (
                            <tr class="bg-gray-100 border-b text-base" key={index}>
                                <td class="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{item.nameProduct}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{item.cost}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{item.total}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{item.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Typerevenue;
