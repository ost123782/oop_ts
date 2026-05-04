"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var NumbersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path = __importStar(require("path"));
let NumbersService = NumbersService_1 = class NumbersService {
    logger = new common_1.Logger(NumbersService_1.name);
    dataDir = process.env.LAB8_DATA_DIR ?? '/data';
    async generate(input) {
        const { fileName, min, max, count } = input;
        if (min > max)
            throw new Error('min must be <= max');
        if (count <= 0)
            throw new Error('count must be > 0');
        const filePath = this.resolvePath(fileName);
        await fs_1.promises.mkdir(path.dirname(filePath), { recursive: true });
        const numbers = [];
        for (let i = 0; i < count; i++) {
            const n = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.push(n);
        }
        const existed = await this.exists(filePath);
        await fs_1.promises.writeFile(filePath, numbers.join(' '), { encoding: 'utf8' });
        this.logger.log(`wrote ${count} numbers to ${filePath} (existed=${existed})`);
        return {
            fileName,
            filePath,
            range: { min, max },
            count,
            numbers,
            created: !existed,
        };
    }
    async read(input) {
        const filePath = this.resolvePath(input.fileName);
        if (!(await this.exists(filePath))) {
            return {
                fileName: input.fileName,
                filePath,
                exists: false,
                numbers: [],
                raw: '',
            };
        }
        const raw = await fs_1.promises.readFile(filePath, 'utf8');
        const numbers = raw
            .split(/\s+/)
            .filter((token) => token.length > 0)
            .map((token) => Number(token))
            .filter((n) => Number.isFinite(n));
        return {
            fileName: input.fileName,
            filePath,
            exists: true,
            numbers,
            raw,
        };
    }
    resolvePath(fileName) {
        const safe = path.basename(fileName);
        return path.join(this.dataDir, safe);
    }
    async exists(p) {
        try {
            await fs_1.promises.access(p);
            return true;
        }
        catch {
            return false;
        }
    }
};
exports.NumbersService = NumbersService;
exports.NumbersService = NumbersService = NumbersService_1 = __decorate([
    (0, common_1.Injectable)()
], NumbersService);
//# sourceMappingURL=numbers.service.js.map