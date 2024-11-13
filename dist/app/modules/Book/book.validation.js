"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidationSchema = void 0;
const zod_1 = require("zod");
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        publishedYear: zod_1.z.number().optional(),
        totalCopies: zod_1.z.number().optional(),
        availableCopies: zod_1.z.number().optional()
    })
});
exports.bookValidationSchema = {
    update
};
