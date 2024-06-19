import classNames from 'classnames/bind';

const cx = classNames;

function About() {
    return (
        <div className={cx('h-full flex flex-col items-center text-xxl font-semibold')}>
            <div>Name: Nguyen Tan Dat</div>
            <div>Phone: 0338203126</div>
            <div>Email: tandatnguyen27022002@gmail.com</div>
        </div>
    );
}

export default About;
