export async function load({ fetch }) {
    const res = await fetch("src/lib/data/gapminder.json")
    const gapminder = await res.json()
    
    return { gapminder }
}