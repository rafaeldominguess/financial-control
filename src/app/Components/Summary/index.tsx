export function Summary() {
    return (
        <main className="grid grid-cols-3 gap-8 max-w-6xl mx-auto -mt-16">
            <div className="bg-(--shape) rounded px-8 py-6 text-(--text-title)">
                <header>
                    <p>Entrada</p>
                </header>
                <strong className="mt-4 text-3xl font-medium leading-12 block">R$1000,00</strong>
            </div>

            <div className="bg-(--shape) rounded px-8 py-6 text-(--text-title)">
                <header>
                    <p>Saída</p>
                </header>
                <strong className="mt-4 text-3xl font-medium leading-12 block">- R$500,00</strong>
            </div>

            <div className="bg-(--green) rounded px-8 py-6 text-(--shape)">
                <header>
                    <p>Total</p>
                </header>
                <strong className="mt-4 text-3xl font-medium leading-12 block">R$500,00</strong>
            </div>
        </main>
    )
}