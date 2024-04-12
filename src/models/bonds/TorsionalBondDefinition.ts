/*
 * @Copyright 2024. Institute for Future Intelligence, Inc.
 */

import { Quadruple } from '../Quadruple.ts';
import { Pentane } from './Pentane.ts';
import { Ethane } from './Ethane.ts';
import { Propane } from './Propane.ts';
import { Butane } from './Butane.ts';
import { Hexane } from './Hexane.ts';
import { Heptane } from './Heptane.ts';
import { Octane } from './Octane.ts';
import { Nonane } from './Nonane.ts';
import { Decane } from './Decane.ts';
import { Benzene } from './Benzene.ts';
import { Buckminsterfullerene } from './Buckminsterfullerene.ts';
import { Ethanol } from './Ethanol.ts';

export const getTorsionalBondDefinition = (name: string): Quadruple[] => {
  // common molecules
  if (name === 'Ethanol') return Ethanol.torsionalBondDefinition;
  if (name === 'Buckminsterfullerene') return Buckminsterfullerene.torsionalBondDefinition;

  // hydrocarbons
  if (name === 'Benzene') return Benzene.torsionalBondDefinition;
  if (name === 'Ethane') return Ethane.torsionalBondDefinition;
  if (name === 'Propane') return Propane.torsionalBondDefinition;
  if (name === 'Butane') return Butane.torsionalBondDefinition;
  if (name === 'Pentane') return Pentane.torsionalBondDefinition;
  if (name === 'Hexane') return Hexane.torsionalBondDefinition;
  if (name === 'Heptane') return Heptane.torsionalBondDefinition;
  if (name === 'Octane') return Octane.torsionalBondDefinition;
  if (name === 'Nonane') return Nonane.torsionalBondDefinition;
  if (name === 'Decane') return Decane.torsionalBondDefinition;

  return [];
};