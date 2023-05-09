import React from 'react';
import { anchorCustomPositionType, labelsType, pathType, svgCustomEdgeType, svgElemType, xarrowPropsType } from '../types';
import { dimensionType } from '../privateTypes';
type parsedXarrowProps = {
    shouldUpdatePosition: React.MutableRefObject<boolean>;
    start: HTMLElement;
    end: HTMLElement;
    startAnchor: anchorCustomPositionType[];
    endAnchor: anchorCustomPositionType[];
    labels: Required<labelsType>;
    color: string;
    lineColor: string;
    headColor: string;
    tailColor: string;
    strokeWidth: number;
    showHead: boolean;
    headSize: number;
    showTail: boolean;
    tailSize: number;
    path: pathType;
    showXarrow: boolean;
    curveness: number;
    gridBreak: {
        relative: number;
        abs: number;
    };
    dashness: {
        strokeLen: number;
        nonStrokeLen: number;
        animation: number;
    };
    headShape: svgCustomEdgeType;
    tailShape: svgCustomEdgeType;
    animateDrawing: number;
    zIndex: number;
    passProps: JSX.IntrinsicElements[svgElemType];
    SVGcanvasProps: React.SVGAttributes<SVGSVGElement>;
    arrowBodyProps: React.SVGProps<SVGPathElement>;
    arrowHeadProps: JSX.IntrinsicElements[svgElemType];
    arrowTailProps: JSX.IntrinsicElements[svgElemType];
    divContainerProps: React.HTMLProps<HTMLDivElement>;
    SVGcanvasStyle: React.CSSProperties;
    divContainerStyle: React.CSSProperties;
    _extendSVGcanvas: number;
    _debug: boolean;
    _cpx1Offset: number;
    _cpy1Offset: number;
    _cpx2Offset: number;
    _cpy2Offset: number;
};
/**
 * smart hook that provides parsed props to Xarrow and will trigger rerender whenever given prop is changed.
 */
declare const useXarrowProps: (userProps: xarrowPropsType, refs: {
    headRef: React.MutableRefObject<any>;
    tailRef: React.MutableRefObject<any>;
}) => readonly [parsedXarrowProps, {
    startPos: dimensionType;
    endPos: dimensionType;
}];
export type useXarrowPropsResType = ReturnType<typeof useXarrowProps>;
export default useXarrowProps;
//# sourceMappingURL=useXarrowProps.d.ts.map