import * as path from 'path';

import { LambdaBinaryHelper } from 'lambda-native-binary-helper';

export class Pandoc {
  static pandocBinary:LambdaBinaryHelper;

  static async check() {
    try {
      if (!Pandoc.pandocBinary) {
        Pandoc.pandocBinary = await LambdaBinaryHelper.prepare(path.join(__dirname, '..', 'vendor', 'pandoc.gz'), 'pandoc');
      }

      if (!await Pandoc.pandocBinary.checkBinary()) {
        await Pandoc.pandocBinary.gunzip();
        await Pandoc.pandocBinary.makeExecutable();
      }

      return true;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async process(infile: string, informat: string, outfile: string, outformat: string) {
    try {
      if (!Pandoc.pandocBinary) {
        await Pandoc.check();
      }

      return await Pandoc.pandocBinary.execute([
        '-r', informat,
        '-w', outformat,
        '-o', outfile,
        infile
      ]);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
