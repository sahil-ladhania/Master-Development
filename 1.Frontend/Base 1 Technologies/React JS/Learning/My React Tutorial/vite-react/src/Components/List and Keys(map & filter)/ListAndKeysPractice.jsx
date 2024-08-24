
function ListAndKeysPractice() {
    const list = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    return (
        <>
            <div className="p-40">
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default ListAndKeysPractice;