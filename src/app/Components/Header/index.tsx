
export function Header() {
    return (
        <header className="bg-(--blue) text-white w-full">
            <div className="max-w-6xl flex justify-between mx-auto px-4 py-20">
                <h1 className="text-xl font-bold">Financial Control</h1>
                <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Nova Transação</button>
            </div>
        </header>
    )
};