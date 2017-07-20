import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';

import { Pandoc } from './index';

const pandocPath = path.join(os.tmpdir(), 'pandoc');

const executablePaths = [
  pandocPath,
];

function cleanUpTmpBinary() {
  executablePaths.forEach(executablePath => {
    if (fs.existsSync(executablePath)) {
      fs.unlinkSync(executablePath);
    }
  });
}

describe('Pandoc', () => {
  beforeAll(cleanUpTmpBinary);

  afterAll(cleanUpTmpBinary);

  it('should be able to check and provision pandoc binary and the binary should be executable',
    async () => {
      expect(fs.existsSync(pandocPath)).toBeFalsy();
      await Pandoc.check();
      expect(fs.existsSync(pandocPath)).toBeTruthy();
      fs.accessSync(pandocPath, fs.constants.F_OK);
    });

  it('should be able to execute',
    async () => {
      jest.spyOn(Pandoc.pandocBinary, 'execute')
        .mockReturnValue(Promise.resolve(true));
      const result = await Pandoc.process('a', 'b', 'c', 'd');
      expect(result).toBeTruthy();
    });

  it('should be able to execute even when the binary does not exist',
    async () => {
      cleanUpTmpBinary();
      jest.spyOn(Pandoc.pandocBinary, 'execute')
        .mockReturnValue(Promise.resolve(true));
      const result = await Pandoc.process('a', 'b', 'c', 'd');
      expect(result).toBeTruthy();
    });

  it('should be able to handle error from checking',
    async () => {
      jest.spyOn(Pandoc.pandocBinary, 'checkBinary')
        .mockReturnValue(Promise.reject(new Error('unit test')));
      try {
        await Pandoc.process('a', 'b', 'c', 'd');
        fail('should not reach here');
      } catch (err) {
        expect(err.message).toEqual('unit test');
      }
    });
});
