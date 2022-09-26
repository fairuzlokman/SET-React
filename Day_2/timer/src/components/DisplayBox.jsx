function DisplayBox({children, time}) {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "150px",
                    height: "150px",
                    fontSize: "100px",
                }}>
                {children}
            </div>

            <h1 style={{
                textAlign: "center",
                }}>
                {time}
            </h1>
        </div>
    )
}

export default DisplayBox;