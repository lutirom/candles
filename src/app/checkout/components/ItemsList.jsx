export default function ItemsList({ items, optionType, chooseOption }) {
    return items.map((item) => {
        if (item.Description === "АРК") return;

        return (
            <div
                className="flex items-center justify-between  py-1 px-3 bg-white border-b border-gray-50"
                onClick={() => chooseOption(optionType, { ref: item.Ref, name: `${item.Description} ${item.RegionType ? item.RegionType : ""}` })}
                key={item.Ref}>
                <p>
                    {item.Description} {item.RegionType}
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                        fillRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        );
    });
}
