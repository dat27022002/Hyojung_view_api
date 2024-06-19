import Header from '../Header';
// import Footer from '../Footer';
import classNames from 'classnames/bind';

const cx = classNames;

function DefautLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('mt-28')}>{children}</div>
            {/* <Footer /> */}
        </div>
    );
}

export default DefautLayout;
