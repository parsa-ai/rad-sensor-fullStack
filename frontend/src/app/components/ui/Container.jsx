function Container({ children , className , ...rest }) {
    return (
        <div className={`w-10/12 m-auto ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Container