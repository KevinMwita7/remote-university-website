import Link from 'next/link';

export default () => (
    <header className="navigation">
        <Link href="/">
            <a title="Remote university" className="home">Remote University</a>
        </Link>
        <div className="navigation-right">
            <Link href="/about">
                <a title="About us" className="navigation-link">About us</a>
            </Link>
        </div>
        <style jsx>
            {`
            * {
                font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
            }
            header {
                background-color: #20232a;
                color: #ffffff;
                position: fixed;
                z-index: 1;
                width: 100%;
                top: 0;
                left: 0;
                overflow: hidden;
            }
            .navigation a {
                float: left;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 17px;
            }
            .navigation a:hover {
                background-color: #ddd;
                color: black;
            }
            .home {
                overflow: hidden;
                text-align: center;
                color: #61dafb;
            }
            .navigation-right {
                float: right;
            }
            .navigation-right a {
                color: #f2f2f2;
            }
            `}
        </style>
    </header>
);