function MyList({items}) {
    return (
        <ul>
        {
            items.map((item, index) => (
                <li key={index}>
                    {item.name} {item.isplat ? "✅" : "❌"}
                </li>
            ))
        }
        </ul>
    );

}

export default MyList;