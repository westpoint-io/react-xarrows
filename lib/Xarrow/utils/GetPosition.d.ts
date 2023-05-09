import React from 'react';
/**
 * The Main logic of path calculation for the arrow.
 * calculate new path, adjusting canvas, and set state based on given properties.
 * */
export declare const getPosition: (xProps: readonly [{
    shouldUpdatePosition: React.MutableRefObject<boolean>;
    start: HTMLElement;
    end: HTMLElement;
    startAnchor: import("../..").anchorCustomPositionType[];
    endAnchor: import("../..").anchorCustomPositionType[];
    labels: Required<import("../..").labelsType>;
    color: string;
    lineColor: string;
    headColor: string;
    tailColor: string;
    strokeWidth: number;
    showHead: boolean;
    headSize: number;
    showTail: boolean;
    tailSize: number;
    path: "smooth" | "grid" | "straight";
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
    headShape: import("../..").svgCustomEdgeType;
    tailShape: import("../..").svgCustomEdgeType;
    animateDrawing: number;
    zIndex: number;
    passProps: React.SVGProps<SVGCircleElement> | React.SVGProps<SVGPathElement> | React.SVGProps<SVGEllipseElement> | React.SVGLineElementAttributes<SVGLineElement> | React.SVGProps<SVGPolygonElement> | React.SVGProps<SVGPolylineElement> | React.SVGProps<SVGRectElement>;
    SVGcanvasProps: React.SVGAttributes<SVGSVGElement>;
    arrowBodyProps: React.SVGProps<SVGPathElement>;
    arrowHeadProps: React.SVGProps<SVGCircleElement> | React.SVGProps<SVGPathElement> | React.SVGProps<SVGEllipseElement> | React.SVGLineElementAttributes<SVGLineElement> | React.SVGProps<SVGPolygonElement> | React.SVGProps<SVGPolylineElement> | React.SVGProps<SVGRectElement>;
    arrowTailProps: React.SVGProps<SVGCircleElement> | React.SVGProps<SVGPathElement> | React.SVGProps<SVGEllipseElement> | React.SVGLineElementAttributes<SVGLineElement> | React.SVGProps<SVGPolygonElement> | React.SVGProps<SVGPolylineElement> | React.SVGProps<SVGRectElement>;
    divContainerProps: React.HTMLProps<HTMLDivElement>;
    SVGcanvasStyle: React.CSSProperties;
    divContainerStyle: React.CSSProperties;
    _extendSVGcanvas: number;
    _debug: boolean;
    _cpx1Offset: number;
    _cpy1Offset: number;
    _cpx2Offset: number;
    _cpy2Offset: number;
}, {
    startPos: import("../../privateTypes").dimensionType;
    endPos: import("../../privateTypes").dimensionType;
}], mainRef: React.MutableRefObject<any>) => {
    cx0: number;
    cy0: number;
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    cw: number;
    ch: number;
    cpx1: number;
    cpy1: number;
    cpx2: number;
    cpy2: number;
    dx: number;
    dy: number;
    absDx: number;
    absDy: number;
    headOrient: number;
    tailOrient: number;
    labelStartPos: {
        x: number;
        y: number;
    };
    labelMiddlePos: {
        x: number;
        y: number;
    };
    labelEndPos: {
        x: number;
        y: number;
    };
    excLeft: number;
    excRight: number;
    excUp: number;
    excDown: number;
    headOffset: number;
    arrowHeadOffset: {
        x: number;
        y: number;
    };
    arrowTailOffset: {
        x: number;
        y: number;
    };
    startPoints: {
        x: any;
        y: any;
        anchor: import("../..").anchorCustomPositionType;
    }[];
    endPoints: {
        x: any;
        y: any;
        anchor: import("../..").anchorCustomPositionType;
    }[];
    mainDivPos: {
        x: number;
        y: number;
    };
    xSign: number;
    ySign: number;
    lineLength: any;
    fHeadSize: number;
    fTailSize: number;
    arrowPath: any;
};
//# sourceMappingURL=GetPosition.d.ts.map