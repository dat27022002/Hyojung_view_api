import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';

import config from '~/config';

const cx = classNames;

function Header() {
    const location = useLocation();

    const currentPath = location.pathname;
    const navigation = [
        { title: 'About', link: config.routes.ABOUT },
        { title: 'Revenue', link: config.routes.TYPEREVENUE },
    ];

    return (
        <div className={cx('fixed left-0 top-0 z-10 flex w-full justify-center h-16 bg-slate-200')}>
            <div className={cx('flex h-full w-full items-center justify-between px-9')}>
                {/* list Menu */}
                <ul className={cx('flex h-full flex-1 items-center justify-center ')}>
                    {navigation.map((value, index) => {
                        return (
                            <li
                                key={index}
                                className={cx(
                                    'flex h-full cursor-pointer items-center px-5 py-0 text-xl font-semibold',
                                    currentPath.includes(value.link.split('/')[1]) && 'text-red-500 bg-blue-200',
                                )}
                            >
                                <Link to={value.link}>{value.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Header;
