import { LambdaBinaryHelper } from 'lambda-native-binary-helper';
export declare class Pandoc {
    static pandocBinary: LambdaBinaryHelper;
    static check(): Promise<boolean>;
    static process(infile: string, informat: string, outfile: string, outformat: string): Promise<boolean>;
}
