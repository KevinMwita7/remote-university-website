import Head from 'next/head';

export default ({children}) => (
    <div className="container">
        <Head>
            <title>Remote University</title>
            <link rel="stylesheet" href="/static/css/bootstrap.min.css"></link>
        </Head>
        {children}
        <style jsx global>
            {
                `
                    * {
                        font-family: MessinaSans,sans-serif;
                        color: #0c143b;
                    }
                    
                `
            }
        </style>
    </div>
)