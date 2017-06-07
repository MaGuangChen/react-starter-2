export const PI = 3.1415;


export function getCircumference(radius){
    return radius * 2 * PI;
}

export function getRoundArea(radius){
    return Math.sqrt(radius) * PI;
}


export default class Circle{
    constructor(radius){
        this.radius = radius;
    }
}