import Head from 'next/head';

export default ({children}) => (
    <div>
        <Head>
            <title>Remote University</title>
            <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/static/css/style.css"/>
        </Head>
        {children}
        <style jsx global>
            {
                `
                    * {
                        font-family: MessinaSans,sans-serif;
                        color: #fff;
                    }
                    
                `
            }
        </style>
    </div>
)