// distances and diameters are in meters
// mass is in kg
// temp is in K
// time is in seconds
var data = {
    "sun": 
    {
        "diameter": "1391020*10^3",
        "mass": "1988500*10^24",
        "RotationPeriod": "24.47*3600*24",
        "distanceFromSun": "0"
    },
    "mercury": 
    {
        "diameter": "4879*10^3",
        "mass": "0.330*10^24",
        "RotationPeriod": "1407.6*3600",
        "distanceFromSun": "57.9*10^9",
    },
    "venus": 
    {
        "diameter": "12,104*10^3",
        "mass": "4.87*10^24",
        "RotationPeriod": "-5832.5*3600",
        "distanceFromSun": "108.2*10^9",
        "moons": null
    },
    "earth": 
    {
        "diameter": "12,756*10^3",
        "mass": "	5.97*10^24",
        "Rotation Period": "23.9*3600",
        "distanceFromSun": "149.6*10^9",
        "moons": {"moon": {
                    "diameter": "3475*10^3",
                    "mass": "0.073*10^24",
                    "RotationPeriod": "655.7*3600",
                    "distanceFromPlanet": "0.384*10^9"
                    }
                }
    },
    "mars": 
    {
        "diameter": "6792*10^3",
        "mass": "0.642*10^24",        
        "RotationPeriod": "24.6*3600",
        "distanceFromSun": "227.9*10^9",
        "moons": {"phobos": {
                    "diameter": "0.022*10^6",
                    "mass": "1.07*10^16",
                    "RotationPeriod": "0.319*24*3600",
                    "distanceFromPlanet": "9.37*10^6"
                    },"deimos": {
                    "diameter": "0.012*10^6",
                    "mass": "1.5*10^15",
                    "RotationPeriod": "1.26*24*3600",
                    }
                }
    },
    "jupiter": 
    {
        "diameter": "142,984*10^3",
        "mass": "1898*10^24",
        "RotationPeriod": "9.9*3600",
        "distanceFromSun": "778.6*10^9",
        "moons": {
            "io": {
                "diameter": "3.644*10^6",
                "mass": "0.089*10^24",
                "RotationPeriod": "1.77*24*3600",
                "distanceFromPlanet": "421.8*10^6"
            },"europa": {
                "diameter": "3.136*10^6",
                "mass": "0.048*10^24",
                "RotationPeriod": "3.55*24*3600",
                "distanceFromPlanet": "670.9*10^6"
            },"Ganymedes": {
                "diameter": "5.262*10^6",
                "mass": "0.148*10^24",
                "RotationPeriod": "7.18*24*3600",
                "distanceFromPlanet": "1883*10^6"
            },"callisto": {
                "diameter": "4.820*10^6",
                "mass": "0.1076*10^24",
                "RotationPeriod": "16.69*24*3600",
                "distanceFromPlanet": "1883*10^6"
            }
        }
    },
    "saturn": 
    {
        "diameter": "120,536*10^3",
        "mass": "568*10^24",
        "RotationPeriod": "10.7*3600",
        "distanceFromSun": "1433.5*10^9"
    },
    "uranus": 
    {
        "diameter": "51,118*10^3",
        "mass": "86.8*10^24",
        "RotationPeriod": "-17.2*3600",
        "distanceFromSun": "2872.5*10^9"
    },
    "neptune": 
    {
        "diameter": "49,528*10^3",
        "mass": "102*10^24",
        "RotationPeriod": "16.1*3600",
        "distanceFromSun": "4495.1*10^9"
    },
    "pluto": 
    {
        "diameter": "2370*10^3",
        "mass": "0.0146*10^24",
        "RotationPeriod": "-153.3*3600",
        "distanceFromSun": "5906.4*10^9",
        "moons": {
            "charon": {
                "diameter": "1.26*10^6",
                "mass": "0.0016*10^24",
                "RotationPeriod": "synchroon",
                "distanceFromPlanet": "0.0196*10^9"
            }
        }
    }
}