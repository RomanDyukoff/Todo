import './styles.scss';

const Layout = ({ children }) => {
    
    return (
        <div className="container">
            <div className="content">
                {children}
            </div>
        </div>
    )
};

export default Layout;
