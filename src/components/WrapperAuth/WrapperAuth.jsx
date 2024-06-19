import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './WrapperAuth.scss';

const cx = classNames.bind(styles);

function WrapperAuth({ title, children }) {
    return (
        <div
            className={cx(
                'relative z-10 flex h-screen w-full items-center  justify-center overflow-hidden bg-teal-200 ',
                'max-sm: max-sm: h-full !w-full',
                'WrapperAuth',
            )}
        >
            <div className={cx('wave wave1')}></div>
            <div className={cx('wave wave2')}></div>
            <div className={cx('wave wave3')}></div>
            <div className={cx('wave wave4')}></div>
            <div
                className={cx(
                    'z-[5] flex w-[420px] flex-col items-center justify-center rounded-lg bg-cyan-50/60 py-10',
                )}
            >
                <div className={cx('mb-10 text-center text-3xl font-bold text-violet-500')}>{title}</div>
                <div className={cx('w-[260px]', 'form')}>{children}</div>
            </div>
        </div>
    );
}

WrapperAuth.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default WrapperAuth;
