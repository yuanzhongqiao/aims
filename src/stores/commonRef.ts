/*
 * @Copyright 2023-2024. Institute for Future Intelligence, Inc.
 */

import { createWithEqualityFn } from 'zustand/traditional';
import { RefObject } from 'react';
import { Group, Raycaster, Vector3 } from 'three';
import { MoleculeTS } from '../models/MoleculeTS.ts';
import { Camera } from '@react-three/fiber';
import { VdwBond } from '../models/VdwBond.ts';

export interface RefStoreState {
  selectNone: () => void;
  cameraRef: RefObject<Camera | undefined> | null;
  raycasterRef: RefObject<Raycaster | undefined> | null;
  planeXYRef: RefObject<any> | null;
  planeYZRef: RefObject<any> | null;
  planeXZRef: RefObject<any> | null;
  ligandRef: RefObject<Group> | null;
  moleculesRef: RefObject<MoleculeTS[]> | null;
  vdwBondsRef: RefObject<VdwBond[]> | null;
  clickPointRef: RefObject<Vector3> | null;
}

export const useRefStore = createWithEqualityFn<RefStoreState>()((set, get) => {
  return {
    selectNone: () => {},
    cameraRef: null,
    raycasterRef: null,
    planeXYRef: null,
    planeYZRef: null,
    planeXZRef: null,
    ligandRef: null,
    moleculesRef: null,
    vdwBondsRef: null,
    clickPointRef: null,
  };
});
