"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const lambda_native_binary_helper_1 = require("lambda-native-binary-helper");
class Pandoc {
    static check() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!Pandoc.pandocBinary) {
                    Pandoc.pandocBinary = yield lambda_native_binary_helper_1.LambdaBinaryHelper.prepare(path.join(__dirname, '..', 'vendor', 'pandoc.gz'), 'pandoc');
                }
                if (!(yield Pandoc.pandocBinary.checkBinary())) {
                    yield Pandoc.pandocBinary.gunzip();
                    yield Pandoc.pandocBinary.makeExecutable();
                }
                return true;
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        });
    }
    static process(infile, informat, outfile, outformat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!Pandoc.pandocBinary) {
                    yield Pandoc.check();
                }
                return yield Pandoc.pandocBinary.execute([
                    '-r', informat,
                    '-w', outformat,
                    '-o', outfile,
                    infile
                ]);
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        });
    }
}
exports.Pandoc = Pandoc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUE2QjtBQUU3Qiw2RUFBaUU7QUFFakU7SUFHRSxNQUFNLENBQU8sS0FBSzs7WUFDaEIsSUFBSSxDQUFDO2dCQUNILEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxnREFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDdEgsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUEsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ25DLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDN0MsQ0FBQztnQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsTUFBTSxHQUFHLENBQUM7WUFDWixDQUFDO1FBQ0gsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLE9BQU8sQ0FBQyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsU0FBaUI7O1lBQ3ZGLElBQUksQ0FBQztnQkFDSCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxNQUFNLENBQUMsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztvQkFDdkMsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLE9BQU87b0JBQ2IsTUFBTTtpQkFDUCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLEdBQUcsQ0FBQztZQUNaLENBQUM7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQXRDRCx3QkFzQ0MifQ==