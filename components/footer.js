import Link from 'next/link';
export default() => (
    <footer className="py-2">
        <Link href="/privacy">
            <a className="text-decoration-none text-light ml-3">Privacy policy</a>
        </Link>
    <style jsx>
        {
            `
            * {
                font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
            }
            footer {
                background-color: #20232a;
            }
            `
        }
    </style>
    </footer>
)