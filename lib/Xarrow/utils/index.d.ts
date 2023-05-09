import { dimensionType } from '../../privateTypes';
import { anchorCustomPositionType, refType } from '../../types';
import React from 'react';
export declare const getElementByPropGiven: (ref: refType) => HTMLElement;
export declare const factorDpathStr: (d: string, factor: any) => string;
export declare const xStr2absRelative: (str: any) => {
    abs: number;
    relative: number;
};
type t1 = {
    x: number;
    y: number;
    anchor: anchorCustomPositionType;
};
export declare const getShortestLine: (sPoints: t1[], ePoints: t1[]) => {
    chosenStart: t1;
    chosenEnd: t1;
};
export declare const getElemPos: (elem: HTMLElement) => null | dimensionType;
export declare const getSvgPos: (svgRef: React.MutableRefObject<any>) => {
    x: number;
    y: number;
};
export {};
//# sourceMappingURL=index.d.ts.map