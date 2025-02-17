/**
 * Copyright (c) 2021, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { SpreadsheetTabDefinition } from '../spreadsheet.type';
import { EQUIPMENT_TYPES } from '../../../utils/equipment-types';
import { typeAndFetchers } from './common-config';
import { COLUMN_TYPES } from 'components/custom-aggrid/custom-aggrid-header.type';

const tab = 'VscConverterStations';

export const VSC_CONVERTER_STATION_TAB_DEF: SpreadsheetTabDefinition = {
    index: 12,
    name: tab,
    ...typeAndFetchers(EQUIPMENT_TYPES.VSC_CONVERTER_STATION),
    columns: [
        {
            id: 'id',
            name: 'ID',
            type: COLUMN_TYPES.TEXT,
            formula: 'id',
            dependencies: [],
        },
        {
            id: 'name',
            name: 'Name',
            type: COLUMN_TYPES.TEXT,
            formula: 'name',
            dependencies: [],
        },
        {
            id: 'country',
            name: 'Country',
            type: COLUMN_TYPES.ENUM,
            formula: 'country',
            dependencies: [],
        },
        {
            id: 'voltageLevelId',
            name: 'Voltage level ID',
            type: COLUMN_TYPES.TEXT,
            formula: 'voltageLevelId',
            dependencies: [],
        },
        {
            id: 'nominalV',
            name: 'Nominal V',
            type: COLUMN_TYPES.NUMBER,
            formula: 'nominalV',
            precision: 0,
            dependencies: [],
        },
        {
            id: 'terminalConnected',
            name: 'Connected',
            type: COLUMN_TYPES.BOOLEAN,
            formula: 'terminalConnected',
            dependencies: [],
        },
        {
            id: 'p',
            name: 'p (MW)',
            type: COLUMN_TYPES.NUMBER,
            formula: 'p',
            precision: 1,
            dependencies: [],
        },
        {
            id: 'q',
            name: 'q (MVar)',
            type: COLUMN_TYPES.NUMBER,
            formula: 'q',
            precision: 1,
            dependencies: [],
        },
        {
            id: 'hvdcLineId',
            name: 'HVDC Line ID',
            type: COLUMN_TYPES.TEXT,
            formula: 'hvdcLineId',
            dependencies: [],
        },
        {
            id: 'voltageRegulatorOn',
            name: 'Voltage regulation',
            type: COLUMN_TYPES.BOOLEAN,
            formula: 'voltageRegulatorOn',
            dependencies: [],
        },
        {
            id: 'voltageSetpoint',
            name: 'Voltage set point (kV)',
            type: COLUMN_TYPES.NUMBER,
            formula: 'voltageSetpoint',
            precision: 1,
            dependencies: [],
        },
        {
            id: 'reactivePowerSetpoint',
            name: 'Reactive power set point (MVar)',
            type: COLUMN_TYPES.NUMBER,
            formula: 'reactivePowerSetpoint',
            precision: 1,
            dependencies: [],
        },
        {
            id: 'lossFactor',
            name: 'Loss factor',
            type: COLUMN_TYPES.NUMBER,
            formula: 'lossFactor',
            precision: 1,
            dependencies: [],
        },
    ],
};
