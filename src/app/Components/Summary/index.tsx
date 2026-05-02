export function Summary() {
    return (
        <main className="grid grid-cols-3 gap-8 max-w-6xl mx-auto -mt-16">
            <div>
                <header>
                    <p>Entrada</p>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saída</p>
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                </header>
                <strong>R$500,00</strong>
            </div>
        </main>
    )
}