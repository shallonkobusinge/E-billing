const TableHeader = ({ children, tab }) => {
    return (
        <div className="pt-5 pl-8 flex">
            <div>

                <button className='ml-4 active' >{tab}</button>

            </div>
            {children}
        </div>
    )
}

export default TableHeader