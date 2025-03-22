/*
 * Copyright © 2025, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
// @ts-check

/** @type {import("syncpack").RcFile} */
export const config = {
    source: ['package.json', ...['admin', 'explore', 'study', 'dyna'].map(prj => `${prj}/package.json`)],
}
