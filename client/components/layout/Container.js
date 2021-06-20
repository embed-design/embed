const Container = ({ children }) => {
    return (
        <div className="w-screen">
            <div className="mx-auto w-10/12 py-2" >
                {children}
            </div>
        </div>
    )
}

export default Container;