// Pattern matching via destructuring and switch

const point = { x: 0, y: 1 };
const { x, y } = point;

switch (true) {
    case x === 0 && y === 0:
        console.log('origin');
        break;
    case x === 0:
        console.log('y-axis');
        break;
    default:
        console.log('somewhere else');
}
