import Header from '../components/header';

export default () => {
    return(
        <>
            <Header/>
            <style jsx>
                {`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: inherit;
                }
                `}
            </style>
        </>
    );
};