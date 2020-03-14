export default () => (
    <header className="navigation">
        <a title="Remote university" className="home" href="/">Remote University</a>
        <div className="topnav-right">
            <a href="/about">About us</a>
            <a href="/programs">Programs</a>
            <a href="/apply">Apply</a>
        </div>
        <style jsx>
            {`
            * {
                font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
            }
            header {
                background-color: #20232a;
                color: #ffffff;
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
            .topnav-right {
                float: right;
            }
            .topnav-right a {
                color: #f2f2f2;
            }
            `}
        </style>
    </header>
);