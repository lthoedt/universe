// distances and diameters are in meters
// mass is in kg
// temp is in K
// time is in seconds

// speeds m/s

var data = {
    "sun": 
    {
        "diameter": 1391000 * Math.pow(10, 3),
        "mass": 1988500 * Math.pow(10, 24),
        "RotationPeriod": 24.47*3600*24,
        "distanceFromSun": 0,
        "turnAroundTime": 0,
        "orbitSpeed": 0,
        "moons": null
    },
    "mercury": 
    {
        "diameter": 4.879 * Math.pow(10, 6),
        "mass": 0.330 * Math.pow(10, 24),
        "RotationPeriod": 1407.6*3600,
        "distanceFromSun": 57.9 * Math.pow(10, 9),
        "turnAroundTime": 87.97*24*3600,
        "orbitSpeed": 47.87 * Math.pow(10, 3),
        "moons": null
    },
    "venus": 
    {
        "diameter": 12.104 * Math.pow(10, 6),
        "mass": 4.87 * Math.pow(10, 24),
        "RotationPeriod": -5832.5*3600,
        "distanceFromSun": 108.2 * Math.pow(10, 9),
        "turnAroundTime": 224.7*24*3600,
        "orbitSpeed": 35.02 * Math.pow(10, 3),
        "moons": null
    },
    "earth": 
    {
        "diameter": 12.756 * Math.pow(10, 6),
        "mass": 5.97 * Math.pow(10, 24),
        "Rotation Period": 23.9*3600,
        "distanceFromSun": 149.6 * Math.pow(10, 9),
        "turnAroundTime": 365.256*24*3600,
        "orbitSpeed": 29.78 * Math.pow(10, 3),
        "moons": {"moon": {
                    "diameter": 3475 * Math.pow(10, 3),
                    "mass": 0.073 * Math.pow(10, 24),
                    "RotationPeriod": 655.7*3600,
                    "distanceFromPlanet": 0.384 * Math.pow(10, 9),
                    "turnAroundTime": 27.32*24*3600,
                    "orbitSpeed": 1.022 * Math.pow(10, 3)
                    }
                }
    },
    "mars": 
    {
        "diameter": 6.792 * Math.pow(10, 6),
        "mass": 0.642 * Math.pow(10, 24),        
        "RotationPeriod": 24.6*3600,
        "distanceFromSun": 227.9 * Math.pow(10, 9),
        "turnAroundTime": 687.0*24*3600,
        "orbitSpeed": 24.077 * Math.pow(10, 3),
        "moons": {"phobos": {
                    "diameter": 0.022*10^6,
                    "mass": 1.07*10^16,
                    "RotationPeriod": 0.319*24*3600,
                    "distanceFromPlanet": 9.37*10^6,
                    "turnAroundTime": 0.319*24*3600,
                    "orbitSpeed": 2.138 * Math.pow(10, 3)
                    },"deimos": {
                    "diameter": 0.012*10^6,
                    "mass": 1.5*10^15,
                    "RotationPeriod": 1.26*24*3600,
                    "distanceFromPlanet": 23.5*10^6,
                    "turnAroundTime": 1.262*24*3600,
                    "orbitSpeed": 1.3513 * Math.pow(10, 3)
                    }
                }
    },
    "jupiter": 
    {
        "diameter": 142.984 * Math.pow(10, 6),
        "mass": 1898 * Math.pow(10, 24),
        "RotationPeriod": 9.9*3600,
        "distanceFromSun": 778.6 * Math.pow(10, 9),
        "turnAroundTime": 11.86*365*24*3600,
        "orbitSpeed": 13.07 * Math.pow(10, 3),
        "moons": {
            "io": {
                "diameter": 3.644*10^6,
                "mass": 0.089 * Math.pow(10, 24),
                "RotationPeriod": 1.77*24*3600,
                "distanceFromPlanet": 421.8*10^6,
                "turnAroundTime": 1.769*24*3600,
                "orbitSpeed": 62.423 * Math.pow(10, 3)
            },"europa": {
                "diameter": 3.136*10^6,
                "mass": 0.048 * Math.pow(10, 24),
                "RotationPeriod": 3.55*24*3600,
                "distanceFromPlanet": 670.9*10^6,
                "turnAroundTime": 3.551*24*3600,
                "orbitSpeed": 13.740 * Math.pow(10, 3)
            },"Ganymedes": {
                "diameter": 5.262*10^6,
                "mass": 0.148 * Math.pow(10, 24),
                "RotationPeriod": 7.18*24*3600,
                "distanceFromPlanet": 1883*10^6,
                "turnAroundTime": 7.155*24*3600,
                "orbitSpeed": 10.880 * Math.pow(10, 3)
            },"callisto": {
                "diameter": 4.820*10^6,
                "mass": 0.1076 * Math.pow(10, 24),
                "RotationPeriod": 16.69*24*3600,
                "distanceFromPlanet": 1883*10^6,
                "turnAroundTime": 16.689*24*3600,
                "orbitSpeed": 8.204 * Math.pow(10, 3)
            }
        }
    },
    "saturn": 
    {
        "diameter": 120.536 * Math.pow(10, 6),
        "mass": 568 * Math.pow(10, 24),
        "RotationPeriod": 10.7*3600,
        "distanceFromSun": 1433.5 * Math.pow(10, 9),
        "turnAroundTime": 29.45*365*24*3600,
        "orbitSpeed": 9.69 * Math.pow(10, 3),
        "moons": null
    },
    "uranus": 
    {
        "diameter": 51.118 * Math.pow(10, 6),
        "mass": 86.8 * Math.pow(10, 24),
        "RotationPeriod": -17.2*3600,
        "distanceFromSun": 2872.5 * Math.pow(10, 9),
        "turnAroundTime": 84.02*365*24*3600,
        "orbitSpeed": 6.81 * Math.pow(10, 3),
        "moons": null
    },
    "neptune": 
    {
        "diameter": 49.528 * Math.pow(10, 6),
        "mass": 102 * Math.pow(10, 24),
        "RotationPeriod": 16.1*3600,
        "distanceFromSun": 4495.1 * Math.pow(10, 9),
        "turnAroundTime": 164.8*365*24*3600,
        "orbitSpeed": 5.43 * Math.pow(10.3),
        "moons": null
    },
    "pluto": 
    {
        "diameter": 2.370 * Math.pow(10, 6),
        "mass": 0.0146 * Math.pow(10, 24),
        "RotationPeriod": -153.3*3600,
        "distanceFromSun": 5906.4 * Math.pow(10, 9),
        "turnAroundTime": 247.9*365*24*3600,
        "orbitSpeed": 4.67 * Math.pow(10, 3),
        "moons": {
            "charon": {
                "diameter": 1.26 * Math.pow(10, 6),
                "mass": 0.0016 * Math.pow(10, 24),
                "RotationPeriod": 6.38725*24*3600,
                "distanceFromPlanet": 0.0196 * Math.pow(10, 9),
                "turnAroundTime": 6.4*24*3600,
                "orbitSpeed": 0.21 * Math.pow(10, 3)
            }
        }
    },
    "numbers":
    {
        "lightSpeed": 2.99792458 * Math.pow(10, 8),
        "gravitationalConstant": 6.67384 * Math.pow(10, -11)

    }
}

// Calculate the gravitational pull on a planets surface

function gravitationSurface(object) {
    var g;
    var G = data.numbers.gravitationalConstant;
    var M = data[object].mass;
    var r = data[object].diameter/2;
    
    g = (G * M)/Math.pow(r, 2);

    return g;
}

// Calculate the speed of an object around a planet

function speedAroundPlanet(aroundObject, trajectoryRadius) {
    // speed
    var v;
    // constant
    var G = data.numbers.gravitationalConstant;
    // mass of the planet where it turns around
    var M = data[aroundObject].mass;
    // distance between middle of the planet and the object
    var r = trajectoryRadius;

    v = (G * M) / r;

    return Math.sqrt(v);
}

// Calculate the speed of an object with its trajectory time

function speedAroundPlanetTime(turnAroundTime, trajectoryRadius) {
    // speed
    var v;
    // pi
    var pi = Math.PI;
    // time it takes for a full orbit
    var T = turnAroundTime;
    //distance from the middle of the planet to the middel of the object
    var r = trajectoryRadius;
    
    v = (2 * pi * r) / T;

    return v;
}
