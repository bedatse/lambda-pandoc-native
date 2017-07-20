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
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            Pandoc.pandocBinary = yield lambda_native_binary_helper_1.LambdaBinaryHelper.prepare(path.join(__dirname, '..', 'vendor', 'pandoc.gz'), 'pandoc');
        });
    }
    static check() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!Pandoc.pandocBinary) {
                    yield Pandoc.init();
                }
                if (!(yield Pandoc.pandocBinary.checkBinary())) {
                    yield Pandoc.pandocBinary.gunzip();
                    yield Pandoc.pandocBinary.makeExecutable();
                }
                return true;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static process(infile, informat, outfile, outformat) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Pandoc.check();
                return yield Pandoc.pandocBinary.execute([
                    '-r', informat,
                    '-w', outformat,
                    '-o', outfile,
                    infile
                ]);
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.Pandoc = Pandoc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZG9jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3BhbmRvYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBRTdCLDZFQUFpRTtBQUVqRTtJQUdFLE1BQU0sQ0FBTyxJQUFJOztZQUNmLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxnREFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0SCxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sS0FBSzs7WUFDaEIsSUFBSSxDQUFDO2dCQUNILEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE1BQU0sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDYixNQUFNLEdBQUcsQ0FBQztZQUNaLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sT0FBTyxDQUFDLE1BQWMsRUFBRSxRQUFnQixFQUFFLE9BQWUsRUFBRSxTQUFpQjs7WUFDdkYsSUFBSSxDQUFDO2dCQUNILE1BQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNyQixNQUFNLENBQUMsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztvQkFDdkMsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLE9BQU87b0JBQ2IsTUFBTTtpQkFDUCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDYixNQUFNLEdBQUcsQ0FBQztZQUNaLENBQUM7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQXJDRCx3QkFxQ0MifQ==