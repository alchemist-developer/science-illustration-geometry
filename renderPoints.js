function renderPoints(numOfPoints = 16, size = 1000) {
    const polarToCartesian = (r, degrees) => {
        const radians = degrees * Math.PI / 180.0;
        return [r + (r * Math.cos(radians)), r + (r * Math.sin(radians))]
    }

    const random = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

    const renderLines = (X, Y) => {
        return data.map(entry => {
            const [x, y] = entry;
            const stroke = `hsl(${random(360)}, ${random(100, 50)}%, ${random(90, 30)}%)`;
            const strokeWidth = random(30, 3) / 10;
            if (X !== x && Y !== y) return `<line x1="${X}" y1="${Y}" x2="${x}" y2="${y}" stroke="${stroke}" stroke-width="${strokeWidth}"></line>`
        })
    }

    const radius = size / 2;

    const data = [...new Array(numOfPoints)].map((_a, index) => {
        const angle = 360 / numOfPoints;
        const radian = angle * (index + 1);
        return polarToCartesian(radius, radian)
    })

    app.innerHTML = data.map(entry => {
        const [x, y] = entry;
        return renderLines(x, y).join('');
    })
}
renderPoints(16);

