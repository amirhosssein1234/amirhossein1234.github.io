"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierModule = void 0;
const common_1 = require("@nestjs/common");
const supplier_controller_1 = require("../../controllers/supplier/supplier.controller");
const supplier_service_1 = require("../../services/supplier/supplier.service");
const supplier_entity_1 = require("../../entities/supplier/supplier.entity");
const nest_arango_1 = require("nest-arango");
let SupplierModule = class SupplierModule {
};
exports.SupplierModule = SupplierModule;
exports.SupplierModule = SupplierModule = __decorate([
    (0, common_1.Module)({
        imports: [nest_arango_1.ArangoModule.forFeature([supplier_entity_1.SupplierEntity])],
        controllers: [supplier_controller_1.SupplierController],
        providers: [supplier_service_1.SupplierService],
    })
], SupplierModule);
//# sourceMappingURL=supplier.module.js.map