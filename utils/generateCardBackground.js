export default function generateCardBackground(id) {
    const colors = [
        'rgb(128,244,192)',
        'rgb(0,161,232)',
        'pink'
    ]
    return `linear-gradient(135deg, ${colors[id % colors.length]} 0%, ${colors[(id + 1) % colors.length]} 100%)`
}