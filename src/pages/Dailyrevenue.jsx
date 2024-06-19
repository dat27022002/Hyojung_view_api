import classNames from 'classnames/bind';

const cx = classNames;

function Dailyrevenue() {
    return (
        <div className={cx('h-full flex flex-col items-center')}>
            <div className={cx('text-xxl font-semibold')}>DAYLY REVENUE</div>
            <div>
                <div date-rangepicker class="flex items-center">
                    <div className={cx('relative')}>
                        <div className={cx('absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none')}>
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
                            className={cx(
                                'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                            )}
                            placeholder="Select date start"
                        />
                    </div>
                    <span className={cx('mx-4 text-gray-500')}>to</span>
                    <div className={cx('relative')}>
                        <div className={cx('absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none')}>
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
                            className={cx(
                                'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                            )}
                            placeholder="Select date end"
                        />
                    </div>
                </div>
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
                    <tbody className="text-base">
                        <tr class="bg-gray-100 border-b">
                            <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
                            <td class="px-6 py-4 whitespace-nowrap">john.doe@example.com</td>
                            <td class="px-6 py-4 whitespace-nowrap">Admin</td>
                            <td class="px-6 py-4 whitespace-nowrap">Admin</td>
                            <td class="px-6 py-4 whitespace-nowrap">Admin</td>
                            <td class="px-6 py-4 whitespace-nowrap">Admin</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dailyrevenue;
