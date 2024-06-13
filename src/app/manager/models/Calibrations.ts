import { Measurements } from './Measurements';
import { Instruments } from './Instruments';

export interface Calibrations {
  id: number;
  moduleId: number,
  moduleSn: string,
  userId: number,
  email: string,
  lineId: number,
  profileId: number,
  profileName: string,
  standardName: string,
  overallStatus: boolean,
  date: Date,
  temp: number,
  measurementsHasCalibrations: Measurements[],
  instruments: Instruments[],
  totalCount: number,
}
