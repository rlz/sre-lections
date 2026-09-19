import { createElement } from 'react'
import { Lecture01ReliabilityBasicsSlide01Cover } from './01-cover'
import { Lecture01ReliabilityBasicsSlide02Reliability } from './02-reliability'
import { Lecture01ReliabilityBasicsSlide03UserOutcome } from './03-user-outcome'
import { Lecture01ReliabilityBasicsSlide04Availability } from './04-availability'
import { Lecture01ReliabilityBasicsSlide05NinesWithoutContext } from './05-nines-without-context'
import { Lecture01ReliabilityBasicsSlide06ReliabilityAndAvailability } from './06-reliability-and-availability'
import { Lecture01ReliabilityBasicsSlide07ReliabilityFactors } from './07-reliability-factors'
import { Lecture01ReliabilityBasicsSlide08DisasterRecovery } from './08-disaster-recovery'
import { Lecture01ReliabilityBasicsSlide09EngineeringLoop } from './09-engineering-loop'
import { Lecture01ReliabilityBasicsSlide10SreAndDevops } from './10-sre-and-devops'

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
    createElement(Lecture01ReliabilityBasicsSlide05NinesWithoutContext, {
        key: '05-nines-without-context'
    }),
    createElement(Lecture01ReliabilityBasicsSlide06ReliabilityAndAvailability, {
        key: '06-reliability-and-availability'
    }),
    createElement(Lecture01ReliabilityBasicsSlide07ReliabilityFactors, {
        key: '07-reliability-factors'
    }),
    createElement(Lecture01ReliabilityBasicsSlide08DisasterRecovery, {
        key: '08-disaster-recovery'
    }),
    createElement(Lecture01ReliabilityBasicsSlide09EngineeringLoop, {
        key: '09-engineering-loop'
    }),
    createElement(Lecture01ReliabilityBasicsSlide10SreAndDevops, {
        key: '10-sre-and-devops'
    })
]
