
export function Header() {
    return (
        <header className="bg-(--blue) text-white w-full">
            <div className="max-w-6xl flex justify-between items-center mx-auto px-4 pt-8 pb-30">
                <h1 className="text-xl font-bold">Financial Control</h1>
                <button type="button" className="bg-(--blue-light) text-white text-lg border-0 rounded px-8 h-12 hover:brightness-90 transition-all duration-200">Nova Transação</button>
            </div>
        </header>
    )
};