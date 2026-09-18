import { createElement } from 'react'
import { Lecture01ReliabilityBasicsSlide01Cover } from './01-cover'
import { Lecture01ReliabilityBasicsSlide02Reliability } from './02-reliability'
import { Lecture01ReliabilityBasicsSlide03UserOutcome } from './03-user-outcome'
import { Lecture01ReliabilityBasicsSlide04Availability } from './04-availability'
import { Lecture01ReliabilityBasicsSlide06NinesWithoutContext } from './06-nines-without-context'
import { Lecture01ReliabilityBasicsSlide07ReliabilityAndAvailability } from './07-reliability-and-availability'
import { Lecture01ReliabilityBasicsSlide08ReliabilityFactors } from './08-reliability-factors'
import { Lecture01ReliabilityBasicsSlide09DisasterRecovery } from './09-disaster-recovery'
import { Lecture01ReliabilityBasicsSlide10EngineeringLoop } from './10-engineering-loop'
import { Lecture01ReliabilityBasicsSlide11SreAndDevops } from './11-sre-and-devops'

export const slides = [
    createElement(Lecture01ReliabilityBasicsSlide01Cover, { key: '01-cover' }),
    createElement(Lecture01ReliabilityBasicsSlide02Reliability, {
        key: '02-reliability'
    }),
    createElement(Lecture01ReliabilityBasicsSlide03UserOutcome, {
        key: '03-user-outcome'
    }),
    createElement(Lecture01ReliabilityBasicsSlide04Availability, {
        key: '04-availability'
    }),
    createElement(Lecture01ReliabilityBasicsSlide06NinesWithoutContext, {
        key: '06-nines-without-context'
    }),
    createElement(Lecture01ReliabilityBasicsSlide07ReliabilityAndAvailability, {
        key: '07-reliability-and-availability'
    }),
    createElement(Lecture01ReliabilityBasicsSlide08ReliabilityFactors, {
        key: '08-reliability-factors'
    }),
    createElement(Lecture01ReliabilityBasicsSlide09DisasterRecovery, {
        key: '09-disaster-recovery'
    }),
    createElement(Lecture01ReliabilityBasicsSlide10EngineeringLoop, {
        key: '10-engineering-loop'
    }),
    createElement(Lecture01ReliabilityBasicsSlide11SreAndDevops, {
        key: '11-sre-and-devops'
    })
]
