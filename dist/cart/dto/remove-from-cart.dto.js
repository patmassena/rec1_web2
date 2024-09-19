"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveFromCartDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class RemoveFromCartDto {
}
exports.RemoveFromCartDto = RemoveFromCartDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID do produto a ser removido', example: 1 }),
    (0, class_validator_1.IsInt)({ message: 'O ID do produto deve ser um número inteiro.' }),
    (0, class_validator_1.IsPositive)({ message: 'O ID do produto deve ser positivo.' }),
    __metadata("design:type", Number)
], RemoveFromCartDto.prototype, "productId", void 0);
//# sourceMappingURL=remove-from-cart.dto.js.map