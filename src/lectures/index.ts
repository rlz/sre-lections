import { lecture01ReliabilityBasics } from './01-reliability-basics/01-reliability-basics'
import { lecture02FailuresAndReliabilityPrinciples } from './02-failures-and-reliability-principles/02-failures-and-reliability-principles'
import { lecture03DistributedSystems } from './03-distributed-systems/03-distributed-systems'
import { lecture04ReliableArchitecture } from './04-reliable-architecture/04-reliable-architecture'
import { lecture05MicroservicesAndOperations } from './05-microservices-and-operations/05-microservices-and-operations'
import { lecture06DistributedTransactions } from './06-distributed-transactions/06-distributed-transactions'
import { lecture07DataStorage } from './07-data-storage/07-data-storage'
import { lecture08Replication } from './08-replication/08-replication'
import { lecture09Partitioning } from './09-partitioning/09-partitioning'
import { lecture10MonitoringMetrics } from './10-monitoring-metrics/10-monitoring-metrics'
import { lecture11LoggingAndTracing } from './11-logging-and-tracing/11-logging-and-tracing'
import { lecture12FailureDetection } from './12-failure-detection/12-failure-detection'
import { lecture13Alerting } from './13-alerting/13-alerting'
import { lecture14ServiceLevels } from './14-service-levels/14-service-levels'
import { lecture15FailureCausesAndTriggers } from './15-failure-causes-and-triggers/15-failure-causes-and-triggers'
import { lecture16IncidentResponseAndPostmortems } from './16-incident-response-and-postmortems/16-incident-response-and-postmortems'
import { lecture17Resilience } from './17-resilience/17-resilience'
import { lecture18TeamProcesses } from './18-team-processes/18-team-processes'
import { lecture19ClientApplications } from './19-client-applications/19-client-applications'
import type { Lecture } from './types'

export type { Lecture } from './types'

export const lectures: ReadonlyArray<Lecture> = [
    lecture01ReliabilityBasics,
    lecture02FailuresAndReliabilityPrinciples,
    lecture03DistributedSystems,
    lecture04ReliableArchitecture,
    lecture05MicroservicesAndOperations,
    lecture06DistributedTransactions,
    lecture07DataStorage,
    lecture08Replication,
    lecture09Partitioning,
    lecture10MonitoringMetrics,
    lecture11LoggingAndTracing,
    lecture12FailureDetection,
    lecture13Alerting,
    lecture14ServiceLevels,
    lecture15FailureCausesAndTriggers,
    lecture16IncidentResponseAndPostmortems,
    lecture17Resilience,
    lecture18TeamProcesses,
    lecture19ClientApplications
]

export function findLecture(id: string | undefined) {
    return lectures.find((lecture) => lecture.id === id)
}
