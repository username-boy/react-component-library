import { FC } from 'react';
interface DraggerProps {
    onFile: (files: FileList) => void;
    children: any;
}
export declare const Dragger: FC<DraggerProps>;
export default Dragger;
