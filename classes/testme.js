import Route from './Route';

let myBoulderRoute = new Route(1, 1, 'boulder', 'v3', true, 2);

let myTopRopeRoute = new Route(2, 1, 'topRope', '10-', 1, true);

console.log(`My first route is a ${myBoulderRoute.type} rated at ${myBoulderRoute.rating} and earns a score of ${myBoulderRoute.score}`);

console.log(`My second route is a ${myTopRopeRoute.type} rated at ${myTopRopeRoute.rating} and earns a score of ${myTopRopeRoute.score}`)