import { Lecture06DistributedTransactionsSlide01Cover } from './01-cover'
import { Lecture06DistributedTransactionsSlide02OneOperation } from './02-one-operation'
import { Lecture06DistributedTransactionsSlide03TwoPhaseCommit } from './03-two-phase-commit'
import { Lecture06DistributedTransactionsSlide04ResourceReservation } from './04-resource-reservation'
import { Lecture06DistributedTransactionsSlide05Saga } from './05-saga'
import { Lecture06DistributedTransactionsSlide06Compensations } from './06-compensations'
import { Lecture06DistributedTransactionsSlide07SagaCoordination } from './07-saga-coordination'
import { Lecture06DistributedTransactionsSlide08ReliableOrchestration } from './08-reliable-orchestration'
import { Lecture06DistributedTransactionsSlide09KeyDifference } from './09-key-difference'
import { LectureClosingSlide } from '../../../components/lecture-closing-slide'
import { LectureFeedbackSlide } from '../../../components/lecture-feedback-slide'

export const slides = [
    <Lecture06DistributedTransactionsSlide01Cover key="01-cover" />,
    <Lecture06DistributedTransactionsSlide02OneOperation key="02-one-operation" />,
    <Lecture06DistributedTransactionsSlide03TwoPhaseCommit key="03-two-phase-commit" />,
    <Lecture06DistributedTransactionsSlide04ResourceReservation key="04-resource-reservation" />,
    <Lecture06DistributedTransactionsSlide05Saga key="05-saga" />,
    <Lecture06DistributedTransactionsSlide06Compensations key="06-compensations" />,
    <Lecture06DistributedTransactionsSlide07SagaCoordination key="07-saga-coordination" />,
    <Lecture06DistributedTransactionsSlide08ReliableOrchestration key="08-reliable-orchestration" />,
    <Lecture06DistributedTransactionsSlide09KeyDifference key="09-key-difference" />,
    <LectureClosingSlide key="10-closing" number={6} />,
    <LectureFeedbackSlide key="11-feedback" number={6} />
]
