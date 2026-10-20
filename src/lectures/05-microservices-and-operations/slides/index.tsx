import { Lecture05MicroservicesAndOperationsSlide01Cover } from './01-cover'
import { Lecture05MicroservicesAndOperationsSlide02SafeRestart } from './02-safe-restart'
import { Lecture05MicroservicesAndOperationsSlide03VersionCompatibility } from './03-version-compatibility'
import { Lecture05MicroservicesAndOperationsSlide04DataMigration } from './04-data-migration'
import { Lecture05MicroservicesAndOperationsSlide05RequestDiagnostics } from './05-request-diagnostics'
import { Lecture05MicroservicesAndOperationsSlide06ServiceDiagnostics } from './06-service-diagnostics'
import { Lecture05MicroservicesAndOperationsSlide07MicroserviceCosts } from './07-microservice-costs'
import { Lecture05MicroservicesAndOperationsSlide08MicroserviceBenefits } from './08-microservice-benefits'
import { Lecture05MicroservicesAndOperationsSlide09ServiceBoundaries } from './09-service-boundaries'
import { Lecture05MicroservicesAndOperationsSlide10ArchitectureChoice } from './10-architecture-choice'
import { LectureFeedbackSlide } from '../../../components/lecture-feedback-slide'

export const slides = [
    <Lecture05MicroservicesAndOperationsSlide01Cover key="01-cover" />,
    <Lecture05MicroservicesAndOperationsSlide02SafeRestart key="02-safe-restart" />,
    <Lecture05MicroservicesAndOperationsSlide03VersionCompatibility key="03-version-compatibility" />,
    <Lecture05MicroservicesAndOperationsSlide04DataMigration key="04-data-migration" />,
    <Lecture05MicroservicesAndOperationsSlide05RequestDiagnostics key="05-request-diagnostics" />,
    <Lecture05MicroservicesAndOperationsSlide06ServiceDiagnostics key="06-service-diagnostics" />,
    <Lecture05MicroservicesAndOperationsSlide07MicroserviceCosts key="07-microservice-costs" />,
    <Lecture05MicroservicesAndOperationsSlide08MicroserviceBenefits key="08-microservice-benefits" />,
    <Lecture05MicroservicesAndOperationsSlide09ServiceBoundaries key="09-service-boundaries" />,
    <Lecture05MicroservicesAndOperationsSlide10ArchitectureChoice key="10-architecture-choice" />,
    <LectureFeedbackSlide key="11-feedback" number={5} />
]
