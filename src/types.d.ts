declare module '*.glb' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare namespace JSX {
    interface IntrinsicElements {
        meshLineGeometry: any;
        meshLineMaterial: any;
    }
} 