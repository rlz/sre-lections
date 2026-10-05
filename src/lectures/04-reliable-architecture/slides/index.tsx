import { LectureFeedbackSlide } from '../../../components/lecture-feedback-slide'
import { Lecture04ReliableArchitectureSlide01Cover } from './01-cover'
import { Lecture04ReliableArchitectureSlide02DependencyBoundary } from './02-dependency-boundary'
import { Lecture04ReliableArchitectureSlide03DependencyErrors } from './03-dependency-errors'
import { Lecture04ReliableArchitectureSlide04SlowDependency } from './04-slow-dependency'
import { Lecture04ReliableArchitectureSlide05NoResponse } from './05-no-response'
import { Lecture04ReliableArchitectureSlide06Timeouts } from './06-timeouts'
import { Lecture04ReliableArchitectureSlide07Retries } from './07-retries'
import { Lecture04ReliableArchitectureSlide08CircuitBreaker } from './08-circuit-breaker'
import { Lecture04ReliableArchitectureSlide09StartupAndReconnect } from './09-startup-and-reconnect'
import { Lecture04ReliableArchitectureSlide10ReconnectStorm } from './10-reconnect-storm'
import { Lecture04ReliableArchitectureSlide11FiniteResources } from './11-finite-resources'
import { Lecture04ReliableArchitectureSlide12OperationLimits } from './12-operation-limits'
import { Lecture04ReliableArchitectureSlide13AnomalousLoad } from './13-anomalous-load'
import { Lecture04ReliableArchitectureSlide14LoadTesting } from './14-load-testing'
import { Lecture04ReliableArchitectureSlide15AfterFailure } from './15-after-failure'
import { Lecture04ReliableArchitectureSlide16Closing } from './16-closing'

export const slides = [
    <Lecture04ReliableArchitectureSlide01Cover key="01-cover" />,
    <Lecture04ReliableArchitectureSlide02DependencyBoundary key="02-dependency-boundary" />,
    <Lecture04ReliableArchitectureSlide03DependencyErrors key="03-dependency-errors" />,
    <Lecture04ReliableArchitectureSlide04SlowDependency key="04-slow-dependency" />,
    <Lecture04ReliableArchitectureSlide05NoResponse key="05-no-response" />,
    <Lecture04ReliableArchitectureSlide06Timeouts key="06-timeouts" />,
    <Lecture04ReliableArchitectureSlide07Retries key="07-retries" />,
    <Lecture04ReliableArchitectureSlide08CircuitBreaker key="08-circuit-breaker" />,
    <Lecture04ReliableArchitectureSlide09StartupAndReconnect key="09-startup-and-reconnect" />,
    <Lecture04ReliableArchitectureSlide10ReconnectStorm key="10-reconnect-storm" />,
    <Lecture04ReliableArchitectureSlide11FiniteResources key="11-finite-resources" />,
    <Lecture04ReliableArchitectureSlide12OperationLimits key="12-operation-limits" />,
    <Lecture04ReliableArchitectureSlide13AnomalousLoad key="13-anomalous-load" />,
    <Lecture04ReliableArchitectureSlide14LoadTesting key="14-load-testing" />,
    <Lecture04ReliableArchitectureSlide15AfterFailure key="15-after-failure" />,
    <Lecture04ReliableArchitectureSlide16Closing key="16-closing" />,
    <LectureFeedbackSlide key="17-feedback" number={4} />
]
