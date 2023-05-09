const svg = document.getElementById('gears');

svg.onclick = (e) => {
    const colors = ['#f98408', '#5ef0ceda', '#f9080892', '#b226bcda', '#b424a5da', '#66b52eda', '#e2fff8ab', '#232423e7']
    const rando = () => colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.cssText =`
    --dark-color: ${rando()};
    --light-color: ${rando()};
    `
}